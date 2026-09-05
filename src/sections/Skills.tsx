import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillGroup } from "@/components/SkillGroup";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" ariaLabel="Skills">
      <SectionHeading
        kicker="Skills"
        title="Tools I use"
        lead="Grouped by area. Hover a tag for where I've used it."
      />

      <div className="skills__grid">
        {skillGroups.map((group, i) => (
          <SkillGroup key={group.label} group={group} order={i} />
        ))}
      </div>
    </Section>
  );
}
