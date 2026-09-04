import type { Project } from "@/data/projects";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { gridProjects } from "@/data/projects";

export function Projects({ onOpenProject }: { onOpenProject: (p: Project) => void }) {
  return (
    <Section id="projects" ariaLabel="Selected projects">
      <SectionHeading
        kicker="Selected Projects"
        title="A few more"
        lead="One more from work, and two of my own."
      />
      <div className="proj-grid">
        {gridProjects.map((p, i) => (
          <Reveal key={p.id} order={i}>
            <ProjectCard project={p} onOpen={onOpenProject} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
