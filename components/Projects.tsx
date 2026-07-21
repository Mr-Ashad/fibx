"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { useLenis } from "lenis/react";

/**
 * Projects — Six fictional showcase projects with gradient placeholders,
 * category badges, tech tags, and hover animations.
 */
export default function Projects() {
  const lenis = useLenis();
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label">Projects</span>
          <h2
            className="text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            Our Works
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            A selection of projects to showcase our expertise across different industries and technologies.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const cardContent = (
              <>
                {/* Image Placeholder or Live Website Preview */}
                <div
                  className="relative h-52 overflow-hidden"
                  style={{ background: project.color }}
                >
                  {project.image ? (
                    <div className="absolute inset-0 w-full h-full bg-slate-950 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.08]"
                        loading="lazy"
                      />
                      {/* Dark overlay for professional look and hover contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-40" />
                    </div>
                  ) : project.href ? (
                    <div className="absolute inset-0 w-full h-full bg-slate-950 overflow-hidden">
                      <iframe
                        src={project.href}
                        className="absolute top-0 left-0 w-[200%] h-[200%] origin-top-left scale-50 border-0 pointer-events-none select-none transition-transform duration-500 group-hover:scale-[0.52]"
                        title={project.title}
                        loading="lazy"
                      />
                      {/* Dark overlay for professional look and hover contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-40" />
                    </div>
                  ) : (
                    /* Abstract UI mockup */
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div
                        className="w-full h-full rounded-xl p-5 transition-transform duration-500 group-hover:scale-[1.03]"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.15)",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        <div className="flex gap-1.5 mb-4">
                          <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        </div>
                        <div className="w-2/3 h-2 rounded-full bg-white/30 mb-2" />
                        <div className="w-full h-2 rounded-full bg-white/20 mb-2" />
                        <div className="w-4/5 h-2 rounded-full bg-white/15 mb-4" />
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-10 rounded-lg bg-white/15" />
                          <div className="h-10 rounded-lg bg-white/10" />
                          <div className="h-10 rounded-lg bg-white/15" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--color-brand)" }}
                  >
                    {project.category}
                  </span>

                  <h3
                    className="text-xl font-semibold mt-2 mb-2 tracking-[-0.01em]"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-[15px] leading-relaxed mb-6"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {project.description}
                  </p>

                  {/* View Project / Status */}
                  {project.inProgress ? (
                    <div
                      className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 cursor-default"
                    >
                      In Progress
                    </div>
                  ) : (
                    <div
                      className="flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:gap-2.5"
                      style={{ color: "var(--color-brand)", transition: "gap 0.3s ease, color 0.2s ease" }}
                    >
                      {project.href === "#contact" ? "Available on request" : project.href ? "Visit Website" : "Platform Preview"}
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  )}
                </div>
              </>
            );

            if (project.inProgress) {
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="border border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-surface)] overflow-hidden select-none"
                >
                  {cardContent}
                </motion.div>
              );
            }

            return (
              <motion.a
                key={project.title}
                href={project.href || "#"}
                target={project.href?.startsWith("http") ? "_blank" : undefined}
                rel={project.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (!project.href) {
                    e.preventDefault();
                  } else if (project.href.startsWith("#")) {
                    e.preventDefault();
                    if (lenis) {
                      lenis.scrollTo(project.href);
                    } else {
                      const targetEl = document.querySelector(project.href);
                      if (targetEl) {
                        targetEl.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }
                }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="card group overflow-hidden cursor-pointer block no-underline"
              >
                {cardContent}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
