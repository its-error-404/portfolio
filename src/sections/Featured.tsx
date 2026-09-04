import type { Project } from "@/data/projects";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { FeaturedProject } from "@/components/FeaturedProject";
import { featuredProject } from "@/data/projects";

export function Featured({ onOpenProject }: { onOpenProject: (p: Project) => void }) {
  return (
    <Section id="featured" ariaLabel="Featured project">
      <SectionHeading
        kicker="Featured Project"
        title="The one I know best"
        lead="The healthcare product I've been the main front-end dev on since mid-2025."
      />
      <FeaturedProject project={featuredProject} onOpen={onOpenProject} />
    </Section>
  );
}
