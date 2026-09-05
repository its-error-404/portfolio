import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ExploringCard } from "@/components/ExploringCard";
import { exploringItems } from "@/data/exploring";

export function Exploring() {
  return (
    <Section id="exploring" ariaLabel="Currently learning">
      <SectionHeading
        kicker="Currently Learning"
        title="What I'm digging into"
        lead="One thing at a time, usually."
      />
      <div className="explore-grid">
        {exploringItems.map((item, i) => (
          <Reveal key={item.topic} order={i}>
            <ExploringCard item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
