import "./InsertCoin.css";

export default function InsertCoin({ onPlay }) {
  return (
    <section className="coin" id="join">
      <div className="wrap">
        <div className="coin-box" data-reveal>
          <p className="coin-blink">● Player 2 wanted</p>
          <h2 className="display extrude coin-title">
            Insert coin <br />
            <span className="gold">to join.</span>
          </h2>
          <p className="coin-text">
            No experience needed, GDU's founders started with none. If you code, draw, design, write or edit, there's a
            slot on the team for you.
          </p>
          <div className="coin-ctas">
            <a href="#contact" className="btn">
              Join GDU PICT
            </a>
            <button type="button" className="btn btn-ghost" onClick={onPlay}>
              <span className="btn-tri" aria-hidden="true" /> Play our game first
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
