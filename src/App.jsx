import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const SparklesCanvas = lazy(() => import("./components/canvas/Sparkles"));

function App() {
  return (
    <div className="relative z-0" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Dynamic 3D warm ember & sparkle field background */}
      <Suspense fallback={null}>
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          <SparklesCanvas />
        </div>
      </Suspense>

      {/* Foreground content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
