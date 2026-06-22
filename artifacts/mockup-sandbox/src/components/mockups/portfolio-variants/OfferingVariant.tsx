import { useState } from 'react';
import './_group.css';

const BLUE = "#5b9bd5";
const BLUE_LIGHT = "#93c5fd";
const MUTED = "#666666";
const DIM = "#333333";
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
  { id: "spendbase",  name: "Spendbase",  role: "Customer & Product Operations", logoBg: "#0a1628", accent: BLUE },
  { id: "cinobo",    name: "Cinobo",     role: "Operational Excellence",         logoBg: "#f97316", accent: "#f97316" },
  { id: "dreamclass",name: "Dreamclass", role: "CS & Customer Support Director", logoBg: "#1a4a3a", accent: "#34a87e" },
  { id: "layer",     name: "Layer",      role: "CS & Operations Lead",           logoBg: "#0d0d0d", accent: "#9cff94" },
  { id: "epignosis", name: "Epignosis",  role: "Customer Success Operations",    logoBg: "#1a0f06", accent: "#f79421" },
  { id: "flexdesk",  name: "Flexdesk.gr",role: "Co-Founder",                     logoBg: "#ffffff", accent: "#a78bfa" },
];

const offerings = [
  {
    id: "ops-arch",
    cmd: "ops-architecture",
    title: "Operations Architecture",
    desc: "Design end-to-end ops systems from the ground up — processes, tooling, team structure, and workflows built to scale.",
    tags: ["process design", "systems thinking", "scalability"],
    accent: BLUE,
  },
  {
    id: "cx-systems",
    cmd: "customer-success-systems",
    title: "Customer Success Systems",
    desc: "Build CS infrastructure that actually works — onboarding flows, escalation logic, NPS programs, and knowledge bases.",
    tags: ["onboarding", "NPS", "knowledge ops", "escalation"],
    accent: "#34a87e",
  },
  {
    id: "workflow-eng",
    cmd: "workflow-engineering",
    title: "Workflow Engineering",
    desc: "Audit, redesign, and automate operational workflows across HubSpot, Notion, ClickUp, and Slack.",
    tags: ["HubSpot", "Notion", "ClickUp", "automation"],
    accent: "#9cff94",
  },
  {
    id: "cross-func",
    cmd: "cross-functional-coordination",
    title: "Cross-functional Coordination",
    desc: "Bridge product, support, and commercial teams — creating shared language, aligned goals, and frictionless handoffs.",
    tags: ["alignment", "stakeholders", "GTM", "handoffs"],
    accent: "#f79421",
  },
  {
    id: "vendor-ops",
    cmd: "vendor-and-external-ops",
    title: "Vendor & External Ops",
    desc: "Manage complex vendor ecosystems, contracts, SLAs, and external partnerships without the chaos.",
    tags: ["vendor management", "SLAs", "procurement", "partnerships"],
    accent: "#a78bfa",
  },
];

function Prompt({ path = "~", cmd }: { path?: string; cmd: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: MUTED, fontFamily: "inherit" }}>
      <span style={{ color: BLUE }}>angeliki@sys</span>
      <span style={{ color: MUTED }}>:</span>
      <span style={{ color: BLUE_LIGHT }}>{path}</span>
      <span style={{ color: MUTED }}>$</span>
      <span style={{ color: TEXT }}>{cmd}</span>
    </div>
  );
}

function Divider() {
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", userSelect: "none", fontSize: 11, color: DIM }} aria-hidden>
      {"─".repeat(120)}
    </div>
  );
}

function CompanyCard({ c }: { c: typeof companies[0] }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  return (
    <a
      href="#"
      style={{
        display: "flex", alignItems: "center", gap: 14,
        backgroundColor: hovered ? `${c.accent}11` : CARD_BG,
        border: `1px solid ${hovered ? c.accent : "#2a2a2a"}`,
        borderRadius: 8, padding: "13px 16px",
        textDecoration: "none", cursor: "pointer", position: "relative", overflow: "hidden",
        transition: "border-color 0.2s, background-color 0.2s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
        backgroundColor: c.accent, borderRadius: "8px 0 0 8px",
        opacity: hovered ? 1 : 0.45, transition: "opacity 0.2s",
      }} />
      <div style={{
        width: 40, height: 40, backgroundColor: c.logoBg, borderRadius: 6,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, overflow: "hidden", padding: 4, border: `1px solid #222`,
      }}>
        {imgErr ? (
          <span style={{ fontSize: 15, fontWeight: 700, color: c.accent, fontFamily: "inherit" }}>{c.name[0]}</span>
        ) : (
          <img src={logos[c.id]} alt={c.name} onError={() => setImgErr(true)}
            style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: TEXT, fontFamily: "inherit", letterSpacing: "-0.01em" }}>{c.name}</span>
        <span style={{ fontSize: 9, color: MUTED, fontFamily: "inherit" }}>{c.role}</span>
      </div>
    </a>
  );
}

function OfferingCard({ o }: { o: typeof offerings[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        display: "flex", flexDirection: "column", gap: 12,
        border: `1px solid ${hovered ? o.accent : "#2a2a2a"}`,
        backgroundColor: hovered ? `${o.accent}09` : CARD_BG,
        borderRadius: 8, padding: "18px 20px",
        transition: "border-color 0.2s, background-color 0.2s", cursor: "default",
        position: "relative", overflow: "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
        backgroundColor: o.accent, borderRadius: "8px 0 0 8px",
        opacity: hovered ? 1 : 0.4, transition: "opacity 0.2s",
      }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={{ fontSize: 9, color: o.accent, fontFamily: "inherit", letterSpacing: "0.1em", opacity: 0.8 }}>
          ./{o.cmd}
        </span>
        <span style={{ fontSize: 13, fontWeight: 700, color: TEXT, fontFamily: "inherit", letterSpacing: "-0.01em" }}>
          {o.title}
        </span>
      </div>
      <p style={{ margin: 0, fontSize: 10, color: "#aaaaaa", lineHeight: 1.7, fontFamily: "inherit" }}>
        {o.desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px 10px" }}>
        {o.tags.map(t => (
          <span key={t} style={{
            fontSize: 8, color: o.accent, fontFamily: "inherit",
            border: `1px solid ${o.accent}44`, padding: "2px 7px", borderRadius: 3,
            letterSpacing: "0.06em", opacity: 0.85,
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function OfferingVariant() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: BG, color: TEXT, fontFamily: "'JetBrains Mono', monospace", padding: "48px 56px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 44 }}>

        {/* Hero */}
        <section style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Prompt cmd="whoami" />
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 6 }}>
            <h1 style={{ fontSize: 52, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1, color: TEXT, fontFamily: "inherit" }}>
              Angeliki
            </h1>
            <h2 style={{ fontSize: 16, color: MUTED, fontFamily: "inherit", fontWeight: 400 }}>
              External Operations Manager
            </h2>
          </div>
        </section>

        <Divider />

        {/* About */}
        <section style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Prompt cmd="cat about.md" />
          <div style={{ fontSize: 11, color: "#cccccc", lineHeight: 1.85, paddingLeft: 16, borderLeft: `2px solid ${DIM}`, fontFamily: "inherit" }}>
            <p style={{ margin: "0 0 10px 0", color: BLUE_LIGHT, fontSize: 10 }}>
              {"// Systems thinker & process architect."}
            </p>
            <p style={{ margin: "0 0 10px 0" }}>
              Bringing clarity, precision, and calm to operations at scale. I bridge the gap between internal strategy and external execution — specializing in driving operational efficiency, managing complex vendor ecosystems, and ensuring cross-functional initiatives deploy without friction.
            </p>
            <p style={{ margin: 0 }}>
              I treat operations like a codebase: identify bottlenecks, refactor processes, and ship scalable workflows. Nothing unnecessary, everything intentional.
            </p>
          </div>
        </section>

        <Divider />

        {/* Offerings */}
        <section style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <Prompt path="~/offerings" cmd="ls -la" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {offerings.map(o => <OfferingCard key={o.id} o={o} />)}
          </div>
        </section>

        <Divider />

        {/* Work Experience */}
        <section style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <Prompt path="~/experience" cmd="git log --oneline" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {companies.map(c => <CompanyCard key={c.id} c={c} />)}
          </div>
        </section>

        <Divider />

        {/* Contact */}
        <section style={{ display: "flex", flexDirection: "column", gap: 14, paddingBottom: 48 }}>
          <Prompt cmd="./connect.sh" />
          <a
            href="https://www.linkedin.com/in/angeliki-bekyra/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: `1px solid ${DIM}`, backgroundColor: CARD_BG,
              padding: "24px 28px", textDecoration: "none",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              borderRadius: 8, transition: "border-color 0.2s, background-color 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = BLUE; (e.currentTarget as HTMLElement).style.backgroundColor = "#0f1a24"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = DIM; (e.currentTarget as HTMLElement).style.backgroundColor = CARD_BG; }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: TEXT, fontFamily: "inherit", letterSpacing: "-0.01em" }}>Let's speak.</span>
              <span style={{ fontSize: 10, color: MUTED, fontFamily: "inherit" }}>Open to new roles, collaborations, and conversations about operations.</span>
            </div>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
              color: BG, backgroundColor: BLUE, padding: "7px 16px",
              fontFamily: "inherit", borderRadius: 3, flexShrink: 0,
            }}>
              LINKEDIN →
            </div>
          </a>
        </section>

      </div>
    </div>
  );
}
