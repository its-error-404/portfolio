export interface NavItem {
  id: string;
  label: string;
}

/** Section ids must match the `id` on each <Section> in App.tsx. */
export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];
