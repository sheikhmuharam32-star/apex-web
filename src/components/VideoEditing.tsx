import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Film, Zap, SkipForward, Volume2, Maximize2, Sparkles } from "lucide-react";

export default function VideoEditing() {
  const [isEdited, setIsEdited] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Playback timer simulation
  const [time, setTime] = useState<number>(0);

  // Toggle button sequence
  const handleToggle = () => {
    setIsEdited(!isEdited);
    setIsPlaying(false);
    setTime(0);
  };

  const capcutFeatures = [
    { title: "Dynamic Frame Cuts", desc: "No dead frames or trailing silence. Microsecond-level slicing preserves attention." },
    { title: "Audio Equalization & SFX", desc: "Integrated sound-wave matching. Audio triggers impact at precise visual keys." },
    { title: "Cinematic Color Grades", desc: "Stylized, high-contrast lut-grading to draw physical eyes onto objects." },
    { title: "Speed-Ramping", desc: "Varying visual speeds creates high sensory stimulation and perfect retention." }
  ];

  return (
    <section id="video-editing" className="py-24 bg-[#0a0a0b] border-t border-white/10 px-4 relative">
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center md:max-w-xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
            <Film className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Cinematic Post-Production</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            High-End Post-Production & CapCut Pacing
          </h2>
          <p className="text-zinc-404 text-sm sm:text-base">
            Raw footage is useless without high-end retention choreography. We combine razor-sharp frame cuts, sound design triggers, and speed-ramping to double retention metrics.
          </p>
        </div>

        {/* Video simulation & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Left panel: Video Editor Simulator */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative shadow-xl">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" /> TIMELINE ANALYZER (COMPRESSED)
                </span>
                <button 
                  onClick={handleToggle}
                  className="cursor-pointer text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 text-white px-3 py-1.5 rounded-xl transition"
                >
                  Show {isEdited ? "Raw Footage" : "Apex Edited"}
                </button>
              </div>

              {/* Video representation container */}
              <div className="h-64 sm:h-72 bg-[#0a0a0b] rounded-2xl relative overflow-hidden border border-white/10 flex flex-col justify-end p-4">
                {/* Visual Grid / Overlay */}
                <div className="absolute inset-x-0 top-0 bottom-24 bg-black/60 flex flex-col items-center justify-center p-6 text-center">
                  <AnimatePresence mode="wait">
                    {isEdited ? (
                      <motion.div
                        key="edited"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="space-y-2"
                      >
                        <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs px-2.5 py-1 rounded font-mono uppercase tracking-wider">
                          Apex Edited: Dynamic Speed ramped
                        </span>
                        <p className="font-display font-bold text-lg sm:text-xl text-white mt-2">
                          High retention triggers, stylized transitions, sound synchronization active.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="raw"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="space-y-2 text-zinc-500"
                      >
                        <span className="bg-zinc-800 text-zinc-500 border border-zinc-700/50 text-xs px-2.5 py-1 rounded font-mono uppercase">
                          Raw camera file
                        </span>
                        <p className="font-sans text-sm mt-2 max-w-sm mx-auto">
                          Slow, uncolored. Long pauses, unedited audio transients, missing transitions. High scroll-away rates expected.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Simulated Audio Waves */}
                <div className="relative z-10 space-y-3">
                  <div className="flex items-end gap-1.5 h-12 px-2">
                    {Array.from({ length: 28 }).map((_, idx) => {
                      // Height based on edited/raw state and indices
                      let height = "h-2";
                      if (isEdited) {
                        // Spiky peaks
                        height = idx % 3 === 0 ? "h-10 bg-blue-400" : idx % 2 === 0 ? "h-6 bg-blue-500" : "h-3 bg-cyan-500";
                      } else {
                        // flat waves
                        height = "h-1.5 bg-zinc-650";
                      }
                      return (
                        <div key={idx} className={`w-full rounded-t-sm transition-all duration-300 ${height}`} />
                      );
                    })}
                  </div>

                  {/* Playback bar bottom */}
                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 border-t border-white/5 pt-3">
                    <div className="flex items-center gap-2">
                      <Volume2 className={`w-3.5 h-3.5 ${isEdited ? "text-cyan-400" : "text-zinc-650"}`} />
                      <span>{isEdited ? "SURROUND_ATMOSPHERE_BOOSTED.WAV" : "INTERNAL_MIC_STEREO_RAW_09"}</span>
                    </div>
                    <span>0:04 / 0:15</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-xs font-mono text-zinc-500 font-bold">
              <span className="flex items-center gap-1">
                <SkipForward className="w-3 h-3 text-zinc-400" /> CAPCUT_PRO_RENDERER
              </span>
              <span className="text-blue-405">STRETCH_RATIO: 1.0</span>
            </div>
          </div>

          {/* Right panel: Specialities List */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 gap-4">
              {capcutFeatures.map((feat) => (
                <div key={feat.title} className="bg-white/5 border border-white/10 hover:border-white/15 p-5 rounded-2xl transition duration-300 hover:bg-white/[0.08] shadow-md">
                  <h3 className="font-display font-bold text-white text-base flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    {feat.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed font-sans">{feat.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/[0.03] border border-white/10 p-4 rounded-2xl flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <p className="text-xs text-zinc-400 font-mono">
                Optimized frame rendering speeds exceed standard Premiere export templates by up to <strong className="text-white">40%</strong> under current configurations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
