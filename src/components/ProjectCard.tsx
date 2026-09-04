import type { Project } from "@/data/projects";
import { LastUpdated } from "./LastUpdated";
import { Tag } from "./Tag";
import { ArrowUpRight } from "./Icons";

interface ProjectCardProps {
  project: Project;
  /** Opens the case study when the project has one. */
  onOpen?: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const hasCaseStudy = Boolean(project.caseStudy);
  const clickable = hasCaseStudy && onOpen;

  return (
    <article
      className={`proj-card${clickable ? " proj-card--clickable" : ""}`}
      onClick={clickable ? () => onOpen?.(project) : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpen?.(project);
              }
            }
          : undefined
      }
      tabIndex={clickable ? 0 : undefined}
      role={clickable ? "button" : undefined}
      aria-label={clickable ? `${project.name} — open case study` : undefined}
    >
      <div className="proj-card__head">
        <div className="proj-card__status">
          <span className={`dot dot--${project.status.toLowerCase()}`} aria-hidden="true" />
          <span className="mono">{project.status}</span>
        </div>
        <LastUpdated iso={project.updatedISO} granularity="month" size="sm" layout="inline" />
      </div>

      <h3 className="proj-card__name">{project.name}</h3>
      <p className="proj-card__tagline mono">{project.tagline}</p>
      <p className="proj-card__summary">{project.summary}</p>

      <dl className="proj-card__meta">
        <div>
          <dt className="mono">Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt className="mono">Approach</dt>
          <dd>{project.approach}</dd>
        </div>
        <div>
          <dt className="mono">Impact</dt>
          <dd>{project.impact}</dd>
        </div>
      </dl>

      <div className="proj-card__tech">
        {project.tech.map((t) => (
          <Tag key={t} variant="muted">
            {t}
          </Tag>
        ))}
      </div>

      <div className="proj-card__foot">
        <span className="proj-card__role">{project.role}</span>
        {(hasCaseStudy || project.links.length > 0) && (
          <div className="proj-card__links">
            {hasCaseStudy && (
              <span className="proj-card__cta">
                Case study <ArrowUpRight width={14} height={14} />
              </span>
            )}
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="proj-card__link"
                onClick={(e) => e.stopPropagation()}
                {...(l.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
