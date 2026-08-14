import type { Dictionary } from "@/lib/dictionaries";
import { ArrowUpRightIcon } from "./Icons";

const projectImageMap: Record<string, string> = {
  "SEP Shop": "/projects/sep-shop.png",
  "724": "/projects/724.png",
  "Myirancell": "/projects/Myirancell.png",
  "Saei Group": "/projects/Saei-group.JPEG",
  "Digirefahi": "/projects/Digirefahi.png",
  "Sierra Vision": "/projects/sierra-vision.jpg",
  "Verjen": "/projects/verjen.jpg",
  "Avoa": "/projects/avoa.jpg",
};

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
              <div className="proj-visual" data-n={p.n} style={{ display: "flex" }}>
                <div style={{ flex: "1", overflow: "hidden" }}>
                  <img
                    src={projectImageMap[p.title]}
                    alt={p.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem",
                  }}
                >
                  <span className="glyph" style={{ textAlign: "center" }}>
                    {p.title}
                  </span>
                </div>
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
