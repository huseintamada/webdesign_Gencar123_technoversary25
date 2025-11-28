import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";

const Hero = () => {
  const [heights, setHeights] = useState({
    model: "35vh",
    text: "65vh",
    textMargin: "mt-8",
  });

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [fade, setFade] = useState(false);

  const updateHeights = () => {
    const width = window.innerWidth;

    if (width < 375) {
      setHeights({ model: "28vh", text: "70vh", textMargin: "mt-6" });
    } else if (width < 425) {
      setHeights({ model: "30vh", text: "70vh", textMargin: "mt-6" });
    } else if (width < 768) {
      setHeights({ model: "35vh", text: "70vh", textMargin: "mt-8" });
    } else if (width < 1024) {
      setHeights({ model: "40vh", text: "70vh", textMargin: "mt-4" });
    } else {
      setHeights({ model: "100%", text: "100%", textMargin: "mt-0" });
    }
  };

  useEffect(() => {
    updateHeights();
    window.addEventListener("resize", updateHeights);

    setTimeout(() => setFade(true), 100);

    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateHeights);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main
      id="hero"
      className="relative flex flex-col lg:flex-row items-center justify-between w-full h-screen overflow-hidden"
    >
      {/* === PARTICLES BACKGROUND === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => {
          const size = Math.random() * 5 + 3;
          return (
            <div
              key={"track-" + i}
              className="absolute bg-[#00ff7f60] rounded-full blur-[2px] transition-all duration-300"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `calc(${cursor.y}px + ${(Math.random() - 0.5) * 120}px)`,
                left: `calc(${cursor.x}px + ${(Math.random() - 0.5) * 120}px)`,
                animation: `floatUp ${5 + Math.random() * 6}s linear infinite`,
                animationDelay: Math.random() * 5 + "s",
              }}
            ></div>
          );
        })}

        {[...Array(35)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          return (
            <div
              key={"float-" + i}
              className="absolute bg-[#00ff7f40] rounded-full blur-[2px]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animation: `floatRandom ${9 + Math.random() * 8}s ease-in-out infinite`,
                animationDelay: Math.random() * 5 + "s",
              }}
            ></div>
          );
        })}
      </div>

      <div
        className="w-full lg:w-1/2 order-1 lg:order-2 relative"
        style={{ height: heights.model }}
      >
        <Spline
          className="w-full h-full"
          scene="https://prod.spline.design/VDLTvmHaRLiKG3JG/scene.splinecode"
        />
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 md:h-0 lg:hidden bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
      </div>

      <div
        className={`z-10 lg:w-1/2 px-4 sm:px-8 lg:px-0 lg:ml-[7%] flex flex-col justify-center items-start order-2 lg:order-1 ${heights.textMargin}`}
        style={{ height: heights.text }}
      >
        <div className="relative w-[70%] sm:w-48 h-10 bg-gradient-to-r from-[#2F6A35] to-[#3FA334] shadow-[0_0_25px_#3fa33470] rounded-full mb-4 flex-shrink-0">
          <div className="absolute inset-[3px] bg-[#0f0f0f] rounded-full flex items-center justify-center gap-1 text-sm sm:text-base text-gray-200 tracking-wider">
            <i className="bx bx-leaf text-[#5fff8f]"></i> BERKENALAN
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-wide leading-[1.15] text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] mb-4">
          PESAN DARI
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58ff9c] to-[#2FB653]">
            AKAR RUMPUT
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg tracking-wide text-gray-300 max-w-full sm:max-w-[27rem] leading-relaxed mb-6">
          Akar menancap, daun menari. Kita rawat dan terus jaga bumi.
        </p>

        <div className="flex gap-2 sm:gap-3 flex-wrap">
          <a
            className="border border-[#adadad50] py-1 sm:py-2 px-2 sm:px-4 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wider transition-all hover:bg-[#191919] hover:border-[#ccc] text-gray-200 backdrop-blur-md"
            href="#about"
          >
            Documentation <i className="bx bx-link-external"></i>
          </a>

          <a
            className="border border-[#adadad50] py-1 sm:py-2 px-3 sm:px-6 rounded-full text-xs sm:text-sm md:text-base font-semibold tracking-wider transition-all hover:bg-[#242424] bg-gradient-to-r from-[#d9d9d9] to-[#bfbfbf] text-black hover:text-white shadow-[0_0_10px_#ffffff30]"
            href="#gallery"
          >
            Get Started <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0.5; }
          100% { transform: translateY(-120vh) scale(1.6); opacity: 0; }
        }

        @keyframes floatRandom {
          0% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 0.6; }
          100% { transform: translateY(0) translateX(0); opacity: 0.3; }
        }
      `}</style>
    </main>
  );
};

export default Hero;
