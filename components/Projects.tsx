import type { Dictionary } from "@/lib/dictionaries";
import { ArrowUpRightIcon } from "./Icons";

export default function Projects({ dict }: { dict: Dictionary }) {
  return (
    <section className="pad" id="projects">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">{dict.projects.kicker}</span>
          <h2>{dict.projects.title}</h2>
        </div>
        <div className="proj-grid">
          {dict.projects.items.map((p) => (
            <div className="proj-card reveal accent-card" key={p.n}>
              <div className="proj-visual" data-n={p.n}>
                <span className="glyph">{p.title}</span>
              </div>
              <div className="proj-body">
                <div className="proj-title">{p.title}</div>
                <p className="proj-desc">{p.desc}</p>
                <div className="tag-row">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <a className="proj-link" href="#">
                  {dict.projects.viewLabel} <ArrowUpRightIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
