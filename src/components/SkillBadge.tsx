import type { Skill } from "@/data/skills";

export function SkillBadge({ skill }: { skill: Skill }) {
  const interactive = Boolean(skill.note);
  return (
    <span
      className="skill"
      tabIndex={interactive ? 0 : undefined}
      data-note={interactive ? "true" : undefined}
    >
      <span className="skill__name">{skill.name}</span>
      {skill.note && (
        <span className="skill__note" role="tooltip">
          {skill.note}
        </span>
      )}
    </span>
  );
}
