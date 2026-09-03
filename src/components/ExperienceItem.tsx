import type { ExperienceEntry } from "@/data/experience";
import { useReveal } from "@/hooks/useReveal";
import { LastUpdated } from "./LastUpdated";
import { Tag } from "./Tag";

export function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  const ref = useReveal<HTMLLIElement>({ threshold: 0.25 });

  return (
    <li ref={ref} data-reveal className={`xp${entry.current ? " xp--current" : ""}`}>
      <div className="xp__rail" aria-hidden="true">
        <span className="xp__node" />
      </div>

      <div className="xp__card">
        <div className="xp__head">
          <div>
            <h3 className="xp__role">{entry.role}</h3>
            <p className="xp__company">
              {entry.company}
              {entry.companyNote && (
                <span className="xp__note"> · {entry.companyNote}</span>
              )}
            </p>
          </div>
          <div className="xp__when">
            <span className="mono xp__dates">
              {entry.start} — {entry.end}
            </span>
            {entry.location && <span className="xp__loc">{entry.location}</span>}
          </div>
        </div>

        <ul className="xp__highlights">
          {entry.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <div className="xp__foot">
          <div className="xp__stack">
            {entry.stack.map((s) => (
              <Tag key={s} variant="muted">
                {s}
              </Tag>
            ))}
          </div>
          {entry.updatedISO && (
            <LastUpdated
              iso={entry.updatedISO}
              granularity="year"
              label="Updated"
              size="sm"
              layout="inline"
            />
          )}
        </div>
      </div>
    </li>
  );
}
