import type { SkillGroup as SkillGroupType } from "@/data/skills";
import { Reveal } from "./Reveal";
import { SkillBadge } from "./SkillBadge";

export function SkillGroup({ group, order }: { group: SkillGroupType; order: number }) {
  return (
    <Reveal className="skill-group" order={order}>
      <p className="skill-group__label mono">
        <span className="skill-group__bar" aria-hidden="true" />
        {group.label}
      </p>
      <div className="skill-group__items">
        {group.skills.map((s) => (
          <SkillBadge key={s.name} skill={s} />
        ))}
      </div>
    </Reveal>
  );
}
