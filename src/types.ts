export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  deliverables: string[];
}

export interface TechStackItem {
  name: string;
  category: "Software" | "Hardware" | "Development";
  details: string;
  icon: string;
}

export interface GameProduction {
  title: string;
  genre: string;
  platform: string;
  walkthroughCoverage: string;
  highlights: string[];
  imagePrompt: string;
}

export interface ProjectQuote {
  selectedServices: string[];
  tier: "Standard" | "Growth" | "Apex Elite";
  timeline: "Standard (4-5 weeks)" | "Fast Track (2-3 weeks)" | "Expedited (7-10 days)";
  estimatedCost: number;
}
