"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techStack } from "@/lib/data";
import {
  Layout,
  Server,
  BrainCircuit,
  Database,
  Cloud,
  type LucideIcon,
} from "lucide-react";

// Category configuration
const categoryMeta: Record<
  string,
  {
    emoji: string;
    icon: LucideIcon;
    description: string;
    gradient: string;
    badgeHoverClass: string;
    iconBgClass: string;
    iconColorClass: string;
  }
> = {
  Frontend: {
    emoji: "⚛️",
    icon: Layout,
    description: "We build fast, responsive, and pixel-perfect interfaces that deliver exceptional user experiences across all devices.",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)",
    badgeHoverClass: "hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-600",
    iconBgClass: "bg-blue-500/10",
    iconColorClass: "text-blue-600",
  },
  Backend: {
    emoji: "⚙️",
    icon: Server,
    description: "Powering applications with high-performance, secure, and scalable server-side systems and business logic.",
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    badgeHoverClass: "hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-600",
    iconBgClass: "bg-emerald-500/10",
    iconColorClass: "text-emerald-600",
  },
  "AI & ML": {
    emoji: "🧠",
    icon: BrainCircuit,
    description: "Integrating advanced machine learning and large language models to add intelligent automation to your software.",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
    badgeHoverClass: "hover:border-purple-500/30 hover:bg-purple-500/5 hover:text-purple-600",
    iconBgClass: "bg-purple-500/10",
    iconColorClass: "text-purple-600",
  },
  Database: {
    emoji: "🗄️",
    icon: Database,
    description: "Designing optimized data schemas, caching strategies, and secure storage for reliable real-time access.",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    badgeHoverClass: "hover:border-amber-500/30 hover:bg-amber-500/5 hover:text-amber-600",
    iconBgClass: "bg-amber-500/10",
    iconColorClass: "text-amber-600",
  },
  "Cloud & DevOps": {
    emoji: "☁️",
    icon: Cloud,
    description: "Automating deployment pipelines, container hosting, and scaling infrastructure for 99.9% uptime.",
    gradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
    badgeHoverClass: "hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-cyan-600",
    iconBgClass: "bg-cyan-500/10",
    iconColorClass: "text-cyan-600",
  },
};

const techIcons: Record<string, string> = {
  "React": "react",
  "Next.js": "nextdotjs",
  "TypeScript": "typescript",
  "Tailwind CSS": "tailwindcss",
  "Framer Motion": "framer",
  "Node.js": "nodedotjs",
  "Python": "python",
  "FastAPI": "fastapi",
  "Express": "express",
  "GraphQL": "graphql",
  "TensorFlow": "tensorflow",
  "PyTorch": "pytorch",
  "OpenAI": "openai",
  "LangChain": "langchain",
  "Hugging Face": "huggingface",
  "PostgreSQL": "postgresql",
  "MongoDB": "mongodb",
  "Redis": "redis",
  "Prisma": "prisma",
  "Supabase": "supabase",
  "AWS": "amazonaws",
  "Google Cloud": "googlecloud",
  "Docker": "docker",
  "Kubernetes": "kubernetes",
  "Vercel": "vercel",
};

// 1. Frontend Mockup: Theme Toggle and Component Playground
const FrontendMockup = () => {
  const [isDark, setIsDark] = useState(false);
  const [progress, setProgress] = useState(65);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 30 : prev + 5));
    }, 2000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div 
      ref={containerRef}
      className={`w-full relative mt-6 lg:mt-0 h-[130px] border rounded-tl-xl overflow-hidden shadow-xs transition-all duration-500 group-hover:shadow-md ${
        isDark 
          ? "bg-slate-900 border-slate-800 text-white" 
          : "bg-slate-50 border-slate-200/60 text-slate-800"
      }`}
    >
      {/* Browser header */}
      <div className={`flex items-center justify-between px-3 py-1.5 border-b transition-colors duration-500 ${
        isDark ? "bg-slate-950/80 border-slate-800" : "bg-slate-100/80 border-slate-200/60"
      }`}>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>
        <div className={`px-1.5 py-0.5 rounded text-[7px] flex items-center select-none border transition-colors duration-500 ${
          isDark ? "bg-slate-800 border-slate-700 text-slate-400" : "bg-white border-slate-200/40 text-slate-500"
        }`}>
          localhost:3000
        </div>
        <div className="w-3" /> {/* Spacer */}
      </div>

      {/* Browser content */}
      <div className="p-3 relative h-[94px] flex flex-col justify-between overflow-hidden">
        <div className="space-y-1.5">
          {/* Top row with Title and Theme Switcher */}
          <div className="flex justify-between items-center">
            <div className="space-y-0.5">
              <div className={`w-12 h-1.5 rounded ${isDark ? "bg-blue-400" : "bg-blue-600"}`} />
              <div className={`w-16 h-1 rounded ${isDark ? "bg-slate-700" : "bg-slate-300"}`} />
            </div>
            {/* Interactive toggle switch */}
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`w-6 h-3 rounded-full p-0.5 transition-colors duration-300 cursor-pointer ${
                isDark ? "bg-blue-500" : "bg-slate-300"
              }`}
            >
              <motion.div 
                layout 
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                className="w-2 h-2 rounded-full bg-white shadow-xs"
                style={{ x: isDark ? 12 : 0 }}
              />
            </button>
          </div>

          {/* Dashboard metrics preview */}
          <div className="grid grid-cols-2 gap-2 pt-0.5">
            <div className={`p-1.5 rounded-md border transition-colors duration-500 ${
              isDark ? "bg-slate-950/40 border-slate-800" : "bg-white border-slate-200/60"
            }`}>
              <div className={`text-[6px] font-semibold tracking-wider uppercase mb-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                Load Time
              </div>
              <div className="text-[10px] font-bold text-emerald-500 flex items-baseline gap-0.5 leading-none">
                0.4s <span className="text-[5px] font-normal text-slate-400">fast</span>
              </div>
            </div>

            <div className={`p-1.5 rounded-md border transition-colors duration-500 ${
              isDark ? "bg-slate-950/40 border-slate-800" : "bg-white border-slate-200/60"
            }`}>
              <div className={`text-[6px] font-semibold tracking-wider uppercase mb-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                Optimization
              </div>
              <div className="w-full bg-slate-200/60 dark:bg-slate-800 h-1 rounded-full mt-0.5 overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-500 rounded-full" 
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>

          {/* Simulated UI Cards stack */}
          <div className={`p-1.5 rounded border flex items-center gap-1.5 transition-colors duration-500 ${
            isDark ? "bg-slate-950/20 border-slate-800/80" : "bg-white/80 border-slate-200/40"
          }`}>
            <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex-shrink-0 flex items-center justify-center text-[6px] text-white font-bold leading-none">
              F
            </div>
            <div className="flex-1 space-y-0.5">
              <div className={`w-2/3 h-1 rounded ${isDark ? "bg-slate-700" : "bg-slate-200"}`} />
              <div className={`w-1/2 h-0.5 rounded ${isDark ? "bg-slate-800" : "bg-slate-100"}`} />
            </div>
            <div className="w-10 h-2.5 rounded bg-blue-500/10 text-[5px] text-blue-500 font-bold flex items-center justify-center leading-none">
              Interactive
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Backend Mockup: Database Logs and Server Load
const BackendMockup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  return (
    <div 
      ref={containerRef}
      className="w-full relative mt-6 lg:mt-0 h-[130px] bg-slate-950 border border-slate-900 rounded-tl-xl overflow-hidden shadow-xs transition-all duration-500 group-hover:shadow-md text-emerald-400 font-mono"
    >
      {/* Console header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900/80 border-b border-slate-900/60">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[7px] text-slate-400">api.fibx.io/graphql</span>
        </div>
        <div className="px-1.5 py-0.5 rounded bg-slate-800 text-[6.5px] text-slate-500 flex items-center select-none border border-slate-700">
          port: 4000
        </div>
      </div>

      {/* Terminal content */}
      <div className="p-3 relative h-[94px] flex flex-col justify-between overflow-hidden">
        <div className="space-y-1.5">
          {/* Logs */}
          <div className="space-y-1 text-[7.5px] text-slate-400 select-none">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-emerald-400">query</span> <span className="text-white">GetUsers</span>
              </div>
              <span className="text-slate-500 text-[6.5px]">1.8ms [redis]</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-purple-400">mutation</span> <span className="text-white">SaveOrder</span>
              </div>
              <span className="text-slate-500 text-[6.5px]">4.2ms [db]</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-emerald-400">query</span> <span className="text-white">GetStats</span>
              </div>
              <span className="text-slate-500 text-[6.5px]">3.4ms [db]</span>
            </div>
          </div>
        </div>

        {/* Server metrics */}
        <div className="flex justify-between items-center text-slate-500 border-t border-slate-900 pt-1.5 text-[6.5px] mt-auto">
          <div className="flex gap-2">
            <span>CPU: <span className="text-emerald-400 font-bold">2.4%</span></span>
            <span>MEM: <span className="text-emerald-400 font-bold">92MB</span></span>
          </div>
          <div className="flex gap-0.5 items-end h-2.5 px-0.5">
            <motion.div className="w-0.5 bg-emerald-500" animate={isInView ? { height: [3, 8, 2, 6, 3] } : { height: 3 }} transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }} />
            <motion.div className="w-0.5 bg-emerald-500" animate={isInView ? { height: [6, 2, 9, 4, 6] } : { height: 3 }} transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }} />
            <motion.div className="w-0.5 bg-emerald-500" animate={isInView ? { height: [2, 7, 1, 5, 2] } : { height: 3 }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} />
            <motion.div className="w-0.5 bg-emerald-500" animate={isInView ? { height: [8, 4, 6, 2, 8] } : { height: 3 }} transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. AI & ML Mockup: Chat interface streaming context
const AIMLMockup = () => {
  const [messages, setMessages] = useState([
    { role: "user", text: "Vector search products..." },
    { role: "assistant", text: "Analyzing query embeddings..." }
  ]);
  const [, setStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setStep((prev) => {
        const next = (prev + 1) % 3;
        if (next === 0) {
          setMessages([
            { role: "user", text: "Vector search products..." },
            { role: "assistant", text: "Analyzing query embeddings..." }
          ]);
        } else if (next === 1) {
          setMessages([
            { role: "user", text: "Vector search products..." },
            { role: "assistant", text: "Found 3 matching vectors (cosine > 0.88)" }
          ]);
        } else {
          setMessages([
            { role: "user", text: "Vector search products..." },
            { role: "assistant", text: "↳ Retrying query context: OpenAI API 200 OK" }
          ]);
        }
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div ref={containerRef} className="w-full mt-6 h-[130px] bg-slate-950 border border-slate-900 rounded-t-xl overflow-hidden shadow-xs p-4 flex flex-col justify-between group-hover:border-purple-500/30 transition-all duration-300">
      <div className="flex justify-between items-center border-b border-slate-900 pb-1 text-slate-500 font-mono text-[7px]">
        <span>LLM Pipeline / langchain-agent</span>
        <span className="px-1 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold">READY</span>
      </div>

      {/* Chat UI */}
      <div className="flex-1 space-y-2 mt-2 font-mono text-[7px]">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-1.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`p-1.5 rounded-lg max-w-[85%] ${
              msg.role === "user" 
                ? "bg-purple-600/20 text-purple-300 border border-purple-500/20" 
                : "bg-slate-900 text-slate-300 border border-slate-800"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="flex justify-between items-center text-slate-600 font-mono text-[6.5px] border-t border-slate-900 pt-1">
        <span>model: gpt-4o-mini</span>
        <span className="text-purple-400">embedding: text-embedding-3-small</span>
      </div>
    </div>
  );
};

// 4. Database Mockup: Database schema relation drawing
const DatabaseMockup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  return (
    <div ref={containerRef} className="w-full mt-6 h-[130px] bg-slate-50 border border-slate-200/60 rounded-t-xl overflow-hidden shadow-xs p-3 flex justify-between items-center relative group-hover:border-amber-500/30 transition-all duration-300">
      {/* Table 1 */}
      <div className="w-[45%] bg-white border border-slate-200/80 rounded shadow-xs text-[7px] font-mono select-none z-10">
        <div className="bg-slate-100/80 px-2 py-1 border-b border-slate-200/60 font-bold text-slate-700 flex justify-between items-center">
          <span>users</span>
          <span className="text-[6px] text-amber-600 font-semibold">SQL</span>
        </div>
        <div className="p-1.5 space-y-1 text-slate-500">
          <div className="flex justify-between items-center text-slate-800 font-semibold bg-amber-500/5 px-1 py-0.5 rounded">
            <span>🔑 id</span>
            <span>uuid</span>
          </div>
          <div className="px-1">email <span className="text-slate-400">text</span></div>
          <div className="px-1">created_at <span className="text-slate-400">tstz</span></div>
        </div>
      </div>

      {/* SVG connection line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 200 130">
        <motion.path
          d="M 90,65 L 110,65"
          stroke="var(--color-brand)"
          strokeWidth="1.5"
          strokeDasharray="4 2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <motion.circle
          r="2"
          fill="#F59E0B"
          animate={isInView ? { cx: [90, 110] } : { cx: 90 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          cy="65"
        />
      </svg>

      {/* Table 2 */}
      <div className="w-[45%] bg-white border border-slate-200/80 rounded shadow-xs text-[7px] font-mono select-none z-10">
        <div className="bg-slate-100/80 px-2 py-1 border-b border-slate-200/60 font-bold text-slate-700 flex justify-between items-center">
          <span>orders</span>
          <span className="text-[6px] text-amber-600 font-semibold">SQL</span>
        </div>
        <div className="p-1.5 space-y-1 text-slate-500">
          <div className="px-1">id <span className="text-slate-400">uuid</span></div>
          <div className="flex justify-between items-center text-slate-800 font-semibold bg-amber-500/5 px-1 py-0.5 rounded">
            <span>🔗 user_id</span>
            <span>uuid</span>
          </div>
          <div className="px-1">amount <span className="text-slate-400">int</span></div>
        </div>
      </div>
    </div>
  );
};

// 5. Cloud & DevOps Mockup: Node monitoring/Kubernetes Pods
const CloudDevOpsMockup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  return (
    <div ref={containerRef} className="w-full mt-6 h-[130px] bg-slate-50 border border-slate-200/60 rounded-t-xl overflow-hidden shadow-xs p-3.5 flex flex-col justify-between group-hover:border-cyan-500/30 transition-all duration-300">
      <div className="flex items-center justify-between text-[7px] text-slate-400 font-mono">
        <span>infra: production-aws</span>
        <span className="px-1 py-0.5 rounded bg-cyan-50 text-cyan-600 font-bold border border-cyan-200 text-[6.5px]">STABLE</span>
      </div>

      {/* Cluster Nodes */}
      <div className="grid grid-cols-4 gap-2 my-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-1.5 rounded bg-white border border-slate-200/60 flex flex-col gap-1 items-center shadow-xs">
            <span className="text-[6px] font-mono text-slate-400">pod-0{i+1}</span>
            <motion.div
              className="w-2 h-2 rounded-full"
              animate={isInView ? {
                backgroundColor: ["#22d3ee", "#06b6d4", "#22d3ee"],
                scale: [1, 1.15, 1]
              } : {
                backgroundColor: "#22d3ee",
                scale: 1
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4
              }}
            />
            <span className="text-[5.5px] font-mono text-cyan-600 font-semibold">100%</span>
          </div>
        ))}
      </div>

      {/* Deploy Status */}
      <div className="text-[7px] text-slate-500 font-mono flex justify-between items-center border-t border-slate-200/40 pt-1.5">
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
          <span>Region: us-east-1</span>
        </div>
        <span>latency: 18ms</span>
      </div>
    </div>
  );
};

// Sub-component for individual tech tags with premium hover state
const TechBadge = ({ tech, category }: { tech: string; category: string }) => {
  const iconSlug = techIcons[tech];
  const meta = categoryMeta[category];
  
  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold rounded-lg bg-slate-50 border border-slate-100 text-slate-600 transition-all duration-200 cursor-default hover:-translate-y-0.5 ${meta?.badgeHoverClass || "hover:border-blue-500/30 hover:bg-blue-50/50 hover:text-blue-600"}`}
    >
      {iconSlug ? (
        <img 
          src={`https://cdn.simpleicons.org/${iconSlug}`}
          alt={tech} 
          className="w-4 h-4 object-contain"
        />
      ) : (
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: meta?.gradient || "var(--color-brand)" }}
        />
      )}
      {tech}
    </span>
  );
};

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--color-surface-raised)" }}
    >
      {/* Decorative background glow */}
      <div 
        className="absolute inset-0 pointer-events-none select-none opacity-[0.3]"
        style={{
          backgroundImage: `
            radial-gradient(circle at top center, var(--color-brand-100) 0%, transparent 60%)
          `,
          backgroundSize: '100% 100%',
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label">Technology</span>
          <h2
            className="text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            Tools we trust.
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            We choose the right technology for each project — always modern,
            battle-tested, and built for scale.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
          {techStack.map((cat, index) => {
            const meta = categoryMeta[cat.category];
            const Icon = meta?.icon;
            const isLargeCard = cat.category === "Frontend" || cat.category === "Backend";
            
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`card overflow-hidden group cursor-default transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between ${
                  cat.category === "Frontend" || cat.category === "Backend"
                    ? "md:col-span-1 lg:col-span-3"
                    : cat.category === "Cloud & DevOps"
                    ? "md:col-span-2 lg:col-span-2"
                    : "md:col-span-1 lg:col-span-2"
                }`}
                style={{ backgroundColor: "white" }}
              >
                {isLargeCard ? (
                  <div className="p-8 pb-0 pr-0 h-full flex flex-col justify-between lg:grid lg:grid-cols-12 lg:gap-8 lg:p-8 lg:pb-0 lg:pr-0">
                    <div className="lg:col-span-6 flex flex-col justify-between pb-8 lg:pb-8 pr-8 lg:pr-0">
                      <div>
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${meta?.iconBgClass}`}
                          style={{ backgroundColor: "var(--color-brand-50)" }}
                        >
                          {Icon && <Icon size={22} className={meta.iconColorClass} />}
                        </div>
                        <h3
                          className="text-2xl font-bold mb-5 tracking-[-0.02em]"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {cat.category}
                        </h3>
                      </div>
                      
                      {/* Tech badges for Large Cards */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {cat.technologies.map((tech) => (
                          <TechBadge key={tech} tech={tech} category={cat.category} />
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-6 flex items-end">
                      {cat.category === "Frontend" && <FrontendMockup />}
                      {cat.category === "Backend" && <BackendMockup />}
                    </div>
                  </div>
                ) : (
                  <div className="p-8 pb-0 flex flex-col justify-between h-full">
                    <div>
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${meta?.iconBgClass}`}
                        style={{ backgroundColor: "var(--color-brand-50)" }}
                      >
                        {Icon && <Icon size={22} className={meta.iconColorClass} />}
                      </div>
                      <h3
                        className="text-xl font-bold mb-5 tracking-[-0.01em]"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {cat.category}
                      </h3>
                    </div>
                    
                    {/* Tech badges in regular cards */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {cat.technologies.map((tech) => (
                        <TechBadge key={tech} tech={tech} category={cat.category} />
                      ))}
                    </div>

                    <div className="mt-6 overflow-hidden">
                      {cat.category === "AI & ML" && <AIMLMockup />}
                      {cat.category === "Database" && <DatabaseMockup />}
                      {cat.category === "Cloud & DevOps" && <CloudDevOpsMockup />}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
