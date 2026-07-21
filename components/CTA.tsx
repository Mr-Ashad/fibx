"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

/**
 * CTA — Large centered call-to-action card with compelling copy.
 */
export default function CTA() {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{ backgroundColor: "var(--color-surface-raised)" }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto p-10 md:p-16 rounded-3xl"
          style={{
            backgroundColor: "white",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <span className="section-label">Get Started</span>

          <h2
            className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.03em] mb-5 mt-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Ready to build something remarkable?
          </h2>

          <p
            className="text-lg leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Let&apos;s discuss your project. We&apos;ll help you define the scope,
            choose the right technology, and build a plan to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:hello@fibx.dev" className="btn-primary">
              <Mail size={18} />
              Start a Conversation
              <ArrowRight size={18} />
            </a>
            <a href="#projects" className="btn-secondary">
              Explore Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
