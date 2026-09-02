import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

export const metadata: Metadata = {
  title: "Correspondent Lending Bulletins | Essex Mortgage",
  description:
    "Program updates, policy changes, and important announcements for Essex correspondent partners.",
};

// ---------------------------------------------------------------------------
// Brand tokens (Essex Correspondent Lending)
// ---------------------------------------------------------------------------
const NAVY = "#162556";
const NAVY_MUTED = "#c7cbd6";
const GRAY_BG = "#e5e7eb";
const TEXT_BODY = "#374151";
const TEXT_MUTED = "#4b5563";
const TEXT_EYEBROW = "#6b7280";

// ---------------------------------------------------------------------------
// Content — the 5 bulletins that live on this page.
// Update `href` to the real PDF path once it's hosted, and replace each
// placeholder entry with its real date / title / summary as bulletins land.
// ---------------------------------------------------------------------------
type Bulletin = {
  id: string;
  date: string;
  title: string;
  summary: string;
  href: string;
  placeholder?: boolean;
};

const bulletins: Bulletin[] = [
  {
    id: "trailing-docs-2026-3-8",
    date: "August 3, 2026",
    title: "MINIMUM FICO SCORE & MAXIMUM DTI ADJUSTMENTS",
    summary:
      "",
    href: "/bulletins/Bulletin8.3.26.pdf",
  },
  {
    id: "trailing-docs-2026-12-6",
    date: "June 12, 2026",
    title: "INDIANA DAILY SIMPLE INTEREST FOR SECOND LIENS",
    summary: "",
    href: "/bulletins/Bulletin6.12.26.pdf",
  },
  {
    id: "placeholder-3",
    date: "April 14, 2026",
    title: "CHANGE COMING: TRAILING DOCS",
    summary: "",
    href: "/bulletins/Bulletin4.14.26.pdf",
  },
  {
    id: "placeholder-4",
    date: "March 3, 2026",
    title: "WASHINGTON DPA PROGRAM UPDATE",
    summary: "",
    href: "/bulletins/Bulletin3.12.26.pdf",
  },
  {
    id: "placeholder-5",
    date: "February 23, 2026",
    title: "NHF DPA FORGIVABLE PROGRAM UPDATE REMINDER",
    summary: "",
    href: "/bulletins/Bulletin2.23.26.pdf",
  },
];

// ---------------------------------------------------------------------------
// Small inline icons (no icon library dependency)
// ---------------------------------------------------------------------------
function DocumentIcon({ color }: { color: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}


// ---------------------------------------------------------------------------
// Shared style objects (kept inline, not Tailwind classes, per request)
// ---------------------------------------------------------------------------
const navLinkStyle: CSSProperties = {
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: "0.03em",
  color: "#1b1b1f",
  textDecoration: "none",
};

const navLinkActiveStyle: CSSProperties = {
  ...navLinkStyle,
  fontWeight: 700,
  color: NAVY,
};


function BulletinCard({ bulletin }: { bulletin: Bulletin }) {
  const accent = bulletin.placeholder ? NAVY_MUTED : NAVY;
  const titleColor = bulletin.placeholder ? "#6b7280" : NAVY;
  const summaryColor = bulletin.placeholder ? "#8b93a3" : TEXT_MUTED;
  const eyebrowColor = bulletin.placeholder ? "#9aa1b0" : "#8991a3";

  const cardStyle: CSSProperties = {
    width: 368,
    background: bulletin.placeholder ? "#fafafb" : "#ffffff",
    border: bulletin.placeholder ? "1px dashed #c7cbd6" : "1px solid #e2e4e9",
    display: "flex",
    flexDirection: "column",
  };

  const buttonStyle: CSSProperties = bulletin.placeholder
    ? {
        marginTop: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        background: "transparent",
        border: "1.5px solid #9aa1b0",
        color: "#8b93a3",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        padding: "12.5px 18px",
        textDecoration: "none",
      }
    : {
        marginTop: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        background: NAVY,
        color: "#ffffff",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        padding: "14px 18px",
        textDecoration: "none",
      };

  return (
    <div style={cardStyle}>
      <div style={{ height: 7, background: accent }} />
      <div
        style={{
          padding: "26px 26px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          flexGrow: 1,
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: eyebrowColor,
            textTransform: "uppercase",
          }}
        >
          {bulletin.placeholder ? "Placeholder" : "Bulletin"} &middot; {bulletin.date}
        </div>
        <h3
          style={{
            fontSize: 19,
            fontWeight: 700,
            color: titleColor,
            margin: 0,
            lineHeight: 1.32,
          }}
        >
          {bulletin.title}
        </h3>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.55,
            color: summaryColor,
            margin: 0,
            flexGrow: 1,
          }}
        >
          {bulletin.summary}
        </p>
        <a
          href={bulletin.href}
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <DocumentIcon color={bulletin.placeholder ? "#8b93a3" : "#ffffff"} />
          Download PDF
        </a>
      </div>
    </div>
  );
}

export default function BulletinsPage() {
  return (
    <div style={{ width: "100%", minHeight: "100%", background: "#ffffff" }}>
      <NavBar />
      {/* HERO / TITLE BAND */}
      <section style={{ background: GRAY_BG, padding: "56px 64px 68px", textAlign: "center" }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.16em",
            color: TEXT_EYEBROW,
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          RESOURCES&nbsp;&nbsp;/&nbsp;&nbsp;<span style={{ color: NAVY }}>BULLETINS</span>
        </div>
        <h1 style={{ fontSize: 44, fontWeight: 700, color: NAVY, margin: "0 0 20px", lineHeight: 1.15 }}>
          Correspondent Lending Bulletins
        </h1>
        <div style={{ width: 80, height: 4, background: NAVY, margin: "0 auto 24px" }} />
        <p style={{ maxWidth: 620, margin: "0 auto", fontSize: 17, lineHeight: 1.6, color: TEXT_BODY }}>
          Program updates, policy changes, and important announcements for our correspondent
          partners — posted here as they&rsquo;re released.
        </p>
      </section>

      {/* BULLETIN CARDS */}
      <section style={{ background: "#ffffff", padding: "72px 64px 88px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 28,
            maxWidth: 1264,
            margin: "0 auto",
          }}
        >
          {bulletins.map((bulletin) => (
            <BulletinCard key={bulletin.id} bulletin={bulletin} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}