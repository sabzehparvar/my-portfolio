import type { Dictionary } from "@/lib/dictionaries";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-shape shape-1"></div>
      <div className="hero-shape shape-2"></div>
      <div className="hero-shape shape-3"></div>
      <div className="wrap hero-grid">
        <div className="avatar-wrap reveal in">
          <div className="avatar">
            <img alt="profile image"
                style={{
                  objectFit: "contain",
                  borderRadius: "50%",
                  
                }} src="images/profile.jpg" />
          </div>
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>{dict.hero.status}</span>
          </div>
        </div>
        <div>
          <span className="eyebrow">{dict.hero.eyebrow}</span>
          <h1 className="title reveal in">{dict.hero.name}</h1>
          <p className="lede reveal in">{dict.hero.lede}</p>
          <div className="social-row reveal in">
            <a className="icon-btn" href="#" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a className="icon-btn" href="#" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a className="icon-btn" href="#" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <span>{dict.hero.scroll}</span>
        <span className="line"></span>
      </div>
    </section>
  );
}
