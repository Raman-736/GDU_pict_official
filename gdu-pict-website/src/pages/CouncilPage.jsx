import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { COUNCIL, COUNCIL_YEAR } from "../data/council.js";
import "./CouncilPage.css";

function MemberCard({ member, index }) {
  const { role, short, color, name, photo, linkedin, github, email } = member;
  const links = [
    { label: "LinkedIn", href: linkedin, Icon: Linkedin },
    { label: "GitHub", href: github, Icon: Github },
    { label: "Email", href: email && `mailto:${email}`, Icon: Mail, title: email },
  ];
  return (
    <article className={`member hud c-${color}`} data-reveal style={{ "--d": `${(index % 3) * 0.08}s` }}>
      <div className="member-photo">
        {photo ? (
          <img src={photo} alt={name || role} loading="lazy" />
        ) : (
          <div className="member-empty" aria-hidden="true">
            <img src="/images/gdu_logo.png" alt="" />
            <span>{short}</span>
          </div>
        )}
      </div>
      <div className="member-info">
        <h2 className={name ? "" : "is-tba"}>{name || "To be announced"}</h2>
        <p className="member-role">{role}</p>
      </div>
      <div className="member-socials">
        {links.map(({ label, href, Icon, title }) =>
          href ? (
            <a
              key={label}
              href={href}
              title={title}
              {...(label !== "Email" && { target: "_blank", rel: "noreferrer" })}
              aria-label={`${name || role} - ${label}`}
            >
              <Icon size={17} strokeWidth={1.75} />
            </a>
          ) : (
            <span key={label} aria-hidden="true">
              <Icon size={17} strokeWidth={1.75} />
            </span>
          )
        )}
      </div>
    </article>
  );
}

export default function CouncilPage() {
  return (
    <main className="council-page gridbg">
      <div className="wrap">
        <header className="cp-head">
          <Link to="/" className="cp-back">
            ← Back to base
          </Link>
          <p className="cp-tag">
            <span>Meet the crew</span>
          </p>
          <h1 className="display extrude cp-title">
            The <span className="gold">council</span>
          </h1>
          <p className="cp-sub">
            <span>Season {COUNCIL_YEAR}</span>
            <i>•</i>
            <span>GDU PICT</span>
            <i>•</i>
            <span>{COUNCIL.length} players</span>
          </p>
        </header>

        <div className="cp-grid">
          {COUNCIL.map((m, i) => (
            <MemberCard key={m.role} member={m} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
