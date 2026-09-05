import { site } from "@/lib/site";
import { LastUpdated } from "./LastUpdated";
import { SocialLink } from "./SocialLink";
import { GitHub, LinkedIn, Mail } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{site.name}</p>
          <p className="footer__role mono">{site.role}</p>
        </div>

        <nav className="footer__social" aria-label="Social links">
          <SocialLink variant="row" href={site.socials.github} label="GitHub" icon={<GitHub />} />
          <SocialLink
            variant="row"
            href={site.socials.linkedin}
            label="LinkedIn"
            icon={<LinkedIn />}
          />
          <SocialLink
            variant="row"
            href={`mailto:${site.email}`}
            label="Email"
            icon={<Mail />}
          />
        </nav>

        <div className="footer__updated">
          <LastUpdated iso={site.lastUpdatedISO} granularity="month" size="md" />
        </div>
      </div>

      <div className="container footer__base">
        <p className="mono">
          © {year} {site.name}
        </p>
        <p className="mono footer__built">
          Built with React · TypeScript · Vite
        </p>
      </div>
    </footer>
  );
}
