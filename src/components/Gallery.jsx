import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Spline from "@splinetool/react-spline";

const trashData = [
  {
    type: "Plastik • PET 1",
    title: "Botol Plastik PET",
    recycling:
      "Dihancurkan → dicuci → dilelehkan → dijadikan serat kain atau botol baru.",
    impact: "Mengurangi sekitar 0.7 kg emisi CO₂ per botol.",
    product: "Jaket fleece, karpet, botol PET daur ulang.",
    fact: "PET adalah plastik yang paling mudah didaur ulang dan aman digunakan kembali.",
    spline: "https://prod.spline.design/jjTkXrBBJ6u12K3O/scene.splinecode",
  },
  {
    type: "Kertas • Corrugated",
    title: "Kardus Bekas",
    recycling:
      "Direndam → dipisahkan seratnya → dicetak ulang menjadi kardus baru.",
    impact: "Menghemat 2.3 liter air per satu kardus.",
    product: "Karton daur ulang, kertas coklat, kemasan baru.",
    fact: "Kardus bisa didaur ulang hingga 7 kali sebelum seratnya lemah.",
    spline: "https://prod.spline.design/fgx4xQDYhnfWnII5/scene.splinecode",
  },
  {
    type: "Anorganik • Kaca",
    title: "Kaca Pecah",
    recycling:
      "Dilelehkan pada suhu tinggi → dibentuk ulang sebagai botol baru.",
    impact: "Menghemat 30% energi dari pembuatan kaca baru.",
    product: "Botol baru, dekorasi, material bangunan.",
    fact: "Kaca dapat didaur ulang tanpa batas tanpa menurunkan kualitas.",
    spline: "https://prod.spline.design/9Gm80JTu09t2WlT4/scene.splinecode",
  },
];

export default function GalleryTrashUp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  // smooth fade text
  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 300);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // mouse particles
  useEffect(() => {
    const handleMouseMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black flex flex-col lg:flex-row p-10 gap-10 pt-32 relative overflow-hidden">
      
      {/* === PARTICLES BACKGROUND === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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

      {/* Info Panel */}
      <div
        className={`lg:w-1/2 max-h-screen overflow-y-auto px-6 order-2 lg:order-1 transition-opacity duration-500 z-10 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <h2 className="text-4xl font-bold mb-6 drop-shadow-[0_0_15px_#00ff7f70]">
          Sekilas Info
        </h2>

        <div className="bg-black/40 p-6 rounded-2xl border shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold text-white">
            {trashData[activeIndex].title}
          </h3>
          <p className="font-medium">{trashData[activeIndex].type}</p>

          <div>
            <h4 className="text-xl text-[#58ff9c] font-semibold mb-1">
              Cara Daur Ulang
            </h4>
            <p className="text-gray-200 leading-relaxed">
              {trashData[activeIndex].recycling}
            </p>
          </div>

          <div>
            <h4 className="text-xl text-[#58ff9c] font-semibold mb-1">
              Dampak Positif
            </h4>
            <p className="text-gray-200">{trashData[activeIndex].impact}</p>
          </div>

          <div>
            <h4 className="text-xl text-[#58ff9c] font-semibold mb-1">
              Produk Hasil Recycle
            </h4>
            <p className="text-gray-200">{trashData[activeIndex].product}</p>
          </div>

          <div className="p-4 rounded-xl border border-[#00ff7f30]">
            <h4 className="text-xl text-[#58ff9c] font-semibold mb-1">Fun Fact</h4>
            <p className="text-gray-300">{trashData[activeIndex].fact}</p>
          </div>
        </div>
      </div>

      {/* Gallery 3D */}
      <div className="lg:w-1/2 flex items-center justify-center order-1 lg:order-2 z-10">
        <Swiper
          modules={[EffectCoverflow, Mousewheel, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={1500}
          mousewheel={{ forceToAxis: true }}
          coverflowEffect={{
            rotate: 45,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full max-w-screen-lg"
        >
          {trashData.map((item, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <div className="w-[40vw] sm:w-[50vw] h-[80vh]">
                <Spline scene={item.spline} className="w-full h-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Particle Animation Styles */}
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
