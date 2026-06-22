import './_group.css';

const BLUE = "#5b9bd5";
const BLUE_LIGHT = "#93c5fd";
const MUTED = "#888888";
const DIM = "#333333";
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
    url: "https://spendbase.co",
    domain: "spendbase.co",
    featured: true,
    bullets: [
      "Unified Customer Success + Product Engagement operations",
      "Built support function from scratch",
      "Designed onboarding + escalation infrastructure",
      "Revamped HubSpot, Slack, and ClickUp workflows",
      "Launched company-wide NPS program",
      "Built operational support flows for Spendbase Money",
    ],
  },
  {
    id: "cinobo",
    name: "CINOBO",
    role: "Operational Excellence Manager",
    period: "2025",
    url: "https://cinobo.com",
    domain: "cinobo.com",
    featured: false,
    bullets: [
      "Mapped company operations",
      "Designed scalable CRM structure",
      "Unified customer support workflows",
      "Improved operational visibility",
    ],
  },
  {
    id: "dreamclass",
    name: "DREAMCLASS",
    role: "CS & Customer Support Director",
    period: "2023 — 2024",
    url: "https://dreamclass.io",
    domain: "dreamclass.io",
    featured: false,
    bullets: [
      "Built AI-powered support workflows",
      "Redesigned knowledge infrastructure",
      "Reduced support ticket volume",
      "Connected insights with product direction",
    ],
  },
  {
    id: "layer",
    name: "LAYER",
    role: "CS & Operations Lead",
    period: "2022 — 2023",
    url: "https://layer.app",
    domain: "layer.app",
    featured: false,
    bullets: [
      "Designed GTM customer workflows",
      "Built marketplace support ops",
      "Improved onboarding processes",
    ],
  },
  {
    id: "epignosis",
    name: "EPIGNOSIS",
    role: "CS Operations Specialist",
    period: "2019 — 2022",
    url: "https://epignosis.com",
    domain: "epignosis.com",
    featured: false,
    bullets: [
      "Built repeatable CS processes",
      "Designed onboarding/offboarding systems",
      "Created reporting infrastructure",
      "Developed CS playbooks",
    ],
  },
];

const systems = [
  {
    id: "ai",
    name: "AI SUPPORT SYSTEM",
    tag: "ai · automation",
    items: ["knowledge retrieval", "escalation routing", "onboarding logic", "support automation", "response systems"],
  },
  {
    id: "recruiting",
    name: "RECRUITING OS",
    tag: "notion · pipelines",
    items: ["candidate pipelines", "scoring systems", "automated handoffs", "hiring dashboards", "interview ops"],
  },
  {
    id: "customer-ops",
    name: "CUSTOMER OPS INFRASTRUCTURE",
    tag: "cx · reporting",
    items: ["lifecycle workflows", "reporting dashboards", "feedback loops", "team handoff systems", "process docs"],
  },
  {
    id: "flexdesk",
    name: "FLEXDESK.GR",
    tag: "co-founder · end-to-end",
    url: "https://flexdesk.gr",
    featured: true,
    items: ["product concept & vision", "brand & UX design", "operational model", "go-to-market strategy", "platform architecture"],
  },
];

function Prompt({ path, cmd }: { path: string; cmd: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: MUTED, fontFamily: "inherit" }}>
      <span style={{ color: BLUE }}>angeliki@sys</span>
      <span>:</span>
      <span style={{ color: BLUE_LIGHT }}>{path}</span>
      <span>$</span>
      <span style={{ color: TEXT }}>{cmd}</span>
    </div>
  );
}

function FeaturedBlock({ c }: { c: typeof companies[0] }) {
  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        border: `1px solid ${BLUE}`,
        backgroundColor: CARD_FEATURED,
        padding: 20,
        textDecoration: "none",
        gridColumn: "span 2",
        transition: "background-color 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#101e2e"}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = CARD_FEATURED}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "inherit", fontSize: 11, letterSpacing: "0.14em", color: BLUE_LIGHT }}>
          [ {c.name} ]
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: "inherit", fontSize: 10, color: BLUE, border: `1px solid ${BLUE}`, padding: "2px 8px" }}>HEAD → main</span>
          <span style={{ fontFamily: "inherit", fontSize: 10, color: MUTED }}>{c.period}</span>
        </div>
      </div>
      <div style={{ fontFamily: "inherit", fontSize: 15, fontWeight: 700, color: TEXT }}>{c.role}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 24px", borderTop: `1px solid ${DIM}`, paddingTop: 12 }}>
        {c.bullets.map((b, i) => (
          <div key={i} style={{ display: "flex", gap: 6, fontFamily: "inherit", fontSize: 10, color: "#cccccc", lineHeight: 1.6 }}>
            <span style={{ color: BLUE_LIGHT, flexShrink: 0 }}>*</span>
            <span>{b}</span>
          </div>
        ))}
      </div>
    </a>
  );
}

function SmallBlock({ c }: { c: typeof companies[0] }) {
  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        border: `1px solid ${DIM}`,
        backgroundColor: CARD_BG,
        padding: 14,
        textDecoration: "none",
        transition: "border-color 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = BLUE}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = DIM}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "inherit", fontSize: 9, letterSpacing: "0.12em", color: BLUE_LIGHT }}>[ {c.name} ]</span>
        <span style={{ fontFamily: "inherit", fontSize: 9, color: MUTED }}>{c.period}</span>
      </div>
      <div style={{ fontFamily: "inherit", fontSize: 11, fontWeight: 600, color: TEXT, lineHeight: 1.3 }}>{c.role}</div>
      <div style={{ borderTop: `1px solid ${DIM}`, paddingTop: 6, display: "flex", flexDirection: "column", gap: 3 }}>
        {c.bullets.slice(0, 3).map((b, i) => (
          <div key={i} style={{ display: "flex", gap: 5, fontFamily: "inherit", fontSize: 9, color: "#aaaaaa", lineHeight: 1.5 }}>
            <span style={{ color: MUTED, flexShrink: 0 }}>-</span>
            <span>{b}</span>
          </div>
        ))}
      </div>
    </a>
  );
}

function SystemBentoBlock({ s, wide }: { s: typeof systems[0]; wide?: boolean }) {
  const isFounder = !!(s as any).featured;
  const url = (s as any).url;
  const borderColor = isFounder ? BLUE : DIM;
  const bg = isFounder ? "#0f1a24" : CARD_BG;

  const inner = (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "inherit", fontSize: 10, letterSpacing: "0.12em", color: BLUE_LIGHT }}>
          [ {s.name} ]
        </span>
        <span style={{ fontFamily: "inherit", fontSize: 9, color: isFounder ? BLUE : DIM, letterSpacing: "0.08em",
          ...(isFounder ? { border: `1px solid ${BLUE}`, padding: "1px 6px" } : {}) }}>
          {s.tag}
        </span>
      </div>
      <div style={{ borderTop: `1px solid ${DIM}`, paddingTop: 8, display: wide ? "grid" : "flex", gridTemplateColumns: wide ? "1fr 1fr" : undefined, flexDirection: wide ? undefined : "column", gap: wide ? "4px 24px" : 3 }}>
        {s.items.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 5, fontFamily: "inherit", fontSize: 10, color: "#aaaaaa", lineHeight: 1.5 }}>
            <span style={{ color: isFounder ? BLUE_LIGHT : MUTED, flexShrink: 0 }}>-</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </>
  );

  const sharedStyle = {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: 10,
    border: `1px solid ${borderColor}`,
    backgroundColor: bg,
    padding: 16,
    gridColumn: wide ? "span 2" : ("span 1" as any),
    transition: "border-color 0.2s, background-color 0.2s",
    textDecoration: "none" as const,
  };

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" style={sharedStyle}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = BLUE; (e.currentTarget as HTMLElement).style.backgroundColor = "#101e2e"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = borderColor; (e.currentTarget as HTMLElement).style.backgroundColor = bg; }}>
      {inner}
    </a>
  ) : (
    <div style={sharedStyle}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = BLUE}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = DIM}>
      {inner}
    </div>
  );
}

export function BlockBento() {
  const [featured, ...rest] = companies;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: BG, color: TEXT, fontFamily: "'JetBrains Mono', monospace", padding: "40px 48px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>

        {/* Hero */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Prompt path="~" cmd="whoami" />
          <div style={{ marginTop: 8 }}>
            <div style={{ fontSize: 48, fontWeight: 700, color: TEXT, letterSpacing: "-0.02em", lineHeight: 1 }}>Angeliki</div>
            <div style={{ fontSize: 16, color: MUTED, marginTop: 6 }}>External Operations Manager</div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ color: DIM, overflow: "hidden", whiteSpace: "nowrap", fontSize: 13 }}>{'─'.repeat(120)}</div>

        {/* Experience Bento */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Prompt path="~/experience" cmd="ls -la" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 4 }}>
            <FeaturedBlock c={featured} />
            {rest.map(c => <SmallBlock key={c.id} c={c} />)}
          </div>
        </div>

        {/* Divider */}
        <div style={{ color: DIM, overflow: "hidden", whiteSpace: "nowrap", fontSize: 13 }}>{'─'.repeat(120)}</div>

        {/* Systems Bento */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingBottom: 40 }}>
          <Prompt path="~/systems" cmd="ls -la ./designed/" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 4 }}>
            <SystemBentoBlock s={systems[0]} wide />
            <SystemBentoBlock s={systems[1]} />
            <SystemBentoBlock s={systems[2]} />
            <SystemBentoBlock s={systems[3]} wide />
          </div>
        </div>

      </div>
    </div>
  );
}
