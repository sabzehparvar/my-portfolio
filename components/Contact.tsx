import type { Dictionary } from "@/lib/dictionaries";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <span className="kicker">{dict.contact.kicker}</span>
        <h2 className="reveal">{dict.contact.title}</h2>
        <p className="reveal">{dict.contact.desc}</p>
        <a className="cta-btn reveal" href="#">
          {dict.contact.cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#100c04" strokeWidth={2} strokeLinecap="round">
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </a>
        <div className="social-row reveal">
          <a className="icon-btn" href="#" aria-label="GitHub"><GithubIcon /></a>
          <a className="icon-btn" href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
          <a className="icon-btn" href="#" aria-label="Email"><MailIcon /></a>
        </div>
      </div>
      <footer>{dict.contact.footer}</footer>
    </section>
  );
}
