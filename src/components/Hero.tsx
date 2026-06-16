import { motion } from "motion/react";
import { Sparkles, ArrowDownRight, Video, Target, Gamepad2, Award } from "lucide-react";

interface HeroProps {
  onCtacall: () => void;
  onExplore: () => void;
}

export default function Hero({ onCtacall, onExplore }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0b] py-20 px-4">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10" />
      
      {/* Glowing atmospheric circles */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full py-1.5 px-4 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-mono tracking-wider uppercase text-zinc-400">Next-Gen Digital Craftsmanship</span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        </motion.div>

        {/* Title */}
        <motion.h1 
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1]"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Artistry <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Meets Precision.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-zinc-400 font-sans text-base sm:text-lg max-w-2xl mt-6 leading-relaxed italic border-l-2 border-blue-500/30 pl-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          "Our mission: To redefine digital narratives through technical performance and creative storytelling. We don't just create; we optimize for results."
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mt-10 justify-center w-full sm:w-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button 
            onClick={onCtacall}
            className="group relative cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-br from-blue-600 to-blue-800 text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-blue-500/10 hover:shadow-blue-500/25 transition-all duration-300"
          >
            Request Discovery Call
            <ArrowDownRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform text-cyan-300" />
          </button>
          
          <button 
            onClick={onExplore}
            className="cursor-pointer flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white py-4 px-8 rounded-2xl font-medium transition-all"
          >
            Explore Services
          </button>
        </motion.div>

        {/* Micro-Features Grid / Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 w-full border-t border-white/10 pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-display font-extrabold text-white">50M+</span>
            <span className="text-xs text-zinc-500 uppercase tracking-widest mt-1 font-mono flex items-center gap-1">
              <Video className="w-3 h-3 text-red-400" /> Impressions Driven
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-display font-extrabold text-white">98%</span>
            <span className="text-xs text-zinc-500 uppercase tracking-widest mt-1 font-mono flex items-center gap-1">
              <Target className="w-3 h-3 text-cyan-400" /> Video Retention
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-display font-extrabold text-white">4.9/5</span>
            <span className="text-xs text-zinc-500 uppercase tracking-widest mt-1 font-mono flex items-center gap-1">
              <Award className="w-3 h-3 text-purple-400" /> Client Rating
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-display font-extrabold text-white">100%</span>
            <span className="text-xs text-zinc-500 uppercase tracking-widest mt-1 font-mono flex items-center gap-1">
              <Gamepad2 className="w-3 h-3 text-blue-400" /> SLA Deadline Meet
            </span>
          </div>
        </motion.div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 text-zinc-900 font-mono text-xs select-none pointer-events-none hidden md:block">
        APEX_CREATIVE_STUDIO // INC. 2026
      </div>
      <div className="absolute top-8 right-8 text-zinc-900 font-mono text-xs select-none pointer-events-none hidden md:block">
        40.7128° N, 74.0060° W // EST.
      </div>
    </section>
  );
}
