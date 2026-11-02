"use client";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import {
  buildCustomizedPdf,
  downloadBytes,
  emptyProfile,
  hasPhotoSlot,
  PageScope,
  prepareHeadshot,
  prepareLogo,
  Profile,
  SlotPhoto,
} from "../lib/customizePdf";

const STORAGE_KEY = "dpa-pdf-profile";

// Image formats every major browser can decode for the headshot and logo uploads
const UPLOAD_TYPES = [
  { mime: "image/jpeg", label: "JPG" },
  { mime: "image/png", label: "PNG" },
  { mime: "image/webp", label: "WebP" },
];

// Saved only in this browser so users don't retype their info for each PDF
function loadProfile(): Profile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...emptyProfile, ...JSON.parse(raw) } : emptyProfile;
  } catch {
    return emptyProfile;
  }
}

function saveProfile(profile: Profile) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch {
    // Storage full or blocked; the form still works for this session
  }
}

const fields: { key: Exclude<keyof Profile, "headshot" | "logo">; label: string; placeholder: string; type?: string }[] = [
  { key: "name", label: "Full name", placeholder: "Jane Smith" },
  { key: "title", label: "Title", placeholder: "Senior Loan Officer" },
  { key: "company", label: "Company", placeholder: "Your Company" },
  { key: "nmls", label: "NMLS #", placeholder: "123456" },
  { key: "phone", label: "Phone", placeholder: "(555) 555-5555", type: "tel" },
  { key: "email", label: "Email", placeholder: "jane@example.com", type: "email" },
  { key: "website", label: "Website", placeholder: "www.example.com" },
];

type Props = {
  href: string;
  title: string;
  open: boolean;
  onClose: () => void;
};

export function CustomizeDialog({ href, title, open, onClose }: Props) {
  const [profile, setProfile] = useState<Profile>(emptyProfile);
  const [scope, setScope] = useState<PageScope>("all");
  const [slotPhoto, setSlotPhoto] = useState<SlotPhoto>("headshot");
  const [previewUrl, setPreviewUrl] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (open) setProfile(loadProfile());
  }, [open]);

  // Rebuild the preview shortly after the user stops typing
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    let url = "";
    const timer = setTimeout(async () => {
      try {
        const result = await buildCustomizedPdf(href, profile, { scope, slotPhoto });
        if (cancelled) return;
        url = URL.createObjectURL(new Blob([result.bytes as BlobPart], { type: "application/pdf" }));
        setPreviewUrl(url);
        setPageCount(result.pageCount);
        setError("");
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Could not build the PDF.");
      }
    }, 400);
    return () => {
      cancelled = true;
      clearTimeout(timer);
      if (url) URL.revokeObjectURL(url);
    };
  }, [open, href, profile, scope, slotPhoto]);

  const update = (next: Profile) => {
    setProfile(next);
    saveProfile(next);
  };

  const download = async () => {
    setBusy(true);
    try {
      const { bytes } = await buildCustomizedPdf(href, profile, { scope, slotPhoto });
      const base = href.split("/").pop()!.replace(/\.pdf$/i, "").trim();
      const who = profile.name.trim().replace(/[^a-z0-9]+/gi, "-");
      downloadBytes(bytes, `${base}${who ? `-${who}` : "-custom"}.pdf`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not build the PDF.");
    } finally {
      setBusy(false);
    }
  };

  const previewPage = scope === "last" ? pageCount : 1;

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/50" />
      <div className="fixed inset-0 overflow-y-auto p-4">
        <DialogPanel className="mx-auto flex w-full max-w-6xl flex-col bg-white text-black shadow-xl md:h-[calc(100vh-2rem)] md:flex-row">
          <div className="flex flex-col gap-4 overflow-y-auto p-6 md:w-96 md:shrink-0">
            <div>
              <DialogTitle className="text-2xl font-light text-blue-950">Add your info</DialogTitle>
              <p className="text-sm text-gray-600">{title}</p>
            </div>

            <PhotoField
              label="Headshot"
              value={profile.headshot}
              round
              prepare={prepareHeadshot}
              onChange={(headshot) => update({ ...profile, headshot })}
              onError={setError}
            />
            <PhotoField
              label="Brand logo"
              value={profile.logo}
              prepare={prepareLogo}
              onChange={(logo) => update({ ...profile, logo })}
              onError={setError}
            />
            <p className="text-xs text-gray-500">
              Supported file types: {UPLOAD_TYPES.map((t) => t.label).join(", ")}. Other formats, including
              HEIC photos from iPhones, PDFs and SVGs, aren&apos;t supported. Save or convert them to JPG or PNG first.
            </p>

            {fields.map((f) => (
              <label key={f.key} className="flex flex-col gap-1 text-sm">
                <span className="text-gray-700">{f.label}</span>
                <input
                  type={f.type ?? "text"}
                  value={profile[f.key]}
                  placeholder={f.placeholder}
                  onChange={(e) => update({ ...profile, [f.key]: e.target.value })}
                  className="border border-gray-300 px-3 py-2 focus:border-blue-950 focus:outline-none"
                />
              </label>
            ))}

            {pageCount > 1 && (
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-gray-700">Add to</span>
                <select
                  value={scope}
                  onChange={(e) => setScope(e.target.value as PageScope)}
                  className="border border-gray-300 px-3 py-2 focus:border-blue-950 focus:outline-none"
                >
                  <option value="all">Every page</option>
                  <option value="first">First page only</option>
                  <option value="last">Last page only</option>
                </select>
              </label>
            )}

            {hasPhotoSlot(href) && (
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-gray-700">Photo in the flyer&apos;s circle</span>
                <select
                  value={slotPhoto}
                  onChange={(e) => setSlotPhoto(e.target.value as SlotPhoto)}
                  className="border border-gray-300 px-3 py-2 focus:border-blue-950 focus:outline-none"
                >
                  <option value="headshot">Headshot</option>
                  <option value="logo">Brand logo</option>
                </select>
              </label>
            )}

            {error && <p className="text-sm text-red-700">{error}</p>}

            <p className="text-xs text-gray-500">
              Everything happens in your browser. Your photo and info are never uploaded; they&apos;re
              saved on this device so you can reuse them on other documents.{" "}
              <button type="button" onClick={() => update(emptyProfile)} className="underline">
                Clear my info
              </button>
            </p>

            <div className="mt-auto flex flex-col gap-2 pt-2">
              <button
                type="button"
                onClick={download}
                disabled={busy}
                className="bg-blue-950 px-6 py-3 text-white transition hover:bg-gray-600 disabled:opacity-60"
              >
                {busy ? "Preparing…" : "Download customized PDF"}
              </button>
              <a href={encodeURI(href)} download className="border border-blue-950 px-6 py-3 text-center text-blue-950 transition hover:bg-gray-100">
                Download original
              </a>
              <button type="button" onClick={onClose} className="py-2 text-sm text-gray-600 underline">
                Close
              </button>
            </div>
          </div>

          <div className="hidden flex-1 bg-gray-200 md:block">
            {previewUrl ? (
              <iframe
                key={`${previewUrl}-${previewPage}`}
                src={`${previewUrl}#page=${previewPage}&view=FitH`}
                title={`Preview of ${title}`}
                className="h-full w-full"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-gray-600">Loading preview…</div>
            )}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

type PhotoFieldProps = {
  label: string;
  value: string;
  round?: boolean;
  prepare: (file: File) => Promise<string>;
  onChange: (dataUrl: string) => void;
  onError: (message: string) => void;
};

function PhotoField({ label, value, round, prepare, onChange, onError }: PhotoFieldProps) {
  const input = useRef<HTMLInputElement>(null);
  const name = label.toLowerCase();
  const shape = round ? "h-20 w-20 rounded-full" : "h-20 w-20 object-contain";

  const onFile = async (file: File | undefined) => {
    if (!file) return;
    try {
      onChange(await prepare(file));
      onError("");
    } catch (e) {
      onError(e instanceof Error ? e.message : "Could not read that image.");
    } finally {
      if (input.current) input.current.value = "";
    }
  };

  return (
    <div className="flex items-center gap-4">
      {value ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt={`Your ${name}`} className={`${shape} shrink-0 bg-blue-950`} />
      ) : (
        <div className={`${shape} flex shrink-0 items-center justify-center bg-gray-200 text-center text-xs text-gray-500`}>
          No {name}
        </div>
      )}
      <div className="flex flex-col items-start gap-1">
        <button
          type="button"
          onClick={() => input.current?.click()}
          className="bg-blue-950 px-4 py-2 text-sm text-white transition hover:bg-gray-600"
        >
          {value ? `Change ${name}` : `Upload ${name}`}
        </button>
        {value && (
          <button type="button" onClick={() => onChange("")} className="text-sm text-gray-600 underline">
            Remove
          </button>
        )}
        <input
          ref={input}
          type="file"
          accept={UPLOAD_TYPES.map((t) => t.mime).join(",")}
          className="hidden"
          onChange={(e) => onFile(e.target.files?.[0])}
        />
      </div>
    </div>
  );
}

// Opens the original on click, with download / customize actions underneath
export function PdfCard({ href, title, children }: { href: string; title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="m-2 p-2 gap-4">
      <a href={encodeURI(href)} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        <a href={encodeURI(href)} download className="border border-blue-950 px-4 py-2 text-sm text-blue-950 transition hover:bg-white">
          Download original
        </a>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="bg-blue-950 px-4 py-2 text-sm text-white transition hover:bg-gray-600"
        >
          Add my headshot &amp; info
        </button>
      </div>
      <CustomizeDialog href={href} title={title} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export function CustomizeButton({ href, title, className }: { href: string; title: string; className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        Add my headshot &amp; info
      </button>
      <CustomizeDialog href={href} title={title} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
