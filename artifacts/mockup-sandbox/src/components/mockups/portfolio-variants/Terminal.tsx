import { cn } from "@/lib/utils";
import './_group.css';

export function Terminal() {
  return (
    <div className="min-h-[100dvh] bg-[#0d0d0d] text-[#e8e6df] font-jetbrains p-4 sm:p-8 md:p-16 lg:p-24 selection:bg-[#a8cc8c] selection:text-[#0d0d0d] flex justify-center">
      <div className="max-w-3xl w-full flex flex-col gap-12 sm:gap-16">
        
        {/* Header / Hero */}
        <header className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm sm:text-base text-[#888888]">
            <span className="text-[#a8cc8c]">angeliki@sys</span>
            <span>:</span>
            <span className="text-[#d4a853]">~</span>
            <span>$</span>
            <span className="typing-anim">whoami</span>
          </div>
          
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#e8e6df]">
              Angeliki
            </h1>
            <h2 className="text-xl sm:text-2xl text-[#888888] font-normal mt-2">
              External Operations Manager
            </h2>
          </div>
        </header>

        {/* Separator */}
        <div className="text-[#444444] overflow-hidden whitespace-nowrap select-none" aria-hidden="true">
          {'─'.repeat(100)}
        </div>

        {/* About */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm sm:text-base text-[#888888]">
            <span className="text-[#a8cc8c]">angeliki@sys</span>
            <span>:</span>
            <span className="text-[#d4a853]">~</span>
            <span>$</span>
            <span>cat about.md</span>
          </div>
          <div className="leading-relaxed text-[#cccccc] pl-0 sm:pl-4 border-l-0 sm:border-l-2 border-[#333333]">
            <p>
              // Systems thinker & process architect.
              <br/>
              <br/>
              I bridge the gap between internal strategy and external execution. 
              Specializing in driving operational efficiency, managing complex vendor ecosystems, 
              and ensuring cross-functional initiatives deploy without friction. 
              I treat operations like a codebase: identify bottlenecks, refactor processes, 
              and ship scalable workflows.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm sm:text-base text-[#888888]">
            <span className="text-[#a8cc8c]">angeliki@sys</span>
            <span>:</span>
            <span className="text-[#d4a853]">~</span>
            <span>$</span>
            <span>ls -la ./expertise/</span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
            {[
              "process-optimization",
              "stakeholder-management",
              "cross-functional-coordination",
              "vendor-relations",
              "operational-efficiency",
              "data-driven-decisions",
              "budget-management",
              "team-leadership"
            ].map((skill) => (
              <span key={skill} className="text-[#d4a853] text-sm sm:text-base hover:text-[#e8e6df] transition-colors cursor-default">
                --{skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm sm:text-base text-[#888888]">
            <span className="text-[#a8cc8c]">angeliki@sys</span>
            <span>:</span>
            <span className="text-[#d4a853]">~/experience</span>
            <span>$</span>
            <span>git log --oneline</span>
          </div>
          
          <div className="flex flex-col gap-8 mt-4 font-mono">
            
            <div className="flex flex-col gap-2 relative pl-6 border-l border-[#333333]">
              <div className="absolute w-3 h-3 bg-[#a8cc8c] rounded-full -left-[6.5px] top-1.5 shadow-[0_0_8px_#a8cc8c]"></div>
              <div className="text-xs text-[#888888]">
                <span className="text-[#d4a853]">commit a1b2c3d</span> (HEAD -{">"} main)
              </div>
              <h3 className="text-lg font-bold text-[#e8e6df]">External Operations Manager <span className="text-[#888888] font-normal">@ GlobalTech</span></h3>
              <div className="text-sm text-[#888888] mb-2">2021-PRESENT</div>
              <p className="text-sm text-[#cccccc] leading-relaxed">
                * Architected scalable vendor onboarding system, reducing lead time by 40%.
                <br/>
                * Directed cross-functional syncs across 5 international hubs.
                <br/>
                * Managed $15M external operations budget with 12% YoY savings.
              </p>
            </div>

            <div className="flex flex-col gap-2 relative pl-6 border-l border-[#333333]">
              <div className="absolute w-2 h-2 bg-[#444444] rounded-full -left-[4.5px] top-1.5"></div>
              <div className="text-xs text-[#888888]">
                <span className="text-[#d4a853]">commit f4e5d6c</span>
              </div>
              <h3 className="text-lg font-bold text-[#e8e6df]">Operations Lead <span className="text-[#888888] font-normal">@ InnovateCorp</span></h3>
              <div className="text-sm text-[#888888] mb-2">2018-2021</div>
              <p className="text-sm text-[#cccccc] leading-relaxed">
                * Spearheaded operational restructuring for a 200-person division.
                <br/>
                * Implemented data-driven resource allocation tools.
                <br/>
                * Coordinated launch logistics for 3 major product lines.
              </p>
            </div>

          </div>
        </section>

        {/* Contact */}
        <section className="flex flex-col gap-4 mt-8 pb-16">
          <div className="flex items-center gap-2 text-sm sm:text-base text-[#888888]">
            <span className="text-[#a8cc8c]">angeliki@sys</span>
            <span>:</span>
            <span className="text-[#d4a853]">~</span>
            <span>$</span>
            <span>./connect.sh</span>
          </div>
          
          <div className="p-4 sm:p-6 border border-[#333333] bg-[#111111] rounded-sm flex flex-col gap-2 w-fit group hover:border-[#a8cc8c] transition-colors cursor-pointer" onClick={() => window.location.href = "mailto:angeliki@example.com"}>
            <div className="text-[#888888] text-sm mb-1">{"// Ping me"}</div>
            <a href="mailto:angeliki@example.com" className="text-[#e8e6df] group-hover:text-[#a8cc8c] transition-colors flex items-center gap-2">
              <span className="text-[#d4a853]">{">"}</span> mailto://angeliki@example.com
              <span className="w-2 h-5 bg-[#a8cc8c] inline-block animate-pulse opacity-0 group-hover:opacity-100"></span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
