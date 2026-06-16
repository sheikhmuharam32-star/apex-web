import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Shield, Compass } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"precision" | "innovation" | "artistry">("precision");

  const pillars = {
    precision: {
      title: "Unyielding Precision",
      tagline: "Success is measured in pixels and frames.",
      description: "We don't believe in guesswork. Every frame curve, audio transient, and design grid line is engineered according to optimized standards. Our meticulous layout guidelines and rigorous internal reviews ensure zero-tolerance for visual slip-ups.",
      icon: <Shield className="w-5 h-5 text-blue-400" />
    },
    innovation: {
      title: "Pioneering Innovation",
      tagline: "Always on the edge of the visual horizon.",
      description: "Whether it is optimized workflow systems, AI-powered render-enhancements, or next-generation CapCut pacing, we deploy tools and custom hardware setups that give small-to-mid agencies a severe production edge in highly saturated markets.",
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />
    },
    artistry: {
      title: "Digital Artistry",
      tagline: "Crafting narratives that leave permanent impressions.",
      description: "Our core is storytelling. Deep within every specialized gaming walkthrough, custom 3D animal character, or agency UI landing experience lies an emotional baseline meant to evoke curiosity, capture authority, and build true brand loyalty.",
      icon: <Compass className="w-5 h-5 text-purple-400" />
    }
  };

  return (
    <section id="about" className="py-24 bg-[#0a0a0b] border-t border-white/10 px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column: Static Narrative */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-blue-350">Our Core Mission</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
            Our Commitment to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Precision, Innovation & Artistry</span>
          </h2>
          
          <p className="text-zinc-405 font-sans leading-relaxed">
            Founded on the principle of creative integrity, Apex Creative Studio empowers forward-thinking agencies, creators, and brands by elevating their primary visual outputs. We don't just complete projects—we master them.
          </p>

          <p className="text-zinc-500 text-sm font-sans italic">
            "In an age of endless noise, quiet craftsmanship is the loudest authority."
          </p>
        </div>

        {/* Right column: Interactive Core Pillars with Animations */}
        <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
          <div className="flex gap-2 sm:gap-3 border-b border-white/10 pb-4 mb-6 overflow-x-auto">
            {Object.keys(pillars).map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`cursor-pointer px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    isActive 
                      ? "bg-white/5 text-blue-400 border border-blue-500/30 shadow-inner" 
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {pillars[key as keyof typeof pillars].icon}
                  {key}
                </button>
              );
            })}
          </div>

          <div className="min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <h3 className="text-2xl font-display font-bold text-white">
                    {pillars[activeTab].title}
                  </h3>
                  <p className="text-sm font-sans text-cyan-400 italic">
                    {pillars[activeTab].tagline}
                  </p>
                </div>
                
                <p className="text-zinc-300 font-sans leading-relaxed text-sm sm:text-base">
                  {pillars[activeTab].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="border-t border-white/10 pt-6 mt-6 flex justify-between items-center text-xs font-mono text-zinc-500">
              <span>SYSTEM_METRIC: OPERATIONAL</span>
              <span className="text-cyan-400/80">LATENCY: 0.00ms</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
