import { Mail, Linkedin, ChevronRight, FileText, Briefcase, MapPin, ExternalLink } from "lucide-react";
import './_group.css';

export function Notion() {
  const skills = [
    "Process Optimization",
    "Stakeholder Management",
    "Cross-functional Coordination",
    "Vendor Relations",
    "Operational Efficiency",
    "Data-driven Decisions",
    "Budget Management",
    "Team Leadership"
  ];

  const experience = [
    {
      company: "Acme European Operations",
      role: "External Operations Manager",
      date: "2021 — Present",
      description: "Leading cross-functional operations across 5+ European markets. Optimized vendor onboarding workflow, reducing cycle time by 40%. Managed a €2M quarterly operational budget."
    },
    {
      company: "Global Logistics Inc.",
      role: "Operations Coordinator",
      date: "2018 — 2021",
      description: "Spearheaded local distribution hubs in Germany. Coordinated between suppliers, warehouses, and last-mile delivery teams to ensure 99% SLA adherence."
    },
    {
      company: "TechScale Startups",
      role: "Operations Analyst",
      date: "2016 — 2018",
      description: "Analyzed operational bottlenecks using SQL and BI tools. Implemented a new ticketing system that improved stakeholder communication visibility."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#2f3437] font-notion-sans selection:bg-[#cce2ff] pb-32">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-10 w-full bg-[#fafaf8]/80 backdrop-blur-md border-b border-[#37352f17] px-4 h-12 flex items-center text-[14px] text-[#787774] font-medium">
        <div className="flex items-center cursor-pointer hover:bg-[#37352f14] px-2 py-1 rounded transition-colors">
          Workspace
        </div>
        <ChevronRight className="w-4 h-4 mx-0.5 opacity-40" />
        <div className="flex items-center cursor-pointer hover:bg-[#37352f14] px-2 py-1 rounded transition-colors">
          Angeliki
        </div>
        <ChevronRight className="w-4 h-4 mx-0.5 opacity-40" />
        <div className="flex items-center text-[#2f3437] cursor-pointer hover:bg-[#37352f14] px-2 py-1 rounded transition-colors">
          <FileText className="w-4 h-4 mr-1.5 opacity-70" />
          Angeliki_Portfolio
        </div>
      </nav>

      <main className="max-w-[708px] mx-auto px-6 sm:px-12 pt-16 sm:pt-24">
        {/* Header / Hero */}
        <header className="mb-10">
          <div className="text-7xl mb-6 select-none">⚡</div>
          <h1 className="text-4xl font-bold tracking-tight text-[#2f3437] mb-2">
            Angeliki
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-[#787774] text-base mt-3">
            <div className="flex items-center gap-1.5 bg-[#37352f0f] px-2 py-0.5 rounded text-sm font-medium text-[#4a4a4a]">
              <Briefcase className="w-4 h-4" />
              External Operations Manager
            </div>
            <div className="flex items-center gap-1.5 bg-[#37352f0f] px-2 py-0.5 rounded text-sm font-medium text-[#4a4a4a]">
              <MapPin className="w-4 h-4" />
              Berlin, EU
            </div>
          </div>
        </header>

        <hr className="border-[#37352f17] my-8" />

        {/* About */}
        <section className="mb-10 group">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <span className="w-6 -ml-6 opacity-0 group-hover:opacity-100 transition-opacity text-[#37352f40] select-none cursor-pointer">
              ⋮⋮
            </span>
            About
          </h2>
          <div className="text-[#37352f] leading-relaxed space-y-4">
            <p>
              I am an External Operations Manager with a track record of driving cross-functional alignment and streamlining complex workflows. Specializing in European markets, I bridge the gap between external vendors, internal product teams, and senior stakeholders.
            </p>
            <p>
              My approach relies heavily on systems thinking: building robust processes that scale, making data-informed decisions, and always prioritizing clear documentation.
            </p>
          </div>
        </section>

        {/* Expertise / Skills */}
        <section className="mb-10 group">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <span className="w-6 -ml-6 opacity-0 group-hover:opacity-100 transition-opacity text-[#37352f40] select-none cursor-pointer">
              ⋮⋮
            </span>
            Core Expertise
          </h2>
          <div className="flex flex-wrap gap-2 leading-loose">
            {skills.map((skill, index) => (
              <span key={index} className="notion-code">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12 group">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <span className="w-6 -ml-6 opacity-0 group-hover:opacity-100 transition-opacity text-[#37352f40] select-none cursor-pointer">
              ⋮⋮
            </span>
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-6 group/item hover:bg-[#37352f08] p-2 -mx-2 rounded transition-colors">
                <div className="sm:w-32 flex-shrink-0 pt-1">
                  <span className="font-notion-mono text-sm text-[#787774]">{job.date}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#2f3437]">{job.company}</h3>
                  <div className="text-[#787774] text-sm mb-2">{job.role}</div>
                  <p className="text-[#37352f] text-[15px] leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-[#37352f17] my-8" />

        {/* Contact Links */}
        <section className="group">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <span className="w-6 -ml-6 opacity-0 group-hover:opacity-100 transition-opacity text-[#37352f40] select-none cursor-pointer">
              ⋮⋮
            </span>
            Connect
          </h2>
          <div className="space-y-2">
            <a 
              href="mailto:angeliki@example.com" 
              className="flex items-center gap-3 p-2 -mx-2 rounded hover:bg-[#37352f0c] transition-colors text-[#37352f]"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded border border-[#37352f17] bg-white shadow-sm">
                <Mail className="w-4 h-4 text-[#787774]" />
              </div>
              <span className="font-medium underline decoration-[#37352f20] underline-offset-4">angeliki@example.com</span>
              <ExternalLink className="w-3 h-3 text-[#787774] ml-auto mr-2" />
            </a>
            
            <a 
              href="#" 
              className="flex items-center gap-3 p-2 -mx-2 rounded hover:bg-[#37352f0c] transition-colors text-[#37352f]"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded border border-[#37352f17] bg-white shadow-sm">
                <Linkedin className="w-4 h-4 text-[#787774]" />
              </div>
              <span className="font-medium underline decoration-[#37352f20] underline-offset-4">LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-[#787774] ml-auto mr-2" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
