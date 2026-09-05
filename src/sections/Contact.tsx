import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { SocialLink } from "@/components/SocialLink";
import { LastUpdated } from "@/components/LastUpdated";
import { site } from "@/lib/site";
import { Download, GitHub, LinkedIn, Mail } from "@/components/Icons";

export function Contact() {
  return (
    <Section id="contact" ariaLabel="Contact" className="contact">
      <Reveal className="contact__inner">
        <p className="mono accent-text">Contact</p>
        <h2 className="contact__title">Looking for my next role</h2>
        <p className="contact__lead">
          Open to frontend or full-stack. Happy to talk about most things. Email is
          the fastest way to reach me.
        </p>

        <dl className="contact__facts">
          <div>
            <dt className="mono">Roles</dt>
            <dd>Frontend or full-stack</dd>
          </div>
          <div>
            <dt className="mono">Location</dt>
            <dd>Remote worldwide · relocating within India</dd>
          </div>
          <div>
            <dt className="mono">Notice</dt>
            <dd>30 days</dd>
          </div>
        </dl>

        <div className="contact__actions">
          <Button
            as="a"
            href={`mailto:${site.email}`}
            iconLeft={<Mail width={16} height={16} />}
          >
            Get in touch
          </Button>
          <Button
            as="a"
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            variant="secondary"
            iconLeft={<Download width={16} height={16} />}
          >
            Resume
          </Button>
        </div>

        <div className="contact__links">
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
            label={site.email}
            icon={<Mail />}
          />
        </div>

        <div className="contact__updated">
          <LastUpdated iso={site.lastUpdatedISO} granularity="month" size="md" />
        </div>
      </Reveal>
    </Section>
  );
}
