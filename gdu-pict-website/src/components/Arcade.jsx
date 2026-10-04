import { useRef, useState } from "react";
import LevelHeader from "./LevelHeader.jsx";
import { GAME, SHOWCASE } from "../data/site.js";
import "./Arcade.css";

function ShowcasePlayer() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setPlaying(true);
    ref.current?.play().catch(() => {});
  };

  return (
    <div className={`reel hud ${playing ? "is-playing" : ""}`}>
      <video
        ref={ref}
        src={SHOWCASE.fullVideo}
        poster={SHOWCASE.fullPoster}
        controls={playing}
        playsInline
        preload="none"
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button type="button" className="reel-play" onClick={start} aria-label={`Play ${SHOWCASE.title} showreel`}>
          <span className="reel-play-btn">
            <span className="btn-tri" aria-hidden="true" />
          </span>
          <span className="reel-play-text">Play reel · 0:44 · sound on</span>
        </button>
      )}
    </div>
  );
}

export default function Arcade({ onPlay }) {
  return (
    <section className="section arcade" id="arcade">
      <div className="wrap">
        <LevelHeader
          level="02"
          kicker="The arcade"
          sub="Everything here was made by GDU members. One of them you can play right now."
        >
          Made by <span className="gold">members.</span>
        </LevelHeader>

        {/* Exhibit A - the playable game */}
        <article className="cabinet hud" data-reveal>
          <img className="cabinet-bg" src="/images/game-preview.png" alt="" loading="lazy" width="1600" height="900" />
          <div className="cabinet-shade" />
          <div className="cabinet-body">
            <p className="exhibit-tag">
              Exhibit A <span>· playable in your browser</span>
            </p>
            <h3 className="display extrude cabinet-title">{GAME.title}</h3>
            <p className="cabinet-pitch">{GAME.pitch}</p>
            <dl className="cabinet-specs">
              {GAME.specs.map((s) => (
                <div key={s.k}>
                  <dt>{s.k}</dt>
                  <dd>{s.v}</dd>
                </div>
              ))}
            </dl>
            <div className="cabinet-actions">
              <button type="button" className="btn" onClick={onPlay}>
                <span className="btn-tri" aria-hidden="true" /> Insert coin
              </button>
              <div className="cabinet-controls">
                {GAME.controls.map((c) => (
                  <span key={c.label}>
                    {c.keys.map((k) => (
                      <kbd key={k}>{k}</kbd>
                    ))}
                    <em>{c.label}</em>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <span className="cabinet-blink" aria-hidden="true">
            Press start
          </span>
        </article>

        {/* Exhibit B - member showreel */}
        <article className="exhibit-b" data-reveal>
          <div className="exhibit-b-copy">
            <p className="exhibit-tag">
              Exhibit B <span>· 3D art track</span>
            </p>
            <h3 className="display extrude exhibit-b-title">
              Viewport <span className="gold">→</span> final render
            </h3>
            <p className="exhibit-b-text">
              A {SHOWCASE.title}, modelled, lit, animated and rendered entirely in Blender by a GDU member. The reel starts
              in the Blender viewport and ends on the finished shots, the same footage running behind our homepage.
            </p>
            <p className="exhibit-b-credit">{SHOWCASE.credit}</p>
          </div>
          <ShowcasePlayer />
        </article>
      </div>
    </section>
  );
}
