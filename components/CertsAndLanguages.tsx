import type { Dictionary } from "@/lib/dictionaries";
import { CertIcon } from "./Icons";

export default function CertsAndLanguages({ dict }: { dict: Dictionary }) {
  return (
    <section className="pad certs-band" id="certs">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">{dict.certs.kicker}</span>
          <h2>{dict.certs.title}</h2>
        </div>
        <div className="cert-grid">
          {dict.certs.items.map((c, i) => (
            <div className="cert-card reveal accent-card" key={i}>
              <div className="cert-mark"><CertIcon /></div>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-org">{c.org}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="sec-head reveal" style={{ marginTop: 80, marginBottom: 24 }}>
          <span className="kicker">{dict.languages.kicker}</span>
          <h2>{dict.languages.title}</h2>
        </div>
        <div className="lang-row reveal">
          {dict.languages.items.map((l, i) => (
            <div className="lang-pill" key={i}>
              <div className="lang-flag">{l.flag}</div>
              <div className="lang-name">{l.name}</div>
              <div className="lang-level">{l.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
