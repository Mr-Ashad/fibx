"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/data";

/**
 * Navbar — Sticky navigation with blur backdrop.
 * White background, minimal, with mobile hamburger menu.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.98)",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      }}
    >
      <nav className="section-container flex items-center justify-between h-[80px] px-4" aria-label="Main navigation" style={{ fontFamily: "var(--font-sans)" }}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" aria-label="FIBX Home">
          <span className="text-3xl font-bold font-sans tracking-tight" style={{ color: "var(--color-text-primary)" }}>
            FIBX
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-12" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-medium transition-colors duration-200"
                style={{ color: "var(--color-text-secondary)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-brand)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary text-sm">
            Start Project
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="section-container py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-3 px-4 rounded-xl text-[16px] font-medium transition-colors hover:bg-[var(--color-surface-raised)]"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="btn-primary mt-4 w-full text-center"
              >
                Start Project
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
