import { useCallback, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import BootScreen from "./components/BootScreen.jsx";
import Cursor from "./components/Cursor.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import GameModal from "./components/GameModal.jsx";
import Home from "./pages/Home.jsx";
import CouncilPage from "./pages/CouncilPage.jsx";
import { useReveal } from "./hooks/useReveal.js";
import { sfx } from "./utils/sfx.js";

export default function App() {
  const location = useLocation();
  const [gameOpen, setGameOpen] = useState(false);
  const openGame = useCallback(() => {
    sfx.start();
    setGameOpen(true);
  }, []);
  const closeGame = useCallback(() => setGameOpen(false), []);

  useReveal(location.pathname);

  // Hash links (/#about) scroll to the section; route changes start at the top.
  // `/#play-now` is a shareable link that opens the game straight away.
  useEffect(() => {
    if (location.hash === "#play-now") {
      setGameOpen(true);
      return;
    }
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) requestAnimationFrame(() => target.scrollIntoView());
    else window.scrollTo(0, 0);
  }, [location.key, location.hash]);

  // Optional 8-bit UI sounds on hover/click (toggled in the navbar).
  useEffect(() => {
    let last = null;
    const over = (e) => {
      const el = e.target.closest("a, button");
      if (el && el !== last) sfx.hover();
      last = el;
    };
    const click = (e) => {
      if (e.target.closest("a, button")) sfx.click();
    };
    document.addEventListener("pointerover", over);
    document.addEventListener("click", click);
    return () => {
      document.removeEventListener("pointerover", over);
      document.removeEventListener("click", click);
    };
  }, []);

  return (
    <>
      <BootScreen />
      <Cursor hidden={gameOpen} />
      <Navbar onPlay={openGame} />
      <Routes>
        <Route path="/" element={<Home onPlay={openGame} />} />
        <Route path="/council" element={<CouncilPage />} />
        <Route path="*" element={<Home onPlay={openGame} />} />
      </Routes>
      <Footer />
      <GameModal open={gameOpen} onClose={closeGame} />
    </>
  );
}
