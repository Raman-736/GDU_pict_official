import LevelHeader from "./LevelHeader.jsx";
import { LOOT, MENTORS } from "../data/site.js";
import "./Allies.css";

export default function Allies() {
  return (
    <section className="section allies gridbg" id="allies">
      <div className="wrap">
        <LevelHeader
          level="05"
          kicker="Industry connections"
          sub="Our members have learned directly from people at EA, Ubisoft, Defold, Tara Gaming and beyond, through talks, mentorship sessions and workshops."
        >
          Mentored by people <br />
          who <span className="gold">ship games.</span>
        </LevelHeader>

        <ul className="credits" data-reveal>
          {MENTORS.map((m, i) => (
            <li key={m.name}>
              <span className="credits-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="credits-name">{m.name}</span>
              <span className="credits-role">{m.role}</span>
              <span className="credits-note">{m.note || ""}</span>
            </li>
          ))}
        </ul>

        <div className="loot">
          <div className="loot-head" data-reveal>
            <p className="label">Loot table</p>
            <h3 className="display extrude">
              What you <span className="gold">walk away</span> with.
            </h3>
          </div>
          <ol className="loot-list">
            {LOOT.map((item, i) => (
              <li key={item.title} className="hud" data-reveal style={{ "--d": `${(i % 3) * 0.08}s` }}>
                <span className="loot-num">{String(i + 1).padStart(2, "0")}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
