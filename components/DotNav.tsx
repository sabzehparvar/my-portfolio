import type { Dictionary } from "@/lib/dictionaries";

export default function DotNav({ dict }: { dict: Dictionary }) {
  const items: [string, string][] = [
    ["#hero", dict.nav.intro],
    ["#skills", dict.nav.skills],
    ["#experience", dict.nav.experience],
    ["#projects", dict.nav.projects],
    ["#certs", dict.nav.certs],
    ["#contact", dict.nav.contact],
  ];
  return (
    <nav className="dotnav">
      {items.map(([href, label], i) => (
        <a key={href} href={href} className={i === 0 ? "active" : ""}>
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
