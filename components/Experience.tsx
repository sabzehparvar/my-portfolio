import type { Dictionary } from "@/lib/dictionaries";

export default function Experience({ dict }: { dict: Dictionary }) {
  return (
    <section className="pad" id="experience">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">{dict.experience.kicker}</span>
          <h2>{dict.experience.title}</h2>
        </div>
        <div className="timeline">
          {dict.experience.items.map((item, i) => (
            <div className="tl-item reveal" key={i}>
              <div className="tl-card accent-card">
                <div className="tl-logo">{item.logo}</div>
                <div className="tl-top">
                  <div className="tl-role">{item.role}</div>
                  <div className="tl-date">{item.date}</div>
                </div>
                <div className="tl-company">{item.company}</div>
                <p className="tl-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
