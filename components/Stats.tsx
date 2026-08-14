import type { Dictionary } from "@/lib/dictionaries";

export default function Stats({ dict }: { dict: Dictionary }) {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-row reveal">
          {dict.stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
