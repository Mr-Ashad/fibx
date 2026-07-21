/**
 * FIBX Agency — Centralized Data
 * All content arrays used across components.
 */

import {
  Globe,
  Briefcase,
  BrainCircuit,
  Server,
  Rocket,
  Cpu,
  Layers,
  Zap,
  Shield,
  Headphones,
  Target,
  Search,
  ClipboardList,
  Paintbrush,
  Code2,
  TestTube,
  CircleCheckBig,
  type LucideIcon,
} from "lucide-react";

/* ========================================
   Navigation
   ======================================== */

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

/* ========================================
   About / Feature Highlights
   ======================================== */

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    title: "Engineering Excellence",
    description:
      "We write clean, tested, production-grade code that scales with your business and stands the test of time.",
    icon: Code2,
  },
  {
    title: "Design-Led Development",
    description:
      "Every product starts with thoughtful design. We craft interfaces that are intuitive, accessible, and beautiful.",
    icon: Paintbrush,
  },
  {
    title: "Business-First Thinking",
    description:
      "Technology is a means to an end. We focus on delivering measurable outcomes that drive real business growth.",
    icon: Target,
  },
];

/* ========================================
   Services
   ======================================== */

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  span?: string; // Tailwind grid span class
}

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "High-performance web applications built with modern frameworks. From marketing sites to complex platforms — crafted for speed and scale.",
    icon: Globe,
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "Business Software",
    description:
      "Custom ERP, CRM, and workflow systems tailored to streamline your operations and eliminate inefficiency.",
    icon: Briefcase,
  },
  {
    title: "AI Solutions",
    description:
      "Intelligent automation, NLP, computer vision, and predictive analytics powered by cutting-edge machine learning.",
    icon: BrainCircuit,
  },
  {
    title: "Backend Development",
    description:
      "Robust APIs, microservices, and data pipelines engineered for reliability, security, and performance at scale.",
    icon: Server,
  },
  {
    title: "Deployment & DevOps",
    description:
      "CI/CD pipelines, containerization, cloud infrastructure, and monitoring — ensuring your software runs flawlessly in production.",
    icon: Rocket,
  },
];

/* ========================================
   Why Choose Us
   ======================================== */

export interface Advantage {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const advantages: Advantage[] = [
  {
    title: "Modern Technology",
    description:
      "We use the latest frameworks and tools to build fast, reliable, and future-proof software.",
    icon: Cpu,
  },
  {
    title: "Scalable Architecture",
    description:
      "Systems designed to grow with your business — from startup to enterprise scale.",
    icon: Layers,
  },
  {
    title: "Performance",
    description:
      "Optimized for speed. Sub-second load times and smooth interactions across every device.",
    icon: Zap,
  },
  {
    title: "Security",
    description:
      "Enterprise-grade security practices. Data encryption, auth, and compliance built-in from day one.",
    icon: Shield,
  },
  {
    title: "Dedicated Support",
    description:
      "Responsive, knowledgeable support throughout development and long after launch.",
    icon: Headphones,
  },
  {
    title: "Business Focus",
    description:
      "Every decision is driven by your business goals. We measure success by the outcomes we deliver.",
    icon: Target,
  },
];

/* ========================================
   Development Process
   ======================================== */

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description: "Deep dive into your business, users, and goals to define the project scope.",
    icon: Search,
  },
  {
    step: 2,
    title: "Planning",
    description: "Architecture design, technology selection, and detailed project roadmap.",
    icon: ClipboardList,
  },
  {
    step: 3,
    title: "Design",
    description: "User-centered wireframes and high-fidelity prototypes for every screen.",
    icon: Paintbrush,
  },
  {
    step: 4,
    title: "Development",
    description: "Agile sprints with continuous integration and transparent progress updates.",
    icon: Code2,
  },
  {
    step: 5,
    title: "Testing",
    description: "Rigorous QA, performance testing, and security audits before launch.",
    icon: TestTube,
  },
  {
    step: 6,
    title: "Launch",
    description: "Smooth deployment, monitoring setup, and post-launch optimization.",
    icon: CircleCheckBig,
  },
];

/* ========================================
   Projects
   ======================================== */

export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  color: string; // CSS gradient for placeholder
  href?: string;
  image?: string;
  inProgress?: boolean;
}

export const projects: Project[] = [
  {
    title: "Almalki Logistics",
    category: "Logistics Website",
    description:
      "A portal for logistics and supply chain company facilitating freight forwarding, customs clearance, and road transportation across Saudi Arabia.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    color: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
    href: "https://almalkilogistics.com/",
  },
  {
    title: "GS Interiors UAE",
    category: "Corporate Website",
    description:
      "A luxury interior fit-out and architectural design showcase site featuring custom joinery and residential/commercial projects across the UAE.",
    technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
    color: "linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)",
    href: "https://gsinteriorsuae.com",
  },
  {
    title: "East Seas Trading Est",
    category: "Industrial Directory",
    description:
      "A comprehensive industrial supply portal and vendor directory for mechanical, electrical, and oilfield products in Saudi Arabia.",
    technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    color: "linear-gradient(135deg, #3a7bd5 0%, #3a6073 100%)",
    href: "https://eastseastradingest.com",
  },
  {
    title: "Arc4Gamers",
    category: "E-Commerce Platform",
    description:
      "A premium gaming e-commerce storefront specializing in high-performance computer accessories, custom keyboards, and peripheral gear in Dubai, UAE.",
    technologies: ["Next.js", "Tailwind CSS", "Shopify API", "Node.js"],
    color: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
    href: "https://arc4gamers.com",
  },
  {
    title: "DriveTrack",
    category: "Placement Platform",
    description:
      "An end-to-end campus placement platform that modernizes the recruitment process for universities. DriveTrack enables administrators to manage placement drives, automate student communication, and monitor recruitment through real-time analytics",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Socket.io"],
    color: "linear-gradient(135deg, #da22ff 0%, #9733ee 100%)",
    image: "/drivetrack.png",
    inProgress: true,
  },
  {
    title: "Rentem",
    category: "Property Management",
    description:
      "Rentem is a modern, cross-platform property management and rental application built to streamline operations for owners and tenants. It replaces rent collection, paperwork, and messaging with an all-in-one digital ecosystem.",
    technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    color: "linear-gradient(135deg, #00b4db 0%, #0083b0 100%)",
    image: "/rentem.png",
    inProgress: true,
  },
  {
    title: "CBT Foundry",
    category: "Agentic AI Platform",
    description:
      "An Agentic-AI automated platform that drafts, critiques, and finalizes Cognitive Behavioural Therapy (CBT) protocols using a LangGraph multi-agent architecture (Drafter, Safety & Clinical Critic agents) with shared Blackboard state and human-in-the-loop approval.",
    technologies: ["LangGraph", "Python", "React", "Multi-Agent AI", "FastAPI"],
    color: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    image: "/cbt-foundry.png",
    href: "#contact",
  },
  {
    title: "Reelflux.co",
    category: "Personal Portfolio",
    description:
      "A premium portfolio and showreel platform for digital creator Mohammed Aspan, showcasing high-retention video production, brand design, and AI visual assets.",
    technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
    color: "linear-gradient(135deg, #7f00ff 0%, #ff007f 100%)",
    image: "/reelflux.png",
    href: "https://mohammedaspan.kesug.com/",
  },
];

/* ========================================
   Technology Stack
   ======================================== */

export interface TechCategory {
  category: string;
  technologies: string[];
}

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "FastAPI", "Express", "GraphQL"],
  },
  {
    category: "AI & ML",
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face"],
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Vercel"],
  },
];

/* ========================================
   FAQ
   ======================================== */

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on complexity and scope. A website typically takes 2–6 weeks, while a complex application/tools can take 3–6 months. During our discovery phase, we provide a detailed timeline with milestones so you always know what to expect.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We believe in radical transparency. You'll have updates about the project and transparecy in our work.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including React, Next.js, Node.js, Python, and AI technologies . We choose the best technology for each project based on your specific requirements.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely. We offer flexible maintenance and support packages that include bug fixes, performance monitoring, security updates, and feature enhancements. Our team is available to ensure your product continues to perform optimally long after launch.",
  }
];

/* ========================================
   Social Links
   ======================================== */

export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];
