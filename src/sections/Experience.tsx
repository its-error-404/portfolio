import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceItem } from "@/components/ExperienceItem";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" ariaLabel="Experience">
      <SectionHeading
        kicker="Experience"
        title="Three years, one company, four projects"
        lead="All through Rootquotient in Chennai. Client names left out on purpose."
      />
      <ol className="xp-list">
        {experience.map((entry) => (
          <ExperienceItem key={entry.id} entry={entry} />
        ))}
      </ol>
    </Section>
  );
}
