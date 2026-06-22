import { useState } from 'react';
import './_group.css';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const logos = {
  spendbase: `${base}/logos/spendbase.svg`,
  cinobo: `${base}/logos/cinobo.jpeg`,
  dreamclass: `${base}/logos/dreamclass.jpeg`,
  layer: `${base}/logos/layer.svg`,
  epignosis: `${base}/logos/epignosis.svg`,
};

const BLUE = "#5b9bd5";
const BLUE_LIGHT = "#93c5fd";
const MUTED = "#666666";
const DIM = "#222222";
const TEXT = "#e8e6df";
const BG = "#0d0d0d";
const CARD_BG = "#111111";

const companies = [
  {
    id: "spendbase",
    name: "Spendbase",
    role: "Customer & Product Operations Lead",
    period: "2025 — PRESENT",
    logo: logos.spendbase,
    logoBg: "#0a1628",
    accent: BLUE,
    featured: true,
    url: "https://spendbase.co",
  },
  {
    id: "cinobo",
    name: "Cinobo",
    role: "Operational Excellence Manager",
    period: "2025",
    logo: logos.cinobo,
    logoBg: "#f97316",
    accent: "#f97316",
    featured: false,
    url: "https://cinobo.com",
  },
  {
    id: "dreamclass",
    name: "Dreamclass",
    role: "CS & Customer Support Director",
    period: "2023 — 2024",
    logo: logos.dreamclass,
    logoBg: "#1a4a3a",
    accent: "#34a87e",
    featured: false,
    url: "https://dreamclass.io",
  },
  {
    id: "layer",
    name: "Layer",
    role: "CS & Operations Lead",
    period: "2022 — 2023",
    logo: logos.layer,
    logoBg: "#0d0d0d",
    accent: "#9cff94",
    featured: false,
    url: "https://www.layerlicensing.com",
  },
  {
    id: "epignosis",
    name: "Epignosis",
    role: "CS Operations Specialist",
    period: "2019 — 2022",
    logo: logos.epignosis,
    logoBg: "#1a0f06",
    accent: "#f79421",
    featured: false,
    url: "https://www.epignosishq.com",
  },
];

function CompanyCard({ c }: { c: typeof companies[0] }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        backgroundColor: hovered ? `${c.accent}11` : CARD_BG,
        border: `1px solid ${hovered ? c.accent : c.featured ? `${c.accent}88` : "#2a2a2a"}`,
        borderRadius: 8,
        padding: "16px 20px",
        textDecoration: "none",
        transition: "border-color 0.2s, background-color 0.2s",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left accent strip */}
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 3,
        backgroundColor: c.accent,
        borderRadius: "8px 0 0 8px",
        opacity: hovered ? 1 : 0.5,
        transition: "opacity 0.2s",
      }} />

      {/* Logo */}
      <div style={{
        width: 44,
        height: 44,
        backgroundColor: c.logoBg,
        borderRadius: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden",
        padding: 5,
        border: `1px solid ${DIM}`,
      }}>
        {imgErr ? (
          <span style={{ fontSize: 16, fontWeight: 700, color: c.accent, fontFamily: "inherit" }}>
            {c.name[0]}
          </span>
        ) : (
          <img
            src={c.logo}
            alt={c.name}
            onError={() => setImgErr(true)}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        )}
      </div>

      {/* Text */}
      <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: TEXT, fontFamily: "inherit", letterSpacing: "-0.01em" }}>
            {c.name}
          </span>
          {c.featured && (
            <span style={{
              fontSize: 8,
              color: BG,
              backgroundColor: c.accent,
              padding: "1px 6px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              fontFamily: "inherit",
              borderRadius: 2,
            }}>
              CURRENT
            </span>
          )}
        </div>
        <span style={{ fontSize: 10, color: MUTED, fontFamily: "inherit", lineHeight: 1.4 }}>
          {c.role}
        </span>
      </div>
    </a>
  );
}

export default function BlockCompactH3() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: BG, color: TEXT, fontFamily: "'JetBrains Mono', monospace", padding: "48px 56px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", flexDirection: "column", gap: 44 }}>

        {/* Hero */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <h1 style={{ fontSize: 48, fontWeight: 700, color: TEXT, letterSpacing: "-0.02em", lineHeight: 1, fontFamily: "inherit" }}>
              HI, I'm Angeliki
            </h1>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", color: BG, backgroundColor: BLUE, padding: "5px 14px", fontFamily: "inherit" }}>
              EXTERNAL OPS MANAGER
            </div>
          </div>
          <div style={{ fontSize: 12, color: MUTED, letterSpacing: "0.04em", fontFamily: "inherit" }}>
            Systems thinker · Process architect · Operations at scale
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${DIM}` }} />

        {/* Work Experience */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: BG, backgroundColor: BLUE, padding: "5px 14px", fontFamily: "inherit" }}>
              WORK EXPERIENCE
            </div>
            <span style={{ fontSize: 10, color: MUTED, fontFamily: "inherit" }}>5 companies · 2019 — present</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {companies.map((c) => (
              <CompanyCard key={c.id} c={c} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
