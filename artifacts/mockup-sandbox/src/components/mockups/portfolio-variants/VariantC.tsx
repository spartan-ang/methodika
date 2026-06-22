import { useState } from 'react';
import './_group.css';

const BLUE = "#5b9bd5";
const BLUE_LIGHT = "#93c5fd";
const MUTED = "#666666";
const DIM = "#2a2a2a";
const TEXT = "#e8e6df";
const BG = "#0d0d0d";
const CARD_BG = "#111111";

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const logos: Record<string, string> = {
  spendbase: `${base}/logos/spendbase.svg`,
  cinobo: `${base}/logos/cinobo.jpeg`,
  dreamclass: `${base}/logos/dreamclass.jpeg`,
  layer: `${base}/logos/layer.svg`,
  epignosis: `${base}/logos/epignosis.svg`,
  flexdesk: `${base}/logos/flexdesk.png`,
};

const companies = [
  { id: "spendbase",  name: "Spendbase",   role: "Customer & Product Operations", period: "2025 — PRESENT", logoBg: "#0a1628", accent: BLUE },
  { id: "cinobo",    name: "Cinobo",      role: "Operational Excellence",         period: "2025",           logoBg: "#f97316", accent: "#f97316" },
  { id: "dreamclass",name: "Dreamclass",  role: "CS & Customer Support Director", period: "2023 — 2024",    logoBg: "#1a4a3a", accent: "#34a87e" },
  { id: "layer",     name: "Layer",       role: "CS & Operations Lead",           period: "2022 — 2023",    logoBg: "#0d0d0d", accent: "#9cff94" },
  { id: "epignosis", name: "Epignosis",   role: "Customer Success Operations",    period: "2019 — 2022",    logoBg: "#1a0f06", accent: "#f79421" },
  { id: "flexdesk",  name: "Flexdesk.gr", role: "Co-Founder",                     period: "",               logoBg: "#ffffff", accent: "#a78bfa" },
];

const skills = [
  "--process-optimization", "--stakeholder-management", "--cross-functional-coordination",
  "--vendor-relations", "--operational-efficiency", "--data-driven-decisions",
  "--budget-management", "--team-leadership",
];

function BentoCell({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ backgroundColor: CARD_BG, border: `1px solid ${DIM}`, borderRadius: 10, padding: "22px 24px",
      overflow: "hidden", ...style }}>
      {children}
    </div>
  );
}

function CellLabel({ text }: { text: string }) {
  return (
    <div style={{ fontSize: 8, color: BLUE, letterSpacing: "0.14em", marginBottom: 14, opacity: 0.8 }}>
      ./{text.toLowerCase().replace(/ /g, "-")}
    </div>
  );
}

function CompanyPill({ c }: { c: typeof companies[0] }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0",
      borderBottom: `1px solid ${hovered ? c.accent + "44" : DIM}`,
      transition: "border-color 0.15s", cursor: "default" }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ width: 28, height: 28, backgroundColor: c.logoBg, borderRadius: 4, flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: 3,
        border: `1px solid #1e1e1e` }}>
        {imgErr ? <span style={{ fontSize: 10, fontWeight: 700, color: c.accent }}>{c.name[0]}</span>
          : <img src={logos[c.id]} alt={c.name} onError={() => setImgErr(true)} style={{ width: "100%", height: "100%", objectFit: "contain" }} />}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: TEXT, letterSpacing: "-0.01em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</div>
        <div style={{ fontSize: 8, color: MUTED, marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.role}</div>
      </div>
      {c.period && <span style={{ fontSize: 8, color: c.accent, letterSpacing: "0.04em", flexShrink: 0, opacity: 0.8 }}>{c.period.replace(" — PRESENT", "+")}</span>}
    </div>
  );
}

export default function VariantC() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: BG, color: TEXT,
      fontFamily: "'JetBrains Mono', monospace", padding: "44px 48px" }}>
      <div style={{ maxWidth: 920, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>

        {/* Top row: Hero + Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 12 }}>

          {/* Hero cell */}
          <BentoCell>
            <div style={{ fontSize: 9, color: BLUE, letterSpacing: "0.14em", marginBottom: 18, opacity: 0.7 }}>
              angeliki@sys:~ $ whoami
            </div>
            <h1 style={{ margin: "0 0 10px", fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em",
              lineHeight: 1, color: TEXT, fontFamily: "inherit" }}>
              Angeliki
            </h1>
            <div style={{ fontSize: 10, color: MUTED, letterSpacing: "0.12em", marginBottom: 20 }}>
              EXTERNAL OPS MANAGER
            </div>
            <p style={{ margin: 0, fontSize: 11, color: "#cccccc", lineHeight: 1.8, maxWidth: 440 }}>
              Bringing clarity, precision, and calm to operations at scale. Systems thinker. Process architect. Nothing unnecessary, everything intentional.
            </p>
          </BentoCell>

          {/* Stats cell */}
          <BentoCell style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <CellLabel text="snapshot" />
            {[
              { value: "6+", label: "companies" },
              { value: "7yr", label: "in ops" },
              { value: "3", label: "systems built" },
            ].map(stat => (
              <div key={stat.label} style={{ borderBottom: `1px solid ${DIM}`, paddingBottom: 14, marginBottom: 14 }}>
                <div style={{ fontSize: 36, fontWeight: 700, color: BLUE, letterSpacing: "-0.03em", lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 9, color: MUTED, letterSpacing: "0.1em", marginTop: 4 }}>{stat.label.toUpperCase()}</div>
              </div>
            ))}
          </BentoCell>
        </div>

        {/* Middle row: Experience + Skills */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>

          {/* Experience */}
          <BentoCell>
            <CellLabel text="work-experience" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              {companies.map(c => <CompanyPill key={c.id} c={c} />)}
            </div>
          </BentoCell>

          {/* Skills + Systems combined */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Skills */}
            <BentoCell>
              <CellLabel text="skills" />
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 14px" }}>
                {skills.map(s => (
                  <span key={s} style={{ fontSize: 9, color: BLUE, letterSpacing: "0.04em" }}>{s}</span>
                ))}
              </div>
            </BentoCell>

            {/* Systems */}
            <BentoCell style={{ flex: 1 }}>
              <CellLabel text="systems-designed" />
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { name: "AI Support System",            tag: "ai · automation" },
                  { name: "Recruiting OS",                tag: "notion · pipelines" },
                  { name: "Customer Ops Infrastructure",  tag: "cx · reporting" },
                ].map(s => (
                  <div key={s.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "8px 12px", border: `1px solid ${DIM}`, borderRadius: 6 }}>
                    <span style={{ fontSize: 9, color: BLUE_LIGHT, letterSpacing: "0.06em" }}>{s.name.toUpperCase()}</span>
                    <span style={{ fontSize: 8, color: MUTED }}>{s.tag}</span>
                  </div>
                ))}
              </div>
            </BentoCell>

          </div>
        </div>

        {/* Bottom row: Contact full width */}
        <BentoCell style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 32px" }}>
          <div>
            <div style={{ fontSize: 9, color: BLUE_LIGHT, letterSpacing: "0.04em", marginBottom: 8 }}>
              <span style={{ color: BLUE }}>angeliki@sys</span>:~ $ ./connect.sh
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: TEXT, letterSpacing: "-0.02em" }}>Let's speak.</div>
            <div style={{ fontSize: 10, color: MUTED, marginTop: 4 }}>
              Open to new roles, collaborations, and ops conversations.
            </div>
          </div>
          <a href="https://www.linkedin.com/in/angeliki-bekyra/" target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: BLUE, color: BG, padding: "10px 24px", textDecoration: "none",
              fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", flexShrink: 0, borderRadius: 3 }}>
            LINKEDIN →
          </a>
        </BentoCell>

      </div>
    </div>
  );
}
