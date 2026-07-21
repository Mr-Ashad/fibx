"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { features } from "@/lib/data";

// Canvas View for Design Card
const CanvasView = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  return (
    <div ref={containerRef} className="relative w-full h-[420px] bg-slate-50 border border-slate-200/50 rounded-xl overflow-hidden flex flex-col">
      {/* Canvas Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200/50 bg-white/80 backdrop-blur-sm">
        <span className="text-[10px] font-bold text-slate-400 select-none uppercase tracking-wider font-mono">Canvas Workspace</span>
        <div className="flex items-center gap-1.5 text-[9px] text-slate-500 font-mono">
          <span className="bg-slate-100 px-1.5 py-0.5 rounded">X: 240</span>
          <span className="bg-slate-100 px-1.5 py-0.5 rounded">Y: 180</span>
        </div>
      </div>
      {/* Canvas Content Grid */}
      <div className="flex-1 relative bg-[radial-gradient(#e2e8f0_1.2px,transparent_1.2px)] [background-size:18px_18px] flex items-center justify-center">
        {/* Draw Area */}
        <div className="w-[240px] h-[140px] border border-blue-500/30 rounded-xl bg-white shadow-sm relative flex flex-col justify-between p-4">
          {/* Alignment guide lines */}
          <div className="absolute -left-4 right-0 top-1/2 border-t border-dashed border-blue-500/20" />
          <div className="absolute left-1/2 -top-4 bottom-0 border-l border-dashed border-blue-500/20" />
          
          <span className="absolute -top-6 left-0 text-[9px] text-blue-500 font-mono font-semibold">Card (340 x 120, r:12)</span>
          
          <div className="flex items-center gap-2.5 z-10">
            <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold text-[10px]">F</div>
            <div className="w-20 h-1.5 rounded bg-slate-200" />
          </div>
          <div className="space-y-1.5 z-10">
            <div className="w-full h-1 rounded bg-slate-100" />
            <div className="w-3/4 h-1 rounded bg-slate-100" />
          </div>
          
          {/* Drag Handle Nodes */}
          <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border border-blue-600 bg-white" />
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border border-blue-600 bg-white" />
          <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border border-blue-600 bg-white" />
          <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border border-blue-600 bg-white" />
        </div>
        
        {/* Custom cursor selecting vector node */}
        <motion.div 
          animate={isInView ? { x: [0, 30, -10, 0], y: [0, 15, -10, 0] } : { x: 0, y: 0 }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-20 pointer-events-none"
          style={{ top: "45%", left: "55%" }}
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
            <path d="M0 0V11L3.5 8.5L7 13.5L8.5 12.5L5 7.5L9.5 7.2L0 0Z" fill="#2563EB" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

// Editor View for Code Card
const EditorView = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  return (
    <div ref={containerRef} className="relative w-full h-[420px] bg-slate-950 border border-slate-900 rounded-xl overflow-hidden flex flex-col font-mono">
      {/* Editor Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-900 bg-slate-900/60 backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
          <span className="text-[10px] text-slate-500 select-none ml-2">components/Craft.tsx</span>
        </div>
        <span className="text-[9px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">TypeScript</span>
      </div>
      {/* Editor Code Area */}
      <div className="flex-1 p-6 overflow-hidden text-[10.5px] leading-relaxed text-slate-400 flex flex-col justify-center bg-slate-950">
        <pre className="space-y-2.5 font-mono">
          <div><span className="text-pink-400">const</span> <span className="text-yellow-300">optimizeBuild</span> = &lt;<span className="text-blue-300">T</span>&gt;(config: <span className="text-blue-300">Config</span>) =&gt; {"{"}</div>
          <div>  <span className="text-pink-400">return</span> {"{"}</div>
          <div>    performance: <span className="text-emerald-300">&quot;maximum&quot;</span>,</div>
          <div>    bundleBloat: <span className="text-cyan-400">0</span>,</div>
          <div>    typeChecking: <span className="text-pink-400">true</span>,</div>
          <div>    edgeHydration: <span className="text-pink-400">true</span></div>
          <div>  {"};"}</div>
          <div>{"};"}</div>
          <div className="h-2" />
          <div className="text-slate-500 flex items-center gap-1.5 select-none font-mono">
            <span>{"// Compile status: "}</span>
            <span className="text-emerald-500 font-bold">Success</span>
            <motion.span 
              animate={isInView ? { opacity: [1, 0, 1] } : { opacity: 1 }} 
              transition={{ repeat: Infinity, duration: 1 }}
              className="inline-block w-1.5 h-3.5 bg-emerald-500" 
            />
          </div>
        </pre>
      </div>
    </div>
  );
};

// Vitals View for Performance Card
const VitalsView = () => {
  return (
    <div className="relative w-full h-[420px] bg-white border border-slate-200/50 rounded-xl overflow-hidden flex flex-col">
      {/* Vitals Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200/50 bg-slate-50">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Edge Performance Vitals</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] text-emerald-600 font-bold font-mono">LIVE METRICS</span>
        </span>
      </div>
      {/* Vitals Grid */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        {/* Top metrics row */}
        <div className="grid grid-cols-3 gap-3">
          {/* Circle chart */}
          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded-xl p-2.5">
            <div className="relative w-11 h-11 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-100"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  initial={{ strokeDasharray: "0, 100" }}
                  whileInView={{ strokeDasharray: "100, 100" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  className="text-emerald-500"
                  strokeWidth="3.5"
                  strokeDasharray="100, 100"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-[9.5px] font-bold text-slate-800">100</span>
              </div>
            </div>
            <div>
              <div className="text-[7.5px] font-bold text-slate-400 uppercase font-mono leading-none">Score</div>
              <div className="text-[9px] font-bold text-emerald-600 mt-0.5">Lighthouse</div>
            </div>
          </div>
          
          {/* LCP Score */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 flex flex-col justify-center">
            <span className="text-[7.5px] font-bold text-slate-400 uppercase font-mono">LCP Speed</span>
            <span className="text-sm font-bold text-slate-800 mt-0.5">0.42s</span>
            <span className="text-[7px] text-emerald-600 font-semibold mt-0.5">● Ultra Fast</span>
          </div>

          {/* Speed Index */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 flex flex-col justify-center">
            <span className="text-[7.5px] font-bold text-slate-400 uppercase font-mono">Speed Index</span>
            <span className="text-sm font-bold text-slate-800 mt-0.5">0.68s</span>
            <span className="text-[7px] text-emerald-600 font-semibold mt-0.5">● Optimal</span>
          </div>
        </div>

        {/* Middle metrics row */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-800 font-bold">
            <div className="text-[8px] text-slate-400 uppercase font-semibold">FID</div>
            <div className="text-[11px] font-bold text-slate-800 mt-0.5">12ms</div>
          </div>
          <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-800 font-bold">
            <div className="text-[8px] text-slate-400 uppercase font-semibold">CLS</div>
            <div className="text-[11px] font-bold text-slate-800 mt-0.5">0.00</div>
          </div>
          <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-800 font-bold">
            <div className="text-[8px] text-slate-400 uppercase font-semibold">Bundle Bloat</div>
            <div className="text-[11px] font-bold text-slate-800 mt-0.5">0%</div>
          </div>
        </div>

        {/* Bottom Status strip */}
        <div className="bg-slate-50 border border-slate-100 rounded-xl py-2 px-4 flex items-center justify-between text-[9px] font-semibold text-slate-500 font-mono">
          <span className="text-emerald-600">● All Systems Nominal</span>
          <span>Prerender: Static</span>
          <span>CDN Edge: Verified</span>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="section-padding relative bg-white">
      {/* Decorative background glow */}
      <div 
        className="absolute inset-0 pointer-events-none select-none opacity-[0.25]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(168, 85, 247, 0.05) 0%, transparent 40%)
          `,
          backgroundSize: '100% 100%',
        }}
      />

      <div className="section-container relative z-10">
        {/* Centered Header on Top */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="section-label">About Us</span>
          <h2
            className="text-[clamp(36px,5vw,56px)] font-bold tracking-[-0.04em] mb-6 leading-tight"
            style={{ color: "var(--color-text-primary)" }}
          >
            A studio that cares about craft.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate-500 max-w-2xl mx-auto">
            We&apos;re a small, focused team of engineers and designers who work with attention to
            detail. No bloated teams. No unnecessary complexity.
          </p>
        </motion.div>

        {/* Scroll-Stacked Cards Deck with Narrower Width & Scroll Space */}
        <div className="relative flex flex-col gap-6 max-w-4xl mx-auto pb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                style={{ 
                  "--index": index,
                  "--total": features.length,
                } as React.CSSProperties}
                className="about-card-wrapper w-full"
              >
                <div className="about-card rounded-3xl border border-slate-200 bg-white p-6 md:p-8 lg:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] hover:border-slate-300 flex flex-col gap-6 min-h-[700px]">
                  {/* Text on Top */}
                  <div>
                    {/* Icon */}
                    <div 
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                        index === 0
                          ? "bg-purple-50 text-purple-600 border border-purple-100"
                          : index === 1
                            ? "bg-blue-50 text-blue-600 border border-blue-100"
                            : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 tracking-[-0.02em]">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Embedded Mockup Below */}
                  <div className="w-full mt-auto">
                    {index === 0 && <EditorView />}
                    {index === 1 && <CanvasView />}
                    {index === 2 && <VitalsView />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
