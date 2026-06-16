import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Star, Users, Briefcase, Zap, Flame } from "lucide-react";

export default function SuccessStories() {
  const [activeStory, setActiveStory] = useState<number>(0);

  const stories = [
    {
      title: "The 1M Walkthrough Ramp",
      client: "Unbound Games Network",
      project: "Assassin's Creed Walkthrough Series",
      duration: "14 Days Continuous Delivery",
      metrics: { primary: "1.4M views reached", secondary: "94.2% retention rate" },
      narrative: "Facing a strict international release schedule, we delivered 45 seamless HUD-free walkthrough clips on an absolute 24-hour turnaround basis. The files arrived early, perfectly edited and color-corrected, exceeding our typical conversion indices by 34%.",
      goalMet: "Exceeded SLA milestones by 2 hours each day",
      rating: 5
    },
    {
      title: "Educational 3D Animal Campaign",
      client: "Atlas Kids Learning Inc.",
      project: "Fox & Bear Story Series",
      duration: "30-Day Turnaround Milestones",
      metrics: { primary: "45% sub conversion boost", secondary: "85% retention on clip focus" },
      narrative: "Created 10 stylized 3D animal storyteller assets. By coordinating custom topology rules with warm comforting color patterns, we delivered rich storybook scenarios that drove organic audience retention up to unmatched heights.",
      goalMet: "Released 4 days prior to campaign scheduling targets",
      rating: 5
    },
    {
      title: "Direct Agency UX Redesign",
      client: "Vivid Agency Group",
      project: "Creative Portfolio System",
      duration: "3 Weeks Design & Code",
      metrics: { primary: "140% interaction scale-up", secondary: "0.4s average loaded paint" },
      narrative: "We designed and coded a lightning-fast responsive Next.js portfolio website for small-to-mid size brands. Incorporating custom Tailwind tokens and interactive hover indicators, we increased lead generation pipeline numbers significantly.",
      goalMet: "Exceeded Lighthouse optimization scores (Lighthouse 99)",
      rating: 5
    }
  ];

  return (
    <section id="success-stories" className="py-24 bg-[#0a0a0b] border-t border-white/10 px-4 relative">
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
              <Users className="w-3.5 h-3.5 text-cyan-404" />
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Client Success</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Our Success Stories & Case Studies
            </h2>
            <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
              We stand by our absolute commitment to meeting tight deadlines and exceeding digital quality expectations. Here is how we delivered for leading creators.
            </p>
          </div>

          <div className="flex gap-2">
            <span className="bg-blue-950/40 border border-blue-900/40 rounded-xl px-2.5 py-1 text-[11px] font-mono text-cyan-400 font-bold">
              SLA Compliance: 100% Guaranteed
            </span>
          </div>
        </div>

        {/* Stories interactive dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left quick stories select */}
          <div className="lg:col-span-4 space-y-3.5">
            {stories.map((story, idx) => {
              const isActive = activeStory === idx;
              return (
                <button
                  key={story.title}
                  onClick={() => setActiveStory(idx)}
                  className={`w-full text-left cursor-pointer p-5 rounded-2xl border transition-all flex items-start gap-4 block ${
                    isActive 
                      ? "bg-white/10 border-blue-500 shadow-lg shadow-blue-500/10" 
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex-1">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1 font-bold">
                      {story.client}
                    </span>
                    <h3 className="font-display font-bold text-white text-base leading-tight tracking-tight">
                      {story.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right active client narrative panel */}
          <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 relative min-h-[380px] flex flex-col justify-between overflow-hidden shadow-xl font-bold">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[60px]" />
            
            <div className="space-y-6 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStory}
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-start gap-4 flex-wrap">
                    <div>
                      <span className="bg-blue-500/10 text-cyan-400 border border-blue-500/20 rounded-xl px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest font-bold">
                        {stories[activeStory].project}
                      </span>
                      <h4 className="text-2xl font-display font-bold text-white tracking-tight mt-2">
                        {stories[activeStory].title}
                      </h4>
                    </div>

                    {/* Highly aesthetic Star Rating */}
                    <div className="flex gap-1 bg-[#0a0a0b] px-2.5 py-1.5 rounded-xl border border-white/5">
                      {Array.from({ length: stories[activeStory].rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-zinc-300 font-sans leading-relaxed text-sm sm:text-base font-normal">
                    "{stories[activeStory].narrative}"
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0a0a0b] p-4 rounded-xl border border-white/5 font-normal">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Primary Metric</span>
                      <p className="text-xl font-mono font-bold text-cyan-400 mt-1">
                        {stories[activeStory].metrics.primary}
                      </p>
                    </div>
                    <div className="bg-[#0a0a0b] p-4 rounded-xl border border-white/5 font-normal">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Secondary Metric</span>
                      <p className="text-xl font-mono font-bold text-white mt-1">
                        {stories[activeStory].metrics.secondary}
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-950/40 border border-blue-500/20 p-3.5 rounded-xl flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-cyan-404" />
                    <span className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
                      Goal Met: {stories[activeStory].goalMet}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative z-10 border-t border-white/5 pt-6 mt-8 flex justify-between items-center text-[10px] font-mono text-zinc-500 font-bold">
              <span>CASE_ID: APEX_STORY_0{activeStory + 1}</span>
              <span className="uppercase text-cyan-400">Client validation status: VERIFIED</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
