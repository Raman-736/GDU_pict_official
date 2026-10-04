/** "LVL 01 // WHO WE ARE ---" header used by every home-page section. */
export default function LevelHeader({ level, kicker, children, sub, as: Tag = "h2" }) {
  return (
    <header className="lvl" data-reveal>
      <div className="lvl-meta">
        <span className="lvl-tag">
          <span>LVL</span>
          <b>{level}</b>
        </span>
        <span className="lvl-kicker">// {kicker}</span>
        <span className="lvl-rule" />
      </div>
      <Tag className="display extrude lvl-title">{children}</Tag>
      {sub && <p className="lvl-sub">{sub}</p>}
    </header>
  );
}
