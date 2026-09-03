/* =============================================================================
   CERTIFICATES — both real (AWS), dates + verify links from Credly.
   The two verifyUrls are Credly badge links; if the wrong one is on the wrong
   cert, swap them.
   ========================================================================== */

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  dateISO: string;
  credentialId?: string;
  verifyUrl?: string;
  earned: boolean;
}

export const certificates: Certificate[] = [
  {
    id: "cert-saa",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    dateISO: "2026-05", // issued May 29, 2026
    verifyUrl:
      "https://www.credly.com/earner/earned/share/e87b292f-9dfb-4122-88a5-44b03fbd9d44",
    earned: true,
  },
  {
    id: "cert-aip",
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    dateISO: "2025-08", // issued Aug 24, 2025
    verifyUrl:
      "https://www.credly.com/earner/earned/share/f30d3c52-9045-4c16-9e5b-4054712b2ce2",
    earned: true,
  },
];
