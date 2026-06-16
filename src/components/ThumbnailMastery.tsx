import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, Percent, Layers, ShieldCheck, Sparkles } from "lucide-react";

export default function ThumbnailMastery() {
  const [sliderVal, setSliderVal] = useState<number>(100); // 0 to 100 slider representing evolution from draft to apex

  const getThumbnailState = (val: number) => {
    if (val < 30) return {
      ctr: "1.8% CTR",
      status: "Low Engagement Alert",
      desc: "Low contrast, cluttered background, unreadable font, no custom focal glow layers. High risk of search impression bleed.",
      bgColor: "bg-zinc-950",
      elements: "Standard generic game screenshot, no custom shadows, flat text."
    };
    if (val < 75) return {
      ctr: "5.4% CTR",
      status: "Sub-Optimal Average",
      desc: "Basic font with basic shadow outlines. Minor focal element isolation, moderate visual hierarchy but lacks strong psychological click-triggers.",
      bgColor: "bg-zinc-900",
      elements: "Isolated character, basic lighting brush, semi-bold text."
    };
    return {
      ctr: "15.2% CTR",
      status: "Apex Masterpiece (Epic)",
      desc: "Double-layered dimensional outline stroke. Expert game artwork isolation from foreground, 4K face retouching, neon glowing borders, human-optimized typography.",
      bgColor: "bg-zinc-800",
      elements: "Ultra-contrast layers, neon-glowing brush strokes, color harmony text, zero clutter."
    };
  };

  const stateInfo = getThumbnailState(sliderVal);

  return (
    <section id="thumbnail-mastery" className="py-24 bg-white/[0.02] border-t border-white/10 px-4 relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1">
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">High-CTR Graphics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Thumbnail Mastery & Click Optimization
            </h2>
            <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
              The difference between 1,000 and 1,000,000 impressions is a split-second cognitive decision. Our high-CTR thumbnails command attention via elite foreground isolation.
            </p>
          </div>
          
          <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl">
            <span className="text-xs font-mono text-zinc-400 px-3 py-1">MATRIX_CTR_ESTIMATION</span>
          </div>
        </div>

        {/* Thumbnail simulator box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Left: Thumbnail design display mockup */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-6 shadow-xl">
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs uppercase text-zinc-400 tracking-wider">Simulated Thumbnail Face</span>
                <span className="text-xs font-mono text-cyan-400">FPS: STATIC PROJECTION</span>
              </div>

              {/* The high CTR vs standard visual block */}
              <div className="relative group aspect-video rounded-2xl bg-gradient-to-br from-[#0a0a0b] to-[#121215] border border-white/10 overflow-hidden flex flex-col justify-between p-5 shadow-2xl">
                {/* Background layout change simulation */}
                <div className="absolute inset-0 z-0">
                  <div className={`absolute inset-0 bg-black/40 z-10 transition-colors duration-300`} />
                  
                  {/* Dynamic background art placeholder */}
                  {sliderVal >= 75 ? (
                    <div className="absolute inset-0 bg-cover bg-center opacity-85 saturate-[1.2] flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-900 to-black">
                      <div className="absolute bottom-0 right-0 top-0 left-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3b82f6]/35 via-zinc-900/10 to-transparent blur-md" />
                      <div className="absolute top-4 right-4 bg-blue-500/25 border border-blue-500 text-cyan-350 text-[10px] font-mono font-bold px-2 py-0.5 rounded-xl uppercase tracking-wider">
                        Isolated Hero Glow Active
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-zinc-950 opacity-40 flex items-center justify-center font-mono text-[10px] text-zinc-600">
                      RAW UNCOMPRESSED SCREENSHOT
                    </div>
                  )}
                </div>

                {/* Simulated Thumbnail Bold Text */}
                <div className="relative z-10">
                  {sliderVal >= 75 ? (
                    <motion.div 
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-display font-black text-2xl sm:text-3.5xl uppercase tracking-wider px-3.5 py-1.5 rounded-xl border border-white/20 shadow-2xl skew-x-[-4deg] skew-y-[-2deg]"
                    >
                      EPIC UNBOUND!
                    </motion.div>
                  ) : sliderVal >= 30 ? (
                    <div className="inline-block bg-white/5 text-zinc-100 font-sans font-bold text-lg p-1 px-2 uppercase rounded-xl border border-white/10">
                      Standard Title text
                    </div>
                  ) : (
                    <div className="text-zinc-500 font-sans text-xs italic">
                      No titles configured
                    </div>
                  )}
                </div>

                {/* Footer simulation detailing visual quality */}
                <div className="relative z-10 flex justify-between items-end">
                  {sliderVal >= 75 ? (
                    <div className="bg-black/80 border border-white/10 rounded-xl p-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-[10px] font-mono text-zinc-300 font-bold">Apex Glow Core Layers: 4 (Optimal)</span>
                    </div>
                  ) : (
                    <span className="text-[9px] font-mono text-zinc-500 uppercase font-bold">Background Raw Layers</span>
                  )}
                  
                  <div className="text-right font-bold">
                    <span className="text-[10px] font-mono text-zinc-400 block font-normal">CTR Rating</span>
                    <span className="text-xl sm:text-2xl font-mono font-black text-white">{stateInfo.ctr}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Interactive controls & metrics explaining process */}
          <div className="lg:col-span-6 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1 font-bold">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" /> Layer Compression Slider
                </span>
                <p className="text-zinc-400 text-xs sm:text-sm">
                  Slide to simulate the rendering evolution from raw capture details to finalized click targets.
                </p>
              </div>

              <div className="space-y-4">
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={sliderVal}
                  onChange={(e) => setSliderVal(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none"
                />

                <div className="bg-[#0a0a0b] border border-white/10 p-4 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-404 uppercase tracking-widest">
                      {stateInfo.status}
                    </span>
                    <Percent className="w-3.5 h-3.5 text-zinc-500" />
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans mt-1">
                    {stateInfo.desc}
                  </p>
                  <p className="text-[11px] font-mono text-zinc-500 mt-2 italic pt-2 border-t border-white/5">
                    Focal Brush Elements: {stateInfo.elements}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold">A/B Testing Target</span>
                  <p className="text-sm font-semibold text-white">100% Guaranteed CTR Rise</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold">PSD Resolution</span>
                  <p className="text-sm font-semibold text-white">4000 x 2250 Masterfile</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 mt-6 flex justify-between text-[10px] font-mono text-zinc-500">
              <span className="flex items-center gap-1 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Human psychology compliance validated
              </span>
              <span>VER: 12.1.0</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
