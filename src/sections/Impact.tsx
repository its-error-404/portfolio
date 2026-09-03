import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ImpactCard } from "@/components/ImpactCard";
import { impactItems } from "@/data/impact";

export function Impact() {
  return (
    <Section id="impact" ariaLabel="Engineering impact">
      <SectionHeading
        kicker="Engineering Impact"
        title="What it adds up to"
        lead="Rough counts from the two codebases I've spent the most time in."
      />
      <div className="impact__grid">
        {impactItems.map((item, i) => (
          <ImpactCard key={item.label} item={item} order={i} />
        ))}
      </div>
    </Section>
  );
}
