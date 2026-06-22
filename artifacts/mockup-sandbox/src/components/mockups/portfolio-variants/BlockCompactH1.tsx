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
  { id: "spendbase", name: "SPENDBASE", role: "Customer & Product Operations Lead", period: "2025 — NOW", domain: "spendbase.co", tagline: "Unified CS + Product ops", featured: true },
  { id: "cinobo", name: "CINOBO", role: "Operational Excellence Manager", period: "2025", domain: "cinobo.com", tagline: "Mapped ops + CRM", featured: false },
  { id: "dreamclass", name: "DREAMCLASS", role: "CS & Customer Support Director", period: "2023 — 2024", domain: "dreamclass.io", tagline: "AI support systems", featured: false },
  { id: "layer", name: "LAYER", role: "CS & Operations Lead", period: "2022 — 2023", domain: "layerlicensing.com", tagline: "GTM + marketplace ops", featured: false },
  { id: "epignosis", name: "EPIGNOSIS", role: "CS Operations Specialist", period: "2019 — 2022", domain: "epignosishq.com", tagline: "CS processes + playbooks", featured: false },
];

function Logo({ domain, name }: { domain: string; name: string }) {
  const [err, setErr] = useState(false);
  if (err) return (
    <div style={{ width: 36, height: 36, backgroundColor: "#1a2e42", border: `1px solid ${BLUE}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "inherit", fontSize: 13, fontWeight: 700, color: BLUE }}>
      {name[0]}
    </div>
  );
  return <img src={`https://logo.clearbit.com/${domain}`} alt={name} onError={() => setErr(true)} style={{ width: 36, height: 36, objectFit: "contain", flexShrink: 0, backgroundColor: "#fff", padding: 3 }} />;
}

export default function BlockCompactH1() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: BG, color: TEXT, fontFamily: "'JetBrains Mono', monospace", padding: "48px 56px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 44 }}>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <h1 style={{ fontSize: 48, fontWeight: 700, color: TEXT, letterSpacing: "-0.02em", lineHeight: 1, fontFamily: "inherit" }}>HI, I'm Angeliki</h1>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", color: BG, backgroundColor: BLUE, padding: "5px 14px", fontFamily: "inherit" }}>EXTERNAL OPS MANAGER</div>
          </div>
          <div style={{ fontSize: 12, color: MUTED, letterSpacing: "0.04em", fontFamily: "inherit" }}>Systems thinker · Process architect · Operations at scale</div>
        </div>

        <div style={{ borderTop: `1px solid ${DIM}` }} />

        {/* Timeline row layout */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: BG, backgroundColor: BLUE, padding: "5px 14px", fontFamily: "inherit" }}>WORK EXPERIENCE</div>
            <span style={{ fontSize: 10, color: MUTED, fontFamily: "inherit" }}>5 companies · 2019 — present</span>
          </div>

          {/* Horizontal timeline strip */}
          <div style={{ display: "flex", gap: 0, borderTop: `2px solid ${DIM}`, paddingTop: 24, position: "relative" }}>
            {/* Timeline line */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, backgroundColor: DIM }} />

            {companies.map((c, i) => {
              const [hovered, setHovered] = useState(false);
              const widths = [28, 18, 18, 18, 18];
              return (
                <div
                  key={c.id}
                  style={{
                    width: `${widths[i]}%`,
                    flexShrink: 0,
                    paddingRight: i < companies.length - 1 ? 12 : 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    border: `1px solid ${hovered ? BLUE : c.featured ? BLUE : DIM}`,
                    backgroundColor: c.featured ? CARD_FEATURED : CARD_BG,
                    padding: "14px 14px",
                    transition: "border-color 0.2s",
                    cursor: "pointer",
                    marginRight: i < companies.length - 1 ? 10 : 0,
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {/* Top: dot on timeline + date */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Logo domain={c.domain} name={c.name} />
                    {c.featured && (
                      <span style={{ fontSize: 8, color: BG, backgroundColor: BLUE, padding: "1px 6px", fontWeight: 700, letterSpacing: "0.1em", fontFamily: "inherit" }}>NOW</span>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{ fontSize: 9, letterSpacing: "0.12em", color: BLUE_LIGHT, fontFamily: "inherit" }}>[ {c.name} ]</span>
                    <span style={{ fontSize: 8, color: MUTED, fontFamily: "inherit" }}>{c.period}</span>
                  </div>
                  <div style={{ borderTop: `1px solid ${DIM}`, paddingTop: 8 }}>
                    <div style={{ fontSize: c.featured ? 11 : 10, fontWeight: 600, color: TEXT, lineHeight: 1.35, fontFamily: "inherit", marginBottom: 5 }}>{c.role}</div>
                    <div style={{ fontSize: 9, color: "#777", fontFamily: "inherit" }}>{c.tagline}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
