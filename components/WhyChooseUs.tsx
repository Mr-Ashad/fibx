"use client";

import { motion } from "framer-motion";
import { advantages } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="section-label">Why Choose Us</span>

          <h2 className="mt-5 text-[clamp(38px,5vw,58px)] font-bold tracking-[-0.05em] text-neutral-950">
            Built for products that matter.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-neutral-500">
            We partner with ambitious teams to design and build software that&apos;s
            elegant, reliable, and engineered to scale.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group rounded-[30px] border border-neutral-200 bg-white p-9 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]"
              >
                {/* Icon */}
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">
                  <Icon
                    size={22}
                    className="text-blue-600 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[21px] font-semibold tracking-[-0.025em] text-neutral-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[14px] leading-6 text-neutral-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}