import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data/site.js";
import { useActiveSection } from "../hooks/useReveal.js";
import { sfx } from "../utils/sfx.js";
import "./Navbar.css";

// Every home section, so the highlight clears when you scroll past a nav item.
const SECTION_IDS = ["top", "about", "arcade", "events", "achievements", "allies", "party", "join"];

export default function Navbar({ onPlay }) {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [sound, setSound] = useState(sfx.enabled);

  useActiveSection(SECTION_IDS, setActive, pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (link) =>
    link.to === pathname || (pathname === "/" && link.to === `/#${link.id}` && active === link.id);

  const toggleSound = () => {
    sfx.set(!sound);
    setSound(!sound);
  };

  return (
    <header className={`nav ${scrolled || pathname !== "/" ? "is-solid" : ""} ${menuOpen ? "is-open" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-brand" aria-label="GDU PICT home">
          <img src="/images/gdu_logo.png" alt="" width="36" height="36" />
          <span className="nav-brand-text">
            GDU<i>/</i>PICT
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.id}
              to={link.to}
              className={isActive(link) ? "is-active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-num">0{i + 1}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className={`nav-sfx ${sound ? "is-on" : ""}`}
            onClick={toggleSound}
            aria-pressed={sound}
            aria-label="Toggle sound effects"
          >
            <span className="nav-eq" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            SFX {sound ? "ON" : "OFF"}
          </button>
          <button
            type="button"
            className="nav-play"
            onClick={() => {
              setMenuOpen(false);
              onPlay();
            }}
          >
            <span className="btn-tri" aria-hidden="true" /> Play
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
