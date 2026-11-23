import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeControl from "./components/ThemeControl";

const SparklesCanvas = lazy(() => import("./components/canvas/Sparkles"));

function App() {
  return (
    <ThemeProvider>
      <div className="relative z-0" style={{ minHeight: '100vh', position: 'relative' }}>
        {/* Dynamic 3D particle canvas (Stars -> Bubbles -> Fiery Sparkles) */}
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

        {/* Interactive Theme Evolution Floating Pill */}
        <ThemeControl />
      </div>
    </ThemeProvider>
  );
}

export default App;
