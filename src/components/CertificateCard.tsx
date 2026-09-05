import type { Certificate } from "@/data/certificates";
import { formatMonthYear } from "@/lib/site";
import { ArrowUpRight } from "./Icons";

export function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <article className="cert">
      <div className="cert__top">
        <span className={`cert__badge mono${cert.earned ? "" : " cert__badge--pending"}`}>
          {cert.earned ? "Certified" : "In progress"}
        </span>
        <span className="cert__date mono">{formatMonthYear(cert.dateISO)}</span>
      </div>

      <h3 className="cert__name">{cert.name}</h3>
      <p className="cert__issuer">{cert.issuer}</p>

      <div className="cert__foot">
        {cert.credentialId && (
          <span className="cert__id mono" title="Credential ID">
            ID · {cert.credentialId}
          </span>
        )}
        {cert.verifyUrl && (
          <a
            className="cert__verify"
            href={cert.verifyUrl}
            {...(cert.verifyUrl.startsWith("http")
              ? { target: "_blank", rel: "noreferrer noopener" }
              : {})}
          >
            Verify credential <ArrowUpRight width={13} height={13} />
          </a>
        )}
      </div>
    </article>
  );
}
