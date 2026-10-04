import { useState } from "react";
import LevelHeader from "./LevelHeader.jsx";
import { WINS } from "../data/site.js";
import "./Achievements.css";

const TABS = [
  { id: "pict", label: "GDU PICT" },
  { id: "network", label: "GDU Network" },
];

function Trophy() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6 2h12v2h3v4a4 4 0 0 1-4 4h-.3A6 6 0 0 1 13 15.9V18h3v4H8v-4h3v-2.1A6 6 0 0 1 7.3 12H7a4 4 0 0 1-4-4V4h3V2Zm0 4H5v2a2 2 0 0 0 1 1.7V6Zm12 0v3.7A2 2 0 0 0 19 8V6h-1Z"
      />
    </svg>
  );
}

export default function Achievements() {
  const [tab, setTab] = useState("pict");
  const list = WINS[tab];

  return (
    <section className="section achievements" id="achievements">
      <div className="wrap">
        <LevelHeader
          level="04"
          kicker="Competition wins"
          sub="Podiums at national-level jams and hackathons, and international recognition from Defold game jams backed by King."
        >
          Achievements <span className="gold">unlocked.</span>
        </LevelHeader>

        <div className="ach-bar" data-reveal>
          <div className="ach-tabs" role="tablist">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                className={tab === t.id ? "is-active" : ""}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="ach-progress">
            <span>
              {list.length}/{list.length} unlocked
            </span>
            <div>
              <i />
            </div>
          </div>
        </div>

        <ul className="ach-list" key={tab}>
          {list.map((win, i) => (
            <li key={win.event} className={`ach t-${win.tier}`} style={{ "--i": i }}>
              <span className="ach-medal">
                <Trophy />
              </span>
              <span className="ach-body">
                <span className="ach-award">{win.award}</span>
                <span className="ach-event">{win.event}</span>
              </span>
              <span className="ach-tier">{win.tier}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
