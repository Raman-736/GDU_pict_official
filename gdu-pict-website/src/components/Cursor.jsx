import { useEffect, useRef } from "react";
import "./Cursor.css";

/** A trailing crosshair that locks on to links and buttons. Desktop only;
 *  the native cursor stays visible so nothing about usability changes. */
export default function Cursor({ hidden }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    let x = -100;
    let y = -100;
    let cx = x;
    let cy = y;
    let raf = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      el.classList.toggle("is-lock", !!e.target.closest("a, button, [role=tab]"));
      el.classList.add("is-on");
    };
    const leave = () => el.classList.remove("is-on");
    const tick = () => {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div ref={ref} className={`reticle ${hidden ? "is-hidden" : ""}`} aria-hidden="true">
      <span />
    </div>
  );
}
