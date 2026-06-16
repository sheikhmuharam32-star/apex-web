import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Play, StopCircle, RefreshCw, Compass, Shield } from "lucide-react";

export default function Animation3D() {
  const [activeSegment, setActiveSegment] = useState<number>(0);
  const [isCyling, setIsCycling] = useState<boolean>(false);

  // 3D development pipeline steps
  const segments = [
    {
      step: "01",
      title: "Stylized Character Sculpting",
      focusName: "Fox & Bear Storytellers",
      description: "We sculpt high-appeal, semi-realistic stylized 3D animal models engineered specifically for younger or educational age brackets. Balanced silhouettes with exaggerated expressions for maximum emotional readability.",
      metric: "Subdiv level 3, optimized edge loops"
    },
    {
      step: "02",
      title: "Facial Rigging & Shape Keys",
      focusName: "Phoneme Lip-Sync (FACS)",
      description: "Rigging tailored for flawless phoneme matching and cute organic expressions. Elastic bone controls around eyebrows, snouts, and ears allow total educational storytelling immersion without mechanical stiffness.",
      metric: "52 blendshapes, full squash & stretch"
    },
    {
      step: "03",
      title: "Educational Cinematic Staging",
      focusName: "Storybook Visual Flow",
      description: "We position our characters inside beautiful high-definition storybook ecosystems. Specialized camera lenses (50mm/85mm equivalents) generate rich cinematic bokeh, giving assets an elite premium cartoon value.",
      metric: "Dynamic camera paths, auto focus racking"
    },
    {
      step: "04",
      title: "Redshift / Cycles Rendering",
      focusName: "Hair Grooming & Subsurface Glow",
      description: "High-contrast render outputs with warm, comforting lighting profiles. Detailed hair grooming cards generate silky, rich stylized pelt-fur feedback, making animals feel approachable and high-craft.",
      metric: "Max 4K resolution, 1024 samples denoised"
    }
  ];

  return (
    <section id="animation-3d" className="py-24 bg-[#0a0a0b] border-t border-white/10 px-4 relative">
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="text-center md:max-w-xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">3D Character Design</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Stylized 3D Animation & Storytelling
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            We specialize in creating premium stylized 3D animal characters and educational storytelling content that guides viewers through deep cognitive narratives.
          </p>
        </div>

        {/* 3D pipeline stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Left panel: Active Step Info and character visual draft preview */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[60px]" />
            
            <div className="space-y-6">
              <div className="flex justify-between items-center text-xs font-mono text-zinc-500 font-bold">
                <span className="uppercase tracking-widest">Pipeline Station</span>
                <span className="text-cyan-400 uppercase tracking-wider">ACTIVE STAGE: LEVEL 0{activeSegment + 1}</span>
              </div>

              <div className="min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSegment}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-mono font-bold text-cyan-500/40">{segments[activeSegment].step}</span>
                      <h3 className="text-2xl font-display font-bold text-white tracking-tight">{segments[activeSegment].title}</h3>
                    </div>

                    <div className="inline-block bg-[#0a0a0b] border border-white/10 rounded-xl px-2.5 py-1 text-xs font-mono text-zinc-400 font-bold">
                      Primary Target: <span className="text-white font-bold">{segments[activeSegment].focusName}</span>
                    </div>

                    <p className="text-zinc-300 font-sans leading-relaxed text-sm sm:text-base pr-4">
                      {segments[activeSegment].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Stepper buttons */}
            <div className="border-t border-white/10 pt-6 mt-6 flex justify-between items-center bg-white/[0.03] p-3 rounded-2xl border-white/10 border">
              <div className="flex gap-2">
                {segments.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSegment(idx)}
                    className={`cursor-pointer w-7 h-7 rounded-lg font-mono text-xs flex items-center justify-center transition-all ${
                      activeSegment === idx
                        ? "bg-cyan-500 text-zinc-950 font-bold shadow-lg shadow-cyan-500/20"
                        : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1">
                <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Rendering Engine Config</span>
              </div>
            </div>
          </div>

          {/* Right: Character Card / Educational storytelling description */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <h3 className="font-display font-bold text-white text-lg tracking-tight">Education Showcase</h3>
                <span className="text-[10px] font-mono bg-blue-950 text-cyan-404 border border-cyan-500/10 rounded-xl px-2 py-0.5 font-bold">
                  EDUCATIONAL_STAPLE
                </span>
              </div>

              <p className="text-zinc-404 font-sans text-xs sm:text-sm leading-relaxed">
                We craft educational narratives that make abstract concepts memorable. By placing customized characters in interactive scenarios, we help brands maintain up to <strong className="text-white">85% informational retention</strong> under standard study conditions.
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-[#0a0a0b] p-3.5 rounded-xl border border-white/5 flex justify-between items-center">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase font-bold">Topology Cleanliness</span>
                  <span className="text-xs font-mono text-zinc-300 font-bold">100% Quad Mesh</span>
                </div>
                <div className="bg-[#0a0a0b] p-3.5 rounded-xl border border-white/5 flex justify-between items-center">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase font-bold">Rig Integration</span>
                  <span className="text-xs font-mono text-zinc-300 font-bold">Humanoid / Quadruped Retouch</span>
                </div>
                <div className="bg-[#0a0a0b] p-3.5 rounded-xl border border-white/5 flex justify-between items-center">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase font-bold">Simulation Targets</span>
                  <span className="text-xs font-mono text-zinc-300 font-bold">Ziva Muscle Dynamics</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-6 mt-8 flex items-center justify-between text-[10px] font-mono text-zinc-550 font-bold font-mono">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Custom topology compliance checked
              </span>
              <span>VER: Cycles_R3</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
