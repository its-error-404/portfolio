import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { LastUpdated } from "@/components/LastUpdated";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about" ariaLabel="About">
      <SectionHeading
        kicker="About"
        title="How I work"
        aside={
          <LastUpdated
            iso={profile.updatedISO}
            granularity="year"
            label="Updated"
            size="sm"
            layout="inline"
          />
        }
      />

      <div className="about__grid">
        <Reveal className="about__lead">
          {profile.paragraphs.map((p, i) => (
            <p key={i} className="about__p">
              {p}
            </p>
          ))}

          <div className="about__facts">
            <div className="about__fact">
              <p className="mono">Specializes in</p>
              <ul>
                {profile.specializes.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="about__fact">
              <p className="mono">Currently learning</p>
              <ul>
                {profile.learning.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="about__principles">
          {profile.principles.map((pr, i) => (
            <Reveal key={pr.key} className="principle" order={i}>
              <p className="principle__key mono">{pr.key}</p>
              <p className="principle__title">{pr.title}</p>
              <p className="principle__body">{pr.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="about__statements">
        <div>
          <p className="mono">Philosophy</p>
          <p>{profile.philosophy}</p>
        </div>
        <div>
          <p className="mono">Enjoys solving</p>
          <p>{profile.enjoys}</p>
        </div>
        <div>
          <p className="mono">Open to</p>
          <p>{profile.interestedIn}</p>
        </div>
      </Reveal>
    </Section>
  );
}
