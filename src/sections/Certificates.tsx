import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CertificateCard } from "@/components/CertificateCard";
import { certificates } from "@/data/certificates";

export function Certificates() {
  return (
    <Section id="certificates" ariaLabel="Certifications">
      <SectionHeading
        kicker="Credentials"
        title="Certifications"
        lead="Two AWS certs, both current."
      />
      <div className="cert-grid">
        {certificates.map((c, i) => (
          <Reveal key={c.id} order={i}>
            <CertificateCard cert={c} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
