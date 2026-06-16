import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Workflow() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      phase: "01",
      title: "Discovery & Strategy Align",
      tagline: "Uncovering audience cognitive blindspots.",
      description: "We deep-dive into your analytics, niche saturation, and visual requirements. Here we formulate absolute pacing metrics, direct high-ctr concepts, content-strategy cycles, and technical expectations.",
      deliverables: ["Visual DNA Strategy Report", "Pacing Specification Guide", "Target Keyword Matrix Overview"]
    },
    {
      phase: "02",
      title: "Storyboard & Concept Drafts",
      tagline: "Mapping out sensory impressions.",
      description: "Before rendering extensive resources, we generate storyboards, facial key outlines for 3D animals, video mockups, and thumbnail variations. This prevents visual misalignments down the production lane.",
      deliverables: ["Low-Fi Video Mockup Chunks", "Thumbnail Layout Variations (3x)", "3D Mesh Outlines and Storyboard Rails"]
    },
    {
      phase: "03",
      title: "Rigorous Production Execution",
      tagline: "Pixels and frames undergo engineering.",
      description: "We implement advanced CapCut timeline clipping, 4K rendering layers, custom color lut passes, and stylized 3D keyframes. Standard parameters are reviewed at microsecond detail tiers.",
      deliverables: ["First Cut Audio-Video Draft", "High-Def Isolated Thumbnail PSDs", "Stylized 3D Character Render Samples"]
    },
    {
      phase: "04",
      title: "Feedback & Pixel Tuning Loops",
      tagline: "Rigid correction runs until perfection.",
      description: "We deploy standard client revision rooms. Every comment is cataloged on our internal backlog tracking platforms. Revisions undergo same-day turnarounds to optimize target launch schedules.",
      deliverables: ["Revised Playback Clips", "Final High-CTR Graphic Exports", "Speed-Optimized Website Build Sandboxing"]
    },
    {
      phase: "05",
      title: "Apex Assets Launch & Hand-off",
      tagline: "Securely delivered to drive high views.",
      description: "Asset sets are compressed, verified, and shipped using lightning-fast clouds, securing ultimate quality safety. Our post-delivery care optimizes actual launch timing according to demographic statistics.",
      deliverables: ["High-Fidelity Project Source Archives", "Production Launch Checklist Guides", "Ongoing Demographic Optimization Reviews"]
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-[#0a0a0b] border-t border-white/10 px-4 relative">
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        <div className="text-center md:max-w-xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Collaborative Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Our Production Workflow & Process
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            From the initial blueprint exploration to finalized asset deployment—our workflow remains structured, robust, and transparent. No random delays.
          </p>
        </div>

        {/* Stepper block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
          
          {/* Left panel: Vertical quick stepper rail */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.phase}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left cursor-pointer p-4 rounded-2xl border transition-all flex items-center gap-4 block ${
                    isActive 
                      ? "bg-white/10 border-blue-500 shadow-lg shadow-blue-500/10" 
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  }`}
                >
                  <span className={`font-mono font-bold text-sm ${isActive ? "text-cyan-400" : "text-zinc-500"}`}>
                    PHASE {step.phase}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-tight">{step.title}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right active Phase detail card with beautiful transition */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 relative min-h-[380px] flex flex-col justify-between shadow-xl font-bold">
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-cyan-404 font-mono text-xs uppercase tracking-widest block mb-1">
                      Execution Step detail // Phase {steps[activeStep].phase}
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                      {steps[activeStep].title}
                    </h4>
                    <p className="text-xs sm:text-sm font-sans text-cyan-400 font-bold italic mt-1">
                      {steps[activeStep].tagline}
                    </p>
                  </div>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans font-normal pr-4">
                    {steps[activeStep].description}
                  </p>

                  <div className="border-t border-white/5 pt-6 space-y-3">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                      Phase Action Deliverables:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {steps[activeStep].deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-[#0a0a0b] p-3 rounded-xl border border-white/5 font-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                          <span className="text-zinc-350 text-xs font-mono">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="border-t border-white/5 pt-6 mt-8 flex justify-between items-center text-[10px] font-mono text-zinc-500 font-bold">
              <span>WORKFLOW_TRACKER: PRO_LEVEL</span>
              <span>VERIFIED_SLA: EXCELLING</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
