import LevelHeader from "./LevelHeader.jsx";
import { ABOUT, CLASSES } from "../data/site.js";
import "./About.css";

export default function About() {
  return (
    <section className="section about gridbg" id="about">
      <div className="wrap">
        <LevelHeader level="01" kicker="Who we are">
          Built from <span className="gold">zero.</span>
        </LevelHeader>

        <p className="about-statement" data-reveal>
          {ABOUT.statement}
        </p>

        <div className="about-intel">
          <div className="hud intel" data-reveal>
            <p className="intel-head">
              <i /> Mission intel
            </p>
            <div className="intel-cols">
              {ABOUT.intel.map((block, i) => (
                <div key={block.title} className="intel-col">
                  <p className="intel-title">
                    <span>0{i + 1}</span>
                    {block.title}
                  </p>
                  <p>{block.text}</p>
                </div>
              ))}
            </div>
          </div>

          <dl className="dossier" data-reveal style={{ "--d": "0.1s" }}>
            <p className="dossier-head">Dossier.txt</p>
            {ABOUT.dossier.map((row) => (
              <div key={row.k}>
                <dt>{row.k}</dt>
                <dd>{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="classes">
          <div className="classes-head" data-reveal>
            <h3 className="display">Choose your class</h3>
            <p>Three tracks, one team. Every game we ship needs all of them.</p>
          </div>
          <div className="classes-grid">
            {CLASSES.map((c, i) => (
              <article key={c.id} className={`klass k-${c.color}`} data-reveal style={{ "--d": `${i * 0.1}s` }}>
                <div className="klass-top">
                  <span className="klass-num">0{i + 1}</span>
                  <span className="klass-track">{c.track}</span>
                </div>
                <h4 className="display klass-name">{c.name}</h4>
                <p className="klass-text">{c.text}</p>
                <p className="klass-loadout-label">Loadout</p>
                <ul className="klass-loadout">
                  {c.loadout.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
