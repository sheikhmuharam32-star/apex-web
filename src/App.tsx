import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import GamingExpertise from "./components/GamingExpertise";
import VideoEditing from "./components/VideoEditing";
import ThumbnailMastery from "./components/ThumbnailMastery";
import Animation3D from "./components/Animation3D";
import WebDevUX from "./components/WebDevUX";
import Workflow from "./components/Workflow";
import TechStack from "./components/TechStack";
import SuccessStories from "./components/SuccessStories";
import ContentStrategy from "./components/ContentStrategy";
import WhyChooseApex from "./components/WhyChooseApex";
import FAQs from "./components/FAQs";
import CTAProposal from "./components/CTAProposal";
import { Sparkles, ArrowUp, Menu, X, Cpu, Github, Linkedin, Globe } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Monitor scroll behavior for progressive section highlighting and sticky top header styles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        "hero", "about", "philosophy", "gaming-expertise", 
        "video-editing", "thumbnail-mastery", "animation-3d", 
        "web-dev-ux", "workflow", "tech-stack", "success-stories", 
        "content-strategy", "why-choose-apex", "faqs", "cta-proposal"
      ];

      for (const sect of sections) {
        const checkElement = document.getElementById(sect);
        if (checkElement) {
          const bounding = checkElement.getBoundingClientRect();
          if (bounding.top <= 200 && bounding.bottom >= 200) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSegment = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { title: "About", id: "about" },
    { title: "Walkthroughs", id: "gaming-expertise" },
    { title: "Gaming Graphics", id: "thumbnail-mastery" },
    { title: "3D Animals", id: "animation-3d" },
    { title: "Dev UX", id: "web-dev-ux" },
    { title: "Blueprint Specs", id: "tech-stack" },
    { title: "Inquiry Planner", id: "cta-proposal" }
  ];

  return (
    <div className="relative min-h-screen selection:bg-blue-600 selection:text-white">
      
      {/* Dynamic top ambient glow lines */}
      <div className="fixed top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 z-50 shadow-[0_2px_15px_rgba(37,99,235,0.3)]" />

      {/* Floating Header Interface */}
      <header className={`fixed top-1 inset-x-0 z-40 transition-all duration-300 px-4 md:px-8 py-3 ${isScrolled ? "bg-[#0a0a0b]/90 backdrop-blur-md border-b border-white/10 shadow-xl" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand/Signature */}
          <div 
            onClick={() => handleScrollToSegment("hero")} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
            </div>
            <div>
              <span className="font-display font-black text-sm tracking-widest text-white uppercase sm:text-base">
                Apex Creative Studio
              </span>
              <span className="text-[9px] font-mono text-zinc-500 block hidden sm:block uppercase tracking-wider">
                Precision Digital Production Agency
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
            {menuItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSegment(item.id)}
                  className={`cursor-pointer px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition ${
                    active 
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-md shadow-blue-500/20" 
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </nav>

          {/* Header Action / Contact Trigger */}
          <div className="hidden lg:block">
            <button 
              onClick={() => handleScrollToSegment("cta-proposal")}
              className="group cursor-pointer flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 font-mono text-xs text-white px-4 py-2 rounded-lg transition"
            >
              <Cpu className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              Tune Proposal
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-white/5 border border-white/10 rounded-lg text-zinc-400 hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Panel Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0a0a0b] flex flex-col pt-24 px-6 space-y-4 border-b border-white/10">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollToSegment(item.id)}
              className="w-full text-left font-display font-medium text-lg text-zinc-300 hover:text-cyan-400 py-2 border-b border-white/5"
            >
              {item.title}
            </button>
          ))}
          <button
            onClick={() => handleScrollToSegment("cta-proposal")}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3.5 rounded-xl font-mono text-xs tracking-wider uppercase shadow-lg shadow-blue-500/20"
          >
            Create Discovery Proposal
          </button>
        </div>
      )}

      {/* Core Landing Page Modules container */}
      <main className="relative bg-[#0a0a0b] text-zinc-100 font-sans">
        <Hero 
          onCtacall={() => handleScrollToSegment("cta-proposal")} 
          onExplore={() => handleScrollToSegment("about")} 
        />
        <About />
        <Philosophy />
        <GamingExpertise />
        <VideoEditing />
        <ThumbnailMastery />
        <Animation3D />
        <WebDevUX />
        <Workflow />
        <TechStack />
        <SuccessStories />
        <ContentStrategy />
        <WhyChooseApex />
        <FAQs />
        <CTAProposal />
      </main>

      {/* Footer System Branding & Metadata rails */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold uppercase text-white tracking-widest text-lg">
                Apex Creative Studio
              </span>
            </div>
            <p className="text-zinc-500 text-xs font-sans max-w-sm leading-relaxed">
              We leverage modern multi-GPU accelerators, pixel-perfect frame timings, and narrative hooks to deliver digital authority to high-value creators, channels, and agencies.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-405">Navigation Links</h4>
            <div className="flex flex-col gap-2 font-sans text-xs text-zinc-500">
              <button onClick={() => handleScrollToSegment("about")} className="cursor-pointer text-left hover:text-white transition">About & Mission</button>
              <button onClick={() => handleScrollToSegment("gaming-expertise")} className="cursor-pointer text-left hover:text-white transition">Specialized Gaming</button>
              <button onClick={() => handleScrollToSegment("workflow")} className="cursor-pointer text-left hover:text-white transition">Our Workflow</button>
              <button onClick={() => handleScrollToSegment("cta-proposal")} className="cursor-pointer text-left hover:text-white transition">Discovery Inquiry</button>
            </div>
          </div>

          <div className="md:col-span-4 space-y-4 font-mono text-xs text-zinc-500">
            <div className="space-y-1">
              <span className="uppercase text-zinc-400 tracking-wider">Operational parameters:</span>
              <p className="text-[11px]">LOCATION: New York Metro (Active globally)</p>
              <p className="text-[11px]">SLA STATUS: EXCELLING (0.00ms latency)</p>
              <p className="text-[11px]">DIRECT_CONTACT: sheikhmuharam32@gmail.com</p>
            </div>
            <div className="flex gap-3 pt-1">
              <Github className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer transition" />
              <Linkedin className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer transition" />
              <Globe className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer transition" />
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-zinc-550 gap-4">
          <span>&copy; {new Date().getFullYear()} Apex Creative Studio Inc. All rights reserved.</span>
          <span>CRAFTED WITH PRECISION, ARTISTRY, & ENGINEERING</span>
        </div>
      </footer>

      {/* Sticky Bottom Scroll to top button */}
      {isScrolled && (
        <button
          onClick={() => handleScrollToSegment("hero")}
          className="fixed bottom-6 right-6 z-40 p-3 bg-white/5 hover:bg-white/10 text-cyan-400 hover:text-white border border-white/10 hover:border-cyan-500/30 rounded-full shadow-lg transition duration-300 cursor-pointer backdrop-blur-md"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
