import { useEffect, useState } from "react";

export default function Contact() {
  const [fade, setFade] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setFade(true), 100);

    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black pt-28 pb-8 px-6 flex items-center justify-center overflow-hidden">

      {/* BACKGROUND PARTICLES */}
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

      {/* CONTACT CARD */}
      <div
        className={`relative z-10 w-full max-w-2xl bg-black/40 border border-[#00ff7f40] p-6 rounded-2xl shadow-[0_0_20px_#00ff7f20] backdrop-blur-md transform transition-all duration-700 ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold text-[#58ff9c] mb-3 drop-shadow-[0_0_10px_#00ff7f60]">
          Hubungi Kami
        </h2>

        <p className="text-gray-300 mb-4 leading-relaxed text-base">
          Kami selalu terbuka untuk kritik, saran dan kolaborasi.
        </p>

        <form className="space-y-3">
          <div>
            <label className="block text-gray-300 mb-1 font-medium">Nama Lengkap</label>
            <input
              type="text"
              placeholder="Masukkan nama kamu"
              className="w-full p-2.5 rounded-lg bg-black/40 border border-[#00ff7f40] text-gray-200 focus:outline-none focus:border-[#58ff9c] transition shadow-inner shadow-black/20"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-2.5 rounded-lg bg-black/40 border border-[#00ff7f40] text-gray-200 focus:outline-none focus:border-[#58ff9c] transition shadow-inner shadow-black/20"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1 font-medium">Pesan</label>
            <textarea
              rows="2"
              placeholder="Tulis pesanmu..."
              className="w-full p-2.5 rounded-lg bg-black/40 border border-[#00ff7f40] text-gray-200 focus:outline-none focus:border-[#58ff9c] transition resize-none shadow-inner shadow-black/20"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#429C2B] hover:bg-green-500 text-black py-2.5 rounded-full font-semibold text-lg transition shadow-[0_0_20px_#00ff7f50]"
          >
            Kirim Pesan
          </button>
        </form>
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
    </div>
  );
}
