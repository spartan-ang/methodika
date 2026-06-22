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

const systems = [
  { id: "ai",          name: "AI Support System",           tag: "ai · automation",    items: ["knowledge retrieval", "escalation routing", "onboarding logic", "support automation", "response systems"] },
  { id: "recruiting",  name: "Recruiting OS",               tag: "notion · pipelines", items: ["candidate pipelines", "scoring systems", "automated handoffs", "hiring dashboards", "interview ops"] },
  { id: "customer-ops",name: "Customer Ops Infrastructure", tag: "cx · reporting",     items: ["lifecycle workflows", "reporting dashboards", "feedback loops", "team handoff systems", "process docs"] },
];

function TimelineEntry({ c }: { c: typeof companies[0] }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  return (
    <div style={{ display: "flex", gap: 0, position: "relative" }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {/* Timeline line + dot */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 24, flexShrink: 0, width: 18 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", border: `2px solid ${hovered ? c.accent : DIM}`,
          backgroundColor: hovered ? c.accent : BG, transition: "all 0.2s", marginTop: 4, flexShrink: 0 }} />
        <div style={{ flex: 1, width: 1, backgroundColor: DIM, marginTop: 4 }} />
      </div>
      {/* Content */}
      <div style={{ flex: 1, paddingBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 8 }}>
          <div style={{ width: 38, height: 38, backgroundColor: c.logoBg, borderRadius: 6, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: 4,
            border: `1px solid #1e1e1e` }}>
            {imgErr ? <span style={{ fontSize: 13, fontWeight: 700, color: c.accent }}>{c.name[0]}</span>
              : <img src={logos[c.id]} alt={c.name} onError={() => setImgErr(true)} style={{ width: "100%", height: "100%", objectFit: "contain" }} />}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: TEXT, letterSpacing: "-0.01em" }}>{c.name}</span>
              {c.period && <span style={{ fontSize: 9, color: MUTED, letterSpacing: "0.06em", flexShrink: 0 }}>{c.period}</span>}
            </div>
            <div style={{ fontSize: 10, color: c.accent, marginTop: 3, letterSpacing: "0.04em" }}>{c.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BigLabel({ n, label, sub }: { n: string; label: string; sub?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 18, borderBottom: `1px solid ${DIM}`, paddingBottom: 16 }}>
      <span style={{ fontSize: 9, color: BLUE, letterSpacing: "0.12em", opacity: 0.7, minWidth: 24 }}>{n}</span>
      <h2 style={{ margin: 0, fontSize: 28, fontWeight: 700, color: TEXT, letterSpacing: "-0.02em", lineHeight: 1, fontFamily: "inherit" }}>
        {label}
      </h2>
      {sub && <span style={{ fontSize: 10, color: MUTED, letterSpacing: "0.04em" }}>{sub}</span>}
    </div>
  );
}

export default function VariantB() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: BG, color: TEXT,
      fontFamily: "'JetBrains Mono', monospace", padding: "56px 64px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexDirection: "column", gap: 56 }}>

        {/* Hero — large typographic */}
        <section>
          <div style={{ fontSize: 9, color: BLUE, letterSpacing: "0.14em", marginBottom: 18, opacity: 0.8 }}>
            angeliki@sys:~ $&nbsp;<span style={{ color: TEXT }}>./init</span>
          </div>
          <h1 style={{ margin: "0 0 12px", fontSize: 72, fontWeight: 700, letterSpacing: "-0.03em",
            lineHeight: 0.95, color: TEXT, fontFamily: "inherit" }}>
            Angeliki<br />
            <span style={{ color: BLUE }}>Bekyra.</span>
          </h1>
          <div style={{ fontSize: 12, color: MUTED, letterSpacing: "0.1em", marginTop: 18 }}>
            EXTERNAL OPS MANAGER&nbsp;&nbsp;·&nbsp;&nbsp;SYSTEMS THINKER&nbsp;&nbsp;·&nbsp;&nbsp;PROCESS ARCHITECT
          </div>
        </section>

        {/* About */}
        <section style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <BigLabel n="01" label="About" />
          <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingLeft: 42 }}>
            <p style={{ margin: 0, fontSize: 12, color: "#cccccc", lineHeight: 1.85 }}>
              Bringing clarity, precision, and calm to operations at scale. I bridge the gap between internal strategy and external execution — specializing in driving operational efficiency, managing complex vendor ecosystems, and ensuring cross-functional initiatives deploy without friction.
            </p>
            <p style={{ margin: 0, fontSize: 12, color: "#cccccc", lineHeight: 1.85 }}>
              I treat operations like a codebase: identify bottlenecks, refactor processes, and ship scalable workflows.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px", marginTop: 4 }}>
              {["--process-optimization","--stakeholder-management","--cross-functional-coordination","--vendor-relations","--operational-efficiency","--data-driven-decisions"].map(f => (
                <span key={f} style={{ fontSize: 10, color: BLUE }}>{f}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience — timeline */}
        <section style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <BigLabel n="02" label="Work Experience" sub="6 companies · 2019 — present" />
          <div style={{ paddingLeft: 42 }}>
            {companies.map(c => <TimelineEntry key={c.id} c={c} />)}
          </div>
        </section>

        {/* Systems */}
        <section style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <BigLabel n="03" label="Systems Designed" />
          <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingLeft: 42 }}>
            {systems.map(s => (
              <div key={s.id} style={{ display: "flex", gap: 20, alignItems: "flex-start",
                padding: "16px 20px", backgroundColor: CARD_BG, border: `1px solid ${DIM}`, borderRadius: 6 }}>
                <div style={{ flexShrink: 0, width: 160 }}>
                  <div style={{ fontSize: 9, color: BLUE_LIGHT, letterSpacing: "0.1em", lineHeight: 1.5 }}>{s.name.toUpperCase()}</div>
                  <div style={{ fontSize: 8, color: MUTED, letterSpacing: "0.06em", marginTop: 4 }}>{s.tag}</div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 18px" }}>
                  {s.items.map(item => (
                    <span key={item} style={{ fontSize: 10, color: "#aaaaaa" }}>
                      <span style={{ color: MUTED }}>–&nbsp;</span>{item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section style={{ display: "flex", flexDirection: "column", gap: 22, paddingBottom: 48 }}>
          <BigLabel n="04" label="Let's Speak." />
          <div style={{ paddingLeft: 42, display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "28px 32px", border: `1px solid ${DIM}`, backgroundColor: CARD_BG }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: TEXT }}>Open to roles, collabs, and ops conversations.</span>
              <span style={{ fontSize: 10, color: MUTED }}>Find me on LinkedIn.</span>
            </div>
            <a href="https://www.linkedin.com/in/angeliki-bekyra/" target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: BLUE, color: BG, padding: "8px 20px", textDecoration: "none",
                fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", flexShrink: 0 }}>
              LINKEDIN →
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
