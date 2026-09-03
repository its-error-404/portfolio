/* =============================================================================
   CURRENTLY EXPLORING
   ========================================================================== */

export interface ExploringItem {
  topic: string;
  note: string;
}

export const exploringItems: ExploringItem[] = [
  { topic: "Next.js / SSR", note: "App Router and server components, and when SSR is actually worth it" },
  { topic: "System design", note: "How frontend-heavy systems hang together" },
  { topic: "AWS", note: "Past the SAA cert: real deploys, cost, CDN" },
  { topic: "Web performance", note: "Core Web Vitals, bundle size, profiling" },
  { topic: "Node and Postgres", note: "Auth and multi-tenancy, mostly on FinBoard" },
  { topic: "Bigger test suites", note: "Keeping a few hundred test files fast" },
];
