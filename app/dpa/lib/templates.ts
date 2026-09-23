import type { Profile } from "./customizePdf";

// Layout maps for fillable marketing flyers. Coordinates are PDF points measured from the
// top-left of the page (as seen in a viewer); `baseline` is the text baseline from the top.
// Each flyer prints "Insert …" placeholder text on the page itself, so a filled slot first
// paints over the placeholder in `bg`, then writes the user's value in the same spot.

export type TextSlot = {
  value: (p: Profile) => string;
  field: string; // AcroForm field over the placeholder, removed once the slot is filled
  x0: number; // placeholder left edge
  x1: number; // placeholder right edge
  baseline: number;
  size: number;
  bold?: boolean;
  align: "left" | "center" | "right";
  anchor: number; // left edge, center, or right edge depending on align
  maxWidth: number;
  color: string;
  bg: string;
};

export type PhotoSlot = {
  field: string;
  cx: number;
  cy: number;
  d: number;
};

export type Template = { text: TextSlot[]; photo?: PhotoSlot };

const upper = (key: keyof Profile) => (p: Profile) => p[key].toUpperCase();
const plain = (key: keyof Profile) => (p: Profile) => p[key];
const possessive = (p: Profile) => {
  const name = p.company.trim().toUpperCase();
  return name ? `${name}${name.endsWith("S") ? "'" : "'S"}` : "";
};

const NAVY = "#212d65";
const DARK_NAVY = "#212e66";
const GRAY_TEXT = "#57595e";

export const templates: Record<string, Template> = {
  "/resources/resources_close_more_deals.pdf": {
    text: [
      { value: upper("company"), field: "Company Name", x0: 71.8, x1: 473.4, baseline: 353.5, size: 44, bold: true, align: "left", anchor: 71.8, maxWidth: 480, color: GRAY_TEXT, bg: "#fcfcfc" },
      { value: plain("name"), field: "Name", x0: 104.2, x1: 170.1, baseline: 742.4, size: 12, align: "left", anchor: 104.2, maxWidth: 112, color: GRAY_TEXT, bg: "#fcfcfc" },
      { value: plain("phone"), field: "Phone Number", x0: 249.2, x1: 316.8, baseline: 743, size: 12, align: "left", anchor: 249.2, maxWidth: 105, color: GRAY_TEXT, bg: "#fcfcfc" },
      { value: plain("email"), field: "Email Address", x0: 382.2, x1: 444.8, baseline: 742.4, size: 12, align: "left", anchor: 382.2, maxWidth: 190, color: GRAY_TEXT, bg: "#fcfcfc" },
    ],
    photo: { field: "Logo/Headshot", cx: 527, cy: 573, d: 136 },
  },
  "/resources/resources_reach_more_borrowers.pdf": {
    text: [
      { value: plain("name"), field: "Insert Name", x0: 118.4, x1: 217.1, baseline: 621, size: 18, align: "left", anchor: 118.4, maxWidth: 230, color: "#fcfcfc", bg: NAVY },
      { value: plain("phone"), field: "Insert Phone", x0: 118.4, x1: 219.8, baseline: 663.6, size: 18, align: "left", anchor: 118.4, maxWidth: 230, color: "#fcfcfc", bg: NAVY },
      { value: plain("email"), field: "Insert Email", x0: 118.4, x1: 202, baseline: 707.8, size: 16, align: "left", anchor: 118.4, maxWidth: 230, color: "#fcfcfc", bg: NAVY },
    ],
    photo: { field: "Insert logo", cx: 464.75, cy: 656.75, d: 108 },
  },
  "/resources/resources_partner_with_us.pdf": {
    text: [
      { value: possessive, field: "Company Name's", x0: 133.5, x1: 478.6, baseline: 162.3, size: 36, bold: true, align: "center", anchor: 306, maxWidth: 540, color: "#fcfcfc", bg: NAVY },
      { value: plain("name"), field: "Insert Name", x0: 497.6, x1: 567.4, baseline: 606.9, size: 12, bold: true, align: "right", anchor: 567.4, maxWidth: 210, color: DARK_NAVY, bg: "#f2f0ef" },
      { value: plain("title"), field: "Insert Title", x0: 510.5, x1: 567.4, baseline: 631, size: 12, align: "right", anchor: 567.4, maxWidth: 210, color: DARK_NAVY, bg: "#f2f0ef" },
      { value: plain("phone"), field: "Insert Phone", x0: 499.8, x1: 567.4, baseline: 655.4, size: 12, align: "right", anchor: 567.4, maxWidth: 210, color: DARK_NAVY, bg: "#f2f0ef" },
      { value: plain("email"), field: "Insert Email", x0: 504.7, x1: 567.4, baseline: 679.8, size: 12, align: "right", anchor: 567.4, maxWidth: 210, color: DARK_NAVY, bg: "#f2f0ef" },
      { value: plain("website"), field: "Insert Website", x0: 249.1, x1: 359.9, baseline: 773.3, size: 16, bold: true, align: "center", anchor: 304.5, maxWidth: 420, color: DARK_NAVY, bg: "#c2c3c9" },
    ],
  },
  "/resources/close-more-deals-esp-dpa.pdf": {
    text: [
      { value: upper("company"), field: "Company Name", x0: 28.1, x1: 174.1, baseline: 153.4, size: 16, bold: true, align: "left", anchor: 28.1, maxWidth: 178, color: GRAY_TEXT, bg: "#fbfbfb" },
      { value: plain("name"), field: "Name", x0: 41.4, x1: 63.2, baseline: 285.8, size: 4, align: "left", anchor: 41.4, maxWidth: 46, color: GRAY_TEXT, bg: "#fbfbfb" },
      { value: plain("phone"), field: "Phone Number", x0: 99.7, x1: 122, baseline: 285.9, size: 4, align: "left", anchor: 99.7, maxWidth: 42, color: GRAY_TEXT, bg: "#fbfbfb" },
      { value: plain("email"), field: "Email Address", x0: 152.4, x1: 173.1, baseline: 285.5, size: 4, align: "left", anchor: 152.4, maxWidth: 78, color: GRAY_TEXT, bg: "#fbfbfb" },
    ],
    photo: { field: "Logo/Headshot", cx: 210, cy: 221.25, d: 54 },
  },
  "/resources/reach-more-borrowers-esp-dpa.pdf": {
    text: [
      { value: plain("name"), field: "Insert Name", x0: 116.9, x1: 219.7, baseline: 621.1, size: 18, bold: true, align: "left", anchor: 116.9, maxWidth: 230, color: "#ffffff", bg: "#202d65" },
      { value: plain("phone"), field: "Insert Phone Number", x0: 116.8, x1: 296.8, baseline: 663.6, size: 18, bold: true, align: "left", anchor: 116.8, maxWidth: 230, color: "#ffffff", bg: "#202d65" },
      { value: plain("email"), field: "Insert Email", x0: 117.8, x1: 216.3, baseline: 707.6, size: 18, bold: true, align: "left", anchor: 117.8, maxWidth: 230, color: "#ffffff", bg: "#202d65" },
    ],
    photo: { field: "Insert logo/headshot", cx: 464.65, cy: 656.45, d: 108 },
  },
  "/resources/esp-partner-with-us-dpa.pdf": {
    text: [
      // Spanish headline reads "ASÓCIATE CON …", so no possessive
      { value: upper("company"), field: "Company Name's", x0: 133.5, x1: 478.6, baseline: 165.5, size: 36, bold: true, align: "center", anchor: 306, maxWidth: 540, color: "#fcfcfc", bg: "#202d65" },
      { value: plain("name"), field: "Insert Name", x0: 511.8, x1: 581.5, baseline: 604.8, size: 12, bold: true, align: "right", anchor: 581.4, maxWidth: 160, color: DARK_NAVY, bg: "#f1f0ef" },
      { value: plain("title"), field: "Insert Title", x0: 520.3, x1: 581.4, baseline: 628.4, size: 12, bold: true, align: "right", anchor: 581.4, maxWidth: 160, color: DARK_NAVY, bg: "#f1f0ef" },
      { value: plain("phone"), field: "Insert Phone", x0: 509.7, x1: 581.4, baseline: 651.9, size: 12, bold: true, align: "right", anchor: 581.4, maxWidth: 160, color: DARK_NAVY, bg: "#f1f0ef" },
      { value: plain("email"), field: "Insert Email", x0: 514.5, x1: 581.4, baseline: 675.4, size: 12, bold: true, align: "right", anchor: 581.4, maxWidth: 160, color: DARK_NAVY, bg: "#f1f0ef" },
      { value: plain("website"), field: "Insert Website", x0: 250.3, x1: 361.1, baseline: 774.2, size: 16, bold: true, align: "center", anchor: 305.7, maxWidth: 420, color: DARK_NAVY, bg: "#c2c2c8" },
    ],
  },
};
