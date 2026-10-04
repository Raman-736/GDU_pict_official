import { Link } from "react-router-dom";
import LevelHeader from "./LevelHeader.jsx";
import { COUNCIL, COUNCIL_YEAR } from "../data/council.js";
import "./PartySelect.css";

/** Home-page teaser for the full /council page. */
export default function PartySelect() {
  return (
    <section className="section party" id="party">
      <div className="wrap">
        <LevelHeader level="06" kicker={`Council ${COUNCIL_YEAR}`}>
          Party <span className="gold">select.</span>
        </LevelHeader>

        <div className="party-grid" data-reveal>
          {COUNCIL.map((m) => (
            <Link to="/council" key={m.role} className={`party-slot c-${m.color}`}>
              {m.photo ? (
                <img src={m.photo} alt={m.name} loading="lazy" />
              ) : (
                <span className="party-q" aria-hidden="true">
                  ?
                </span>
              )}
              <span className="party-role">{m.role}</span>
            </Link>
          ))}
        </div>

        <div className="party-cta" data-reveal>
          <p>{COUNCIL.length} players. One for every part of making a game.</p>
          <Link to="/council" className="btn">
            Meet the council <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
