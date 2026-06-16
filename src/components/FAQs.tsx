import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronRight, HelpCircle as FaqIcon } from "lucide-react";

interface FAQBlock {
  q: string;
  a: string;
  cat: string;
}

export default function FAQs() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQBlock[] = [
    {
      q: "How many revisions can we expect on animation or post-production phases?",
      a: "Our standard agreements include 3 complete feedback rounds. Each feedback cycle is tracked on our client boards with precise deadline targets. Minor pixel alignments or export re-sizes are always fully handled without extra billing.",
      cat: "REVISIONS & PROTOTYPES"
    },
    {
      q: "What makes CapCut Pro workflows faster than legacy Adobe workflows?",
      a: "Our custom workstation accelerators are fine-tuned for CapCut Proxy integration. We bypass typical rendering bottlenecks, achieving up to 45% faster final exports. This speeds up standard feedback round turnarounds dramatically.",
      cat: "TECHNICAL WORKFLOW"
    },
    {
      q: "Can the 3D animal characters be integrated directly into Unreal Engine or Unity?",
      a: "Yes! All stylized 3D animal models are sculpted with fully clean, quad-only edge topology codes. We export rigged meshes in industry-standard formats (.FBX, .Blend, .USDZ) equipped with standard bone names.",
      cat: "3D ANIMATION DEPLOYMENT"
    },
    {
      q: "How do you guarantee HUD-free walkthrough clips on console game walkthroughs?",
      a: "We configure private local console settings paired with specialized capture nodes (Elgato 4K60 Pro). All cinematic walkthrough runs (God of War, Assassin's Creed) are captured without HUD indicators.",
      cat: "CAMERAS & WALKTHROUGHS"
    },
    {
      q: "Do you construct websites with templated builders (like Wordpress or Wix)?",
      a: "No. We construct custom, high-LCP lightweight code using React, Tailwind CSS, and Next.js, optimizing mobile response states. This prevents script bloat and secures Lighthouse scores above 95.",
      cat: "WEB DEVELOPMENT & UX"
    }
  ];

  return (
    <section id="faqs" className="py-24 bg-[#030303] border-t border-white/10 px-4 relative">
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10 font-bold">
        
        {/* Header Block */}
        <div className="text-center md:max-w-lg mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
            <FaqIcon className="w-3.5 h-3.5 text-cyan-404" />
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Frequently Asked</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight text-center">
            Common Client Questions
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-normal">
            Find immediate answers on revisions, 3D character integration, walkthrough formats, and speed optimization guidelines.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 pt-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl transition duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left cursor-pointer p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 block"
                >
                  <div className="space-y-1 flex-1">
                    <span className="text-[9px] font-mono text-cyan-404 uppercase tracking-widest block font-bold">
                      {faq.cat}
                    </span>
                    <h3 className="font-display font-bold text-white text-sm sm:text-base leading-snug tracking-tight">
                      {faq.q}
                    </h3>
                  </div>
                  
                  <div className={`p-1.5 rounded-xl bg-[#0a0a0b] border border-white/5 text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-90 text-cyan-400" : ""}`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-zinc-305 text-xs sm:text-sm leading-relaxed font-sans border-t border-white/5 bg-[#0a0a0b]/40 font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4 font-normal">
          <p className="text-xs text-zinc-500 font-sans">
            Have a highly specialized project query? Ask us directly in the inquiry workspace below.
          </p>
        </div>

      </div>
    </section>
  );
}
