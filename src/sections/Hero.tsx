import { useEffect, useState, type CSSProperties } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/Button";
import { HeroTerminal } from "@/components/HeroTerminal";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { StatusDot } from "@/components/StatusDot";
import { LastUpdated } from "@/components/LastUpdated";
import { SocialLink } from "@/components/SocialLink";
import { ArrowRight, Download, GitHub, LinkedIn, Mail } from "@/components/Icons";

const PRIMARY_TECH = ["React", "TypeScript", "Node.js", "PostgreSQL"];

const delay = (ms: number): CSSProperties =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 60);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className={`hero${ready ? " is-ready" : ""}`}
      aria-label="Introduction"
    >
      <CursorSpotlight />
      <div className="container hero__inner">
        <div className="hero__content">
          {site.openToWork && (
            <div data-reveal className="hero__status">
              <StatusDot label="Open to work" />
            </div>
          )}

          <h1 data-reveal className="hero__headline" style={delay(60)}>
            {site.positioning}
          </h1>

          <p data-reveal className="hero__lead" style={delay(120)}>
            I'm {site.name}, a software engineer in Chennai. Three years of production
            React and TypeScript for healthcare and workforce SaaS: real-time features,
            payment flows, a component library a few teams build on. On side projects I
            work across the stack with Node, Express and Postgres. AWS certified. Open to
            frontend or full-stack.
          </p>

          <div data-reveal className="hero__tech" style={delay(180)}>
            <span className="mono hero__tech-label">Stack</span>
            <div className="hero__tech-list">
              {PRIMARY_TECH.map((t) => (
                <span key={t} className="hero__tech-item mono">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div data-reveal className="hero__actions" style={delay(240)}>
            <Button
              as="a"
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              iconLeft={<Download width={16} height={16} />}
            >
              Download Resume
            </Button>
            <Button
              as="a"
              href="#projects"
              variant="secondary"
              iconRight={<ArrowRight width={16} height={16} />}
            >
              View Work
            </Button>
          </div>

          <div data-reveal className="hero__meta" style={delay(300)}>
            <div className="hero__socials">
              <SocialLink href={site.socials.github} label="GitHub" icon={<GitHub />} />
              <SocialLink href={site.socials.linkedin} label="LinkedIn" icon={<LinkedIn />} />
              <SocialLink href={`mailto:${site.email}`} label="Email" icon={<Mail />} />
            </div>
            <span className="hero__sep" aria-hidden="true" />
            <LastUpdated iso={site.lastUpdatedISO} granularity="month" size="lg" />
          </div>
        </div>

        <div data-reveal className="hero__visual" style={delay(160)}>
          <HeroTerminal />
        </div>
      </div>

      <a href="#about" className="hero__scroll mono" aria-label="Scroll to about section">
        Scroll
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
