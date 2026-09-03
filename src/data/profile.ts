/* =============================================================================
   ABOUT / PROFILE CONTENT
   Sourced from the résumé. Edit freely.
   ========================================================================== */

export interface Principle {
  key: string;
  title: string;
  body: string;
}

export interface ProfileData {
  paragraphs: string[];
  specializes: string[];
  philosophy: string;
  enjoys: string;
  learning: string[];
  interestedIn: string;
  principles: Principle[];
  updatedISO: string;
}

export const profile: ProfileData = {
  paragraphs: [
    "I've spent about three years building production web apps, mostly React and TypeScript front ends for healthcare and workforce SaaS. That's where my depth is.",
    "On the current project I'm the main person on the front end, across two portals. Before that I worked across three portals on a workforce platform and helped build the component library they all share. The work I like most is the kind that pays off later: folding repeated UI into shared components, keeping data flow predictable, and writing tests around the parts that tend to break.",
    "On my own time I build the whole thing — Node and Express APIs, Postgres schemas, deploys. I'm AWS certified (Solutions Architect and AI Practitioner), and I'm looking for roles where I can keep widening that, frontend or full-stack.",
  ],
  specializes: [
    "React and TypeScript app architecture",
    "Component libraries and design systems",
    "Real-time UI with Socket.io",
    "Stripe payment and invoicing flows",
    "Node / Express / Postgres on side projects",
  ],
  philosophy:
    "Mostly I try to keep the codebase safe to change. That means small components, types that actually match the data, and tests on the flows that would hurt if they broke.",
  enjoys:
    "Refactoring a one-off screen into something reusable, and debugging real-time UI when the state gets tangled. Also the slow work of profiling a janky page until it's fast.",
  learning: [
    "Next.js and server-side rendering",
    "Backend depth — auth, multi-tenancy, data modelling",
    "AWS beyond what the certs cover",
  ],
  interestedIn:
    "Frontend or full-stack roles on teams that ship actual product. Remote worldwide, or relocating within India. 30-day notice period.",
  principles: [
    {
      key: "BUILD",
      title: "Ship it",
      body: "Features that survive real traffic and the edge cases QA finds two weeks later.",
    },
    {
      key: "REUSE",
      title: "Cut duplication",
      body: "Fold repeated UI into shared components. Leave files tidier than I found them.",
    },
    {
      key: "TEST",
      title: "Cover the scary parts",
      body: "Vitest, RTL and MSW around the flows I'd be nervous to change.",
    },
    {
      key: "TEAM",
      title: "Work close",
      body: "PR reviews, standups, and staying near design and backend so the UI matches intent.",
    },
  ],
  updatedISO: "2026-09",
};
