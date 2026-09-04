import type { Project } from "@/data/projects";
import { Reveal } from "./Reveal";
import { LastUpdated } from "./LastUpdated";
import { Tag } from "./Tag";
import { Button } from "./Button";
import { ArrowRight } from "./Icons";

interface FeaturedProjectProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function FeaturedProject({ project, onOpen }: FeaturedProjectProps) {
  const hasVisual = Boolean(project.thumb);

  return (
    <Reveal className="featured">
      <div className={`featured__panel${hasVisual ? "" : " featured__panel--solo"}`}>
        {hasVisual && (
          <div className="featured__visual" aria-hidden="true">
            <img src={project.thumb} alt="" loading="lazy" decoding="async" />
          </div>
        )}

        <div className="featured__body">
          <div className="featured__kicker">
            <span className="featured__tagline mono">{project.tagline}</span>
            <span className="featured__status mono">
              <span className={`dot dot--${project.status.toLowerCase()}`} /> {project.status}
            </span>
          </div>

          <h3 className="featured__name">{project.name}</h3>
          <p className="featured__summary">{project.summary}</p>

          <div className="featured__cols">
            <div>
              <p className="mono featured__label">Problem</p>
              <p>{project.problem}</p>
            </div>
            <div>
              <p className="mono featured__label">Approach</p>
              <p>{project.approach}</p>
            </div>
            <div>
              <p className="mono featured__label">Impact</p>
              <p>{project.impact}</p>
            </div>
          </div>

          <div className="featured__tech">
            {project.tech.map((t) => (
              <Tag key={t} variant="muted">
                {t}
              </Tag>
            ))}
          </div>

          <div className="featured__foot">
            <Button
              variant="primary"
              onClick={() => onOpen(project)}
              iconRight={<ArrowRight width={16} height={16} />}
            >
              Read the case study
            </Button>
            <LastUpdated iso={project.updatedISO} granularity="month" size="md" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
