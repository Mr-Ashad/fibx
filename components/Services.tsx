"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

// 1. Web Dev Mockup (Mini Browser Window)
const WebDevMockup = () => {
  return (
    <div className="w-full relative mt-6 lg:mt-0 h-[130px] bg-slate-50 border border-slate-200/60 rounded-tl-xl overflow-hidden shadow-sm transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-md">
      {/* Browser header */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100/80 border-b border-slate-200/60">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
        <div className="ml-3 flex-1 max-w-[100px] h-3.5 rounded bg-white text-[7px] text-slate-400 flex items-center px-1.5 select-none border border-slate-200/40">
          fibx.agency
        </div>
      </div>
      {/* Browser content */}
      <div className="p-3 relative h-[94px] flex flex-col justify-between overflow-hidden">
        {/* Simple layout wireframe */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <div className="w-6 h-1.5 rounded bg-blue-600/20" />
            <div className="flex gap-1">
              <div className="w-3 h-1 rounded bg-slate-200" />
              <div className="w-3 h-1 rounded bg-slate-200" />
            </div>
          </div>
          <div className="space-y-0.5">
            <div className="w-1/2 h-2 rounded bg-slate-800/80" />
            <div className="w-1/3 h-1 rounded bg-slate-400/60" />
          </div>
          {/* Visual grid in mockup */}
          <div className="grid grid-cols-3 gap-1 pt-0.5">
            <div className="h-6 rounded bg-blue-50 border border-blue-100" />
            <div className="h-6 rounded bg-slate-100" />
            <div className="h-6 rounded bg-slate-100" />
          </div>
        </div>
        
        {/* Floating tech badges */}
        <div className="absolute right-2.5 top-6 px-1.5 py-0.5 rounded bg-white shadow-xs border border-slate-200/80 text-[7.5px] font-bold text-blue-500 flex items-center gap-0.5 select-none leading-none">
          React
        </div>
        <div className="absolute right-11 top-11 px-1.5 py-0.5 rounded bg-slate-900 shadow-xs text-[7.5px] font-bold text-white flex items-center gap-0.5 select-none leading-none">
          Next.js
        </div>
        <div className="absolute right-3.5 bottom-1.5 px-1.5 py-0.5 rounded bg-white shadow-xs border border-slate-200/80 text-[7.5px] font-bold text-cyan-500 flex items-center gap-0.5 select-none leading-none">
          Tailwind
        </div>
      </div>
    </div>
  );
};

// 2. Business Software Mockup (SaaS Dashboard & Chart)
const BusinessSoftwareMockup = () => {
  return (
    <div className="w-full mt-6 h-[130px] bg-slate-50 border border-slate-200/60 rounded-t-xl overflow-hidden shadow-sm p-4 flex flex-col justify-between group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300">
      {/* Metric Cards */}
      <div className="flex gap-2 justify-between">
        <div className="p-2 rounded bg-white border border-slate-200/50 flex-1 flex flex-col justify-between">
          <div className="text-[8px] text-slate-400 font-medium">Revenue</div>
          <div className="flex items-baseline justify-between mt-0.5">
            <span className="text-[11px] font-bold text-slate-800">$48,250</span>
            <span className="text-[7.5px] text-emerald-600 font-bold flex items-center gap-0.5">
              ▲ 12%
            </span>
          </div>
        </div>
        <div className="p-2 rounded bg-white border border-slate-200/50 flex-1 flex flex-col justify-between">
          <div className="text-[8px] text-slate-400 font-medium">Users</div>
          <div className="flex items-baseline justify-between mt-0.5">
            <span className="text-[11px] font-bold text-slate-800">3,820</span>
            <span className="text-[7.5px] text-emerald-600 font-bold flex items-center gap-0.5">
              ▲ 18%
            </span>
          </div>
        </div>
      </div>
      
      {/* Line Chart */}
      <div className="relative h-12 w-full bg-white border border-slate-200/40 rounded p-1.5 overflow-hidden">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 200 35" fill="none">
          {/* Grid lines */}
          <line x1="0" y1="8" x2="200" y2="8" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="0" y1="16" x2="200" y2="16" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="0" y1="24" x2="200" y2="24" stroke="#f1f5f9" strokeWidth="1" />
          
          {/* Static line */}
          <path
            d="M0,32 Q25,28 50,14 T100,22 T150,8 T200,4"
            stroke="var(--color-brand)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Gradient under line */}
          <path
            d="M0,32 Q25,28 50,14 T100,22 T150,8 T200,4 L200,35 L0,35 Z"
            fill="url(#chart-gradient)"
            opacity="0.12"
          />
          <defs>
            <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-brand)" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Indicator Dot inside SVG (Scales perfectly) */}
          <circle cx="200" cy="4" r="4.5" fill="var(--color-brand)" opacity="0.15" />
          <circle cx="200" cy="4" r="2.2" fill="var(--color-brand)" />
        </svg>

        {/* Floating Tooltip Value */}
        <div className="absolute right-1.5 top-1 px-1 py-0.5 rounded bg-slate-900 text-[6.5px] font-bold text-white shadow-sm flex items-center select-none font-mono leading-none">
          $48.2k
        </div>
      </div>
    </div>
  );
};

// 3. AI Solutions Mockup (Neural Net connections)
const AISolutionsMockup = () => {
  return (
    <div className="w-full mt-6 h-[130px] bg-slate-950 border border-slate-900 rounded-t-xl overflow-hidden shadow-sm p-4 flex flex-col justify-center items-center relative group-hover:border-indigo-500/30 transition-all duration-300">
      <div className="absolute inset-0 bg-radial-gradient from-indigo-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />
      {/* Node structure */}
      <svg className="w-full h-full z-10" viewBox="0 0 180 80">
        {/* Connection lines */}
        <line x1="20" y1="40" x2="60" y2="20" stroke="#4f46e5" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        <line x1="20" y1="40" x2="60" y2="60" stroke="#4f46e5" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        <line x1="60" y1="20" x2="120" y2="20" stroke="#4f46e5" strokeWidth="1.5" opacity="0.4" />
        <line x1="60" y1="60" x2="120" y2="60" stroke="#4f46e5" strokeWidth="1.5" opacity="0.4" />
        <line x1="60" y1="20" x2="120" y2="60" stroke="#818cf8" strokeWidth="1.5" opacity="0.4" />
        <line x1="60" y1="60" x2="120" y2="20" stroke="#818cf8" strokeWidth="1.5" opacity="0.4" />
        <line x1="120" y1="20" x2="160" y2="40" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        <line x1="120" y1="60" x2="160" y2="40" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        
        {/* Static packets */}
        <circle
          cx="90"
          cy="40"
          r="2"
          fill="#818cf8"
        />
        <circle
          cx="80"
          cy="47"
          r="2"
          fill="#38bdf8"
        />

        {/* Nodes */}
        <circle cx="20" cy="40" r="3.5" fill="#38bdf8" />
        <circle cx="20" cy="40" r="7" fill="#38bdf8" opacity="0.2" />
        
        <circle cx="60" cy="20" r="4.5" fill="#4f46e5" />
        <circle cx="60" cy="60" r="4.5" fill="#4f46e5" />
        
        <circle cx="120" cy="20" r="4.5" fill="#6366f1" />
        <circle cx="120" cy="60" r="4.5" fill="#6366f1" />
        
        <circle cx="160" cy="40" r="3.5" fill="#f43f5e" />
      </svg>
      {/* Accuracy Status */}
      <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-400/20 text-[7px] font-mono text-indigo-300">
        accuracy: 99.4%
      </div>
    </div>
  );
};

// 4. Backend Mockup (Console log JSON output)
const BackendMockup = () => {
  return (
    <div className="w-full mt-6 h-[130px] bg-slate-950 border border-slate-900 rounded-t-xl overflow-hidden shadow-sm p-4 flex flex-col justify-between font-mono text-[8px] text-emerald-400 group-hover:border-emerald-500/30 transition-all duration-300">
      <div className="flex justify-between items-center border-b border-slate-900 pb-1 text-slate-500">
        <span>api.fibx.agency</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      </div>
      <div className="flex-1 space-y-1 mt-1 text-[7.5px] select-none">
        <div>
          <span className="text-purple-400">GET</span> <span className="text-white">/api/v1/health</span>
        </div>
        <div className="text-slate-500">{"{"} status: &quot;healthy&quot;, latency: &quot;12ms&quot; {"}"}</div>
        
        <div>
          <span className="text-purple-400">POST</span> <span className="text-white">/api/v1/auth</span>
        </div>
        <div className="text-emerald-300">{"{"} user_id: 204, status: 200 OK {"}"}</div>
      </div>
      <div className="flex justify-between items-center text-slate-500 border-t border-slate-900 pt-1 text-[7px]">
        <span>CPU: 4%</span>
        <span>MEM: 124MB</span>
      </div>
    </div>
  );
};

// 5. DevOps Mockup (CI/CD Pipeline Flow)
const DevOpsMockup = () => {
  return (
    <div className="w-full mt-6 h-[130px] bg-slate-50 border border-slate-200/60 rounded-t-xl overflow-hidden shadow-sm p-4 flex flex-col justify-between relative group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between text-[8px] text-slate-400 font-mono">
        <span>pipeline: #28471</span>
        <span className="px-1 py-0.5 rounded bg-green-50 text-green-600 font-bold border border-green-200 text-[7.5px]">PASS</span>
      </div>
      
      {/* Pipeline steps */}
      <div className="flex justify-between items-center relative my-1.5 px-1">
        {/* Connecting line background */}
        <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 z-0" />
        {/* Glowing path overlay */}
        <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 h-0.5 bg-blue-500 z-0" />
        
        {/* Stage 1 */}
        <div className="flex flex-col items-center gap-0.5 z-10">
          <div className="w-7 h-7 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[8.5px] text-slate-600 font-mono font-bold">
            git
          </div>
          <span className="text-[7px] text-slate-500 font-medium">Commit</span>
        </div>
        
        {/* Stage 2 */}
        <div className="flex flex-col items-center gap-0.5 z-10">
          <div className="w-7 h-7 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[8.5px] text-slate-600">
            ⚙️
          </div>
          <span className="text-[7px] text-slate-500 font-medium">Build</span>
        </div>
        
        {/* Stage 3 */}
        <div className="flex flex-col items-center gap-0.5 z-10">
          <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 shadow-sm flex items-center justify-center text-[8.5px]">
            🚀
          </div>
          <span className="text-[7px] text-slate-500 font-medium">Deploy</span>
        </div>
      </div>
      
      {/* Deploy Status */}
      <div className="text-[7.5px] text-slate-500 font-mono flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
        <span>Vercel production active</span>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <section
      id="services"
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
          <span className="section-label">Services</span>
          <h2
            className="text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            Everything you need to ship.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            End-to-end capabilities to take your product from idea to scale — designed,
            built, and deployed by one cohesive team.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isWebDev = service.title === "Web Development";
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`card overflow-hidden group cursor-default transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between ${service.span || ""}`}
                style={{ backgroundColor: "white" }}
              >
                {isWebDev ? (
                  <div className="p-8 pb-0 pr-0 h-full flex flex-col justify-between lg:grid lg:grid-cols-12 lg:gap-8 lg:p-8 lg:pb-0 lg:pr-0">
                    <div className="lg:col-span-6 flex flex-col justify-between pb-8 lg:pb-8 pr-8 lg:pr-0">
                      <div>
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/10"
                          style={{ backgroundColor: "var(--color-brand-50)" }}
                        >
                          <Icon size={22} style={{ color: "var(--color-brand)" }} />
                        </div>
                        <h3
                          className="text-2xl font-bold mb-3 tracking-[-0.02em]"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {service.title}
                        </h3>
                        <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Sub-tags list for Web Dev */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-50 border border-slate-100 text-slate-600">SaaS Apps</span>
                        <span className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-50 border border-slate-100 text-slate-600">E-Commerce</span>
                        <span className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-50 border border-slate-100 text-slate-600">Custom Portals</span>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-6 flex items-end">
                      <WebDevMockup />
                    </div>
                  </div>
                ) : (
                  <div className="p-8 pb-0 flex flex-col justify-between h-full">
                    <div>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/10"
                        style={{ backgroundColor: "var(--color-brand-50)" }}
                      >
                        <Icon size={22} style={{ color: "var(--color-brand)" }} />
                      </div>
                      <h3
                        className="text-xl font-bold mb-3 tracking-[-0.01em]"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="mt-6 overflow-hidden">
                      {service.title === "Business Software" && <BusinessSoftwareMockup />}
                      {service.title === "AI Solutions" && <AISolutionsMockup />}
                      {service.title === "Backend Development" && <BackendMockup />}
                      {service.title === "Deployment & DevOps" && <DevOpsMockup />}
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
