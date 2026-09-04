import { useCallback, useEffect, useRef } from "react";
import type { Project } from "@/data/projects";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { LastUpdated } from "./LastUpdated";
import { Tag } from "./Tag";
import { Close } from "./Icons";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const open = Boolean(project?.caseStudy);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastActive = useRef<HTMLElement | null>(null);

  useLockBodyScroll(open);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const nodes = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
        ).filter((n) => n.offsetParent !== null);
        if (nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    lastActive.current = document.activeElement as HTMLElement | null;
    document.addEventListener("keydown", handleKey);
    const t = window.setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    }, 20);
    return () => {
      document.removeEventListener("keydown", handleKey);
      window.clearTimeout(t);
      lastActive.current?.focus?.();
    };
  }, [open, handleKey]);

  if (!open || !project?.caseStudy) return null;
  const cs = project.caseStudy;

  return (
    <div className="modal" role="presentation" onMouseDown={onClose}>
      <div
        className="modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cs-title"
        ref={dialogRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <header className="modal__head">
          <div>
            <p className="mono accent-text">Case study</p>
            <h2 id="cs-title" className="modal__title">
              {project.name}
            </h2>
            <p className="modal__subtitle mono">{project.tagline}</p>
          </div>
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="Close case study"
            data-autofocus
          >
            <Close />
          </button>
        </header>

        <div className="modal__meta">
          <span className="mono">
            <span className={`dot dot--${project.status.toLowerCase()}`} /> {project.status}
          </span>
          <LastUpdated iso={project.updatedISO} granularity="month" size="sm" layout="inline" />
        </div>

        <div className="modal__body">
          {cs.sections.map((s) => (
            <section key={s.index} className="cs-section">
              <div className="cs-section__index mono">{s.index}</div>
              <div className="cs-section__content">
                <h3 className="cs-section__title">{s.title}</h3>
                {s.body.map((p, i) => (
                  <p key={i} className="cs-section__p">
                    {p}
                  </p>
                ))}
                {s.points && (
                  <ul className="cs-section__list">
                    {s.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                )}

                {s.index === "09" && (
                  <div className="cs-tech">
                    {cs.techGroups.map((g) => (
                      <div key={g.label} className="cs-tech__group">
                        <p className="mono">{g.label}</p>
                        <div className="cs-tech__items">
                          {g.items.map((it) => (
                            <Tag key={it} variant="muted">
                              {it}
                            </Tag>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
