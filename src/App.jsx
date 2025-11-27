import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

export default function App() {
  const [offsetY, setOffsetY] = useState(0);

  // Parallax scroll
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-black text-white relative">

      {/* === PARALLAX BACKGROUND GLOBAL === */}
      <img
        className="fixed top-0 right-0 opacity-60 -z-10 pointer-events-none"
        src="/gradient.png"
        alt="Background Gradient"
        style={{
          transform: `translateY(${offsetY * 0.15}px)`
        }}
      />
      <div
        className="fixed h-0 w-[40rem] top-[20%] right-[-5%] shadow-[0_0_900px_20px_#429C2B] -rotate-[30deg] -z-20 pointer-events-none"
        style={{
          transform: `translateY(${offsetY * 0.25}px)`
        }}
      ></div>

      {/* HEADER */}
      <Header />

      {/* === SINGLE PAGE SCROLL SECTIONS === */}
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>

      <section id="about" className="min-h-screen">
        <About />
      </section>

      <section id="gallery" className="min-h-screen">
        <Gallery />
      </section>

      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </div>
  );
}
