import { useState } from "react";

const BLUE = "#5b9bd5";
const BLUE_LIGHT = "#93c5fd";
const MUTED = "#888888";
const DIM = "#2a2a2a";
const TEXT = "#e8e6df";
const BG = "#0d0d0d";
const CARD_BG = "#111111";
const CARD_FEATURED = "#0f1a24";

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
  {
    id: "spendbase",
    name: "Spendbase",
    role: "Customer & Product Operations",
    period: "2025 — PRESENT",
    url: "https://spendbase.co",
    featured: true,
    logoBg: "#0a1628",
    accent: BLUE,
  },
  {
    id: "cinobo",
    name: "Cinobo",
    role: "Operational Excellence",
    period: "2025",
    url: "https://cinobo.com",
    featured: false,
    logoBg: "#f97316",
    accent: "#f97316",
  },
  {
    id: "dreamclass",
    name: "Dreamclass",
    role: "CS & Customer Support Director",
    period: "2023 — 2024",
    url: "https://dreamclass.io",
    featured: false,
    logoBg: "#1a4a3a",
    accent: "#34a87e",
  },
  {
    id: "layer",
    name: "Layer",
    role: "CS & Operations Lead",
    period: "2022 — 2023",
    url: "https://www.layerlicensing.com/",
    featured: false,
    logoBg: "#0d0d0d",
    accent: "#9cff94",
  },
  {
    id: "epignosis",
    name: "Epignosis",
    role: "Customer Success Operations",
    period: "2019 — 2022",
    url: "https://www.epignosishq.com/",
    featured: false,
    logoBg: "#1a0f06",
    accent: "#f79421",
  },
  {
    id: "flexdesk",
    name: "Flexdesk.gr",
    role: "Co-Founder",
    period: "",
    url: "https://flexdesk.gr",
    featured: false,
    logoBg: "#ffffff",
    accent: "#a78bfa",
  },
];

const systems = [
  {
    id: "ai",
    name: "AI SUPPORT SYSTEM",
    tag: "ai · automation",
    wide: true,
    featured: false,
    url: null,
    items: [
      "knowledge retrieval",
      "escalation routing",
      "onboarding logic",
      "support automation",
      "response systems",
    ],
  },
  {
    id: "recruiting",
    name: "RECRUITING OS",
    tag: "notion · pipelines",
    wide: false,
    featured: false,
    url: null,
    items: [
      "candidate pipelines",
      "scoring systems",
      "automated handoffs",
      "hiring dashboards",
      "interview ops",
    ],
  },
  {
    id: "customer-ops",
    name: "CUSTOMER OPS INFRASTRUCTURE",
    tag: "cx · reporting",
    wide: false,
    featured: false,
    url: null,
    items: [
      "lifecycle workflows",
      "reporting dashboards",
      "feedback loops",
      "team handoff systems",
      "process docs",
    ],
  },
];

function SectionButton({ label, sub }: { label: string; sub?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div
        style={{
          backgroundColor: BLUE,
          color: BG,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.16em",
          padding: "7px 18px",
          display: "inline-block",
          fontFamily: "inherit",
        }}
      >
        {label}
      </div>
      {sub && (
        <span
          style={{
            fontSize: 11,
            color: MUTED,
            letterSpacing: "0.06em",
            fontFamily: "inherit",
          }}
        >
          {sub}
        </span>
      )}
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        height: 1,
        backgroundColor: DIM,
        width: "100%",
      }}
    />
  );
}

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
        border: `1px solid #222222`,
      }}>
        {imgErr ? (
          <span style={{ fontSize: 16, fontWeight: 700, color: c.accent, fontFamily: "inherit" }}>
            {c.name[0]}
          </span>
        ) : (
          <img
            src={logos[c.id]}
            alt={c.name}
            onError={() => setImgErr(true)}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: TEXT, fontFamily: "inherit", letterSpacing: "-0.01em" }}>
            {c.name}
          </span>
        </div>
        <span style={{ fontSize: 10, color: MUTED, fontFamily: "inherit", lineHeight: 1.4 }}>
          {c.role}
        </span>
      </div>
    </a>
  );
}

function SystemCard({ s }: { s: typeof systems[0] }) {
  const [hovered, setHovered] = useState(false);
  const borderColor = s.featured ? BLUE : hovered ? BLUE : DIM;
  const bg = s.featured ? (hovered ? "#101e2e" : CARD_FEATURED) : CARD_BG;

  const inner = (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 10, letterSpacing: "0.12em", color: BLUE_LIGHT, fontFamily: "inherit" }}>
          [ {s.name} ]
        </span>
        <span
          style={{
            fontSize: 9,
            color: s.featured ? BG : MUTED,
            backgroundColor: s.featured ? BLUE : "transparent",
            letterSpacing: "0.08em",
            padding: s.featured ? "2px 7px" : undefined,
            fontWeight: s.featured ? 700 : undefined,
            fontFamily: "inherit",
          }}
        >
          {s.tag}
        </span>
      </div>
      <div
        style={{
          borderTop: `1px solid ${DIM}`,
          paddingTop: 10,
          display: s.wide ? "grid" : "flex",
          gridTemplateColumns: s.wide ? "1fr 1fr" : undefined,
          flexDirection: s.wide ? undefined : "column",
          gap: s.wide ? "5px 28px" : 4,
        }}
      >
        {s.items.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 5, fontSize: 10, color: "#aaaaaa", lineHeight: 1.6, fontFamily: "inherit" }}>
            <span style={{ color: s.featured ? BLUE_LIGHT : MUTED, flexShrink: 0 }}>-</span>
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
    padding: "16px 18px",
    gridColumn: s.wide ? ("span 2" as any) : "span 1",
    transition: "border-color 0.2s, background-color 0.2s",
    textDecoration: "none" as const,
    cursor: "pointer" as const,
  };

  return s.url ? (
    <a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      style={sharedStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inner}
    </a>
  ) : (
    <div
      style={sharedStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inner}
    </div>
  );
}

function LetsSpeak() {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingBottom: 56 }}>
      <a
        href="https://www.linkedin.com/in/angeliki-bekyra/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          border: `1px solid ${hovered ? BLUE : DIM}`,
          backgroundColor: hovered ? CARD_FEATURED : CARD_BG,
          padding: "28px 32px",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "border-color 0.2s, background-color 0.2s",
          cursor: "pointer",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: TEXT, fontFamily: "inherit", letterSpacing: "-0.01em" }}>Let's speak</div>
          <div style={{ fontSize: 11, color: MUTED, fontFamily: "inherit", letterSpacing: "0.04em" }}>about ideas,products,systems & operations.</div>
        </div>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: BG,
            backgroundColor: hovered ? BLUE_LIGHT : BLUE,
            padding: "7px 18px",
            flexShrink: 0,
            transition: "background-color 0.2s",
            fontFamily: "inherit",
          }}
        >
          LINKEDIN →
        </div>
      </a>
    </div>
  );
}

export default function Portfolio() {
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
            <h1
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: TEXT,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                fontFamily: "inherit",
              }}
            >HI, I'm Angeliki</h1>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.16em",
                color: BG,
                backgroundColor: BLUE,
                padding: "5px 16px",
                alignSelf: "center",
                fontFamily: "inherit",
              }}
            >
              EXTERNAL OPS MANAGER
            </div>
          </div>
          <div
            style={{
              fontSize: 12,
              color: MUTED,
              letterSpacing: "0.04em",
              fontFamily: "inherit",
            }}
          >
            Systems thinker · Process architect · Operations at scale
          </div>
        </div>

        <Divider />

        {/* About */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <SectionButton label="ABOUT" />
          <div
            style={{
              border: `1px solid ${DIM}`,
              backgroundColor: CARD_BG,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={{ fontSize: 11, color: BLUE_LIGHT, fontFamily: "inherit", letterSpacing: "0.04em" }}>
              // Systems thinker &amp; process architect.
            </div>
            <p style={{ margin: 0, fontSize: 12, color: "#cccccc", lineHeight: 1.75, fontFamily: "inherit" }}>
              I've always liked building things.
            </p>
            <p style={{ margin: 0, fontSize: 12, color: "#cccccc", lineHeight: 1.75, fontFamily: "inherit" }}>Not only products, but also the things behind them. The processes, workflows, customer journeys, and small systems that help a team do its work better.</p>
            <p style={{ margin: 0, fontSize: 12, color: "#cccccc", lineHeight: 1.75, fontFamily: "inherit" }}>
              A lot of my work has started with something messy: unclear ownership, too many manual steps, scattered information, or a customer experience that could be smoother. I enjoy getting into that mess, understanding what's really happening, and turning it into something simpler and more useful.
            </p>
            <p style={{ margin: 0, fontSize: 12, color: "#cccccc", lineHeight: 1.75, fontFamily: "inherit" }}>
              My background is in customer success, operations, and business operations, where I've helped teams work better together and create better experiences for their customers.
            </p>
            <p style={{ margin: 0, fontSize: 12, color: "#cccccc", lineHeight: 1.75, fontFamily: "inherit" }}>
              Right now, I'm especially interested in AI workflows and practical systems that make everyday work easier to manage and easier to scale.
            </p>
            <div style={{ borderTop: `1px solid ${DIM}`, paddingTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 24px" }}>
                {[
                  "--systems-design",
                  "--operational-infrastructure",
                  "--workflow-architecture",
                  "--customer-operations",
                  "--ai-workflows",
                  "--process-optimization",
                  "--cross-functional-operations",
                  "--knowledge-systems",
                ].map((flag) => (
                  <span key={flag} style={{ fontSize: 10, color: BLUE, fontFamily: "inherit", letterSpacing: "0.04em" }}>
                    {flag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* Work Experience */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <SectionButton label="WORK EXPERIENCE" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            {companies.map((c) => (
              <CompanyCard key={c.id} c={c} />
            ))}
          </div>
        </div>

        <Divider />

        {/* Systems Designed */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <SectionButton label="SYSTEMS DESIGNED" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
            }}
          >
            {systems.map((s) => (
              <SystemCard key={s.id} s={s} />
            ))}
          </div>
        </div>

        <Divider />

        {/* Let's Speak */}
        <LetsSpeak />

      </div>
    </div>
  );
}
