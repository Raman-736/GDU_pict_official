import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HERO, SHOWCASE } from "../data/site.js";
import "./Hero.css";

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now.toLocaleTimeString("en-GB", { timeZone: "Asia/Kolkata", hour12: false });
}

export default function Hero({ onPlay }) {
  const videoRef = useRef(null);
  const barRef = useRef(null);
  const sectionRef = useRef(null);
  const time = useClock();

  // Pause the background film when it's off-screen; drive the HUD progress bar.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    io.observe(sectionRef.current);
    const onTime = () => {
      if (barRef.current && video.duration) {
        barRef.current.style.transform = `scaleX(${video.currentTime / video.duration})`;
      }
    };
    video.addEventListener("timeupdate", onTime);
    return () => {
      io.disconnect();
      video.removeEventListener("timeupdate", onTime);
    };
  }, []);

  return (
    <section className="hero" id="top" ref={sectionRef}>
      <video
        ref={videoRef}
        className="hero-video"
        src={SHOWCASE.heroVideo}
        poster={SHOWCASE.heroPoster}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-scan" aria-hidden="true" />

      <div className="hero-hud hero-hud-top" aria-hidden="true">
        <span className="hud-rec">
          <i /> REC
        </span>
        <span>GDU://PICT_CHAPTER</span>
        <span className="hud-right">IST {time}</span>
        <span className="hud-right hud-coords">18.4575°N 73.8508°E</span>
      </div>

      <div className="wrap hero-main">
        <p className="hero-kicker" data-reveal>
          <span className="hero-kicker-bar" />
          {HERO.kicker}
        </p>
        <h1 className="hero-title display">
          <span className="hero-line extrude">
            <span>GameDev</span>
          </span>
          <span className="hero-row">
            <span className="hero-line hero-line-gold">
              <span>Utopia</span>
            </span>
            <span className="hero-sticker">PICT Chapter</span>
          </span>
        </h1>
        <p className="hero-sub" data-reveal style={{ "--d": "0.15s" }}>
          {HERO.sub}
        </p>
        <div className="hero-ctas" data-reveal style={{ "--d": "0.25s" }}>
          <button type="button" className="btn" onClick={onPlay}>
            <span className="btn-tri" aria-hidden="true" /> Start game
          </button>
          <Link to="/#achievements" className="btn btn-ghost">
            View wins
          </Link>
        </div>
      </div>

      <div className="hero-hud hero-hud-bottom">
        <dl className="hero-stats">
          {HERO.stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
        <div className="hero-now">
          <p className="hero-now-label">
            <span className="hud-rec">
              <i />
            </span>
            Now showing - member work
          </p>
          <p className="hero-now-title">{SHOWCASE.title}</p>
          <p className="hero-now-credit">{SHOWCASE.credit}</p>
          <div className="hero-now-bar">
            <span ref={barRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
