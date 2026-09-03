/* =============================================================================
   SKILLS — grouped by area, from the résumé. No levels, no bars.
   The group names carry the calibration ("side projects", etc.).
   `note` is optional extra context shown on hover / focus.
   ========================================================================== */

export interface Skill {
  name: string;
  note?: string;
}

export interface SkillGroup {
  label: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      { name: "TypeScript", note: "Strict mode, generics, typing API data" },
      { name: "JavaScript", note: "ES6+, async, the DOM" },
      { name: "HTML5" },
      { name: "CSS3 / SCSS", note: "Layout, custom properties, animation" },
      { name: "SQL", note: "Queries, joins, aggregation" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", note: "Three years in production, two multi-portal apps" },
      { name: "TanStack Query", note: "All the server state on my current project" },
      { name: "Context API" },
      { name: "React Router" },
      { name: "React Hook Form", note: "Also Formik and Yup" },
      { name: "Ant Design", note: "Built a design system on top of it" },
      { name: "Accessibility", note: "Semantic HTML, keyboard, focus, ARIA" },
    ],
  },
  {
    label: "Testing",
    skills: [
      { name: "Vitest", note: "Main runner on current work" },
      { name: "Jest" },
      { name: "React Testing Library", note: "Testing behaviour, not internals" },
      { name: "MSW", note: "Mocking at the request level" },
      { name: "Storybook", note: "Docs for the shared library" },
    ],
  },
  {
    label: "Real-time & Integrations",
    skills: [
      { name: "Socket.io", note: "Chat and live updates" },
      { name: "Stripe", note: "Invoicing and payments" },
      { name: "Firebase", note: "Push notifications, PWA" },
      { name: "Sentry", note: "Errors and session replay" },
      { name: "Chart.js / Recharts" },
      { name: "JWT / OAuth2" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", note: "Side-project APIs and tooling" },
      { name: "Express", note: "REST APIs, middleware, auth" },
      { name: "PostgreSQL", note: "Schema design, per-tenant isolation" },
      { name: "MongoDB" },
    ],
  },
  {
    label: "Tooling & DevOps",
    skills: [
      { name: "Git", note: "Trunk-based, small PRs, review" },
      { name: "Vite" },
      { name: "Azure DevOps", note: "Pipelines, boards, PRs" },
      { name: "Lighthouse CI" },
      { name: "AWS", note: "EC2, S3. Certified SAA and AI Practitioner" },
      { name: "Postman" },
    ],
  },
];
