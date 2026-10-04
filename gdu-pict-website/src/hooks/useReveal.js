import { useEffect } from "react";

/** Fades in every [data-reveal] element the first time it scrolls into view.
 *  Pass a key (e.g. the route path) so new pages get observed too. */
export function useReveal(key) {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);
}

/** Calls setActive with the id of the section in the middle of the viewport. */
export function useActiveSection(ids, setActive, key) {
  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids, setActive, key]);
}
