"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Database, Code } from "lucide-react";

/**
 * Hero — Full-width hero section with large headline,
 * dual CTAs, trust badge, and CSS-only abstract illustration.
 */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.05 });

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 80 }}
    >
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10" aria-hidden="true">
        {/* Glow 1: Top-Left (Brand Color) */}
        <div
          className="absolute -top-40 -left-40 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full blur-[80px] md:blur-[130px] opacity-5 md:opacity-10"
          style={{ background: "var(--color-brand)" }}
        />
        {/* Glow 2: Bottom-Right (Light Brand Color) */}
        <div
          className="absolute -bottom-20 -right-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full blur-[80px] md:blur-[130px] opacity-10 md:opacity-15"
          style={{ background: "var(--color-brand-light)" }}
        />
      </div>

      <div className="section-container w-full py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-xl lg:max-w-3xl flex flex-col items-start"
          >
            

            <h1
              className="text-[clamp(40px,8vw,76px)] font-bold leading-[1.15] tracking-tight mb-6 mt-0"
              style={{ color: "var(--color-text-primary)" }}
            >
              We build software <br />
              <span style={{ color: "var(--color-brand)" }}>that matters.</span>
            </h1>

            <p
              className="text-xl md:text-xl leading-relaxed mb-10 max-w-xl lg:max-w-2xl"
              style={{ color: "var(--color-text-secondary)" }}
            >
              From concept to production - We turn ideas into high-quality software through design, modern technology, and execution.  
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a href="#contact" className="btn-primary w-full sm:w-auto">
                Start Your Project
                <ArrowRight size={18} />
              </a>
              <a href="#projects" className="btn-secondary w-full sm:w-auto">
                View Our Work
              </a>
            </motion.div>

            
          </motion.div>

          {/* Right — Abstract CSS Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative w-[480px] h-[480px]">
              {/* Outer dashed orbital ring */}
              <div
                className="absolute inset-8 rounded-full z-0"
                style={{
                  background: "linear-gradient(135deg, rgba(239, 246, 255, 0.4) 0%, rgba(219, 234, 254, 0.4) 100%)",
                  border: "1px dashed var(--color-brand-200)",
                }}
              />

              {/* Inner orbital ring */}
              <div
                className="absolute inset-20 rounded-full border border-slate-100 z-0"
              />

                          {/* Floating elements */}
              {/* Top-Right: Sales/Conversion Widget */}
              <motion.div
                animate={isInView ? { y: [-8, 8, -8] } : { y: 0 }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
                className="absolute top-2 right-4 w-32 h-26 rounded-2xl bg-white border border-slate-200/60 shadow-lg p-4 flex flex-col justify-between z-20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9.5px] font-medium text-slate-400">Conversion</span>
                  <span className="px-1.5 py-0.5 bg-emerald-50 rounded text-emerald-600 text-[8px] font-bold">
                    +24%
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-slate-800">$18,450</span>
                  <span className="text-[8px] text-slate-400">Monthly Target</span>
                </div>
                {/* Mini bar chart */}
                <div className="flex items-end gap-1 h-4">
                  <div className="w-1.5 h-2 bg-blue-100 rounded-xs" />
                  <div className="w-1.5 h-3 bg-blue-200 rounded-xs" />
                  <div className="w-1.5 h-3.5 bg-blue-300 rounded-xs" />
                  <div className="w-1.5 h-2 bg-blue-200 rounded-xs" />
                  <div className="w-1.5 h-4 bg-blue-500 rounded-xs" />
                </div>
              </motion.div>

              {/* Bottom-Left: Console Terminal Widget */}
              <motion.div
                animate={isInView ? { y: [6, -6, 6] } : { y: 0 }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{ willChange: "transform" }}
                className="absolute bottom-10 left-2 w-34 h-24 rounded-2xl bg-slate-950 border border-slate-900 shadow-lg p-4 flex flex-col justify-between font-mono z-20"
              >
                <div className="flex justify-between items-center border-b border-slate-900 pb-1.5">
                  <div className="flex items-center gap-1">
                    <Code size={12} className="text-slate-400" />
                    <span className="text-[8px] text-slate-500">API Gateway</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 flex flex-col justify-center gap-1 text-[8px] mt-1">
                  <div>
                    <span className="text-purple-400">POST</span> <span className="text-slate-300">/deploy</span>
                  </div>
                  <div className="text-emerald-400">{"{"} status: &quot;success&quot; {"}"}</div>
                </div>
                <div className="text-[7px] text-slate-600">
                  <span>ms: 18</span>
                </div>
              </motion.div>

              {/* Top-Left: Pipeline Build Status Widget */}
              <motion.div
                animate={isInView ? { y: [-5, 10, -5] } : { y: 0 }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ willChange: "transform" }}
                className="absolute top-16 left-6 w-34 h-20 rounded-2xl bg-white border border-slate-200/60 shadow-lg p-3.5 flex items-center gap-3.5 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <CheckCircle size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">Build</span>
                  <span className="text-xs font-bold text-slate-800 truncate">Success</span>
                </div>
              </motion.div>

              {/* Bottom-Right: AI Connection Widget */}
              <motion.div
                animate={isInView ? { y: [4, -8, 4] } : { y: 0 }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                style={{ willChange: "transform" }}
                className="absolute bottom-6 right-8 w-30 h-22 rounded-2xl bg-white border border-slate-200/60 shadow-lg p-3 flex flex-col justify-between z-20"
              >
                <div className="flex items-center gap-1.5 text-[8px] text-slate-400">
                  <Database size={12} className="text-blue-500" />
                  <span className="font-semibold uppercase tracking-wider">LLM Engine</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-700">Accuracy</span>
                  <span className="text-[10px] font-mono font-bold text-indigo-600">99.4%</span>
                </div>
                {/* Micro network node map */}
                <div className="h-5 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 60 12">
                    <circle cx="10" cy="6" r="1.5" fill="#6366f1" />
                    <circle cx="30" cy="6" r="1.5" fill="#6366f1" />
                    <circle cx="50" cy="6" r="1.5" fill="#6366f1" />
                    <line x1="11.5" y1="6" x2="28.5" y2="6" stroke="#6366f1" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
                    <line x1="31.5" y1="6" x2="48.5" y2="6" stroke="#6366f1" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
                  </svg>
                </div>
              </motion.div>

              {/* Central card mockup (Dashboard) */}
              <motion.div
                animate={isInView ? { y: [-4, 4, -4] } : { y: 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-40 rounded-2xl bg-white border border-slate-200/60 shadow-xl overflow-hidden flex flex-col justify-between z-20"
              >
                {/* Header */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border-b border-slate-200/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <div className="ml-2 flex-1 max-w-[120px] h-3.5 rounded bg-white text-[7px] text-slate-400 flex items-center px-1.5 border border-slate-200/40 select-none">
                    dashboard.fibx
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] font-bold text-slate-800">Analytics</span>
                      <span className="text-[7px] text-slate-400">Real-time system stats</span>
                    </div>
                    <span className="px-1.5 py-0.5 rounded-full bg-green-50 text-[6.5px] font-bold text-green-600 border border-green-200">
                      Live
                    </span>
                  </div>

                  {/* SVG Chart */}
                  <div className="relative h-14 w-full bg-slate-50/50 border border-slate-200/40 rounded p-1 overflow-hidden">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 200 45" fill="none">
                      {/* Grid lines */}
                      <line x1="0" y1="10" x2="200" y2="10" stroke="#f1f5f9" strokeWidth="0.5" />
                      <line x1="0" y1="22" x2="200" y2="22" stroke="#f1f5f9" strokeWidth="0.5" />
                      <line x1="0" y1="34" x2="200" y2="34" stroke="#f1f5f9" strokeWidth="0.5" />
                      
                      <path
                        d="M0,40 Q25,35 50,18 T100,28 T150,10 T200,5"
                        stroke="var(--color-brand)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0,40 Q25,35 50,18 T100,28 T150,10 T200,5 L200,45 L0,45 Z"
                        fill="url(#hero-chart-gradient)"
                        opacity="0.1"
                      />
                      <defs>
                        <linearGradient id="hero-chart-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-brand)" />
                          <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <circle cx="200" cy="5" r="3" fill="var(--color-brand)" opacity="0.15" />
                      <circle cx="200" cy="5" r="1.5" fill="var(--color-brand)" />
                    </svg>
                  </div>

                  {/* Bottom legend */}
                  <div className="flex justify-between items-center text-[7px] text-slate-400">
                    <span>Performance: Optimal</span>
                    <span className="font-semibold text-slate-600">99.9% Uptime</span>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting dot */}
              <motion.div
                animate={isInView ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-10"
              >
                <div
                  className="absolute top-4 left-1/2 w-3.5 h-3.5 rounded-full -translate-x-1/2 flex items-center justify-center shadow-lg"
                  style={{ 
                    background: "var(--color-brand)", 
                    boxShadow: "0 0 12px var(--color-brand)",
                    border: "1px solid rgba(255, 255, 255, 0.4)" 
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
