import { useEffect, useState } from "react";
import "./BootScreen.css";

const LINES = [
  "GDU BIOS v20.20 - PICT, PUNE",
  "LOADING ASSETS ............ OK",
  "COMPILING SHADERS ......... OK",
  "SPAWNING PLAYERS .......... 300+",
];

const SEEN_KEY = "gdu-booted";

function alreadyBooted() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1" || matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

/** One-time-per-session boot sequence. Click or any key skips it. */
export default function BootScreen() {
  const [phase, setPhase] = useState(() => (alreadyBooted() ? "done" : "boot"));

  useEffect(() => {
    if (phase !== "boot") return;
    document.body.classList.add("no-scroll");
    const finish = () => setPhase("exit");
    const timer = setTimeout(finish, 2300);
    window.addEventListener("keydown", finish, { once: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", finish);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* ignore */
    }
    document.body.classList.remove("no-scroll");
    const timer = setTimeout(() => setPhase("done"), 700);
    return () => clearTimeout(timer);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div className={`boot ${phase === "exit" ? "is-exit" : ""}`} onClick={() => setPhase("exit")} aria-hidden="true">
      <div className="boot-shutter boot-shutter-top" />
      <div className="boot-shutter boot-shutter-bottom" />
      <div className="boot-inner">
        <img src="/images/gdu_logo.png" alt="" width="84" height="84" />
        <ul className="boot-lines">
          {LINES.map((line, i) => (
            <li key={line} style={{ "--i": i }}>
              {line}
            </li>
          ))}
        </ul>
        <div className="boot-bar">
          <span />
        </div>
        <p className="boot-skip">click to skip</p>
      </div>
    </div>
  );
}
