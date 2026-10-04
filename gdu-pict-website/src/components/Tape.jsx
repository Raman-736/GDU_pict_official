import { TAPE_A, TAPE_B } from "../data/site.js";
import "./Tape.css";

function Strip({ items, className, sep }) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className={`tape-strip ${className}`}>
      <div className="tape-track">
        {[0, 1].map((copy) => (
          <div className="tape-run" key={copy} aria-hidden={copy === 1}>
            {loop.map((item, i) => (
              <span key={i}>
                {item}
                <i>{sep}</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Tape() {
  return (
    <div className="tape" aria-label="Tools we use">
      <Strip items={TAPE_B} className="tape-b" sep="✦" />
      <Strip items={TAPE_A} className="tape-a" sep="■" />
    </div>
  );
}
