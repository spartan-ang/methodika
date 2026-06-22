import { useState, useEffect } from "react";

/* ── Design tokens ─────────────────────────────────────── */
const BG        = "#0d0d0d";
const BG_CARD   = "#131313";
const BG_HOVER  = "#191919";
const BORDER    = "#222222";
const BORDER_HI = "#2e2e2e";
const TEXT      = "#c8c8c8";
const TEXT_DIM  = "#606060";
const TEXT_MUTE = "#3a3a3a";
const ACCENT    = "#4ade80";
const ACCENT_DIM= "#1f4a2f";
const WHITE     = "#e8e8e8";
const MONO      = "'Courier New', Courier, monospace";

/* ── Shared hover card helper ───────────────────────────── */
function useHover() {
  const [hovered, setHovered] = useState(false);
  return { hovered, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) };
}

/* ── Section tag ────────────────────────────────────────── */
function SectionTag({ label }: { label: string }) {
  return (
    <div style={{
      display: "inline-block",
      border: `1px solid ${ACCENT}`,
      color: ACCENT,
      fontSize: 11,
      letterSpacing: "0.12em",
      padding: "4px 12px",
      textTransform: "uppercase" as const,
      marginBottom: 48,
      fontFamily: MONO,
    }}>{label}</div>
  );
}

/* ── Navigation ─────────────────────────────────────────── */
function Nav() {
  const links = ["Philosophy", "Systems", "Method", "Proof", "Notes", "About", "Contact"];
  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: BG,
      borderBottom: `1px solid ${BORDER}`,
      padding: "0 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 52,
      fontFamily: MONO,
    }}>
      <span style={{ fontSize: 13, letterSpacing: "0.18em", color: WHITE }}>METHODIKA</span>
      <ul style={{ display: "flex", gap: 32, listStyle: "none", fontSize: 11, letterSpacing: "0.12em", color: TEXT_DIM, margin: 0, padding: 0 }}>
        {links.map(l => (
          <li key={l}>
            <NavLink href={`#${l.toLowerCase()}`} label={l} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const { hovered, ...handlers } = useHover();
  return (
    <a href={href} {...handlers} style={{ color: hovered ? ACCENT : TEXT_DIM, textDecoration: "none", fontFamily: MONO, fontSize: 11, letterSpacing: "0.12em" }}>
      {label}
    </a>
  );
}

/* ── Hero ───────────────────────────────────────────────── */
function Hero() {
  const { hovered, ...handlers } = useHover();
  return (
    <div id="hero" style={{
      minHeight: "calc(100vh - 52px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "96px 48px",
      borderBottom: `1px solid ${BORDER}`,
      fontFamily: MONO,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.18em", color: TEXT_DIM, textTransform: "uppercase" as const, marginBottom: 24 }}>
          // Operational design for growing companies.
        </p>
        <h1 style={{ fontSize: "clamp(42px, 7vw, 88px)", letterSpacing: "0.14em", color: WHITE, lineHeight: 1, fontWeight: "normal", marginBottom: 32, fontFamily: MONO }}>
          METHODIKA
        </h1>
        <p style={{ fontSize: 14, color: TEXT, maxWidth: 560, lineHeight: 1.85, marginBottom: 16 }}>
          I help startups eliminate operational chaos, design scalable workflows, and implement practical AI where it actually helps.
        </p>
        <p style={{ fontSize: 12, color: TEXT_DIM, maxWidth: 560, marginBottom: 48 }}>
          Built through experience across Customer Success, Operations, Support, Recruiting, and Product teams.
        </p>
        <a
          href="#contact"
          {...handlers}
          style={{
            display: "inline-block",
            border: `1px solid ${ACCENT}`,
            color: hovered ? BG : ACCENT,
            background: hovered ? ACCENT : "transparent",
            fontFamily: MONO,
            fontSize: 12,
            letterSpacing: "0.12em",
            padding: "12px 28px",
            textTransform: "uppercase" as const,
            textDecoration: "none",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          [ Book a Conversation ]
        </a>
        <span style={{ display: "block", marginTop: 64, fontSize: 18, color: TEXT_MUTE, animation: "bounce 2s infinite" }}>↓</span>
      </div>
      <style>{`@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }`}</style>
    </div>
  );
}

/* ── Philosophy ─────────────────────────────────────────── */
function Philosophy() {
  return (
    <section id="philosophy" style={{ padding: "96px 48px", borderBottom: `1px solid ${BORDER}`, maxWidth: 1100, margin: "0 auto", fontFamily: MONO }}>
      <SectionTag label="Philosophy" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
        <div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", color: WHITE, letterSpacing: "0.06em", fontWeight: "normal", marginBottom: 32, lineHeight: 1.3 }}>
            Why METHODIKA?
          </h2>
          <p style={{ color: TEXT, marginBottom: 18 }}>Growing companies rarely struggle because people aren't working hard enough.</p>
          <p style={{ color: TEXT, marginBottom: 18 }}>They struggle because:</p>
          <ul style={{ listStyle: "none", margin: "0 0 24px 0", padding: 0 }}>
            {["Information is scattered", "Ownership is unclear", "Processes live in people's heads", "Repetitive work consumes valuable time"].map(item => (
              <li key={item} style={{ padding: "6px 0 6px 16px", color: TEXT, position: "relative" as const }}>
                <span style={{ position: "absolute" as const, left: 0, color: ACCENT }}>•</span>
                {item}
              </li>
            ))}
          </ul>
          <div style={{ borderLeft: `2px solid ${ACCENT}`, paddingLeft: 20, margin: "32px 0" }}>
            <span style={{ fontSize: 20, color: WHITE, letterSpacing: "0.1em", display: "block", marginBottom: 6 }}>μεθοδικά</span>
            <span style={{ fontSize: 12, color: TEXT_DIM, letterSpacing: "0.08em" }}>METHODIKA — from the Greek.</span>
          </div>
          <p style={{ fontSize: 13, color: TEXT_DIM, marginBottom: 8 }}>Working methodically.</p>
          <p style={{ fontSize: 13, color: TEXT_DIM, marginBottom: 8 }}>Building systems intentionally.</p>
          <p style={{ fontSize: 13, color: TEXT_DIM }}>Creating clarity where complexity starts to appear.</p>
        </div>
        <div>
          <div style={{ marginTop: 56 }}>
            {["The goal is not more tools.", "The goal is not more meetings.", "The goal is not more automation."].map(line => (
              <p key={line} style={{ color: TEXT_MUTE, fontSize: 13, marginBottom: 8, textDecoration: "line-through" }}>{line}</p>
            ))}
            <p style={{ marginTop: 24, fontSize: 15, color: WHITE, letterSpacing: "0.04em" }}>The goal is better ways of working.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Fix card ───────────────────────────────────────────── */
function FixCard({ num, title, body, solution }: { num: string; title: string; body: string[]; solution: string }) {
  const { hovered, ...handlers } = useHover();
  return (
    <div {...handlers} style={{ background: hovered ? BG_HOVER : BG_CARD, padding: "48px 40px", transition: "background 0.2s", fontFamily: MONO }}>
      <p style={{ fontSize: 11, color: TEXT_MUTE, letterSpacing: "0.14em", marginBottom: 20 }}>{num}</p>
      <h3 style={{ fontSize: 17, color: WHITE, letterSpacing: "0.06em", fontWeight: "normal", marginBottom: 20, lineHeight: 1.3 }}>{title}</h3>
      <div style={{ marginBottom: 20 }}>
        {body.map((line, i) => <p key={i} style={{ color: TEXT_DIM, fontSize: 13, marginBottom: 10, lineHeight: 1.8 }}>{line}</p>)}
      </div>
      <div style={{ marginTop: 20, paddingTop: 20, borderTop: `1px solid ${BORDER}`, fontSize: 13, color: TEXT }}>{solution}</div>
    </div>
  );
}

function WhatIFix() {
  const cards = [
    {
      num: "01", title: "Hiring is chaotic",
      body: ["Candidates disappear.", "Feedback gets lost.", "Hiring decisions become subjective.", "Nobody knows what happens next."],
      solution: "I design recruiting systems that create visibility, consistency, and accountability.",
    },
    {
      num: "02", title: "Customer operations are fragmented",
      body: ["Support, onboarding, customer success, and product often operate in separate worlds.", "Customers don't experience departments.", "They experience one company."],
      solution: "I create operational infrastructure that connects customer journeys.",
    },
    {
      num: "03", title: "Teams are drowning in manual work",
      body: ["Information gets copied between systems.", "The same questions get answered repeatedly.", "People spend time maintaining processes instead of improving them."],
      solution: "I identify repetitive work and design practical AI-powered workflows that reduce operational load.",
    },
    {
      num: "04", title: "Knowledge is trapped",
      body: ["Processes exist.", "Documentation doesn't.", "Teams depend on specific people to get work done."],
      solution: "I build knowledge systems that make information accessible, searchable, and scalable.",
    },
  ];
  return (
    <section id="fix" style={{ padding: "96px 48px", borderBottom: `1px solid ${BORDER}`, maxWidth: 1100, margin: "0 auto", fontFamily: MONO }}>
      <SectionTag label="What I Fix" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: BORDER, border: `1px solid ${BORDER}` }}>
        {cards.map(c => <FixCard key={c.num} {...c} />)}
      </div>
    </section>
  );
}

/* ── Systems ────────────────────────────────────────────── */
function SysCard({ tag, title, context, includes, tools }: { tag: string; title: string; context?: string; includes: string[]; tools?: string[] }) {
  const { hovered, ...handlers } = useHover();
  return (
    <div {...handlers} style={{ background: hovered ? BG_HOVER : BG_CARD, padding: "40px 32px", transition: "background 0.2s", fontFamily: MONO }}>
      <p style={{ fontSize: 10, letterSpacing: "0.14em", color: ACCENT, textTransform: "uppercase" as const, marginBottom: 16 }}>{tag}</p>
      <h3 style={{ fontSize: 15, color: WHITE, letterSpacing: "0.05em", fontWeight: "normal", marginBottom: 8 }}>{title}</h3>
      {context && <p style={{ fontSize: 12, color: TEXT_DIM, marginBottom: 20 }}>{context}</p>}
      <p style={{ fontSize: 10, letterSpacing: "0.1em", color: TEXT_MUTE, textTransform: "uppercase" as const, marginBottom: 10 }}>Includes</p>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
        {includes.map(item => (
          <li key={item} style={{ fontSize: 12, color: TEXT_DIM, padding: "3px 0 3px 14px", position: "relative" as const }}>
            <span style={{ position: "absolute" as const, left: 0, color: TEXT_MUTE, fontSize: 10 }}>→</span>
            {item}
          </li>
        ))}
      </ul>
      {tools && (
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${BORDER}` }}>
          <p style={{ fontSize: 10, color: TEXT_MUTE, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 8 }}>Tools</p>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
            {tools.map(t => (
              <span key={t} style={{ fontSize: 10, letterSpacing: "0.08em", border: `1px solid ${BORDER_HI}`, color: TEXT_DIM, padding: "2px 8px" }}>{t}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Systems() {
  return (
    <section id="systems" style={{ padding: "96px 48px", borderBottom: `1px solid ${BORDER}`, maxWidth: 1100, margin: "0 auto", fontFamily: MONO }}>
      <SectionTag label="Systems" />
      <p style={{ fontSize: 11, letterSpacing: "0.18em", color: TEXT_DIM, textTransform: "uppercase" as const, marginBottom: 4 }}>Systems in Production</p>
      <h2 style={{ fontSize: "clamp(24px, 3.5vw, 42px)", color: WHITE, letterSpacing: "0.1em", fontWeight: "normal", marginBottom: 48, lineHeight: 1.2 }}>
        A selection of operational systems designed across startups and growing companies.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: BORDER, border: `1px solid ${BORDER}` }}>
        <SysCard
          tag="Recruiting OS" title="Recruiting OS"
          context="Built for multiple startups."
          includes={["Candidate pipelines", "Interview scorecards", "Hiring dashboards", "Evaluation frameworks", "Decision workflows", "Recruiting documentation"]}
          tools={["Notion", "Forms", "Automations"]}
        />
        <SysCard
          tag="Customer Ops" title="Customer Operations Infrastructure"
          includes={["Customer lifecycle design", "Onboarding workflows", "Escalation systems", "Success processes", "Support operations", "Internal playbooks"]}
        />
        <SysCard
          tag="Knowledge Mgmt" title="Knowledge Management System"
          includes={["Team documentation", "SOP libraries", "Internal wikis", "Employee onboarding hubs", "Process repositories"]}
        />
        <SysCard
          tag="AI Support" title="AI Support System"
          includes={["Knowledge retrieval", "AI-assisted support", "Escalation routing", "Workflow automation", "Internal enablement systems"]}
        />
        <SysCard
          tag="Visibility" title="Visibility & Reporting Systems"
          includes={["KPI dashboards", "Recruiting analytics", "Customer reporting", "Team performance visibility", "Operational reporting frameworks"]}
        />
      </div>
    </section>
  );
}

/* ── Method ─────────────────────────────────────────────── */
function MethodStep({ num, title, lines }: { num: string; title: string; lines: string[] }) {
  const { hovered, ...handlers } = useHover();
  return (
    <div {...handlers} style={{ background: hovered ? BG_HOVER : BG_CARD, padding: "40px 28px", transition: "background 0.2s", fontFamily: MONO }}>
      <p style={{ fontSize: 11, color: ACCENT, letterSpacing: "0.14em", marginBottom: 20 }}>{num}</p>
      <h3 style={{ fontSize: 14, color: WHITE, letterSpacing: "0.05em", fontWeight: "normal", marginBottom: 16, lineHeight: 1.4 }}>{title}</h3>
      {lines.map((l, i) => <p key={i} style={{ fontSize: 12, color: TEXT_DIM, marginBottom: 6, lineHeight: 1.8 }}>{l}</p>)}
    </div>
  );
}

function Method() {
  const steps = [
    { num: "01", title: "Understand the System", lines: ["Before changing anything, understand how work actually happens.", "Observe.", "Listen.", "Map the reality.", "Not the process diagram.", "The real process."] },
    { num: "02", title: "Find the Bottlenecks", lines: ["Identify friction.", "Duplication.", "Unclear ownership.", "Manual work.", "Dependencies.", "The goal is clarity."] },
    { num: "03", title: "Design the Workflow", lines: ["Create systems people will actually use.", "Simple systems scale.", "Complex systems get ignored."] },
    { num: "04", title: "Document the Process", lines: ["If it isn't documented, it doesn't scale.", "Documentation is not administration.", "Documentation is infrastructure."] },
    { num: "05", title: "Automate Intentionally", lines: ["Automation is the last step.", "Not the first.", "A broken workflow automated is still a broken workflow.", "First understand.", "Then simplify.", "Then automate."] },
  ];
  return (
    <section id="method" style={{ padding: "96px 48px", borderBottom: `1px solid ${BORDER}`, maxWidth: 1100, margin: "0 auto", fontFamily: MONO }}>
      <SectionTag label="Method" />
      <h2 style={{ fontSize: "clamp(24px, 3.5vw, 42px)", color: WHITE, letterSpacing: "0.1em", fontWeight: "normal", marginBottom: 48, lineHeight: 1.2 }}>
        The Methodika Way
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 1, background: BORDER, border: `1px solid ${BORDER}` }}>
        {steps.map(s => <MethodStep key={s.num} {...s} />)}
      </div>
    </section>
  );
}

/* ── Proof ──────────────────────────────────────────────── */
function ProofCard({ label, title, desc, artifacts }: { label: string; title: string; desc: string; artifacts: string[] }) {
  const { hovered, ...handlers } = useHover();
  const btnHover = useHover();
  return (
    <div {...handlers} style={{ background: hovered ? BG_HOVER : BG_CARD, padding: "40px 32px", display: "flex", flexDirection: "column", transition: "background 0.2s", fontFamily: MONO }}>
      <p style={{ fontSize: 10, letterSpacing: "0.14em", color: TEXT_MUTE, textTransform: "uppercase" as const, marginBottom: 12 }}>{label}</p>
      <h3 style={{ fontSize: 15, color: WHITE, letterSpacing: "0.05em", fontWeight: "normal", marginBottom: 12, lineHeight: 1.4 }}>{title}</h3>
      <p style={{ fontSize: 12, color: TEXT_DIM, marginBottom: 20, lineHeight: 1.8, flex: 1 }}>{desc}</p>
      <p style={{ fontSize: 10, letterSpacing: "0.1em", color: TEXT_MUTE, textTransform: "uppercase" as const, marginBottom: 8 }}>Artifacts</p>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        {artifacts.map(a => (
          <li key={a} style={{ fontSize: 11, color: TEXT_DIM, padding: "3px 0 3px 14px", position: "relative" as const }}>
            <span style={{ position: "absolute" as const, left: 0, color: ACCENT }}>•</span>
            {a}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        {...btnHover}
        style={{
          display: "inline-block",
          border: `1px solid ${btnHover.hovered ? ACCENT : BORDER_HI}`,
          color: btnHover.hovered ? ACCENT : TEXT_DIM,
          fontFamily: MONO,
          fontSize: 10,
          letterSpacing: "0.12em",
          padding: "8px 16px",
          textTransform: "uppercase" as const,
          textDecoration: "none",
          transition: "border-color 0.2s, color 0.2s",
          alignSelf: "flex-start",
          marginTop: "auto",
        }}
      >
        [ View System ]
      </a>
    </div>
  );
}

function Proof() {
  const cards = [
    { label: "System 01", title: "Recruiting Operating Systems", desc: "Designed recruiting infrastructures that improve visibility, standardize evaluation, and reduce operational friction throughout the hiring process.", artifacts: ["Candidate pipeline systems", "Interview scorecards", "Hiring dashboards", "Evaluation frameworks", "Recruiting documentation"] },
    { label: "System 02", title: "Knowledge Management Systems", desc: "Internal systems that transform scattered information into searchable operational knowledge.", artifacts: ["Team wikis", "SOP libraries", "Employee onboarding hubs", "Internal process documentation", "Knowledge repositories"] },
    { label: "System 03", title: "Customer Operations Infrastructure", desc: "Systems designed to support onboarding, support, customer success, and lifecycle management.", artifacts: ["Customer onboarding workflows", "Escalation systems", "Lifecycle frameworks", "Support operations documentation"] },
    { label: "System 04", title: "Dashboards & Visibility Systems", desc: "Operational visibility systems designed to help teams make better decisions.", artifacts: ["KPI dashboards", "Recruiting analytics", "Customer metrics", "Operational reporting"] },
    { label: "System 05", title: "AI & Workflow Automation", desc: "Practical implementations of AI and automation inside existing workflows.", artifacts: ["AI-assisted support systems", "Knowledge retrieval systems", "Workflow orchestration", "Process automation"] },
  ];
  return (
    <section id="proof" style={{ padding: "96px 48px", borderBottom: `1px solid ${BORDER}`, maxWidth: 1100, margin: "0 auto", fontFamily: MONO }}>
      <SectionTag label="Proof" />
      <div style={{ maxWidth: 600, marginBottom: 56 }}>
        <p style={{ fontSize: 13, color: TEXT_DIM, marginBottom: 8 }}>Real systems.</p>
        <p style={{ fontSize: 13, color: TEXT_DIM, marginBottom: 8 }}>Real workflows.</p>
        <p style={{ fontSize: 13, color: TEXT_DIM, marginBottom: 8 }}>Real operational infrastructure.</p>
        <p style={{ fontSize: 13, color: TEXT_DIM, marginTop: 16 }}>A collection of systems designed to improve clarity, consistency, scalability, and operational efficiency.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: BORDER, border: `1px solid ${BORDER}` }}>
        {cards.map(c => <ProofCard key={c.label} {...c} />)}
      </div>
    </section>
  );
}

/* ── Notes ──────────────────────────────────────────────── */
function NoteCard({ idx, title, lines }: { idx: string; title: string; lines: string[] }) {
  const { hovered, ...handlers } = useHover();
  const linkHover = useHover();
  return (
    <div {...handlers} style={{ background: hovered ? BG_HOVER : BG_CARD, padding: "36px 30px", display: "flex", flexDirection: "column", transition: "background 0.2s", fontFamily: MONO }}>
      <p style={{ fontSize: 10, color: TEXT_MUTE, letterSpacing: "0.14em", marginBottom: 14 }}>{idx}</p>
      <h3 style={{ fontSize: 14, color: WHITE, letterSpacing: "0.04em", fontWeight: "normal", marginBottom: 14, lineHeight: 1.4 }}>{title}</h3>
      <div style={{ fontSize: 12, color: TEXT_DIM, lineHeight: 1.85, flex: 1, marginBottom: 20 }}>
        {lines.map((l, i) => <p key={i} style={{ marginBottom: 6 }}>{l}</p>)}
      </div>
      <span
        {...linkHover}
        style={{ fontSize: 10, letterSpacing: "0.1em", color: linkHover.hovered ? ACCENT : TEXT_MUTE, textTransform: "uppercase" as const, transition: "color 0.2s", cursor: "pointer" }}
      >
        [ Read Article ] →
      </span>
    </div>
  );
}

function Notes() {
  const notes = [
    { idx: "01", title: "Documentation Is a Scaling Strategy", lines: ["Most startups think documentation is a task.", "It's infrastructure.", "When knowledge lives in Slack messages and people's heads, every question becomes a dependency.", "Documentation doesn't slow teams down.", "It removes bottlenecks."] },
    { idx: "02", title: "Why Most AI Projects Fail", lines: ["Many teams start with tools.", "Very few start with processes.", "AI cannot fix a broken workflow.", "It can only accelerate it.", "Before introducing automation, understand how work actually happens."] },
    { idx: "03", title: "Building Recruiting Systems That Scale", lines: ["Hiring problems are rarely hiring problems.", "They are visibility problems.", "A good recruiting system creates consistency, accountability, and better decisions before the next hire is made."] },
    { idx: "04", title: "The Hidden Cost of Operational Chaos", lines: ["Operational debt compounds quietly.", "Missed handoffs.", "Duplicate work.", "Unclear ownership.", "Individually small.", "Collectively expensive."] },
    { idx: "05", title: "Why Startups Automate Too Early", lines: ["Automation is usually the last step.", "Not the first.", "A process nobody understands should not be automated.", "First understand it.", "Then simplify it.", "Then automate it."] },
    { idx: "06", title: "The Customer Journey Nobody Owns", lines: ["Customers don't experience departments.", "They experience a company.", "The gaps between Support, Success, Product, and Operations are often where the biggest problems hide."] },
  ];
  const linkHover = useHover();
  return (
    <section id="notes" style={{ padding: "96px 48px", borderBottom: `1px solid ${BORDER}`, maxWidth: 1100, margin: "0 auto", fontFamily: MONO }}>
      <SectionTag label="Notes" />
      <div style={{ maxWidth: 560, marginBottom: 56 }}>
        <p style={{ fontSize: 13, color: TEXT_DIM, marginBottom: 6 }}>Notes on systems, operations, AI, and the work behind growing companies.</p>
        <p style={{ fontSize: 13, color: TEXT_DIM, marginBottom: 6 }}>Not frameworks for the sake of frameworks.</p>
        <p style={{ fontSize: 13, color: TEXT_DIM }}>Just observations from building, fixing, and scaling operational systems.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: BORDER, border: `1px solid ${BORDER}`, marginBottom: 40 }}>
        {notes.map(n => <NoteCard key={n.idx} {...n} />)}
      </div>
      <p style={{ fontSize: 12, color: TEXT_DIM, letterSpacing: "0.06em" }}>
        <a href="https://substack.com" target="_blank" rel="noopener noreferrer" {...linkHover}
          style={{ color: linkHover.hovered ? ACCENT : ACCENT, borderBottom: `1px solid ${linkHover.hovered ? ACCENT : ACCENT_DIM}`, textDecoration: "none", transition: "border-color 0.2s" }}>
          View all articles on Substack →
        </a>
      </p>
    </section>
  );
}

/* ── About ──────────────────────────────────────────────── */
function About() {
  const experience = ["Spendbase", "Cinobo", "DreamClass", "Layer", "Epignosis", "FlexDesk"];
  return (
    <section id="about" style={{ padding: "96px 48px", borderBottom: `1px solid ${BORDER}`, maxWidth: 1100, margin: "0 auto", fontFamily: MONO }}>
      <SectionTag label="About" />
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80 }}>
        <div>
          <p style={{ fontSize: 20, color: WHITE, letterSpacing: "0.06em", marginBottom: 28 }}>Hi, I'm Angeliki.</p>
          <p style={{ fontSize: 14, color: TEXT, marginBottom: 14, lineHeight: 1.85 }}>Over the last decade I've worked across Customer Success, Operations, Support, Recruiting, and Product environments.</p>
          <p style={{ fontSize: 14, color: TEXT, marginBottom: 14, lineHeight: 1.85 }}>I've been fortunate to join startups during periods of growth, complexity, and change.</p>
          <p style={{ fontSize: 14, color: TEXT, marginBottom: 14, lineHeight: 1.85 }}>My work has consistently involved turning operational challenges into scalable systems.</p>
          {["Building processes.", "Designing workflows.", "Creating clarity.", "Reducing friction.", "Helping teams work more methodically."].map(l => (
            <p key={l} style={{ color: TEXT_DIM, fontSize: 13, marginBottom: 8 }}>{l}</p>
          ))}
          <p style={{ fontSize: 14, color: TEXT, marginTop: 20, lineHeight: 1.85 }}>METHODIKA is the accumulation of those experiences.</p>
        </div>
        <div>
          <p style={{ fontSize: 11, letterSpacing: "0.14em", color: TEXT_MUTE, textTransform: "uppercase" as const, marginBottom: 24 }}>Selected Experience</p>
          <ul style={{ listStyle: "none", padding: 0, borderTop: `1px solid ${BORDER}` }}>
            {experience.map(e => (
              <ExpItem key={e} label={e} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ExpItem({ label }: { label: string }) {
  const { hovered, ...handlers } = useHover();
  return (
    <li {...handlers} style={{ fontSize: 13, color: hovered ? WHITE : TEXT_DIM, padding: "14px 0", borderBottom: `1px solid ${BORDER}`, letterSpacing: "0.04em", transition: "color 0.15s", fontFamily: MONO }}>
      {label}
    </li>
  );
}

/* ── Contact ────────────────────────────────────────────── */
function ContactLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  const { hovered, ...handlers } = useHover();
  return (
    <li style={{ borderBottom: `1px solid ${BORDER}` }}>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...handlers}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 0",
          fontSize: 13,
          color: hovered ? ACCENT : TEXT_DIM,
          letterSpacing: "0.04em",
          textDecoration: "none",
          transition: "color 0.15s",
          fontFamily: MONO,
        }}
      >
        {label}
        <span style={{ fontSize: 12, color: hovered ? ACCENT : TEXT_MUTE, transition: "color 0.15s" }}>↗</span>
      </a>
    </li>
  );
}

function Contact() {
  const { hovered, ...handlers } = useHover();
  return (
    <section id="contact" style={{ padding: "96px 48px", maxWidth: 1100, margin: "0 auto", fontFamily: MONO }}>
      <SectionTag label="Contact" />
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 80 }}>
        <div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", color: WHITE, letterSpacing: "0.08em", fontWeight: "normal", marginBottom: 24, lineHeight: 1.3 }}>
            Let's explore the system.
          </h2>
          <p style={{ fontSize: 13, color: TEXT_DIM, marginBottom: 12, lineHeight: 1.85 }}>
            If something feels messy, slow, manual, or difficult to scale, that's usually where I can help.
          </p>
          <p style={{ fontSize: 13, color: TEXT_DIM, marginBottom: 12, lineHeight: 1.85 }}>
            Whether you're building a recruiting process, improving customer operations, documenting internal knowledge, or exploring AI workflows, every engagement starts the same way:
          </p>
          <p style={{ fontSize: 13, color: WHITE, lineHeight: 1.85 }}>Understanding how the system works today.</p>
          <div style={{ marginTop: 40 }}>
            <a
              href="mailto:angelmpkr@gmail.com"
              {...handlers}
              style={{
                display: "inline-block",
                border: `1px solid ${ACCENT}`,
                color: hovered ? BG : ACCENT,
                background: hovered ? ACCENT : "transparent",
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: "0.12em",
                padding: "12px 28px",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              [ Book a Conversation ]
            </a>
          </div>
        </div>
        <div style={{ paddingTop: 16 }}>
          <p style={{ fontSize: 10, letterSpacing: "0.14em", color: TEXT_MUTE, textTransform: "uppercase" as const, marginBottom: 20 }}>Find me here</p>
          <ul style={{ listStyle: "none", padding: 0, borderTop: `1px solid ${BORDER}` }}>
            <ContactLink href="https://linkedin.com" label="LinkedIn" external />
            <ContactLink href="https://substack.com" label="Substack" external />
            <ContactLink href="mailto:angelmpkr@gmail.com" label="Email" />
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ─────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{
      borderTop: `1px solid ${BORDER}`,
      padding: "32px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: MONO,
    }}>
      <span style={{ fontSize: 12, letterSpacing: "0.18em", color: TEXT_MUTE }}>METHODIKA</span>
      <span style={{ fontSize: 11, color: TEXT_MUTE, letterSpacing: "0.06em" }}>Working methodically. Building systems intentionally.</span>
    </footer>
  );
}

/* ── App ─────────────────────────────────────────────────── */
export default function Portfolio() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: BG, color: TEXT, fontFamily: MONO }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${BG}; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${BG}; }
        ::-webkit-scrollbar-thumb { background: ${BORDER_HI}; }
        ::-webkit-scrollbar-thumb:hover { background: ${TEXT_MUTE}; }
        @media (max-width: 900px) {
          #philosophy .phil-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Nav />
      <main style={{ paddingTop: 52 }}>
        <Hero />
        <Philosophy />
        <WhatIFix />
        <Systems />
        <Method />
        <Proof />
        <Notes />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
