/* =============================================================================
   PROJECTS  +  FEATURED CASE STUDY

   Client projects are described at the level the résumé allows (no client names,
   no confidential detail). Numbers come from the résumé / git history.

   STILL NEEDS YOU:
   - Featured / section 06 "Challenges": confirm the hard problem, add your detail.
   - Screenshots: drop images in /public/projects/ and set `thumb` / caseStudy.images.
   - FinBoard: not built yet. Keep status "PLANNED" until it is, then add links.
   ========================================================================== */

export type ProjectStatus =
  | "PRODUCTION"
  | "ACTIVE"
  | "MAINTAINED"
  | "ARCHIVED"
  | "PROTOTYPE"
  | "BUILDING";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface CaseStudySection {
  index: string;
  title: string;
  body: string[];
  points?: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  role: string;
  tech: string[];
  problem: string;
  approach: string;
  impact: string;
  status: ProjectStatus;
  updatedISO: string;
  links: ProjectLink[];
  featured?: boolean;
  thumb?: string;
  caseStudy?: {
    sections: CaseStudySection[];
    techGroups: { label: string; items: string[] }[];
  };
}

export const projects: Project[] = [
  /* ---------------------------------------------------------------- FEATURED */
  {
    id: "proj-swim",
    name: "Swim Therapy Platform",
    tagline: "Healthcare SaaS · two portals",
    summary:
      "A healthcare product for aquatic-therapy clinics, split into a staff portal and a patient portal. Week-at-a-time session booking, patient records, billing, and messaging. I've been the main front-end dev on it since July 2025.",
    role: "Frontend Engineer. Features, booking, real-time, payments, tests.",
    tech: [
      "React",
      "TypeScript",
      "Ant Design",
      "TanStack Query",
      "Socket.io",
      "Stripe",
      "Firebase",
      "Sentry",
      "Vitest",
    ],
    problem:
      "One product, two very different users. Clinic staff want dense tables and fast data entry; patients want something calm and simple. On top of that: a booking flow that reserves a full week of sessions against live availability, Stripe payments that don't drift, live chat, and an app patients can install on their phone.",
    approach:
      "Both portals sit on a shared React and Ant Design base, with TanStack Query handling all server state. On top of that: the week-booking flow, Socket.io chat, Stripe invoicing and payments, Firebase push, and a PWA install path. Sentry with session replay so bugs come with a recording.",
    impact:
      "About 40% of the commits, across ~170 screens and 190+ API endpoints. Lighthouse performance ~91 on the main dashboard, line coverage around 74% across ~175 test files.",
    status: "PRODUCTION",
    updatedISO: "2026-09",
    featured: true,
    links: [],
    caseStudy: {
      sections: [
        {
          index: "01",
          title: "Overview",
          body: [
            "The product runs as two web portals. Staff use the Admin portal for scheduling, patient records, billing, and messaging. Patients use their own portal to book a week of therapy sessions, pay invoices, and message their care team.",
            "I've been the main front-end dev since July 2025, around 40% of the commits, across roughly 170 screens. This write-up is the front-end side of it: how the two portals share a base, and how the booking flow, chat, payments, and mobile access got built on top.",
          ],
        },
        {
          index: "02",
          title: "Problem",
          body: [
            "Staff tools and patient tools pull in opposite directions. One wants density, the other wants calm. They still have to feel like one product and stay in sync while two people are looking at the same thing.",
            "Then the harder bits: booking a full week of sessions against availability that's changing under you, payments that can't end up in a wrong state, chat that survives a bad phone signal, and an install flow so patients aren't hunting for a browser tab.",
          ],
          points: [
            "A shared look and behaviour across two portals that want different things",
            "Booking a recurring week of sessions against live therapist availability",
            "Live messaging between patients and their care team",
            "Stripe invoice and payment state that can't get out of sync",
            "Installable, phone-friendly access for patients",
            "Bug reports you can actually reproduce",
          ],
        },
        {
          index: "03",
          title: "My Role",
          body: [
            "Main front-end dev on both portals. In practice that's feature work against product and design specs, owning the booking, chat, and payments surfaces, and keeping the tests in shape as the app kept growing.",
          ],
          points: [
            "Feature work across ~170 screens, both portals",
            "The “book a therapy week” scheduling flow, against live therapist availability",
            "Socket.io chat and Stripe payments, end to end",
            "Firebase push and the PWA install path",
            "Sentry setup, including session replay",
            "~175 Vitest / RTL / MSW test files",
          ],
        },
        {
          index: "04",
          title: "Architecture",
          body: [
            "Both portals are React and TypeScript on a shared Ant Design base. TanStack Query owns every server interaction, so caching and refetching live in one place instead of being redone per screen.",
            "I keep three kinds of state separate: server data (query hooks), live updates (socket subscriptions), and plain UI state (component state). Mixing them is where these screens usually get hard to follow.",
          ],
        },
        {
          index: "05",
          title: "Implementation",
          body: [
            "Screens are built from a small set of shared pieces (tables, forms, filters, status pills), so a design change usually lands in one file. The patient side reuses the same pieces with a lighter layout.",
            "The week-booking flow reads the therapist's availability, lets the patient pick a recurring slot, and only commits once the server confirms the hold. Chat is a Socket.io channel backed by query history. Stripe invoicing goes through hosted payment pages, with the UI following server-confirmed state. The PWA adds a service worker and an install prompt.",
            "The product is under NDA, so there are no screenshots here. Happy to walk through it in a call.",
          ],
          points: [
            "Every server call goes through TanStack Query, not ad-hoc fetch code in components",
            "Week-at-a-time session booking, driven off the therapist's current availability",
            "Chat with paginated history and read state",
            "Payments driven by server-confirmed status, never optimistic",
            "Firebase push plus an installable PWA",
            "MSW in tests, so they hit real request and response shapes",
          ],
        },
        {
          index: "06",
          title: "Challenges",
          body: [
            "Chat was the hard part. A plain Socket.io client drops or reorders messages when the connection flaps. Someone types on a weak signal, the send quietly fails, and the two people in the conversation end up seeing different transcripts.",
            "The week-booking flow needed the same care from a different angle: a patient picks a recurring slot across a therapist's live availability, and a half-finished booking can't be allowed to leave that slot looking taken.",
            "Payments had a smaller version of it too: invoice state going wrong when Stripe events retry or land out of order.",
          ],
        },
        {
          index: "07",
          title: "Solutions",
          body: [
            "Chat, booking, and payments all follow the same rule: the server owns the state, the UI shows what it has confirmed, and anything local stays pending until the server agrees. Chat keeps an outbound queue so messages sent offline go out in order on reconnect. The booking flow only holds a slot once the server confirms it, and releases it if the patient backs out.",
            "For each of these I added the regression tests first, then did the refactor, so the behaviour was pinned down before anything moved.",
          ],
        },
        {
          index: "08",
          title: "Results",
          body: [
            "Main front-end ownership of a live two-portal healthcare product: ~40% of commits, ~170 screens, 190+ endpoints, ~175 test files kept passing through continuous feature work. Week-booking, chat, Stripe payments, push, and PWA install are all in production.",
            "On the numbers: Lighthouse performance around 91 on the busiest screens, line coverage near 74%, and the initial JS bundle down to roughly 220 KB gzipped after code-splitting the heavier routes.",
          ],
          points: [
            "Two portals on one component base",
            "Week-booking, chat, Stripe payments, push, and PWA install shipped",
            "Lighthouse ~91 · coverage ~74% · ~220 KB initial JS (gzipped)",
            "Reproducible bugs via Sentry session replay",
          ],
        },
        {
          index: "09",
          title: "Technologies",
          body: ["Everything in one place. Adjust if anything has shifted."],
        },
      ],
      techGroups: [
        { label: "Frontend", items: ["React", "TypeScript", "Ant Design", "TanStack Query"] },
        { label: "Real-time & payments", items: ["Socket.io", "Stripe", "Firebase"] },
        { label: "Quality", items: ["Vitest", "React Testing Library", "MSW", "Sentry"] },
        { label: "Delivery", items: ["Vite", "PWA", "Git", "Azure DevOps"] },
      ],
    },
  },

  /* ------------------------------------------------------------------- GRID */
  {
    id: "proj-workforce",
    name: "Workforce Management Platform",
    tagline: "Three portals, one component library",
    summary:
      "A workforce/agency SaaS split across Agency, Customer, and Employer portals. Candidate management, job tracking, payroll, and live updates. I was one of the top contributors across all three and helped build the shared component library.",
    role: "Frontend Engineer",
    tech: ["React", "TypeScript", "Ant Design", "Storybook", "npm", "ActionCable"],
    problem:
      "The three portals kept drifting apart. Each had its own slightly different version of the same tables, forms, and filters, so a single design change meant editing three codebases.",
    approach:
      "Helped build a shared component library (150+ components), published it to npm at v1.2.47, wrote the Storybook docs, and moved the portals onto it while feature work carried on.",
    impact:
      "One component base used by all three portals, covering around 70% of the UI and cutting most of the duplicated component code. Roughly 290 screens and 200 endpoints shipped, with 130+ test files.",
    status: "MAINTAINED",
    updatedISO: "2026-04",
    links: [],
  },
  {
    id: "proj-portfolio",
    name: "This Portfolio",
    tagline: "React + TypeScript, no framework",
    summary:
      "The site you're reading. React, TypeScript, Vite. Animation runs off CSS and one IntersectionObserver hook, the case-study modal traps focus properly, and every bit of content lives in typed data files.",
    role: "Design and build, solo",
    tech: ["React", "TypeScript", "Vite", "CSS"],
    problem:
      "Portfolio templates all look the same and don't tell you much about how someone actually builds things.",
    approach:
      "Built a small dark design system, kept the JavaScript light, drove motion from CSS with reduced-motion handled, and split all the writing out into data files so it's easy to keep current.",
    impact:
      "Lighthouse 100 / 100 / 100 / 100 on desktop, ~95 / 100 / 100 / 100 on mobile (performance / accessibility / best practices / SEO). ~63 KB of JavaScript gzipped, most of it React.",
    status: "ACTIVE",
    updatedISO: "2026-09",
    links: [{ label: "Source", href: "https://github.com/its-error-404" }],
  },
  {
    id: "proj-finboard",
    name: "FinBoard",
    tagline: "Multi-tenant billing & expense dashboard",
    summary:
      "A full-stack SaaS app I'm building on the side: team workspaces, subscription plans, invoices, and expense tracking. React and TypeScript on the front, Node/Express and PostgreSQL behind it, with per-tenant data isolation. Still early.",
    role: "Full-stack, solo",
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "JWT"],
    problem:
      "Most of my shipped work is front-end and under NDA. I want one project that shows the full stack end to end: auth, multi-tenancy, schema design, and a deploy.",
    approach:
      "JWT auth with roles, a Postgres schema with per-tenant row-level isolation, aggregation and pagination endpoints, deployed on Vercel and Render with the architecture written up in the repo.",
    impact:
      "In progress. GitHub and a live demo go up here once the first version is deployed.",
    status: "BUILDING",
    updatedISO: "2026-09",
    links: [],
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const gridProjects = projects.filter((p) => !p.featured);
