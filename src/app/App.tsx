import { StarryBackground } from "./components/StarryBackground";
import { Navbar }           from "./components/Navbar";
import { Hero }             from "./components/Hero";
import { Projects }         from "./components/Projects";
import { Skills }           from "./components/Skills";
import { Contact }          from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white relative">
      <StarryBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
