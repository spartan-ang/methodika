import { useState, useRef, useEffect } from "react";

const MONO = "-apple-system, 'Inter', BlinkMacSystemFont, sans-serif";

function useHover() {
  const [hovered, setHovered] = useState(false);
  return { hovered, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) };
}

function SectionTag({ label }: { label: string }) {
  return (
    <div style={{
      display: "inline-block",
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase" as const,
      color: "var(--color-text-primary, #111)",
      border: "1px solid rgba(0,0,0,0.25)",
      background: "rgba(0,0,0,0.04)",
      padding: "3px 10px",
      borderRadius: 6,
      marginBottom: 36,
      fontWeight: 500,
      fontFamily: MONO,
    }}>{label}</div>
  );
}

function Nav() {
  const links = [
    { label: "Philosophy", href: "#philosophy" },
    { label: "Systems", href: "#systems" },
    { label: "Method", href: "#method" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Notes", href: "#notes" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "#fafafa",
      borderBottom: "1px solid rgba(0,0,0,0.18)",
      padding: "0 40px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: 56, fontFamily: MONO,
    }}>
      <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.08em", color: "#111" }}>Methodika</span>
      <ul style={{ display: "flex", gap: 24, listStyle: "none", margin: 0, padding: 0 }}>
        {links.map(l => <li key={l.label}><NavLink href={l.href} label={l.label} /></li>)}
      </ul>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const { hovered, ...h } = useHover();
  return <a href={href} {...h} style={{ color: hovered ? "#111" : "#555", textDecoration: "none", fontFamily: MONO, fontSize: 12, letterSpacing: "0.02em" }}>{label}</a>;
}

const WHAT_I_BUILD = [
  { num: "01", title: "Customer operations", desc: "Onboarding, lifecycle, and ops infrastructure" },
  { num: "02", title: "Customer Support / Success transformation", desc: "Health scoring, renewals, churn prevention" },
  { num: "03", title: "Recruiting systems", desc: "Pipelines, scorecards, hiring dashboards" },
  { num: "04", title: "Knowledge management", desc: "SOPs, wikis, process documentation" },
  { num: "05", title: "AI workflows", desc: "Practical automation where it actually helps" },
];

function HeroLogo() {
  const textRef = useRef<SVGTextElement>(null);
  const circleRef = useRef<SVGGElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!textRef.current || !circleRef.current || !svgRef.current) return;
    const bbox = textRef.current.getBBox();
    const gap = 4;
    const scale = 0.13;
    const cx = bbox.x + bbox.width + gap;
    circleRef.current.setAttribute("transform", `translate(${cx}, 5) scale(${scale})`);
    const totalW = cx + 200 * scale + 4;
    svgRef.current.setAttribute("viewBox", `0 0 ${totalW} 40`);
  }, []);
  return (
    <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 40" fill="none" className="hero-logo" style={{ width: 280, height: "auto", marginBottom: 24, display: "block", overflow: "visible" }}>
      <text ref={textRef} x="0" y="26" fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif" fontWeight={400} fontSize={22} letterSpacing={5.5} fill="#0C0B09">
        METHODI<tspan letterSpacing={0}>K</tspan>
      </text>
      <g ref={circleRef} transform="translate(0,5) scale(0.13)">
        <circle cx="100" cy="100" r="84" stroke="#0C0B09" strokeWidth="18" fill="none"/>
        <path fillRule="evenodd" fill="#0C0B09" d="M 100,24 L 148,160 L 52,160 Z M 100,42 L 116,106 L 84,106 Z M 82,118 L 118,118 L 126,160 L 74,160 Z"/>
      </g>
    </svg>
  );
}

function Hero() {
  const { hovered, ...h } = useHover();
  return (
    <div id="hero" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", fontFamily: MONO }}>
      <div className="hero-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      {/* Left column */}
      <div className="hero-left" style={{ padding: "80px 40px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: "1px solid rgba(0,0,0,0.06)" }}>
        <p style={{ fontSize: 12, color: "#888", marginBottom: 20 }}>// Operational design for growing companies.</p>
        <HeroLogo />
        <p style={{ fontSize: 14, color: "#555", maxWidth: 420, lineHeight: 1.75, marginBottom: 10 }}>I help startups eliminate operational chaos, design scalable workflows, and implement practical AI where it actually helps.</p>
        <p style={{ fontSize: 12, color: "#bbb", maxWidth: 420, marginBottom: 32 }}>Built through experience across Customer Success, Operations, Support, Recruiting, and Product teams.</p>
        <a href="https://calendar.app.google/VvdEm5uvGFgz29hz8" target="_blank" rel="noopener noreferrer" {...h} style={{ display: "inline-block", alignSelf: "flex-start", fontSize: 13, fontWeight: 500, padding: "10px 22px", borderRadius: 6, border: "1px solid rgba(0,0,0,0.25)", background: hovered ? "#f5f5f5" : "#fff", color: "#111", textDecoration: "none", transition: "background 0.15s" }}>
          Book a Conversation
        </a>
      </div>
      {/* Right column */}
      <div className="hero-right" style={{ padding: "80px 40px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.6 }} viewBox="0 0 340 420" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="b1" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="40"/></filter>
            <filter id="b2" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="50"/></filter>
          </defs>
          <ellipse cx="280" cy="140" rx="180" ry="140" fill="#ebebeb" filter="url(#b1)"/>
          <ellipse cx="200" cy="320" rx="150" ry="110" fill="#f0f0f0" filter="url(#b2)"/>
        </svg>
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#bbb", fontWeight: 500, marginBottom: 20 }}>What I build</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {WHAT_I_BUILD.map(({ num, title, desc }) => (
              <div key={num} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 22, height: 22, background: "rgba(0,0,0,0.04)", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, color: "#888", marginTop: 1 }}>{num}</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 2 }}>{title}</p>
                  <p style={{ fontSize: 12, color: "#888", lineHeight: 1.5 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

function Philosophy() {
  return (
    <section id="philosophy" style={{ padding: "72px 40px", borderBottom: "1px solid rgba(0,0,0,0.1)", maxWidth: 1100, margin: "0 auto", fontFamily: MONO }}>
      <SectionTag label="Philosophy" />
      <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 500, marginBottom: 20, lineHeight: 1.3, color: "#111" }}>Why Methodika?</h2>
          <p style={{ fontSize: 13, color: "#555", marginBottom: 12, lineHeight: 1.75 }}>Growing companies rarely struggle because people aren't working hard enough.</p>
          <p style={{ fontSize: 13, color: "#555", marginBottom: 10 }}>They struggle because:</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
            {["Information is scattered", "Ownership is unclear", "Processes live in people's heads", "Repetitive work consumes valuable time"].map(item => (
              <li key={item} style={{ fontSize: 13, color: "#555", padding: "3px 0 3px 14px", position: "relative" as const }}>
                <span style={{ position: "absolute" as const, left: 0, color: "#bbb" }}>–</span>{item}
              </li>
            ))}
          </ul>
          <div style={{ borderLeft: "2px solid rgba(0,0,0,0.15)", paddingLeft: 16, margin: "24px 0" }}>
            <span style={{ fontSize: 18, fontWeight: 500, display: "block", marginBottom: 4, color: "#111" }}>μεθοδικά</span>
            <span style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>The Greek word for working systematically and with purpose.</span>
          </div>
          <p style={{ fontSize: 13, color: "#555", marginBottom: 6 }}>Working methodically.</p>
          <p style={{ fontSize: 13, color: "#555", marginBottom: 6 }}>Building systems intentionally.</p>
          <p style={{ fontSize: 13, color: "#555" }}>Creating clarity where complexity starts to appear.</p>
        </div>
        <div style={{ paddingTop: 48 }}>
          {["The goal is not more tools.", "The goal is not more meetings.", "The goal is not more automation."].map(l => (
            <p key={l} style={{ textDecoration: "line-through", color: "#ccc", fontSize: 13, marginBottom: 6 }}>{l}</p>
          ))}
          <p style={{ fontSize: 15, fontWeight: 500, marginTop: 20, color: "#111" }}>The goal is better ways of working.</p>
        </div>
      </div>
    </section>
  );
}

function FixCard({ num, title, body, solution }: { num: string; title: string; body: string[]; solution: string }) {
  const { hovered, ...h } = useHover();
  return (
    <div {...h} style={{ background: hovered ? "#fafafa" : "#fff", padding: "28px 24px", transition: "background 0.15s", fontFamily: MONO }}>
      <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.1em", marginBottom: 12, fontWeight: 500 }}>{num}</p>
      <h3 style={{ fontSize: 14, fontWeight: 500, marginBottom: 12, lineHeight: 1.4, color: "#111" }}>{title}</h3>
      <div style={{ fontSize: 12, color: "#666", lineHeight: 1.75, marginBottom: 4 }}>
        {body.map((l, i) => <p key={i} style={{ marginBottom: 4 }}>{l}</p>)}
      </div>
      <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(0,0,0,0.08)", fontSize: 12, color: "#111", fontWeight: 500 }}>{solution}</div>
    </div>
  );
}

function WhatIFix() {
  const cards = [
    { num: "01", title: "Hiring is chaotic", body: ["Candidates disappear.", "Feedback gets lost.", "Hiring decisions become subjective.", "Nobody knows what happens next."], solution: "I design recruiting systems that create visibility, consistency, and accountability." },
    { num: "02", title: "Customer operations are fragmented", body: ["Support, onboarding, customer success, and product often operate in separate worlds.", "Customers don't experience departments.", "They experience one company."], solution: "I create operational infrastructure that connects customer journeys." },
    { num: "03", title: "Teams are drowning in manual work", body: ["Information gets copied between systems.", "The same questions get answered repeatedly.", "People spend time maintaining processes instead of improving them."], solution: "I identify repetitive work and design practical AI-powered workflows that reduce operational load." },
    { num: "04", title: "Knowledge is trapped", body: ["Processes exist.", "Documentation doesn't.", "Teams depend on specific people to get work done."], solution: "I build knowledge systems that make information accessible, searchable, and scalable." },
  ];
  return (
    <section id="fix" style={{ padding: "72px 40px", borderBottom: "1px solid rgba(0,0,0,0.1)", maxWidth: 1100, margin: "0 auto", fontFamily: MONO }}>
      <SectionTag label="What I Fix" />
      <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(0,0,0,0.1)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 12, overflow: "hidden" }}>
        {cards.map(c => <FixCard key={c.num} {...c} />)}
      </div>
    </section>
  );
}

function SysCard({ tag, title, includes }: { tag: string; title: string; includes: string[] }) {
  const { hovered, ...h } = useHover();
  return (
    <div {...h} style={{ background: hovered ? "#fafafa" : "#fff", padding: "28px 24px", transition: "background 0.15s", fontFamily: MONO }}>
      <p style={{ fontSize: 10, letterSpacing: "0.1em", color: "#888", textTransform: "uppercase" as const, marginBottom: 10, fontWeight: 500 }}>{tag}</p>
      <h3 style={{ fontSize: 14, fontWeight: 500, marginBottom: 12, color: "#111" }}>{title}</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {includes.map(item => (
          <li key={item} style={{ fontSize: 12, color: "#666", padding: "3px 0 3px 14px", position: "relative" as const }}>
            <span style={{ position: "absolute" as const, left: 0, color: "#bbb" }}>–</span>{item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Systems() {
  return (
    <section id="systems" style={{ padding: "72px 40px", borderBottom: "1px solid rgba(0,0,0,0.1)", maxWidth: 1100, margin: "0 auto", fontFamily: MONO }}>
      <SectionTag label="Systems" />
      <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#bbb", marginBottom: 4, fontWeight: 500 }}>Systems in Production</p>
      <h2 style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.01em", marginBottom: 32, lineHeight: 1.2, color: "#111" }}>A selection of operational systems designed across startups and growing companies.</h2>
      <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(0,0,0,0.1)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 12, overflow: "hidden" }}>
        <SysCard tag="Recruiting OS" title="Recruiting OS" includes={["Candidate pipelines", "Interview scorecards", "Hiring dashboards", "Evaluation frameworks", "Decision workflows"]} />
        <SysCard tag="Customer Ops" title="Customer Operations Infrastructure" includes={["Customer lifecycle design", "Onboarding workflows", "Escalation systems", "Success processes", "Support operations"]} />
        <SysCard tag="Knowledge Mgmt" title="Knowledge Management System" includes={["Team documentation", "SOP libraries", "Internal wikis", "Employee onboarding hubs", "Process repositories"]} />
        <SysCard tag="AI Support" title="AI Support System" includes={["Knowledge retrieval", "AI-assisted support", "Escalation routing", "Workflow automation"]} />
        <SysCard tag="Visibility" title="Visibility & Reporting Systems" includes={["KPI dashboards", "Recruiting analytics", "Customer reporting", "Team performance visibility"]} />
        <SysCard tag="Customer Success" title="Customer Success Transformation" includes={["CS strategy design", "Health scoring systems", "Renewal workflows", "Expansion playbooks", "Churn prevention systems"]} />
      </div>
    </section>
  );
}

function MethodStep({ num, title, lines }: { num: string; title: string; lines: string[] }) {
  const { hovered, ...h } = useHover();
  return (
    <div {...h} style={{ background: hovered ? "#fafafa" : "#fff", padding: "28px 24px", transition: "background 0.15s", fontFamily: MONO }}>
      <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.1em", marginBottom: 12, fontWeight: 500 }}>{num}</p>
      <h3 style={{ fontSize: 14, fontWeight: 500, marginBottom: 12, lineHeight: 1.4, color: "#111" }}>{title}</h3>
      {lines.map((l, i) => <p key={i} style={{ fontSize: 12, color: "#666", marginBottom: 4, lineHeight: 1.75 }}>{l}</p>)}
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
    <section id="method" style={{ padding: "72px 40px", borderBottom: "1px solid rgba(0,0,0,0.1)", maxWidth: 1100, margin: "0 auto", fontFamily: MONO }}>
      <SectionTag label="Method" />
      <h2 style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.01em", marginBottom: 32, lineHeight: 1.2, color: "#111" }}>The Methodika Way</h2>
      <div className="grid-5col" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 1, background: "rgba(0,0,0,0.1)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 12, overflow: "hidden" }}>
        {steps.map(s => <MethodStep key={s.num} {...s} />)}
      </div>
    </section>
  );
}

const UC_SYSTEMS = [
  {
    title: "Recruiting Operating Systems",
    desc: "Recruiting infrastructures that improve visibility, standardize evaluation, and reduce operational friction throughout the hiring process.",
    items: ["Candidate pipeline systems", "Interview scorecards", "Hiring dashboards", "Evaluation frameworks"],
  },
  {
    title: "Knowledge Management",
    desc: "Internal systems that transform scattered information into searchable operational knowledge accessible to the whole team.",
    items: ["Team wikis", "SOP libraries", "Employee onboarding hubs", "Knowledge repositories"],
  },
  {
    title: "Customer Operations",
    desc: "Systems designed to support onboarding, customer success, and lifecycle management across the full customer journey.",
    items: ["Customer onboarding workflows", "Vendor evaluation & tool selection", "Implementation roadmaps", "Support operations documentation"],
  },
  {
    title: "Dashboards & Visibility",
    desc: "Operational visibility systems designed to help teams track what matters and make better decisions with real-time data.",
    items: ["KPI dashboards", "Recruiting analytics", "Customer metrics", "Operational reporting"],
  },
  {
    title: "AI & Workflow Automation",
    desc: "Practical implementations of AI and automation inside existing workflows — where it actually reduces manual load.",
    items: ["AI-assisted support systems", "Knowledge retrieval systems", "Workflow orchestration", "Process automation"],
  },
  {
    title: "CS Transformation",
    desc: "End-to-end redesign of customer success functions to drive retention, expansion, and long-term growth.",
    items: ["CS strategy design", "Health scoring systems", "Renewal workflows", "Expansion playbooks"],
  },
  {
    title: "Business Operating Infrastructure",
    desc: "Built from zero into a working operational setup, including the visual identity, public-facing website, backend workflows, service operations, and automation layer that supports the day-to-day running of the business.",
    items: ["Brand identity and logo direction", "Website structure, copy, front-end, and back-end setup", "Lead capture and customer onboarding flow", "Backend operational workflows", "Automation for recurring admin tasks", "Internal process structure for running the service"],
  },
];

function UCScreenshot({ idx }: { idx: number }) {
  if (idx === 0) return (
    <div style={{ background: "#fff", padding: "18px 20px" }}>
      <p style={{ fontSize: 11, fontWeight: 600, color: "#111", marginBottom: 10 }}>Candidates pipeline</p>
      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        {(["Applied", "Shortlisted", "Interviewed"] as const).map((stage, i) => (
          <div key={stage} style={{ background: "#f5f5f5", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 6, padding: "8px 10px", flex: 1 }}>
            <p style={{ fontSize: 9, color: "#5b8fe8", marginBottom: 5, fontWeight: 500 }}>● {stage}</p>
            <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 3, padding: 5, fontSize: 8, color: "#555" }}>
              {["Joshua Tree", "John Doe", "Mary Dow"][i]}
              <span style={{ color: i < 2 ? "#e08050" : "#5b8fe8", background: i < 2 ? "#fdf0e8" : "#eef3fd", padding: "1px 4px", borderRadius: 2, fontSize: 7, display: "inline-block", marginTop: 2 }}>{i < 2 ? "Mktg Spec." : "CS Lead"}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <div style={{ background: "#f5f5f5", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 6, padding: "10px 14px", textAlign: "center" as const }}>
          <span style={{ fontSize: 26, fontWeight: 700, color: "#111", display: "block", lineHeight: 1.1 }}>23</span>
          <span style={{ fontSize: 8, color: "#888" }}>Total candidates</span>
        </div>
        <div style={{ flex: 1, background: "#f5f5f5", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 6, padding: "10px 12px" }}>
          <p style={{ fontSize: 9, color: "#888", marginBottom: 6 }}>Rejected per stage</p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 44 }}>
            {[44, 6, 6, 6, 28].map((h, i) => <div key={i} style={{ background: "#f0c050", width: 18, height: h, borderRadius: "2px 2px 0 0" }} />)}
          </div>
        </div>
      </div>
    </div>
  );
  if (idx === 2) return (
    <div style={{ background: "#fff", padding: "18px 20px" }}>
      <div style={{ display: "flex", gap: 7, marginBottom: 12, flexWrap: "wrap" as const }}>
        {[["2", "Team members"], ["~600", "tickets/mo"], ["3–4h", "first response"], ["~2d", "resolution"]].map(([val, label]) => (
          <div key={label} style={{ background: "#fef08a", padding: "7px 10px", borderRadius: 4, fontSize: 8, fontWeight: 600, color: "#555", textAlign: "center" as const }}>
            <span style={{ display: "block", fontSize: 15, fontWeight: 700, color: "#111", marginBottom: 2 }}>{val}</span>{label}
          </div>
        ))}
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: 9 }}>
        <thead><tr style={{ background: "#f0f0f0" }}><td style={{ padding: "5px 7px", fontWeight: 600, color: "#555" }}>Tool</td><td style={{ padding: "5px 7px", fontWeight: 600, color: "#555" }}>Type</td><td style={{ padding: "5px 7px", fontWeight: 600, color: "#555" }}>Cost</td></tr></thead>
        <tbody>
          {[["Helpify", "B2B SaaS", "$47/seat"], ["Freshdesk", "All verticals", "$15/seat"], ["Intercom", "B2B SaaS", "$74/seat"], ["Zendesk", "All verticals", "$55/seat"]].map(([tool, type, cost], i) => (
            <tr key={tool} style={{ background: i % 2 === 1 ? "#f9f9f9" : "#fff" }}>
              <td style={{ padding: "5px 7px", color: "#555" }}>{tool}</td>
              <td style={{ padding: "5px 7px", color: "#888" }}>{type}</td>
              <td style={{ padding: "5px 7px", color: "#888" }}>{cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  if (idx === 3) return (
    <div style={{ background: "#fff", padding: "18px 20px" }}>
      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        {[["New Total", "6,169"], ["Cancellations", "3,816"]].map(([label, val]) => (
          <div key={label} style={{ flex: 1, border: "1px solid rgba(0,0,0,0.07)", borderRadius: 6, padding: "10px 14px" }}>
            <p style={{ fontSize: 9, color: "#888", marginBottom: 3 }}>{label}</p>
            <p style={{ fontSize: 26, fontWeight: 700, color: "#111" }}>{val}</p>
          </div>
        ))}
      </div>
      <div style={{ border: "1px solid rgba(0,0,0,0.07)", borderRadius: 6, padding: "12px 14px" }}>
        <p style={{ fontSize: 9, color: "#888", marginBottom: 8 }}>New — by date</p>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 52 }}>
          {[22, 30, 18, 16, 22, 28, 34, 40, 52, 36, 12, 8].map((h, i) => (
            <div key={i} style={{ background: "#4a9be8", width: 14, height: h, borderRadius: "2px 2px 0 0", opacity: h > 40 ? 1 : h > 20 ? 0.8 : 0.6 }} />
          ))}
        </div>
      </div>
    </div>
  );
  if (idx === 5) return (
    <div style={{ background: "#fff", padding: "18px 20px" }}>
      <p style={{ fontSize: 11, fontWeight: 600, color: "#111", marginBottom: 8 }}>Post-Sales Ownership & Execution — RACI</p>
      <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: 9 }}>
        <thead><tr style={{ background: "#1a5c3a", color: "#fff" }}>
          <td style={{ padding: "5px 7px", fontWeight: 600 }}>Activity</td>
          <td style={{ padding: "5px 7px", textAlign: "center" as const }}>CSM</td>
          <td style={{ padding: "5px 7px", textAlign: "center" as const }}>Credits SME</td>
        </tr></thead>
        <tbody>
          {[
            ["Customer relationship ownership", "A", "I"],
            ["Account success strategy", "A", "C"],
            ["Renewal ownership & forecast", "A", "I"],
            ["Upsell / cross-sell discovery", "A", "C"],
            ["Credits application & submission", "I", "R/A"],
          ].map(([activity, csm, sme], i) => (
            <tr key={activity} style={{ background: i % 2 === 1 ? "#f9f9f9" : "#fff" }}>
              <td style={{ padding: "5px 7px", color: "#555" }}>{activity}</td>
              <td style={{ padding: "5px 7px", textAlign: "center" as const, fontWeight: csm === "A" ? 700 : 400, background: csm === "A" ? "#d1fae5" : "transparent", color: csm === "A" ? "#065f46" : "#888" }}>{csm}</td>
              <td style={{ padding: "5px 7px", textAlign: "center" as const, fontWeight: sme === "R/A" ? 700 : 400, background: sme === "R/A" ? "#d1fae5" : "transparent", color: sme === "R/A" ? "#065f46" : "#888" }}>{sme}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 200, color: "#ccc", fontSize: 12, background: "#fff", fontFamily: MONO }}>
      Screenshots coming soon
    </div>
  );
}

const UC_PER_PAGE = 3;

function UseCases() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [offset, setOffset] = useState(0);
  const totalPages = Math.ceil(UC_SYSTEMS.length / UC_PER_PAGE);
  const visibleStart = offset * UC_PER_PAGE;
  const sys = UC_SYSTEMS[activeIdx];

  const shiftCards = (dir: number) => {
    const next = offset + dir;
    if (next < 0 || next >= totalPages) return;
    setOffset(next);
    const newStart = next * UC_PER_PAGE;
    if (activeIdx < newStart || activeIdx >= newStart + UC_PER_PAGE) {
      setActiveIdx(newStart);
    }
  };

  return (
    <section id="use-cases" style={{ padding: "72px 40px", borderBottom: "1px solid rgba(0,0,0,0.1)", maxWidth: 1100, margin: "0 auto", fontFamily: MONO }}>
      <div style={{ textAlign: "center" as const }}>
        <SectionTag label="Use Cases" />
      </div>
      <div style={{ textAlign: "center" as const, marginBottom: 36 }}>
        <p style={{ fontSize: 17, fontWeight: 500, color: "#111", lineHeight: 1.5, marginBottom: 10 }}>
          Real systems.<br />Real workflows.<br />Real operational infrastructure.
        </p>
        <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7 }}>
          A collection of systems designed to improve clarity, consistency, scalability, and operational efficiency.
        </p>
      </div>

      {/* Card navigation */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button
          type="button"
          onClick={() => shiftCards(-1)}
          style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "50%", width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, color: offset === 0 ? "#e0e0e0" : "#888", fontSize: 18, lineHeight: 1, fontFamily: MONO }}
        >‹</button>
        <div style={{ display: "flex", gap: 10, flex: 1 }}>
          {Array.from({ length: UC_PER_PAGE }, (_, j) => {
            const ucSys = UC_SYSTEMS[visibleStart + j];
            if (!ucSys) return <div key={j} style={{ flex: 1 }} />;
            const realIdx = visibleStart + j;
            const isActive = realIdx === activeIdx;
            return (
              <button
                key={realIdx}
                type="button"
                onClick={() => setActiveIdx(realIdx)}
                style={{
                  flex: 1, borderRadius: 10, padding: "20px 18px", cursor: "pointer",
                  border: `1px solid ${isActive ? "#111" : "rgba(0,0,0,0.08)"}`,
                  background: isActive ? "#111" : "#fff",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  textAlign: "center" as const,
                  fontFamily: MONO,
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 500, color: isActive ? "#fff" : "#111", lineHeight: 1.4, display: "block" }}>{ucSys.title}</span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => shiftCards(1)}
          style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "50%", width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, color: offset >= totalPages - 1 ? "#e0e0e0" : "#888", fontSize: 18, lineHeight: 1, fontFamily: MONO }}
        >›</button>
      </div>

      {/* Caret row */}
      <div style={{ display: "flex", gap: 10, marginLeft: 44, marginRight: 44, height: 14, pointerEvents: "none" as const }}>
        {Array.from({ length: UC_PER_PAGE }, (_, j) => {
          const realIdx = visibleStart + j;
          const hasSys = !!UC_SYSTEMS[realIdx];
          const isActive = hasSys && realIdx === activeIdx;
          return (
            <div key={j} style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
              {isActive && <div style={{ width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderTop: "9px solid #111" }} />}
            </div>
          );
        })}
      </div>

      {/* Content panel */}
      <div className="uc-panel" style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 24px rgba(0,0,0,0.10)", display: "grid", gridTemplateColumns: "1.35fr 1fr" }}>
        <div>
          <div style={{ background: "#e8e6e0", padding: "8px 14px", borderBottom: "1px solid rgba(0,0,0,0.07)", display: "flex", alignItems: "center", gap: 5 }}>
            {[0, 1, 2].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "#c0bebb" }} />)}
          </div>
          <UCScreenshot idx={activeIdx} />
        </div>
        <div style={{ padding: "32px 28px", background: "#fff", borderLeft: "1px solid rgba(0,0,0,0.07)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h3 style={{ fontSize: 15, fontWeight: 500, color: "#111", marginBottom: 10, lineHeight: 1.3 }}>{sys.title}</h3>
          <p style={{ fontSize: 12, color: "#666", lineHeight: 1.75, marginBottom: 18 }}>{sys.desc}</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {sys.items.map(item => (
              <li key={item} style={{ fontSize: 11, color: "#888", padding: "3px 0 3px 14px", position: "relative" as const, lineHeight: 1.5 }}>
                <span style={{ position: "absolute" as const, left: 0, color: "#ccc" }}>–</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function NoteCard({ idx, title, body }: { idx: string; title: string; body: string }) {
  const { hovered, ...h } = useHover();
  return (
    <div {...h} style={{ background: hovered ? "#fafafa" : "#fff", padding: "24px 22px", display: "flex", flexDirection: "column", transition: "background 0.15s", fontFamily: MONO }}>
      <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.1em", marginBottom: 12, fontWeight: 500 }}>{idx}</p>
      <h3 style={{ fontSize: 14, fontWeight: 500, marginBottom: 12, lineHeight: 1.4, color: "#111" }}>{title}</h3>
      <p style={{ fontSize: 12, color: "#666", lineHeight: 1.75, flex: 1 }}>{body}</p>
    </div>
  );
}

function Notes() {
  const notes = [
    { idx: "01", title: "Documentation Is a Scaling Strategy", body: "Most startups think documentation is a task. It's infrastructure. When knowledge lives in Slack messages and people's heads, every question becomes a dependency. Documentation doesn't slow teams down. It removes bottlenecks." },
    { idx: "02", title: "Why Most AI Projects Fail", body: "Many teams start with tools. Very few start with processes. AI cannot fix a broken workflow. It can only accelerate it. Before introducing automation, understand how work actually happens." },
    { idx: "03", title: "Building Recruiting Systems That Scale", body: "Hiring problems are rarely hiring problems. They are visibility problems. A good recruiting system creates consistency, accountability, and better decisions before the next hire is made." },
    { idx: "04", title: "The Hidden Cost of Operational Chaos", body: "Operational debt compounds quietly. Missed handoffs. Duplicate work. Unclear ownership. Individually small. Collectively expensive." },
    { idx: "05", title: "Why Startups Automate Too Early", body: "Automation is usually the last step. Not the first. A process nobody understands should not be automated. First understand it. Then simplify it. Then automate it." },
    { idx: "06", title: "The Customer Journey Nobody Owns", body: "Customers don't experience departments. They experience a company. The gaps between Support, Success, Product, and Operations are often where the biggest problems hide." },
  ];
  const lh = useHover();
  return (
    <section id="notes" style={{ padding: "72px 40px", borderBottom: "1px solid rgba(0,0,0,0.1)", maxWidth: 1100, margin: "0 auto", fontFamily: MONO }}>
      <SectionTag label="Notes" />
      <div style={{ maxWidth: 560, marginBottom: 32 }}>
        <p style={{ fontSize: 13, color: "#666", marginBottom: 4 }}>Notes on systems, operations, AI, and the work behind growing companies.</p>
        <p style={{ fontSize: 13, color: "#666", marginBottom: 4 }}>Not frameworks for the sake of frameworks.</p>
        <p style={{ fontSize: 13, color: "#666" }}>Just observations from building, fixing, and scaling operational systems.</p>
      </div>
      <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(0,0,0,0.1)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 12, overflow: "hidden", marginBottom: 24 }}>
        {notes.map(n => <NoteCard key={n.idx} {...n} />)}
      </div>
      <p style={{ fontSize: 12, color: "#888" }}>
        <a href="https://angelikib.substack.com/" target="_blank" rel="noopener noreferrer" {...lh} style={{ color: lh.hovered ? "#111" : "#888", textDecoration: "none" }}>View all articles on Substack →</a>
      </p>
    </section>
  );
}

function About() {
  const companies = [
    { name: "Spendbase", url: "https://www.spendbase.co/" },
    { name: "Cinobo", url: "https://cinobo.com/" },
    { name: "DreamClass", url: "https://dreamclass.io/" },
    { name: "Layer", url: "https://www.layerlicensing.com/" },
    { name: "Epignosis", url: "https://www.epignosishq.com/" },
    { name: "FlexDesk", url: "https://flexdesk.gr/" },
  ];
  return (
    <section id="about" style={{ padding: "72px 40px", borderBottom: "1px solid rgba(0,0,0,0.1)", maxWidth: 1100, margin: "0 auto", fontFamily: MONO }}>
      <SectionTag label="About" />
      <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64 }}>
        <div>
          <p style={{ fontSize: 18, fontWeight: 500, marginBottom: 20, color: "#111" }}>Hi, I'm Angeliki.</p>
          <p style={{ fontSize: 13, color: "#555", marginBottom: 12, lineHeight: 1.75 }}>Over the last decade I've worked across Customer Success, Operations, Support, Recruiting, and Product environments.</p>
          <p style={{ fontSize: 13, color: "#555", marginBottom: 12, lineHeight: 1.75 }}>I've been fortunate to join startups during periods of growth, complexity, and change.</p>
          <p style={{ fontSize: 13, color: "#555", marginBottom: 12, lineHeight: 1.75 }}>My work has consistently involved turning operational challenges into scalable systems.</p>
          <p style={{ fontSize: 13, color: "#aaa", marginBottom: 6 }}>Building processes. Designing workflows. Creating clarity. Reducing friction. Helping teams work more methodically.</p>
          <p style={{ fontSize: 13, color: "#555", marginTop: 16, lineHeight: 1.75 }}>Methodika is the accumulation of those experiences.</p>
        </div>
        <div>
          <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#bbb", fontWeight: 500 }}>Selected Experience</p>
          <ul style={{ listStyle: "none", padding: 0, borderTop: "1px solid rgba(0,0,0,0.08)", marginTop: 20 }}>
            {companies.map(c => <ExpItem key={c.name} name={c.name} url={c.url} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ExpItem({ name, url }: { name: string; url: string }) {
  const { hovered, ...h } = useHover();
  return (
    <li style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
      <a href={url} target="_blank" rel="noopener noreferrer" {...h} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", fontSize: 13, color: hovered ? "#111" : "#666", textDecoration: "none", transition: "color 0.15s", fontFamily: MONO }}>
        {name}
        <span style={{ fontSize: 11, color: hovered ? "#111" : "#bbb", transition: "color 0.15s" }}>↗</span>
      </a>
    </li>
  );
}

function Contact() {
  const { hovered, ...h } = useHover();
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/angeliki-bekyra/", external: true },
    { label: "Substack", href: "https://angelikib.substack.com/", external: true },
    { label: "Email", href: "mailto:angeliki@methodika.co", external: false },
  ];
  return (
    <section id="contact" style={{ padding: "72px 40px", maxWidth: 1100, margin: "0 auto", fontFamily: MONO }}>
      <SectionTag label="Contact" />
      <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 64 }}>
        <div>
          <h2 style={{ fontSize: 26, fontWeight: 500, marginBottom: 20, lineHeight: 1.3, color: "#111" }}>Let's explore the system.</h2>
          <p style={{ fontSize: 13, color: "#555", marginBottom: 10, lineHeight: 1.75 }}>If something feels messy, slow, manual, or difficult to scale, that's usually where I can help.</p>
          <p style={{ fontSize: 13, color: "#555", marginBottom: 10, lineHeight: 1.75 }}>Whether you're building a recruiting process, improving customer operations, documenting internal knowledge, or exploring AI workflows, every engagement starts the same way:</p>
          <p style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 28 }}>Understanding how the system works today.</p>
          <a href="https://calendar.app.google/VvdEm5uvGFgz29hz8" target="_blank" rel="noopener noreferrer" {...h} style={{ display: "inline-block", fontSize: 13, fontWeight: 500, padding: "10px 22px", borderRadius: 6, border: "1px solid rgba(0,0,0,0.25)", background: hovered ? "#f5f5f5" : "#fff", color: "#111", textDecoration: "none", transition: "background 0.15s" }}>
            Book a Conversation
          </a>
        </div>
        <div>
          <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#bbb", fontWeight: 500 }}>Find me here</p>
          <ul style={{ listStyle: "none", padding: 0, borderTop: "1px solid rgba(0,0,0,0.08)", marginTop: 16 }}>
            {links.map(l => <ContactLink key={l.label} {...l} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ label, href, external }: { label: string; href: string; external: boolean }) {
  const { hovered, ...h } = useHover();
  return (
    <li style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} {...h}
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", fontSize: 13, color: hovered ? "#111" : "#666", textDecoration: "none", transition: "color 0.15s", fontFamily: MONO }}>
        {label}
        <span style={{ fontSize: 12, color: hovered ? "#111" : "#bbb", transition: "color 0.15s" }}>↗</span>
      </a>
    </li>
  );
}

export default function Portfolio() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff", color: "#111", fontFamily: MONO }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; background: #fff; }
        body { background: #fff !important; font-family: ${MONO}; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #fff; }
        ::-webkit-scrollbar-thumb { background: #ddd; }

        @media (max-width: 768px) {
          nav { height: 48px !important; padding: 0 20px !important; }
          nav ul { display: none !important; }
          main { padding-top: 48px !important; }

          section { padding: 40px 20px !important; }

          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-left { padding: 48px 20px !important; border-right: none !important; }
          .hero-right { display: none !important; }
          .hero-logo { width: 200px !important; }

          .grid-2col { grid-template-columns: 1fr !important; }
          .grid-2col > * { border-right: none !important; }

          .grid-3col { grid-template-columns: 1fr !important; }
          .grid-5col { grid-template-columns: 1fr !important; }
          .uc-panel { grid-template-columns: 1fr !important; }

          footer { padding: 20px !important; flex-direction: column !important; gap: 8px !important; text-align: center; }
        }

        @media (min-width: 769px) and (max-width: 1100px) {
          .grid-3col { grid-template-columns: repeat(2, 1fr) !important; }
          .grid-5col { grid-template-columns: repeat(2, 1fr) !important; }
          section { padding: 56px 32px !important; }
          .hero-left { padding: 64px 32px !important; }
          .hero-right { padding: 64px 32px !important; }
        }
      `}</style>
      <Nav />
      <main style={{ paddingTop: 56 }}>
        <Hero />
        <Philosophy />
        <WhatIFix />
        <Systems />
        <Method />
        <UseCases />
        <Notes />
        <About />
        <Contact />
      </main>
      <footer style={{ borderTop: "1px solid rgba(0,0,0,0.1)", padding: "24px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: MONO }}>
        <span style={{ fontSize: 12, letterSpacing: "0.06em", color: "#bbb", fontWeight: 500 }}>Methodika</span>
        <span style={{ fontSize: 11, color: "#bbb" }}>Working methodically. Building systems intentionally.</span>
      </footer>
    </div>
  );
}
