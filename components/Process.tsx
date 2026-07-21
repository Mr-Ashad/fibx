"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

/**
 * Process — Horizontal timeline on desktop, vertical on mobile.
 * Each step shows an icon circle, title, and description.
 */
export default function Process() {
  return (
    <section
      id="process"
      className="section-padding overflow-hidden"
      style={{ backgroundColor: "var(--color-surface-raised)" }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="section-label">Our Process</span>
          <h2
            className="text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            From vision to reality.
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            A proven six-step process that ensures every project is delivered on
            time, on budget, and beyond expectations.
          </p>
        </motion.div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-6 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="process-step group relative text-center"
                >
                  {/* Connector line */}
                  {index < processSteps.length - 1 && (
                    <div
                      className="absolute top-6 left-[calc(50%+28px)] h-[1px]"
                      style={{
                        width: "calc(100% - 40px)",
                        background:
                          "linear-gradient(90deg, var(--color-border) 0%, var(--color-border-light) 100%)",
                      }}
                    />
                  )}

                  {/* Step circle */}
                  <div className="relative z-10 flex justify-center mb-5">
                    <div className="process-step__circle">
                      <Icon size={20} color="white" />
                    </div>
                  </div>

                  {/* Step number */}
                  <div className="process-step__label">Step {step.step}</div>

                  <h3
                    className="text-[16px] font-semibold mb-2 leading-snug"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-0">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative flex gap-5 pb-10 last:pb-0"
              >
                {/* Vertical line */}
                {index < processSteps.length - 1 && (
                  <div
                    className="absolute left-[23px] top-12 bottom-0 w-[1px]"
                    style={{
                      background:
                        "linear-gradient(180deg, var(--color-border) 0%, var(--color-border-light) 100%)",
                    }}
                  />
                )}

                {/* Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="process-step__circle">
                    <Icon size={20} color="white" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <div className="process-step__label mb-1">
                    Step {step.step}
                  </div>
                  <h3
                    className="text-lg font-semibold mb-1"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[15px] leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
