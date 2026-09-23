import {
  appendBezierCurve,
  clip,
  closePath,
  endPath,
  moveTo,
  PDFDocument,
  PDFFont,
  PDFImage,
  PDFPage,
  PDFRef,
  popGraphicsState,
  pushGraphicsState,
  rgb,
  StandardFonts,
} from "pdf-lib";
import { Template, templates } from "./templates";

export type Profile = {
  headshot: string; // JPEG data URL, already cropped to a circle on the band color
  logo: string; // PNG data URL, logo on a white rounded tile with transparent corners
  name: string;
  title: string;
  company: string;
  nmls: string;
  phone: string;
  email: string;
  website: string;
};

export type PageScope = "all" | "first" | "last";

export type SlotPhoto = "headshot" | "logo";

export function hasPhotoSlot(src: string) {
  return Boolean(templates[src]?.photo);
}

export const emptyProfile: Profile = {
  headshot: "",
  logo: "",
  name: "",
  title: "",
  company: "",
  nmls: "",
  phone: "",
  email: "",
  website: "",
};

// Tailwind blue-950, matches the site's primary color
const BAND_HEX = "#172554";
const BAND = rgb(0x17 / 255, 0x25 / 255, 0x54 / 255);
const WHITE = rgb(1, 1, 1);
const MUTED = rgb(0.8, 0.84, 0.92);

const originals = new Map<string, Promise<ArrayBuffer>>();

function fetchOriginal(src: string) {
  if (!originals.has(src)) {
    const p = fetch(encodeURI(src)).then((r) => {
      if (!r.ok) throw new Error(`Could not load ${src}`);
      return r.arrayBuffer();
    });
    p.catch(() => originals.delete(src));
    originals.set(src, p);
  }
  return originals.get(src)!;
}

export type BuildOptions = {
  scope: PageScope;
  slotPhoto: SlotPhoto; // which image fills a template's photo circle
};

type Assets = { regular: PDFFont; bold: PDFFont; photo: PDFImage | null; logo: PDFImage | null };

/**
 * Loads a PDF and adds a contact band below the existing content of the chosen pages.
 * Pages are extended downward, so nothing in the original document is covered.
 * Fillable marketing templates also get their "Insert …" placeholders filled in.
 */
export async function buildCustomizedPdf(src: string, profile: Profile, options: BuildOptions) {
  const doc = await PDFDocument.load(await fetchOriginal(src));
  const regular = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const photo = profile.headshot ? await doc.embedJpg(profile.headshot) : null;
  const logo = profile.logo ? await doc.embedPng(profile.logo) : null;
  const assets = { regular, bold, photo, logo };

  const pages = doc.getPages();
  const template = templates[src];
  if (template) {
    fillTemplate(doc, pages[0], template, profile, assets, options.slotPhoto);
    pruneDanglingAnnots(doc, pages[0]);
  }

  const { scope } = options;
  const targets =
    scope === "first" ? pages.slice(0, 1) : scope === "last" ? pages.slice(-1) : pages;

  for (const page of targets) {
    drawBand(page, profile, assets);
  }
  return { bytes: await doc.save(), pageCount: pages.length };
}

function fillTemplate(
  doc: PDFDocument,
  page: PDFPage,
  template: Template,
  profile: Profile,
  assets: Assets,
  slotPhoto: SlotPhoto,
) {
  const crop = page.getCropBox();
  const top = crop.y + crop.height;
  const form = doc.getForm();
  const removeField = (name: string) => {
    const field = form.getFieldMaybe(name);
    if (field) form.removeField(field);
  };

  for (const slot of template.text) {
    const font = slot.bold ? assets.bold : assets.regular;
    const text = sanitize(slot.value(profile), font).trim();
    if (!text) continue; // leave the placeholder and its form field for the user to fill later

    const baseline = top - slot.baseline;
    const pad = slot.size * 0.15;
    page.drawRectangle({
      x: slot.x0 - pad,
      y: baseline - slot.size * 0.28,
      width: slot.x1 - slot.x0 + pad * 2,
      height: slot.size * 1.08,
      color: hex(slot.bg),
    });

    const natural = font.widthOfTextAtSize(text, slot.size);
    const size = natural > slot.maxWidth ? (slot.size * slot.maxWidth) / natural : slot.size;
    const width = font.widthOfTextAtSize(text, size);
    const x = slot.align === "left" ? slot.anchor : slot.align === "right" ? slot.anchor - width : slot.anchor - width / 2;
    page.drawText(text, { x, y: baseline, size, font, color: hex(slot.color) });
    removeField(slot.field);
  }

  const slot = template.photo;
  const preferred = slotPhoto === "logo" ? assets.logo : assets.photo;
  const image = preferred ?? assets.photo ?? assets.logo;
  if (!slot || !image) return;

  const cx = crop.x + slot.cx;
  const cy = top - slot.cy;
  const r = slot.d / 2;
  if (image === assets.photo) {
    // Headshot already has a white ring; clip away its square corners
    page.pushOperators(pushGraphicsState(), ...circlePath(cx, cy, r), clip(), endPath());
    page.drawImage(image, { x: cx - r, y: cy - r, width: slot.d, height: slot.d });
    page.pushOperators(popGraphicsState());
  } else {
    // Logo sits inside a white disc, scaled to fit the disc's inscribed square
    page.drawCircle({ x: cx, y: cy, size: r, color: WHITE });
    const box = slot.d * 0.68;
    const scale = Math.min(box / image.width, box / image.height);
    const w = image.width * scale;
    const h = image.height * scale;
    page.drawImage(image, { x: cx - w / 2, y: cy - h / 2, width: w, height: h });
  }
  removeField(slot.field);
}

// pdf-lib leaves removed widgets in a page's /Annots when that array is an indirect object,
// which some viewers report as a broken file
function pruneDanglingAnnots(doc: PDFDocument, page: PDFPage) {
  const annots = page.node.Annots();
  if (!annots) return;
  for (let i = annots.size() - 1; i >= 0; i--) {
    const ref = annots.get(i);
    if (ref instanceof PDFRef && !doc.context.lookup(ref)) annots.remove(i);
  }
}

// Four Bézier arcs approximating a circle
function circlePath(cx: number, cy: number, r: number) {
  const k = r * 0.5523;
  return [
    moveTo(cx + r, cy),
    appendBezierCurve(cx + r, cy + k, cx + k, cy + r, cx, cy + r),
    appendBezierCurve(cx - k, cy + r, cx - r, cy + k, cx - r, cy),
    appendBezierCurve(cx - r, cy - k, cx - k, cy - r, cx, cy - r),
    appendBezierCurve(cx + k, cy - r, cx + r, cy - k, cx + r, cy),
    closePath(),
  ];
}

function hex(value: string) {
  const n = parseInt(value.slice(1), 16);
  return rgb(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
}

function drawBand(page: PDFPage, profile: Profile, assets: Assets) {
  const crop = page.getCropBox();
  const media = page.getMediaBox();
  const h = Math.min(crop.width, crop.height) * 0.13;
  const x0 = crop.x;
  const y0 = crop.y - h;
  const w = crop.width;
  const pad = h * 0.16;

  // Grow the page downward to make room for the band
  const bottom = Math.min(media.y, y0);
  page.setMediaBox(media.x, bottom, media.width, media.y + media.height - bottom);
  page.setCropBox(x0, y0, w, crop.height + h);
  page.setTrimBox(x0, y0, w, crop.height + h);
  page.setBleedBox(x0, y0, w, crop.height + h);
  page.setArtBox(x0, y0, w, crop.height + h);

  page.drawRectangle({ x: x0, y: y0, width: w, height: h, color: BAND });

  let left = x0 + pad;
  if (assets.photo) {
    const d = h - pad * 2;
    page.drawImage(assets.photo, { x: left, y: y0 + pad, width: d, height: d });
    left += d + pad;
  }

  let right = x0 + w - pad;
  if (assets.logo) {
    const maxH = h - pad * 2;
    const aspect = assets.logo.width / assets.logo.height;
    const lw = Math.min(maxH * aspect, h * 2.5);
    const lh = lw / aspect;
    page.drawImage(assets.logo, { x: right - lw, y: y0 + (h - lh) / 2, width: lw, height: lh });
    right -= lw + pad * 1.5;
  }

  const { regular, bold } = assets;
  const colGap = pad * 2;
  const avail = right - left;
  const leftWidth = avail * 0.55;
  const rightWidth = avail - leftWidth - colGap;

  const leftLines = [
    { text: profile.name, font: bold, size: h * 0.2, color: WHITE },
    { text: joinParts(profile.title, profile.company), font: regular, size: h * 0.115, color: WHITE },
    { text: profile.nmls && `NMLS# ${profile.nmls.replace(/^\s*(nmls)?\s*#?\s*/i, "")}`, font: regular, size: h * 0.105, color: MUTED },
  ];
  const rightLines = [profile.phone, profile.email, profile.website].map((text) => ({
    text,
    font: regular,
    size: h * 0.115,
    color: WHITE,
  }));

  drawColumn(page, leftLines, left, leftWidth, y0, h, "left");
  drawColumn(page, rightLines, right, rightWidth, y0, h, "right");
}

type Line = { text: string; font: PDFFont; size: number; color: ReturnType<typeof rgb> };

function drawColumn(
  page: PDFPage,
  lines: Line[],
  anchorX: number,
  maxWidth: number,
  bandY: number,
  bandH: number,
  align: "left" | "right",
) {
  const fitted = lines
    .map((l) => ({ ...l, text: sanitize(l.text, l.font).trim() }))
    .filter((l) => l.text)
    .map((l) => {
      const width = l.font.widthOfTextAtSize(l.text, l.size);
      const size = width > maxWidth ? (l.size * maxWidth) / width : l.size;
      return { ...l, size };
    });
  if (!fitted.length) return;

  const gap = bandH * 0.06;
  const blockH = fitted.reduce((sum, l) => sum + l.size, 0) + gap * (fitted.length - 1);
  // Vertically center the block; baseline sits ~0.78em below each line's top
  let top = bandY + bandH / 2 + blockH / 2;
  for (const l of fitted) {
    const width = l.font.widthOfTextAtSize(l.text, l.size);
    const x = align === "left" ? anchorX : anchorX - width;
    page.drawText(l.text, { x, y: top - l.size * 0.78, size: l.size, font: l.font, color: l.color });
    top -= l.size + gap;
  }
}

function joinParts(...parts: string[]) {
  return parts.map((p) => p.trim()).filter(Boolean).join("  |  ");
}

// Standard PDF fonts only cover WinAnsi; drop characters they can't encode
function sanitize(text: string, font: PDFFont) {
  const supported = new Set(font.getCharacterSet());
  return Array.from(text.replace(/[‘’]/g, "'").replace(/[“”]/g, '"'))
    .filter((ch) => supported.has(ch.codePointAt(0)!))
    .join("");
}

/**
 * Crops an uploaded image to a square (biased toward the top, where faces usually are),
 * masks it to a circle with a white ring, and flattens it onto the band color as a JPEG.
 */
export async function prepareHeadshot(file: File, size = 512): Promise<string> {
  const img = await loadImage(file);
  const side = Math.min(img.naturalWidth, img.naturalHeight);
  const sx = (img.naturalWidth - side) / 2;
  const sy = img.naturalHeight > img.naturalWidth ? (img.naturalHeight - side) * 0.2 : 0;

  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = BAND_HEX;
  ctx.fillRect(0, 0, size, size);

  const ring = size * 0.035;
  const r = size / 2;
  ctx.save();
  ctx.beginPath();
  ctx.arc(r, r, r - ring, 0, Math.PI * 2);
  ctx.clip();
  ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size);
  ctx.restore();

  ctx.beginPath();
  ctx.arc(r, r, r - ring / 2, 0, Math.PI * 2);
  ctx.lineWidth = ring;
  ctx.strokeStyle = "#ffffff";
  ctx.stroke();

  return canvas.toDataURL("image/jpeg", 0.9);
}

/**
 * Scales an uploaded brand logo down, keeping its shape, and places it on a white rounded tile
 * so dark or transparent logos stay visible on the navy band.
 */
export async function prepareLogo(file: File, maxW = 900, maxH = 360): Promise<string> {
  const img = await loadImage(file);
  const scale = Math.min(1, maxW / img.naturalWidth, maxH / img.naturalHeight);
  const iw = Math.max(1, Math.round(img.naturalWidth * scale));
  const ih = Math.max(1, Math.round(img.naturalHeight * scale));
  const inset = Math.round(Math.min(iw, ih) * 0.15);

  const canvas = document.createElement("canvas");
  canvas.width = iw + inset * 2;
  canvas.height = ih + inset * 2;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.roundRect(0, 0, canvas.width, canvas.height, inset);
  ctx.fill();
  ctx.drawImage(img, inset, inset, iw, ih);

  return canvas.toDataURL("image/png");
}

async function loadImage(file: File) {
  const url = URL.createObjectURL(file);
  try {
    return await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error("That file couldn't be read as an image. Try a JPG or PNG."));
      el.src = url;
    });
  } finally {
    URL.revokeObjectURL(url);
  }
}

export function downloadBytes(bytes: Uint8Array, filename: string) {
  const url = URL.createObjectURL(new Blob([bytes as BlobPart], { type: "application/pdf" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}
