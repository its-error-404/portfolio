import { lazy, Suspense, useCallback, useState } from "react";
import type { Project } from "@/data/projects";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Impact } from "@/sections/Impact";
import { Experience } from "@/sections/Experience";
import { Featured } from "@/sections/Featured";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Certificates } from "@/sections/Certificates";
import { Exploring } from "@/sections/Exploring";
import { Contact } from "@/sections/Contact";

// The case-study modal only renders after a click — keep it out of the initial bundle.
const CaseStudyModal = lazy(() =>
  import("@/components/CaseStudyModal").then((m) => ({ default: m.CaseStudyModal })),
);

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const openProject = useCallback((p: Project) => setActiveProject(p), []);
  const closeProject = useCallback(() => setActiveProject(null), []);

  return (
    <ThemeProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Impact />
        <Experience />
        <Featured onOpenProject={openProject} />
        <Projects onOpenProject={openProject} />
        <Skills />
        <Certificates />
        <Exploring />
        <Contact />
      </main>
      <Footer />
      {activeProject && (
        <Suspense fallback={null}>
          <CaseStudyModal project={activeProject} onClose={closeProject} />
        </Suspense>
      )}
    </ThemeProvider>
  );
}
