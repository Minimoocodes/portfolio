import "./App.css";
import { useRef } from "react";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        skillRef={skillRef}
        projectsRef={projectsRef}
      />
      <Hero />
      <About ref={aboutRef} />
      <Skill ref={skillRef} />
      <Projects ref={projectsRef} />
      <Footer />
    </>
  );
}

export default App;
