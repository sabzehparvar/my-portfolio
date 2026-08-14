import type { Dictionary } from "@/lib/dictionaries";

export default function Skills({ dict }: { dict: Dictionary }) {
  return (
    <section className="pad skills-band" id="skills">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">{dict.skills.kicker}</span>
          <h2>{dict.skills.title}</h2>
        </div>
        <div className="skill-grid">
          {dict.skills.items.map((s) => (
            <div className="skill-card reveal accent-card" key={s.name}>
              <div className="skill-dot">{s.short}</div>
              <div className="skill-name">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
