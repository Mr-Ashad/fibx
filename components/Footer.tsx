import { navLinks, socialLinks } from "@/lib/data";

/**
 * Footer — Minimal footer with logo, nav, email, social links, and copyright.
 * Server component — no client-side JS needed.
 */
export default function Footer() {
  return (
    <footer
      className="py-16"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">
          {/* Logo & Description */}
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-2 mb-3" aria-label="FIBX Home">
              <span className="text-xl font-bold tracking-tight" style={{ color: "var(--color-text-primary)" }}>
                FIBX
              </span>
            </a>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              Premium software engineering for businesses that demand excellence.
            </p>
          </div>

          {/* Nav Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] font-medium transition-colors duration-200 hover:text-[var(--color-brand)]"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-8" style={{ backgroundColor: "var(--color-border)" }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[14px]" style={{ color: "var(--color-text-muted)" }}>
            © {new Date().getFullYear()} FIBX. All rights reserved.
          </p>

          {/* Email */}
          <a
            href="mailto:hello@fibx.dev"
            className="text-[14px] font-medium transition-colors hover:text-[var(--color-brand)]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            hello@fibx.dev
          </a>

          {/* Social links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-medium transition-colors hover:text-[var(--color-brand)]"
                style={{ color: "var(--color-text-muted)" }}
                aria-label={`Visit our ${link.label}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
