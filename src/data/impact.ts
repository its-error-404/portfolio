/* =============================================================================
   ENGINEERING IMPACT
   Real counts, aggregated from the two codebases I've spent the most time in.
   `metric` is the number; keep it defensible.
   ========================================================================== */

export interface ImpactItem {
  label: string;
  metric: string;
  statement: string;
  detail: string;
}

export const impactItems: ImpactItem[] = [
  {
    label: "PORTALS",
    metric: "5",
    statement: "Production portals",
    detail: "Two on the healthcare product, three on the workforce platform.",
  },
  {
    label: "SCREENS",
    metric: "460+",
    statement: "Screens worked on",
    detail: "Roughly 170 on the healthcare product, 290 on the workforce platform.",
  },
  {
    label: "API ENDPOINTS",
    metric: "390+",
    statement: "Endpoints wired up",
    detail: "190+ on the healthcare product, around 200 on the workforce platform.",
  },
  {
    label: "COMPONENTS",
    metric: "150+",
    statement: "In the shared library",
    detail: "Helped build it, published to npm at v1.2.47, ~70% of the UI runs on it.",
  },
  {
    label: "TEST FILES",
    metric: "300+",
    statement: "Kept passing",
    detail: "Vitest, Jest, RTL and MSW across both products.",
  },
  {
    label: "COMMITS",
    metric: "~40%",
    statement: "On the healthcare product",
    detail: "Main front-end dev on it since July 2025.",
  },
];
