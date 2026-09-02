import { useCallback, useEffect, useState } from "react";
import { navItems } from "@/lib/nav";
import { site } from "@/lib/site";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";
import { Close, Download, Menu } from "./Icons";

const SECTION_IDS = ["hero", ...navItems.map((n) => n.id)];

export function Navbar() {
  const compact = useScrolled(64);
  const active = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  useLockBodyScroll(menuOpen);

  const close = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <header className={`nav${compact ? " nav--compact" : ""}`}>
      <div className="nav__inner container">
        <a href="#hero" className="nav__brand" onClick={close} aria-label={`${site.name} — home`}>
          <span className="nav__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 8 4 12l4 4" />
              <path d="m14 16 3 0" className="nav__mark-accent" />
            </svg>
          </span>
          <span className="nav__name">{site.name}</span>
        </a>

        <nav className="nav__links" aria-label="Section navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link${active === item.id ? " is-active" : ""}`}
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <ThemeToggle compact={compact} />
          <Button
            as="a"
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            size="sm"
            variant="secondary"
            iconLeft={<Download width={15} height={15} />}
            className="nav__resume"
          >
            Resume
          </Button>
          <button
            type="button"
            className="nav__burger"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`nav__drawer${menuOpen ? " is-open" : ""}`}
      >
        <nav className="nav__drawer-links" aria-label="Mobile section navigation">
          {navItems.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__drawer-link${active === item.id ? " is-active" : ""}`}
              style={{ transitionDelay: `${i * 30}ms` }}
              onClick={close}
            >
              <span className="mono nav__drawer-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          as="a"
          href={site.resumeUrl}
          target="_blank"
          rel="noreferrer noopener"
          variant="secondary"
          iconLeft={<Download width={16} height={16} />}
          onClick={close}
        >
          Download Resume
        </Button>
      </div>
      <button
        className={`nav__scrim${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        tabIndex={-1}
        onClick={close}
      />
    </header>
  );
}
