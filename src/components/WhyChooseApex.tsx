import { Shield, Sparkles, Cpu, Award } from "lucide-react";

export default function WhyChooseApex() {
  const usps = [
    {
      title: "Steadfast Reliability",
      desc: "We commit to strict milestone deadlines. No ghosting, no sudden custom delays. All assets undergo redundant cloud-backups to guarantee safety.",
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      tag: "SLA_PROTECTED"
    },
    {
      title: "Advanced Creative Vision",
      desc: "Generic design is white noise. We cultivate customized stylized 3D animals, cinematic game camera work, and high-retention visual hooks.",
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      tag: "ORIGINAL_DNA"
    },
    {
      title: "Extreme Hardware Optimization",
      desc: "We render layouts on dual-RTX 4090 render engines. We compress web bundles down to secure 0.4s contentful paints across mobile screens.",
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      tag: "MAX_HARDWARE_LIMIT"
    }
  ];

  return (
    <section id="why-choose-apex" className="py-24 bg-[#0a0a0b] border-t border-white/10 px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="text-center md:max-w-lg mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
            <Award className="w-3.5 h-3.5 text-cyan-404" />
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Our Edge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Why Choose Apex Creative?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            We reject templated averages. Our digital solutions optimize audience reach, brand authority, and client retention parameters.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {usps.map((usp, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 hover:border-white/20 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition duration-300 relative group shadow-xl font-bold">
              <div className="space-y-6">
                <div className="flex justify-between items-center font-normal">
                  <div className="p-3 bg-[#0a0a0b] rounded-xl border border-white/5 group-hover:border-white/10 transition">
                    {usp.icon}
                  </div>
                  <span className="text-[9px] font-mono text-cyan-404 bg-blue-950/40 border border-blue-500/10 rounded-xl px-2.5 py-0.5 font-bold">
                    {usp.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-white text-lg sm:text-lxl tracking-tight">
                    {usp.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-sans font-normal">
                    {usp.desc}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 mt-8 flex justify-between items-center text-[10px] font-mono text-zinc-500">
                <span>USP_NODE_0{idx + 1}</span>
                <span>SYSTEM: READY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
