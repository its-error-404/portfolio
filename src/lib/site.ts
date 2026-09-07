/* =============================================================================
   SITE-WIDE CONFIG
   Identity, links, and the global "Last Updated" date.
   `url` is a placeholder until the site has a domain — it's only used in
   index.html's canonical / OG tags and the sitemap, not in the UI.
   ========================================================================== */

export interface SiteConfig {
  name: string;
  role: string;
  positioning: string;
  url: string;
  location: string;
  openToWork: boolean;
  email: string;
  /** Path (in /public) or absolute URL to the résumé PDF. */
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    /** Optional — leave empty string to hide. */
    twitter: string;
  };
  /**
   * GLOBAL LAST-UPDATED DATE.
   * ISO string. Rendered prominently in the hero, nav (compact), and footer.
   */
  lastUpdatedISO: string;
}

export const site: SiteConfig = {
  name: "Karthikeyan A",
  role: "Software Engineer",
  positioning: "I build and ship production web apps.",
  url: "https://its-error-404.github.io/portfolio",
  location: "Chennai, India",
  openToWork: true,
  email: "karthi.vmpak@gmail.com",
  // Resolved against Vite's base ("/portfolio/" on Pages, "/" on a root domain).
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  socials: {
    github: "https://github.com/its-error-404",
    linkedin: "https://www.linkedin.com/in/karthikeyan-a-dev/",
    twitter: "",
  },
  lastUpdatedISO: "2026-09", // month + year; bump when you refresh content
};

/* --- Date formatting helpers ------------------------------------------------ */

const MONTHS = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
];

/** e.g. "SEP 07, 2026" */
export function formatFullDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  const day = String(d.getDate()).padStart(2, "0");
  return `${MONTHS[d.getMonth()]} ${day}, ${d.getFullYear()}`;
}

/** e.g. "SEP 2026" — or just "2026" when no month is given. */
export function formatMonthYear(iso: string): string {
  const parts = iso.split("-");
  const year = Number(parts[0]);
  if (Number.isNaN(year)) return iso;
  if (parts.length < 2) return String(year);
  const month = Number(parts[1]) - 1;
  if (Number.isNaN(month)) return String(year);
  return `${MONTHS[Math.max(0, Math.min(11, month))]} ${year}`;
}

/** e.g. "2026" */
export function formatYear(iso: string): string {
  return iso.split("-")[0] ?? iso;
}
