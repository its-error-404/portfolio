/* =============================================================================
   EXPERIENCE TIMELINE  — from the résumé.
   All engagements are through Rootquotient Technologies (Chennai). Client names
   are left out on purpose.

   STILL NEEDS YOU:
   - Dates are inferred from commit history — adjust to your real assignment dates.
   - Add the one hard problem you personally owned on each engagement, in your words.
   ========================================================================== */

export interface ExperienceEntry {
  id: string;
  company: string;
  companyNote?: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  stack: string[];
  highlights: string[];
  updatedISO?: string;
  current?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    id: "exp-swim",
    company: "Swim Therapy Platform",
    companyNote: "Healthcare SaaS · via Rootquotient Technologies",
    role: "Frontend Engineer — Admin & Patient portals",
    start: "Jul 2025",
    end: "Present",
    location: "Chennai, India · Remote",
    stack: ["React", "TypeScript", "Ant Design", "TanStack Query", "Socket.io", "Stripe", "Vitest"],
    highlights: [
      "Main front-end dev on both the Admin and Patient portals. Around 40% of the commits, across roughly 170 screens and 190+ API endpoints.",
      "Built the “book a therapy week” flow, where a patient reserves a recurring slot against a therapist's live availability.",
      "Built the real-time chat (Socket.io), the Stripe invoicing and payment flow, and Firebase push. Also got the app running as an installable PWA.",
      "Set up Sentry with session replay, so a bug report comes with a recording instead of “it broke on my end”.",
      "Kept the test suite honest with Vitest, RTL and MSW. About 175 test files between the two portals.",
    ],
    updatedISO: "2026",
    current: true,
  },
  {
    id: "exp-workforce",
    company: "Workforce & Agency Management SaaS",
    companyNote: "Multi-portal + design system · via Rootquotient Technologies",
    role: "Frontend Engineer",
    start: "Aug 2024",
    end: "Apr 2026",
    location: "Chennai, India",
    stack: ["React", "TypeScript", "Ant Design", "Storybook", "npm", "ActionCable"],
    highlights: [
      "One of the top contributors across the Agency, Customer and Employer portals: about 290 screens, 200 endpoints, and 130+ test files.",
      "Worked on candidate management, job tracking and payroll, plus live updates over ActionCable.",
      "Helped build the shared component library (150+ components), published it to npm at v1.2.47, and documented it in Storybook. Around 70% of the UI across the three portals runs on it.",
    ],
    updatedISO: "2026",
  },
  {
    id: "exp-fintech",
    company: "Consumer Lending Platform",
    companyNote: "Loan origination & servicing · via Rootquotient Technologies",
    role: "Frontend Engineer (SDE-I)",
    start: "Jan 2026",
    end: "Apr 2026",
    stack: ["React", "TypeScript", "Ant Design", "Formik", "Yup", "serializr", "Chart.js"],
    highlights: [
      "Added React/TypeScript features to a platform that runs the full loan lifecycle: customer onboarding and KYC, credit-report pulls, a drag-and-drop loan pipeline, disbursement, MOD documents, and repayment tracking.",
      "Worked in a large Ant Design codebase with a serializr DTO layer between the API and the UI models, and role-based views for branch staff and accountants.",
      "Reviewed teammates' PRs and did the usual Scrum ceremonies as an SDE-I.",
    ],
  },
  {
    id: "exp-early",
    company: "Rootquotient Technologies",
    companyNote: "Chennai, India",
    role: "Software Development Intern → SDE-I",
    start: "Aug 2023",
    end: "Jul 2024",
    stack: ["React", "TypeScript", "Jest", "React Testing Library"],
    highlights: [
      "Shipped UI features and small reusable components in React/TypeScript, with Jest/RTL tests, under a senior engineer's review.",
      "First real experience with code review, Scrum, and a large shared codebase.",
    ],
  },
];
