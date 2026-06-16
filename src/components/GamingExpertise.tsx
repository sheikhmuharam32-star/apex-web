import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gamepad2, Sword, Shield, Compass, Sparkles, CheckCircle } from "lucide-react";

export default function GamingExpertise() {
  const [selectedGame, setSelectedGame] = useState<number>(0);

  const games = [
    {
      title: "Assassin's Creed",
      subtitle: "Stealth Precision & Cinematic Parkour Flow",
      specialty: "Cinematic walkthroughs capturing full sync routes, specialized HUD-free paths, and flawless climbing choreography.",
      highlights: [
        "100% Sync Mastery",
        "Zero HUD Cinematic Camera Controls",
        "Expert Parkour Path Flow Mapping",
        "Historical Exploration Context Guides"
      ],
      icon: <Compass className="w-5 h-5 text-red-400" />,
      color: "from-red-500/10 to-transparent",
      borderColor: "hover:border-red-500/30",
      activeBorder: "border-red-500",
      accentText: "text-red-400"
    },
    {
      title: "God of War",
      subtitle: "Elite Combat & Mythical Lore Flow",
      specialty: "High-retention playthroughs focused on seamless boss mechanics, optimal combo strings, and deep immersion of mythical realms.",
      highlights: [
        "Boss-Fight Choreography (Flawless Runs)",
        "Deep Lore Environmental Highlights",
        "Tactical Combo & Combat Timing Guides",
        "Epic Narrative Arc Pacing"
      ],
      icon: <Sword className="w-5 h-5 text-amber-500" />,
      color: "from-amber-500/10 to-transparent",
      borderColor: "hover:border-amber-500/30",
      activeBorder: "border-amber-500",
      accentText: "text-amber-400"
    },
    {
      title: "Prince of Persia",
      subtitle: "Platform Acrobatics & Time-Bending Tricks",
      specialty: "Intricate puzzle-solving sequence captures, responsive wall-run choreography, and time-reversal sequence optimization.",
      highlights: [
        "Perfect Acrobatic Puzzle Solves",
        "Platforming Sequence Smoothness",
        "Collectible / Secret Passage Indexing",
        "High-Speed Speedrun Segment Production"
      ],
      icon: <Gamepad2 className="w-5 h-5 text-purple-400" />,
      color: "from-purple-500/10 to-transparent",
      borderColor: "hover:border-purple-500/30",
      activeBorder: "border-purple-500",
      accentText: "text-purple-400"
    }
  ];

  return (
    <section id="gaming-expertise" className="py-24 bg-[#0a0a0b] border-t border-white/10 px-4 relative">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1">
              <Gamepad2 className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Gaming Domain Mastery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Elite Gaming Walkthrough Production
            </h2>
            <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
              We create flawless, cataloged walkthrough experiences for legendary gaming franchises. No generic speedruns—only pixel-perfect cinematic storytelling guides.
            </p>
          </div>
          
          <div className="flex gap-2">
            <span className="bg-white/5 border border-white/10 rounded-xl px-2.5 py-1 text-[11px] font-mono text-zinc-400">
              FRAME_RATE: 60FPS
            </span>
            <span className="bg-white/5 border border-white/10 rounded-xl px-2.5 py-1 text-[11px] font-mono text-zinc-400">
              RESOLUTION: 4K ULTRA
            </span>
          </div>
        </div>

        {/* Dashboard Grid style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Game Selector cards */}
          <div className="lg:col-span-4 space-y-4">
            {games.map((game, idx) => {
              const isSelected = selectedGame === idx;
              return (
                <button
                  key={game.title}
                  onClick={() => setSelectedGame(idx)}
                  className={`w-full text-left cursor-pointer p-5 rounded-2xl border transition-all flex items-start gap-4 block ${
                    isSelected 
                      ? `${game.activeBorder} bg-white/10 shadow-lg` 
                      : "border-white/5 bg-white/5 hover:bg-white/[0.08]"
                  } ${game.borderColor}`}
                >
                  <div className={`p-2.5 rounded-xl bg-[#0a0a0b] border border-white/10 ${isSelected ? game.accentText : "text-zinc-500"}`}>
                    {game.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">{game.title}</h3>
                    <p className="text-xs text-zinc-500 font-sans mt-0.5 line-clamp-1">{game.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right panel: Active Game walk-through detail page */}
          <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-between shadow-xl">
            {/* Background spotlight matching the game style */}
            <div className={`absolute inset-0 bg-gradient-to-br ${games[selectedGame].color} opacity-40`} />
            
            <div className="relative z-10 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedGame}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Active Blueprint View</span>
                      <h4 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                        {games[selectedGame].title} Walkthrough Spec
                      </h4>
                    </div>
                    <Sparkles className={`w-5 h-5 ${games[selectedGame].accentText}`} />
                  </div>

                  <p className="text-zinc-300 font-sans leading-relaxed text-sm sm:text-base">
                    {games[selectedGame].specialty}
                  </p>

                  <div className="border-t border-white/10 pt-6 space-y-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5" /> High Retention Deliverables
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {games[selectedGame].highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2.5 bg-white/[0.03] p-3 rounded-2xl border border-white/10">
                          <CheckCircle className={`w-4 h-4 shrink-0 ${games[selectedGame].accentText}`} />
                          <span className="text-zinc-300 text-xs sm:text-sm font-sans">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative z-10 border-t border-white/5 pt-6 mt-8 flex justify-between items-center text-[10px] font-mono text-zinc-500 font-bold">
              <span>WALKTHROUGH_ID: APEX_GAME_0{selectedGame + 1}</span>
              <span className="uppercase">CHOP_RATE_OPTIMIZATION: CONFIRMED</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
