import { useState } from "react";
import { Calendar, Layers, Clock, Flame, Award, Lightbulb } from "lucide-react";

export default function ContentStrategy() {
  const [activePlan, setActivePlan] = useState<"accelerated" | "sustainable">("sustainable");

  const sustainableCalendar = [
    { day: "Mon", type: "Shorts / TikTok", title: "CapCut Speed Ramp snippet (15s)", engagement: "High Algorithmic Index" },
    { day: "Tue", type: "Production", title: "Walkthrough timeline editing & visual grades", engagement: "Buffer Prep" },
    { day: "Wed", type: "Main Upload", title: "God of War Boss-fight cinematic walkthrough (15 mins)", engagement: "Max Subscriber Bond" },
    { day: "Thu", type: "Shorts / Reels", title: "Under-30s acrobatics clip (Prince of Persia)", engagement: "Discovery Drift" },
    { day: "Fri", type: "Tutorial Upload", title: "High-CTR Graphic masterclass explanation (10 mins)", engagement: "Deep Authority" },
    { day: "Sat", type: "Interactive Loop", title: "Analytics review & Thumbnail adjustments", engagement: "A/B CTR Polish" },
    { day: "Sun", type: "Planning", title: "Next week script blueprint draft & relaxation", engagement: "Zero Burnout" }
  ];

  const acceleratedCalendar = [
    { day: "Mon", type: "Shorts / TikTok", title: "CapCut Speed Ramp (15s)", engagement: "Daily Reach" },
    { day: "Tue", type: "Main Upload", title: "Assassin's Creed 100% sync Walkthrough Part 1", engagement: "Ad-revenue Spike" },
    { day: "Wed", type: "Shorts", title: "Combos highlight (God of War) clip", engagement: "Reach Index" },
    { day: "Thu", type: "Main Upload", title: "Prince of Persia full puzzle solves", engagement: "Search Traffic" },
    { day: "Fri", type: "Shorts", title: "Behind-the-scenes lighting tips", engagement: "Dynamic Reach" },
    { day: "Sat", type: "Interactive Loop", title: "Thumbnail changes based on CTR tracking", engagement: "Click Save" },
    { day: "Sun", type: "Buffer Creator", title: "Pre-recording next week walkthrough parts", engagement: "No Breaks" }
  ];

  const currentCalendar = activePlan === "sustainable" ? sustainableCalendar : acceleratedCalendar;

  return (
    <section id="content-strategy" className="py-24 bg-[#030303] border-t border-white/10 px-4 relative">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
              <Calendar className="w-3.5 h-3.5 text-cyan-404" />
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Content Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Sustainable Scheduling & Strategy
            </h2>
            <p className="text-zinc-404 max-w-xl text-sm sm:text-base">
              We help creators survive and excel. By balancing rapid-fire Shorts visibility with deep authority-focused walkthroughs, we build lasting, monetizable digital platforms.
            </p>
          </div>

          {/* Toggle buttons to switch calendar state */}
          <div className="flex bg-[#0a0a0b] border border-white/10 p-1.5 rounded-xl font-mono text-xs shadow-xl h-fit">
            <button
              onClick={() => setActivePlan("sustainable")}
              className={`cursor-pointer px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition ${
                activePlan === "sustainable" ? "bg-blue-500 text-white font-bold shadow-lg" : "text-zinc-400 hover:text-white"
              }`}
            >
              Sustainable (Weekly)
            </button>
            <button
              onClick={() => setActivePlan("accelerated")}
              className={`cursor-pointer px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition ${
                activePlan === "accelerated" ? "bg-blue-500 text-white font-bold shadow-lg" : "text-zinc-400 hover:text-white"
              }`}
            >
              Accelerated Peak (Growth)
            </button>
          </div>
        </div>

        {/* Content calendar dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Main Calendar Matrix Table */}
          <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-2xl p-6 overflow-x-auto min-w-full shadow-xl">
            <div className="min-w-[600px] space-y-3.5">
              <div className="grid grid-cols-12 font-mono text-[10px] text-zinc-500 uppercase tracking-widest pb-3 border-b border-white/5 font-bold">
                <div className="col-span-1">Day</div>
                <div className="col-span-3">Asset category</div>
                <div className="col-span-5">Output title target</div>
                <div className="col-span-3 text-right">Primary target</div>
              </div>

              {currentCalendar.map((item) => (
                <div key={item.day} className="grid grid-cols-12 items-center py-3 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded-xl transition duration-200">
                  <div className="col-span-1 font-mono font-bold text-sm text-zinc-450">{item.day}</div>
                  <div className="col-span-3">
                    <span className="bg-[#0a0a0b] border border-white/5 rounded-xl px-2.5 py-1 text-[11px] font-mono text-zinc-304">
                      {item.type}
                    </span>
                  </div>
                  <div className="col-span-5 text-xs sm:text-sm font-sans font-medium text-white">{item.title}</div>
                  <div className="col-span-3 text-right font-mono text-[11px] text-cyan-400 font-bold">{item.engagement}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Strategy Guidelines Sidebar */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-xl font-bold">
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                <Lightbulb className="w-5 h-5 text-cyan-404" />
                <h3 className="font-display font-bold text-white text-lg tracking-tight">Strategy Insights</h3>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-cyan-404 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-white tracking-tight">The 24-Hour Buffer Rule</h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-sans font-normal">
                      Never render elements on release day. Our internal schedule dictates a minimum 24-hour buffer zone for quality checking before final platform push.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Flame className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-white tracking-tight">Spike vs Stability</h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-sans font-normal">
                      Shorts raise immediate search indexing triggers whereas full length walkthroughs retain long-term subscriber equity. We maintain a healthy 3:2 balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-6 mt-8 flex justify-between items-center text-[10px] font-mono text-zinc-500">
              <span>PLANNER_REVISION: SECURED</span>
              <span>VER: 5.0.1</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
