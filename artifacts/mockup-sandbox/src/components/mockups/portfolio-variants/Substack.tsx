import { Mail, Linkedin, ArrowRight } from "lucide-react";
import "./_group.css";

export function Substack() {
  return (
    <div className="min-h-screen bg-cream text-ink font-serif-editorial selection:bg-[#7a3b3f] selection:text-white">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-20">
          <div className="font-mono-typewriter text-xs uppercase tracking-widest text-ink-light mb-6 flex items-center gap-4">
            <span>Portfolio</span>
            <div className="h-[1px] flex-1 bg-[#e6e2d8]"></div>
            <span>Vol. 1</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-4">
            Angeliki
          </h1>
          <p className="font-mono-typewriter text-sm text-ink-light mb-8">
            External Operations Manager
          </p>
          <p className="text-2xl md:text-3xl leading-snug accent-burgundy italic">
            "Making complexity disappear."
          </p>
        </header>

        <div className="h-[1px] w-full bg-[#e6e2d8] my-12" />

        {/* About */}
        <section className="mb-16">
          <h2 className="font-mono-typewriter text-xs uppercase tracking-widest text-ink-light mb-6">
            01. About
          </h2>
          <div className="prose prose-lg prose-p:leading-relaxed text-ink">
            <p>
              I am a clarity-focused, people-first operations professional. My work exists at the intersection of process optimization and human collaboration. I specialize in turning chaotic environments into streamlined, predictable systems without losing the human element.
            </p>
            <p>
              Whether it's managing external vendors, coordinating cross-functional teams, or aligning stakeholder expectations, my approach remains the same: identify the friction, design the solution, and guide the team through the transition.
            </p>
          </div>
        </section>

        <div className="h-[1px] w-full bg-[#e6e2d8] my-12" />

        {/* Skills */}
        <section className="mb-16">
          <h2 className="font-mono-typewriter text-xs uppercase tracking-widest text-ink-light mb-6">
            02. Expertise
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Process Optimization",
              "Stakeholder Management",
              "Cross-functional Coordination",
              "Vendor Relations",
              "Operational Efficiency",
              "Data-driven Decisions",
              "Budget Management",
              "Team Leadership"
            ].map((skill) => (
              <span
                key={skill}
                className="font-mono-typewriter text-xs px-3 py-1.5 border border-[#e6e2d8] bg-white text-ink-light hover:border-[#7a3b3f] hover:text-[#7a3b3f] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <div className="h-[1px] w-full bg-[#e6e2d8] my-12" />

        {/* Experience */}
        <section className="mb-16">
          <h2 className="font-mono-typewriter text-xs uppercase tracking-widest text-ink-light mb-8">
            03. Selected Experience
          </h2>
          <div className="space-y-12">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-xl font-medium">Head of External Operations</h3>
                <span className="font-mono-typewriter text-xs text-ink-light mt-1 md:mt-0">
                  2021 — Present
                </span>
              </div>
              <p className="font-mono-typewriter text-sm accent-burgundy mb-4">Nexus Logistics</p>
              <p className="leading-relaxed text-ink-light">
                Directed a global network of 40+ external vendors and partners. Redesigned the procurement pipeline, reducing onboarding time by 45% and saving $1.2M in annual operational redundancies. Acted as the primary liaison between internal product teams and external stakeholders.
              </p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-xl font-medium">Operations Manager</h3>
                <span className="font-mono-typewriter text-xs text-ink-light mt-1 md:mt-0">
                  2018 — 2021
                </span>
              </div>
              <p className="font-mono-typewriter text-sm accent-burgundy mb-4">Acme Corp</p>
              <p className="leading-relaxed text-ink-light">
                Led cross-functional initiatives to streamline departmental workflows. Implemented data-driven decision frameworks that improved SLA compliance from 82% to 98% across three key external partnerships.
              </p>
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-xl font-medium">Operations Coordinator</h3>
                <span className="font-mono-typewriter text-xs text-ink-light mt-1 md:mt-0">
                  2015 — 2018
                </span>
              </div>
              <p className="font-mono-typewriter text-sm accent-burgundy mb-4">Vanguard Systems</p>
              <p className="leading-relaxed text-ink-light">
                Managed daily operational tasks, budget tracking, and vendor communications. Assisted in the rollout of a new enterprise resource planning (ERP) system to 200+ employees.
              </p>
            </div>
          </div>
        </section>

        <div className="h-[1px] w-full bg-[#e6e2d8] my-12" />

        {/* Contact */}
        <section className="mb-8">
          <h2 className="font-mono-typewriter text-xs uppercase tracking-widest text-ink-light mb-6">
            04. Connect
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="mailto:angeliki@example.com"
              className="group flex items-center gap-3 text-lg hover:accent-burgundy transition-colors"
            >
              <Mail className="w-5 h-5 text-ink-light group-hover:text-[#7a3b3f]" />
              <span>angeliki@example.com</span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#7a3b3f]" />
            </a>
            <a
              href="#"
              className="group flex items-center gap-3 text-lg hover:accent-burgundy transition-colors"
            >
              <Linkedin className="w-5 h-5 text-ink-light group-hover:text-[#7a3b3f]" />
              <span>LinkedIn Profile</span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#7a3b3f]" />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-16 mt-16 border-t border-[#e6e2d8] flex justify-between items-center">
          <span className="font-mono-typewriter text-xs text-ink-light">
            © {new Date().getFullYear()} Angeliki
          </span>
          <span className="font-mono-typewriter text-xs text-ink-light">
            Based in Europe
          </span>
        </footer>
      </div>
    </div>
  );
}
