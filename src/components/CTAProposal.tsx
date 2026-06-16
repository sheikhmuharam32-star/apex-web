import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coins, Mail, User, ShieldCheck, CheckCircle, MessagesSquare, Sparkles } from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  cost: number;
}

export default function CTAProposal() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["video-editing", "thumbnail-design"]);
  const [projectTier, setProjectTier] = useState<"Standard" | "Growth" | "Apex Elite">("Growth");
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userMessage, setUserMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const services: ServiceItem[] = [
    { id: "video-editing", name: "Professional CapCut Editing & Speed Pacing", cost: 1200 },
    { id: "thumbnail-design", name: "High-CTR Custom Graphical Thumbnails", cost: 350 },
    { id: "walkthrough-prod", name: "Specialized HUD-Free Gaming Walkthroughs", cost: 1800 },
    { id: "animation-3d", name: "Stylized 3D Animal Storyteller Design", cost: 3200 },
    { id: "web-dev", name: "Speed-Optimized Next.js/Tailwind Agency Site", cost: 3800 }
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Live budget calculations with tier multipliers (Standard x1.0, Growth x1.25, Apex Elite x1.75)
  const getSubtotal = () => {
    const serviceCost = services
      .filter((s) => selectedServices.includes(s.id))
      .reduce((sum, s) => sum + s.cost, 0);
    
    const multipliers = { Standard: 1.0, Growth: 1.25, "Apex Elite": 1.75 };
    return Math.round(serviceCost * multipliers[projectTier]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail) return;
    setIsSubmitting(true);
    
    // Simulate compilation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset after some time
      setTimeout(() => {
        setSubmitSuccess(false);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setSelectedServices(["video-editing"]);
      }, 7000);
    }, 1500);
  };

  return (
    <section id="cta-proposal" className="py-24 bg-[#0a0a0b] border-t border-white/10 px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center md:max-w-xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
            <MessagesSquare className="w-3.5 h-3.5 text-cyan-404" />
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Collaborate with apex</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight text-center">
            Launch Your Creative Discovery Call
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Configure your custom digital requirement list below to receive a live project budget draft and submit your discovery request directly to our agency managers.
          </p>
        </div>

        {/* Form Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Custom Estimator checklist */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl font-bold">
            <h3 className="font-display font-bold text-lg text-white border-b border-white/5 pb-3 tracking-tight">
              1. Customize Your Requirement List
            </h3>

            <div className="space-y-3">
              {services.map((item) => {
                const checked = selectedServices.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleService(item.id)}
                    className={`w-full text-left cursor-pointer p-4 rounded-xl border transition-all flex justify-between items-center block font-bold ${
                      checked 
                        ? "bg-white/10 border-blue-500 text-white" 
                        : "bg-white/5 border-white/10 text-zinc-400 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${checked ? "bg-blue-500 border-blue-500" : "border-white/10 bg-[#0a0a0b]"}`}>
                        {checked && <div className="w-1.5 h-1.5 bg-white rounded-xs" />}
                      </div>
                      <span className="text-xs sm:text-sm font-sans font-medium text-white">{item.name}</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 font-bold">${item.cost}</span>
                  </button>
                );
              })}
            </div>

            {/* Scale multiplier tiers */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                Select Project Tier Multiplier
              </span>
              <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                {(["Standard", "Growth", "Apex Elite"] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setProjectTier(tier)}
                    className={`cursor-pointer py-2 px-3.5 rounded-lg border text-center transition-all ${
                      projectTier === tier
                        ? "bg-blue-500 text-white font-bold border-blue-400 shadow-md"
                        : "bg-[#0a0a0b] border border-white/5 text-zinc-400 hover:text-white"
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel: Live Total & Submission */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative min-h-[460px] shadow-xl font-bold">
            {submitSuccess ? (
              <AnimatePresence>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center my-auto"
                >
                  <div className="w-14 h-14 bg-blue-500/15 border border-blue-500 rounded-full flex items-center justify-center mx-auto text-cyan-400">
                    <CheckCircle className="w-8 h-8 font-extrabold" />
                  </div>
                  <div className="space-y-2 font-bold">
                    <h4 className="font-display font-extrabold text-white text-xl tracking-tight">Inquiry Submitted</h4>
                    <p className="text-xs text-zinc-400 font-sans max-w-xs mx-auto font-normal">
                      Our agency director will email you within 12 standard business hours to lock in your requested discovery call calendar link.
                    </p>
                  </div>
                  <div className="bg-[#0a0a0b] p-4 border border-white/5 rounded-xl font-mono text-[10px] text-zinc-400 text-left max-w-sm mx-auto space-y-1 font-normal">
                    <p className="text-cyan-404 font-bold">STATUS: COMPILATION_SUCCESS</p>
                    <p>RECIPIENT: sheikhmuharam32@gmail.com</p>
                    <p>TOTAL_ESTIMATED_CONTRACT: ${getSubtotal()}</p>
                    <p>VERIPASS: APEX8899X</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-white/5 pb-4 flex justify-between items-baseline">
                  <span className="font-display font-bold text-white text-lg tracking-tight">Discovery Estimate</span>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-zinc-500 block font-bold">Draft Contract</span>
                    <span className="text-3xl font-mono font-black text-cyan-400">${getSubtotal()}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-500 uppercase flex items-center gap-1 font-bold">
                      <User className="w-3.5 h-3.5" /> Full name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Salim Sheikh"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full bg-[#0a0a0b] border border-white/10 hover:border-white/20 focus:border-blue-500 focus:outline-none rounded-xl p-3 text-sm font-sans text-white transition duration-200 font-normal"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-500 uppercase flex items-center gap-1 font-bold">
                      <Mail className="w-3.5 h-3.5" /> Client email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. partner@agency.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full bg-[#0a0a0b] border border-white/10 hover:border-white/20 focus:border-blue-500 focus:outline-none rounded-xl p-3 text-sm font-sans text-white transition duration-200 font-normal"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-500 uppercase font-bold">Additional context briefs</label>
                    <textarea
                      placeholder="Describe target channel, project milestone dates, or scaling expectations."
                      value={userMessage}
                      onChange={(e) => setUserMessage(e.target.value)}
                      rows={3}
                      className="w-full bg-[#0a0a0b] border border-white/10 hover:border-white/20 focus:border-blue-500 focus:outline-none rounded-xl p-3 text-sm font-sans text-white transition duration-200 font-normal"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || selectedServices.length === 0}
                  className="w-full cursor-pointer flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 active:scale-[0.98] disabled:bg-[#0a0a0b] disabled:text-zinc-650 border border-blue-400 text-white font-bold py-3.5 rounded-xl transition duration-300 shadow-lg shadow-blue-500/10"
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 rounded-full border border-white border-t-transparent animate-spin" />
                  ) : (
                    "Compile Discovery Request"
                  )}
                </button>
              </form>
            )}

            <div className="border-t border-white/5 pt-5 mt-6 flex justify-between items-center text-[10px] font-mono text-zinc-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> End-to-end encrypted inquiry
              </span>
              <span>VER: PRO_DISC_V1</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
