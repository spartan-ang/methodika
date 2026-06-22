import { useState } from 'react';
import './_group.css';

const BLUE = "#5b9bd5";
const BLUE_LIGHT = "#93c5fd";
const MUTED = "#666666";
const DIM = "#222222";
const TEXT = "#e8e6df";
const BG = "#0d0d0d";
const CARD_BG = "#111111";
const CARD_FEATURED = "#0f1a24";

const companies = [
  {
    id: "spendbase",
    name: "SPENDBASE",
    role: "Customer & Product Operations Lead",
    period: "2025 — PRESENT",
    domain: "spendbase.co",
    url: "https://spendbase.co",
    tagline: "Unified CS + Product ops from scratch",
    featured: true,
  },
  {
    id: "cinobo",
    name: "CINOBO",
    role: "Operational Excellence Manager",
    period: "2025",
    domain: "cinobo.com",
    url: "https://cinobo.com",
    tagline: "Mapped ops + built scalable CRM",
    featured: false,
  },
  {
    id: "dreamclass",
    name: "DREAMCLASS",
    role: "CS & Customer Support Director",
    period: "2023 — 2024",
    domain: "dreamclass.io",
    url: "https://dreamclass.io",
    tagline: "AI-powered support + knowledge systems",
    featured: false,
  },
  {
    id: "layer",
    name: "LAYER",
    role: "CS & Operations Lead",
    period: "2022 — 2023",
    domain: "layerlicensing.com",
    url: "https://www.layerlicensing.com",
    tagline: "GTM workflows + marketplace support",
    featured: false,
  },
  {
    id: "epignosis",
    name: "EPIGNOSIS",
    role: "CS Operations Specialist",
    period: "2019 — 2022",
    domain: "epignosishq.com",
    url: "https://www.epignosishq.com",
    tagline: "Built repeatable CS processes + playbooks",
    featured: false,
  },
];

function CompanyLogo({ domain, name }: { domain: string; name: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#1a2e42",
          border: `1px solid ${BLUE}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 14,
          fontWeight: 700,
          color: BLUE,
        }}
      >
        {name[0]}
      </div>
    );
  }

  return (
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={name}
      onError={() => setError(true)}
      style={{
        width: 40,
        height: 40,
        objectFit: "contain",
        flexShrink: 0,
        backgroundColor: "#ffffff",
        padding: 4,
      }}
    />
  );
}

function FeaturedCompactCard({ c }: { c: typeof companies[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        gridColumn: "span 3",
        display: "flex",
        alignItems: "center",
        gap: 20,
        border: `1px solid ${hovered ? BLUE_LIGHT : BLUE}`,
        backgroundColor: hovered ? "#101e2e" : CARD_FEATURED,
        padding: "20px 24px",
        textDecoration: "none",
        transition: "border-color 0.2s, background-color 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CompanyLogo domain={c.domain} name={c.name} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span style={{ fontSize: 10, letterSpacing: "0.14em", color: BLUE_LIGHT, fontFamily: "inherit" }}>
            [ {c.name} ]
          </span>
          <span
            style={{
              fontSize: 9,
              color: BG,
              backgroundColor: BLUE,
              padding: "1px 8px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              fontFamily: "inherit",
            }}
          >
            CURRENT
          </span>
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, color: TEXT, fontFamily: "inherit" }}>{c.role}</div>
        <div style={{ fontSize: 10, color: MUTED, fontFamily: "inherit" }}>{c.tagline}</div>
      </div>
      <div style={{ fontSize: 10, color: MUTED, fontFamily: "inherit", whiteSpace: "nowrap", letterSpacing: "0.06em" }}>
        {c.period}
      </div>
    </a>
  );
}

function CompactCard({ c }: { c: typeof companies[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        border: `1px solid ${hovered ? BLUE : DIM}`,
        backgroundColor: CARD_BG,
        padding: "16px 18px",
        textDecoration: "none",
        transition: "border-color 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <CompanyLogo domain={c.domain} name={c.name} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
          <span style={{ fontSize: 9, letterSpacing: "0.12em", color: BLUE_LIGHT, fontFamily: "inherit" }}>
            [ {c.name} ]
          </span>
          <span style={{ fontSize: 9, color: MUTED, fontFamily: "inherit", letterSpacing: "0.04em" }}>
            {c.period}
          </span>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${DIM}`, paddingTop: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: TEXT, lineHeight: 1.4, fontFamily: "inherit", marginBottom: 5 }}>
          {c.role}
        </div>
        <div style={{ fontSize: 10, color: "#777777", fontFamily: "inherit", lineHeight: 1.5 }}>
          {c.tagline}
        </div>
      </div>
    </a>
  );
}

export default function BlockCompactExperience() {
  const [featured, ...rest] = companies;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: BG,
        color: TEXT,
        fontFamily: "'JetBrains Mono', monospace",
        padding: "48px 56px",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto", display: "flex", flexDirection: "column", gap: 44 }}>

        {/* Hero */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
            <h1 style={{ fontSize: 52, fontWeight: 700, color: TEXT, letterSpacing: "-0.02em", lineHeight: 1, fontFamily: "inherit" }}>
              HI, I'm Angeliki
            </h1>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", color: BG, backgroundColor: BLUE, padding: "5px 16px", alignSelf: "center", fontFamily: "inherit" }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            <FeaturedCompactCard c={featured} />
            {rest.map((c) => (
              <CompactCard key={c.id} c={c} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
