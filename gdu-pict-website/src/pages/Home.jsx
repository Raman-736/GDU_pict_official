import Hero from "../components/Hero.jsx";
import Tape from "../components/Tape.jsx";
import About from "../components/About.jsx";
import Arcade from "../components/Arcade.jsx";
import Events from "../components/Events.jsx";
import Achievements from "../components/Achievements.jsx";
import Allies from "../components/Allies.jsx";
import PartySelect from "../components/PartySelect.jsx";
import InsertCoin from "../components/InsertCoin.jsx";

export default function Home({ onPlay }) {
  return (
    <main>
      <Hero onPlay={onPlay} />
      <Tape />
      <About />
      <Arcade onPlay={onPlay} />
      <Events />
      <Achievements />
      <Allies />
      <PartySelect />
      <InsertCoin onPlay={onPlay} />
    </main>
  );
}
