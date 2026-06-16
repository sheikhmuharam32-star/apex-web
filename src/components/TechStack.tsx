import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Award, Layers } from "lucide-react";

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<"hardware" | "software">("hardware");

  const hardwareSpecs = [
    { name: "Processor Core", detail: "AMD Ryzen Threadripper 7965X (24 Cores / 48 Threads, 5.3 GHz boost)", tag: "COMPUTE" },
    { name: "Render GPU Power", detail: "Dual NVIDIA RTX 4090 (48GB GDDR6X total, custom Liquid Cooling)", tag: "STYLUS_RENDER" },
    { name: "Data Channels", detail: "128GB DDR5 ECC Professional Workstation Memory (6000MHz latency)", tag: "MEMORY" },
    { name: "Storage Matrices", detail: "8TB PCIe Gen 5 NVMe SSDs configured in RAID 0 (14,000 MB/s speed)", tag: "STORAGE" },
    { name: "Visual Monitors", detail: "ASUS ProArt PA32UCG 4K HDR 1600 nits, Calman Certified 99.8% DCI-P3", tag: "DISP_CALIB" }
  ];

  const softwareSpecs = [
    { name: "CapCut Pro Studio", detail: "Dynamic timeline frame cutting, AI speech segmentation, direct proxy workflows", tag: "TIMELINE" },
    { name: "Substance & Blender", detail: "Stylized character topology adjustments and cycles micro-render passes", tag: "3D_SCULPT" },
    { name: "Adobe Photoshop / Illustrator", detail: "Multi-layered psd canvas structures for ultra-definition high-CTR graphics", tag: "THUMBNAIL" },
    { name: "Tailwind / TS / React", detail: "Lightweight, responsive layouts for small-to-mid agency core platforms", tag: "D_DEV_ENG" },
    { name: "Redshift Renderer", detail: "Ray-traced calculations for warm educational animation lighting scenes", tag: "RAY_TRACE" }
  ];

  const specsToDisplay = activeTab === "hardware" ? hardwareSpecs : softwareSpecs;

  return (
    <section id="tech-stack" className="py-24 bg-[#030303] border-t border-white/10 px-4 relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Mainframe Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Our Professional Technical Stack
            </h2>
            <p className="text-zinc-404 max-w-xl text-sm sm:text-base">
              Quality is backed by exceptional power. We host specialized hardware accelerators and elite software pipelines to maintain high operational standards and meet tight deadlines.
            </p>
          </div>

          {/* Toggle Tab Buttons */}
          <div className="flex bg-[#0a0a0b] border border-white/10 p-1.5 rounded-xl font-mono text-xs shadow-xl h-fit">
            <button
              onClick={() => setActiveTab("hardware")}
              className={`cursor-pointer px-4 py-2 rounded-lg transition ${activeTab === "hardware" ? "bg-blue-500 text-white font-bold shadow-lg" : "text-zinc-400 hover:text-white"}`}
            >
              Hardware specs
            </button>
            <button
              onClick={() => setActiveTab("software")}
              className={`cursor-pointer px-4 py-2 rounded-lg transition ${activeTab === "software" ? "bg-blue-500 text-white font-bold shadow-lg" : "text-zinc-400 hover:text-white"}`}
            >
              Software specs
            </button>
          </div>
        </div>

        {/* Station Blueprint Spec Sheet layout */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl font-bold">
          {/* Mainframe design grids */}
          <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-zinc-500 tracking-widest hidden md:block select-none">
            DEVICE_SYSCODE_90.091 // STAT_OPTIMAL
          </div>

          <div className="min-h-[300px] flex flex-col justify-between">
            <div className="divide-y divide-white/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-1 divide-y divide-white/5"
                >
                  {specsToDisplay.map((spec, idx) => (
                    <div key={idx} className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 first:pt-0 last:pb-0">
                      <div className="space-y-1 max-w-xl">
                        <span className="text-xs font-mono text-cyan-404 block tracking-wider font-bold">
                          {spec.name}
                        </span>
                        <p className="text-zinc-200 text-sm sm:text-base font-sans font-medium font-normal">
                          {spec.detail}
                        </p>
                      </div>

                      <div className="bg-[#0a0a0b] border border-white/5 rounded-xl px-2.5 py-1 text-[10px] font-mono text-zinc-400 self-start sm:self-center uppercase tracking-widest font-normal">
                        {spec.tag}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="border-t border-white/5 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-zinc-500 gap-4">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-zinc-400" /> All rendering nodes undergo regular color rec-709 validations.
              </span>
              <span>HARDWARE_LATENCY: LOCKED_0.02ms</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
