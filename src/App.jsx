import "./App.css";
import HeroPages from "./pages/HeroPages";
import { ParallaxBackground } from "./pages/ParallaxBackground";
import { Header } from "./components/Header";
import { AboutPages } from "./pages/AboutPages";
import { ProjectsPages } from "./pages/ProjectPages";
import { SkillsPages } from "./pages/SkillsPages";
import { ContactPages } from "./pages/ContactPages";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-[#050510] text-[#f8fafc] min-h-screen w-full font-sans overflow-hidden">
      <ParallaxBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroPages />
          <AboutPages />
          <ProjectsPages />
          <SkillsPages />
          <ContactPages />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
