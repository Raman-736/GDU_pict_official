import { useEffect, useRef, useState } from "react";
import { GAME } from "../data/site.js";
import "./GameModal.css";

// Built from ../gdu-sip-game-main with `npm run build:game`.
// Point at index.html explicitly so the dev server doesn't SPA-fallback.
const GAME_URL = "/play/index.html";

export default function GameModal({ open, onClose }) {
  const frameRef = useRef(null);
  const closeRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!open) {
      setLoaded(false);
      return;
    }
    document.body.classList.add("no-scroll");
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const onLoad = () => {
    setLoaded(true);
    // Hand keyboard focus to the game so WASD works straight away.
    frameRef.current?.focus();
  };

  return (
    <div className="gm" role="dialog" aria-modal="true" aria-label={GAME.title}>
      <div className="gm-bar">
        <p className="gm-title">
          <span className="gm-dot" /> {GAME.title} <em>· made by GDU</em>
        </p>
        <div className="gm-actions">
          <button
            type="button"
            className="gm-btn"
            onClick={() => frameRef.current?.requestFullscreen?.().catch(() => {})}
          >
            Fullscreen
          </button>
          <a href={GAME_URL} target="_blank" rel="noreferrer" className="gm-btn">
            New tab ↗
          </a>
          <button ref={closeRef} type="button" className="gm-btn gm-exit" onClick={onClose}>
            ✕ Exit
          </button>
        </div>
      </div>

      <div className="gm-stage">
        {!loaded && (
          <div className="gm-loading">
            <p>Loading GDU Island</p>
            <div className="gm-loading-bar">
              <span />
            </div>
          </div>
        )}
        <iframe
          ref={frameRef}
          src={GAME_URL}
          title={GAME.title}
          allow="fullscreen; gamepad; autoplay"
          allowFullScreen
          onLoad={onLoad}
        />
      </div>
    </div>
  );
}
