import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LayoutGrid, Cpu, CheckCircle2, ChevronRight, Sparkles, MonitorSmartphone } from "lucide-react";

export default function WebDevUX() {
  const [selectedSpec, setSelectedSpec] = useState<"performance" | "frameworks" | "uxDesign">("performance");

  const specs = {
    performance: {
      title: "Obsessive Performance Guard",
      subTitle: "Page load speeds that capture immediate client trust.",
      details: [
        "LCP (Largest Contentful Paint) averaging 0.4s to 0.7s under production CDN layers.",
        "Obsessive static file minimization, bundling with Tree-shaking optimizations.",
        "Fully optimized Core Web Vitals securing green parameters on SEO crawl metrics."
      ],
      metric: "99/100 Lighthouse Speed Score"
    },
    frameworks: {
      title: "Robust Full-Stack Engineering",
      subTitle: "Engineered foundations for small-to-mid size agencies.",
      details: [
        "Lightweight React 18+ and Next.js static layouts eliminating cold start lag.",
        "Tailwind CSS theme tokens guaranteeing aesthetic alignment across all views.",
        "Modular TypeScript schemas preventing state conflicts or runtime type breakage."
      ],
      metric: "0.2ms API Payload Latency"
    },
    uxDesign: {
      title: "Human-Centric Interface Polish",
      subTitle: "Clean typography rhythms with adaptive interactive cues.",
      details: [
        "Responsive, fluid layout transitions mapped out for varying screen sizes.",
        "Staggered entrance layouts easing eyes into target information pools.",
        "Highly scannable information hierarchies with prominent call-to-action indicators."
      ],
      metric: "100% Mobile Fluidity Approved"
    }
  };

  return (
    <section id="web-dev-ux" className="py-24 bg-[#030303] border-t border-white/10 px-4 relative">
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
              <MonitorSmartphone className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Web Mastery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Responsive Website Development & UX
            </h2>
            <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
              A premium, elegant brand identity is only as fast as its slowest script file. We build websites that load in the blink of an eye, preserving valuable client signals.
            </p>
          </div>

          <div className="flex gap-2">
            <span className="bg-blue-950/40 border border-blue-900/40 rounded-xl px-2.5 py-1 text-[11px] font-mono text-cyan-400 font-bold">
              ENGINE_FRAME_RESOLUTION: APPROVED
            </span>
          </div>
        </div>

        {/* Dynamic specification selection grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left specification selectors */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {Object.keys(specs).map((key) => {
              const active = selectedSpec === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedSpec(key as any)}
                  className={`w-full text-left cursor-pointer p-6 rounded-2xl border transition-all flex justify-between items-center ${
                    active 
                      ? "bg-white/10 border-blue-500 shadow-lg shadow-blue-500/10" 
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div>
                    <h3 className="font-display font-bold text-base text-white capitalize tracking-tight">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 uppercase mt-1 tracking-widest font-bold">
                      {specs[key as keyof typeof specs].metric}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${active ? "translate-x-1 text-cyan-400" : "text-zinc-600"}`} />
                </button>
              );
            })}
          </div>

          {/* Right active information pane */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl font-bold">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[60px]" />
            
            <div className="relative z-10 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSpec}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Aesthetic Specification Block</span>
                    <h4 className="text-2xl font-display font-bold text-white tracking-tight">
                      {specs[selectedSpec].title}
                    </h4>
                    <p className="text-sm font-sans text-cyan-400 font-bold italic">
                      {specs[selectedSpec].subTitle}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {specs[selectedSpec].details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-[#0a0a0b] p-4 rounded-xl border border-white/5 font-normal">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-zinc-300 text-sm font-sans leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative z-10 border-t border-white/5 pt-6 mt-8 flex justify-between items-center text-[10px] font-mono text-zinc-500">
              <span>DEPLOYMENT_METHOD: LOCAL_EDGE_NETWORK</span>
              <span className="text-cyan-400">OPTIMIZATION: MAX</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
