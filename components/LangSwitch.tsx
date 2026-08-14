import type { Dictionary } from "@/lib/dictionaries";

export default function LangSwitch({ dict }: { dict: Dictionary }) {
  return (
    <a className="lang-switch" href={dict.langSwitch.href}>
      {dict.langSwitch.label}
    </a>
  );
}
