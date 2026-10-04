import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS, SOCIALS } from "../data/site.js";
import "./Footer.css";

const ICONS = { instagram: Instagram, linkedin: Linkedin, mail: Mail };

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/gdu_logo.png" alt="GameDevUtopia logo" width="64" height="64" />
            <p>
              The first game development club at Pune Institute of Computer Technology. Building, shipping and
              competing since 2020.
            </p>
          </div>

          <nav className="footer-col" aria-label="Footer">
            <p className="footer-h">Menu</p>
            {NAV_LINKS.map((l) => (
              <Link key={l.id} to={l.to}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="footer-col">
            <p className="footer-h">Base</p>
            <p>
              Pune Institute of Computer Technology
              <br />
              Dhankawadi, Pune 411043
              <br />
              Maharashtra, India
            </p>
          </div>

          <div className="footer-col">
            <p className="footer-h">Connect</p>
            <div className="footer-socials">
              {SOCIALS.map((s) => {
                const Icon = ICONS[s.id];
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    aria-label={s.label}
                    title={s.label}
                    {...(!s.href.startsWith("mailto:") && { target: "_blank", rel: "noreferrer" })}
                  >
                    <Icon size={18} strokeWidth={1.75} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <p className="footer-giant" aria-hidden="true">
        GameDevUtopia
      </p>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} GameDevUtopia PICT</span>
        <span>Thanks for playing ▸ Continue? </span>
      </div>
    </footer>
  );
}
