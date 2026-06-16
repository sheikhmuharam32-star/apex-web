import { useState } from "react";
import { motion } from "motion/react";
import { Activity, Radio, Cpu, Award } from "lucide-react";

export default function Philosophy() {
  const [techRatio, setTechRatio] = useState<number>(50); // slider 0 to 100

  // Derive descriptions based on target ratio
  const getPhilosophyLabel = (ratio: number) => {
    if (ratio < 30) return {
      badge: "Pure Artistry",
      desc: "Vibrant visual concepts and deep creative storytelling, without high-performance delivery constraints.",
      techMetric: `${ratio}% Speed & FPS`,
      storyMetric: "100% Raw Passion",
      overallRating: "72% Inefficient Retention"
    };
    if (ratio > 75) return {
      badge: "Pure Engineering",
      desc: "Ultra-fast frame indices and cold mechanical optimization, lacking human connection and emotional warmth.",
      techMetric: "100% Brutal Speed",
      storyMetric: "10% Emotion Index",
      overallRating: "65% Robotic Engagement"
    };
    return {
      badge: "Apex Balance (Optimal)",
      desc: "The sweet spot where pristine technical frame-mastery meets human cinematic storytelling. High CTR meets maximum viewer retention.",
      techMetric: `${ratio}% Optimal Frame Timing`,
      storyMetric: `${100 - ratio}% Heart & Engagement`,
      overallRating: "99.8% Perfect Resonance"
    };
  };

  const status = getPhilosophyLabel(techRatio);

  return (
    <section id="philosophy" className="py-24 bg-white/[0.02] border-t border-white/10 px-4 relative">
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-[80px]" />
      
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center md:max-w-xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-blue-450">The 'Apex' DNA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            How We Synthesize <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              High Performance & Cinema
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            True retention is neither purely technical nor completely abstract. Use the engine tuner below to simulate the perfect agency delivery equation.
          </p>
        </div>

        {/* Interactive Tuner Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6">
          {/* Left tuning controls */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400">Apex System Engine</h3>
                <span className="bg-blue-950/40 text-blue-450 border border-blue-900/50 rounded px-2 py-0.5 text-[10px] font-mono">
                  TUNING_ONLINE
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between font-mono text-xs text-zinc-400">
                  <span>Cinematic Storytelling</span>
                  <span>Technical Execution</span>
                </div>
                {/* Custom Range Slider */}
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={techRatio}
                  onChange={(e) => setTechRatio(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500 transition-all focus:outline-none"
                />
                <div className="flex justify-between text-xs font-mono text-zinc-500">
                  <span>100% Art</span>
                  <span>Balanced (40% - 60%)</span>
                  <span>100% Code</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400">
                    <Activity className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Engine Blend Mode</p>
                    <p className="text-lg font-display font-semibold text-white">{status.badge}</p>
                  </div>
                </div>

                <p className="text-xs text-zinc-404 leading-relaxed font-sans mt-2 min-h-[48px]">
                  {status.desc}
                </p>
              </div>
            </div>

            {/* Quick status display */}
            <div className="border-t border-white/10 pt-6 mt-6 flex justify-between items-center bg-white/[0.03] p-3 rounded-lg border border-white/10">
              <span className="text-xs text-zinc-400 font-mono">Optimal Zone:</span>
              <span className="text-xs text-cyan-400 font-mono font-bold uppercase tracking-wider animate-pulse">
                {techRatio >= 40 && techRatio <= 65 ? "✓ Active (99.8% Eff)" : "⚠️ Sub-optimal Resonance"}
              </span>
            </div>
          </div>

          {/* Right simulated feedback */}
          <div className="lg:col-span-7 bg-[#0a0a0b] border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between overflow-hidden relative shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[60px]" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Real-Time Simulation Metrics</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {/* Tech optimization card */}
                <div className="bg-white/[0.03] border border-white/10 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase">Frame Optimization</p>
                    <p className="text-base font-mono font-bold text-white mt-1">{status.techMetric}</p>
                  </div>
                  <div className="w-1.5 h-8 bg-zinc-850 rounded-full overflow-hidden">
                    <div 
                      className="bg-blue-500 transition-all duration-300" 
                      style={{ height: `${techRatio}%` }}
                    />
                  </div>
                </div>

                {/* Emotional retention card */}
                <div className="bg-white/[0.03] border border-white/10 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase">Retention Index</p>
                    <p className="text-base font-mono font-bold text-white mt-1">{status.storyMetric}</p>
                  </div>
                  <div className="w-1.5 h-8 bg-zinc-850 rounded-full overflow-hidden">
                    <div 
                      className="bg-purple-500 transition-all duration-300" 
                      style={{ height: `${100 - techRatio}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Large overall yield card */}
              <div className="bg-white/5 border border-blue-500/10 p-5 rounded-xl border-l-4 border-l-blue-500 mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono text-zinc-400 uppercase">Predicted Audience Engagement</span>
                  </div>
                  <span className="font-mono text-xs text-zinc-400">APEX_YIELD_09</span>
                </div>
                <p className="text-3xl font-display font-black text-white mt-2 tracking-tight">
                  {status.overallRating}
                </p>
                <p className="text-xs text-zinc-500 font-sans mt-1">
                  Based on simulated attention metrics from historic walk-through and portfolio rendering databases.
                </p>
              </div>
            </div>

            <div className="text-[10px] font-mono text-zinc-650 mt-6 pt-4 border-t border-white/5 flex justify-between">
              <span>Apex Formula: E = MC² (Engagement = Masterful Pacing * Technical Clarity)</span>
              <span>VER: 4.1.2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
