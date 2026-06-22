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
  { id: "spendbase", name: "SPENDBASE", role: "Customer & Product Operations Lead", period: "2025 — PRESENT", domain: "spendbase.co", tagline: "Unified CS + Product ops from scratch", featured: true },
  { id: "cinobo", name: "CINOBO", role: "Operational Excellence Manager", period: "2025", domain: "cinobo.com", tagline: "Mapped ops + scalable CRM", featured: false },
  { id: "dreamclass", name: "DREAMCLASS", role: "CS & Customer Support Director", period: "2023 — 2024", domain: "dreamclass.io", tagline: "AI-powered support systems", featured: false },
  { id: "layer", name: "LAYER", role: "CS & Operations Lead", period: "2022 — 2023", domain: "layerlicensing.com", tagline: "GTM workflows + marketplace", featured: false },
  { id: "epignosis", name: "EPIGNOSIS", role: "CS Operations Specialist", period: "2019 — 2022", domain: "epignosishq.com", tagline: "CS processes + playbooks", featured: false },
];

function Logo({ domain, name, size = 44 }: { domain: string; name: string; size?: number }) {
  const [err, setErr] = useState(false);
  if (err) return (
    <div style={{ width: size, height: size, backgroundColor: "#1a2e42", border: `1px solid ${BLUE}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "inherit", fontSize: size * 0.35, fontWeight: 700, color: BLUE }}>
      {name[0]}
    </div>
  );
  return <img src={`https://logo.clearbit.com/${domain}`} alt={name} onError={() => setErr(true)} style={{ width: size, height: size, objectFit: "contain", flexShrink: 0, backgroundColor: "#fff", padding: 4 }} />;
}

export default function BlockCompactH2() {
  const [featured] = companies;
  const rest = companies.slice(1);
  const [featHovered, setFeatHovered] = useState(false);

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

        {/* Split: heavy left / stacked right */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: BG, backgroundColor: BLUE, padding: "5px 14px", fontFamily: "inherit" }}>WORK EXPERIENCE</div>
            <span style={{ fontSize: 10, color: MUTED, fontFamily: "inherit" }}>5 companies · 2019 — present</span>
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "stretch" }}>
            {/* Left: large featured card */}
            <a
              href="https://spendbase.co"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: "0 0 42%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 24,
                border: `1px solid ${featHovered ? BLUE_LIGHT : BLUE}`,
                backgroundColor: featHovered ? "#101e2e" : CARD_FEATURED,
                padding: "28px 28px",
                textDecoration: "none",
                transition: "all 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={() => setFeatHovered(true)}
              onMouseLeave={() => setFeatHovered(false)}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Logo domain={featured.domain} name={featured.name} size={52} />
                  <span style={{ fontSize: 9, color: BG, backgroundColor: BLUE, padding: "2px 8px", fontWeight: 700, letterSpacing: "0.1em", fontFamily: "inherit" }}>CURRENT</span>
                </div>
                <div>
                  <div style={{ fontSize: 9, letterSpacing: "0.14em", color: BLUE_LIGHT, fontFamily: "inherit", marginBottom: 8 }}>[ {featured.name} ]</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: TEXT, lineHeight: 1.3, fontFamily: "inherit" }}>{featured.role}</div>
                </div>
              </div>
              <div style={{ borderTop: `1px solid rgba(91,155,213,0.3)`, paddingTop: 16 }}>
                <div style={{ fontSize: 11, color: "#aaaaaa", fontFamily: "inherit", lineHeight: 1.6 }}>{featured.tagline}</div>
                <div style={{ fontSize: 10, color: MUTED, fontFamily: "inherit", marginTop: 8 }}>{featured.period}</div>
              </div>
            </a>

            {/* Right: 4 compact stacked rows */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
              {rest.map((c) => {
                const [hovered, setHovered] = useState(false);
                return (
                  <a
                    key={c.id}
                    href={`https://${c.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      border: `1px solid ${hovered ? BLUE : DIM}`,
                      backgroundColor: CARD_BG,
                      padding: "12px 16px",
                      textDecoration: "none",
                      transition: "border-color 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <Logo domain={c.domain} name={c.name} size={32} />
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                        <span style={{ fontSize: 9, letterSpacing: "0.12em", color: BLUE_LIGHT, fontFamily: "inherit" }}>[ {c.name} ]</span>
                        <span style={{ fontSize: 8, color: MUTED, fontFamily: "inherit" }}>{c.period}</span>
                      </div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: TEXT, fontFamily: "inherit" }}>{c.role}</div>
                    </div>
                    <div style={{ fontSize: 9, color: "#666", fontFamily: "inherit", maxWidth: 140, textAlign: "right", lineHeight: 1.4 }}>{c.tagline}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
