import LevelHeader from "./LevelHeader.jsx";
import { GLITCHED, QUESTS } from "../data/site.js";
import "./Events.css";

export default function Events() {
  return (
    <section className="section events gridbg" id="events">
      <div className="wrap">
        <LevelHeader level="03" kicker="Flagship events">
          Where the club <span className="gold">comes alive.</span>
        </LevelHeader>

        <article className="glitched hud" data-reveal>
          <div className="glitched-top">
            <span className="glitched-badge">Annual festival · GDU PICT</span>
            <span className="glitched-ed">
              <b>{GLITCHED.editions}</b> editions
            </span>
          </div>
          <h3 className="glitched-word" data-text="GLITCHED">
            GLITCHED
          </h3>
          <div className="glitched-grid">
            <p className="glitched-text">{GLITCHED.text}</p>
            <ul className="glitched-acts">
              {GLITCHED.activities.map((a, i) => (
                <li key={a}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <p className="glitched-guests">
            <span>Guest list</span> {GLITCHED.guests}
          </p>
        </article>

        <div className="quests" data-reveal>
          <div className="quests-head">
            <h3 className="display">Quest log</h3>
            <p>Workshops & outreach beyond our own campus</p>
          </div>
          <ol className="quest-list">
            {QUESTS.map((q, i) => (
              <li key={q.title}>
                <span className="quest-num">Q{String(i + 1).padStart(2, "0")}</span>
                <span className="quest-title">{q.title}</span>
                <span className="quest-meta">{q.meta}</span>
                <span className="quest-status">Complete</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
