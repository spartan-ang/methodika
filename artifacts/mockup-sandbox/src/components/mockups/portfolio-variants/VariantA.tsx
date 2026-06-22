import { useState } from 'react';
import './_group.css';

const BLUE = "#5b9bd5";
const BLUE_LIGHT = "#93c5fd";
const MUTED = "#666666";
const DIM = "#2a2a2a";
const TEXT = "#e8e6df";
const BG = "#0d0d0d";
const CARD_BG = "#111111";
const SIDEBAR_BG = "#0a0a0a";

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
  { id: "spendbase",  name: "Spendbase",   role: "Customer & Product Operations", logoBg: "#0a1628", accent: BLUE },
  { id: "cinobo",    name: "Cinobo",      role: "Operational Excellence",         logoBg: "#f97316", accent: "#f97316" },
  { id: "dreamclass",name: "Dreamclass",  role: "CS & Customer Support Director", logoBg: "#1a4a3a", accent: "#34a87e" },
  { id: "layer",     name: "Layer",       role: "CS & Operations Lead",           logoBg: "#0d0d0d", accent: "#9cff94" },
  { id: "epignosis", name: "Epignosis",   role: "Customer Success Operations",    logoBg: "#1a0f06", accent: "#f79421" },
  { id: "flexdesk",  name: "Flexdesk.gr", role: "Co-Founder",                     logoBg: "#ffffff", accent: "#a78bfa" },
];

const systems = [
  { id: "ai",          name: "AI Support System",            tag: "ai · automation",      items: ["knowledge retrieval", "escalation routing", "onboarding logic", "support automation"] },
  { id: "recruiting",  name: "Recruiting OS",                tag: "notion · pipelines",   items: ["candidate pipelines", "scoring systems", "automated handoffs", "hiring dashboards"] },
  { id: "customer-ops",name: "Customer Ops Infrastructure",  tag: "cx · reporting",       items: ["lifecycle workflows", "reporting dashboards", "feedback loops", "team handoff systems"] },
];

const NAV_ITEMS = ["ABOUT", "EXPERIENCE", "SYSTEMS", "CONTACT"];

function CompanyRow({ c }: { c: typeof companies[0] }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  return (
    <a href="#" style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0",
      borderBottom: `1px solid ${DIM}`, textDecoration: "none",
      transition: "opacity 0.15s", opacity: hovered ? 1 : 0.85 }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ width: 36, height: 36, backgroundColor: c.logoBg, borderRadius: 5,
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        overflow: "hidden", padding: 4, border: `1px solid #1e1e1e` }}>
        {imgErr ? <span style={{ fontSize: 13, fontWeight: 700, color: c.accent }}>{c.name[0]}</span>
          : <img src={logos[c.id]} alt={c.name} onError={() => setImgErr(true)} style={{ width: "100%", height: "100%", objectFit: "contain" }} />}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "space-between" }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: TEXT, letterSpacing: "-0.01em" }}>{c.name}</span>
          <span style={{ fontSize: 8, color: c.accent, border: `1px solid ${c.accent}55`, padding: "1px 7px", letterSpacing: "0.08em" }}>{c.role}</span>
        </div>
      </div>
    </a>
  );
}

export default function VariantA() {
  const [active, setActive] = useState("ABOUT");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: BG, color: TEXT, fontFamily: "'JetBrains Mono', monospace",
      display: "flex" }}>

      {/* Sidebar */}
      <div style={{ width: 220, backgroundColor: SIDEBAR_BG, borderRight: `1px solid ${DIM}`,
        display: "flex", flexDirection: "column", padding: "48px 0", position: "sticky", top: 0, height: "100vh", flexShrink: 0 }}>
        <div style={{ padding: "0 28px 40px" }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: TEXT, letterSpacing: "-0.01em", lineHeight: 1.2 }}>Angeliki</div>
          <div style={{ fontSize: 9, color: BLUE, letterSpacing: "0.12em", marginTop: 6 }}>EXTERNAL OPS MANAGER</div>
        </div>
        <div style={{ borderTop: `1px solid ${DIM}`, paddingTop: 28, flex: 1 }}>
          {NAV_ITEMS.map(item => {
            const isActive = active === item;
            return (
              <button key={item} onClick={() => setActive(item)}
                style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "11px 28px",
                  background: "none", border: "none", cursor: "pointer", textAlign: "left",
                  color: isActive ? TEXT : MUTED, fontSize: 10, fontFamily: "inherit", letterSpacing: "0.1em",
                  borderLeft: `2px solid ${isActive ? BLUE : "transparent"}`,
                  transition: "color 0.15s, border-color 0.15s" }}>
                <span style={{ color: isActive ? BLUE : DIM, fontSize: 10 }}>{">"}</span>
                {item}
              </button>
            );
          })}
        </div>
        <div style={{ padding: "28px 28px 0", borderTop: `1px solid ${DIM}` }}>
          <div style={{ fontSize: 9, color: MUTED, lineHeight: 1.8 }}>
            <div style={{ color: BLUE_LIGHT }}>angeliki@sys:~$</div>
            <div style={{ opacity: 0.6 }}>ready</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: "48px 52px", overflowY: "auto" }}>
        <div style={{ maxWidth: 680, display: "flex", flexDirection: "column", gap: 40 }}>

          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 9, color: BLUE, letterSpacing: "0.14em", opacity: 0.7 }}>./</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: TEXT, letterSpacing: "-0.02em" }}>
              {active === "ABOUT" && "About"}
              {active === "EXPERIENCE" && "Work Experience"}
              {active === "SYSTEMS" && "Systems Designed"}
              {active === "CONTACT" && "Get in Touch"}
            </span>
          </div>

          {/* ABOUT */}
          {active === "ABOUT" && (
            <>
              <div style={{ fontSize: 11, color: BLUE_LIGHT, letterSpacing: "0.04em" }}>
                // Systems thinker &amp; process architect.
              </div>
              <p style={{ margin: 0, fontSize: 12, color: "#cccccc", lineHeight: 1.85 }}>
                Bringing clarity, precision, and calm to operations at scale. I bridge the gap between internal strategy and external execution — specializing in driving operational efficiency, managing complex vendor ecosystems, and ensuring cross-functional initiatives deploy without friction.
              </p>
              <p style={{ margin: 0, fontSize: 12, color: "#cccccc", lineHeight: 1.85 }}>
                I treat operations like a codebase: identify bottlenecks, refactor processes, and ship scalable workflows. Nothing unnecessary, everything intentional.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px" }}>
                {["--process-optimization","--stakeholder-management","--cross-functional-coordination","--vendor-relations","--operational-efficiency","--data-driven-decisions","--budget-management","--team-leadership"].map(f => (
                  <span key={f} style={{ fontSize: 10, color: BLUE }}>{f}</span>
                ))}
              </div>
            </>
          )}

          {/* EXPERIENCE */}
          {active === "EXPERIENCE" && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {companies.map(c => <CompanyRow key={c.id} c={c} />)}
            </div>
          )}

          {/* SYSTEMS */}
          {active === "SYSTEMS" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {systems.map(s => (
                <div key={s.id} style={{ backgroundColor: CARD_BG, border: `1px solid ${DIM}`, padding: "18px 22px",
                  display: "flex", flexDirection: "column", gap: 12, borderRadius: 6 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 10, color: BLUE_LIGHT, letterSpacing: "0.1em" }}>[ {s.name.toUpperCase()} ]</span>
                    <span style={{ fontSize: 9, color: MUTED, letterSpacing: "0.06em" }}>{s.tag}</span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 20px" }}>
                    {s.items.map(item => (
                      <span key={item} style={{ fontSize: 10, color: "#aaaaaa" }}>
                        <span style={{ color: MUTED }}>- </span>{item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CONTACT */}
          {active === "CONTACT" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ margin: 0, fontSize: 12, color: "#cccccc", lineHeight: 1.85 }}>
                Open to new roles, collaborations, and conversations about operations.
              </p>
              <a href="https://www.linkedin.com/in/angeliki-bekyra/" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, backgroundColor: BLUE, color: BG,
                  padding: "10px 22px", textDecoration: "none", fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.14em", alignSelf: "flex-start" }}>
                LINKEDIN →
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
