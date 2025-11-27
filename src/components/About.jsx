import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";

const About = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-[80vh] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-20 bg-black text-white gap-10 overflow-hidden"
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

      {/* === SPLINE 3D MODEL === */}
      <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px]">
        <div className="absolute inset-0 -z-10 w-full h-full bg-gradient-to-r from-[#2F6A35]/40 via-[#3FA334]/30 to-[#2FB653]/20 rounded-lg"></div>

        <Spline scene="https://prod.spline.design/TwhYACzO-sX8CZmD/scene.splinecode" />
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 md:h-0 lg:hidden bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
      </div>

      {/* === TEXT CONTENT === */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Tentang{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58ff9c] to-[#2FB653]">
            TrashUp
          </span>
        </h2>

        <p className="text-gray-400 max-w-3xl text-lg sm:text-xl leading-relaxed">
          TrashUp lahir dari keresahan kami yang sederhana karena bumi yang
          menjadi rumah kita perlahan kehilangan senyumnya. Melalui ruang kecil
          ini, kami mencoba menghadirkan pengetahuan tentang daur ulang,
          pengelolaan sampah, dan cara-cara sederhana untuk merawat lingkungan.
          Setiap langkah kecil berarti, dan setiap kepedulian memiliki
          dampaknya.
        </p>

        <p className="text-gray-400 max-w-3xl text-lg sm:text-xl leading-relaxed mt-4">
          Kami percaya bahwa bumi yang hijau bukan hanya mimpi, tetapi hasil
          dari kebiasaan baik yang dilakukan bersama-sama. TrashUp mengajak
          siapa pun, dimana pun, tanpa memandang kelas sosial untuk menjadi
          bagian dari perjalanan menjaga alam yang dimulai dari apa yang ada di
          sekitar kita, dan dari apa yang bisa kita lakukan hari ini.
        </p>
      </div>

      {/* === PARTICLE ANIMATION STYLES === */}
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
    </section>
  );
};

export default About;
