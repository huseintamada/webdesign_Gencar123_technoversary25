import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Spline from "@splinetool/react-spline";

const trashData = [
  {
    title: "Botol Plastik PET",
    recycling:
      "Botol plastik dikumpulkan, dihancurkan menjadi serpihan kecil, dicuci, lalu dilelehkan untuk dibentuk ulang menjadi produk baru.",
    impact:
      "Mengurangi sekitar 0.7 kg emisi CO₂ untuk setiap botol yang berhasil didaur ulang.",
    product: "Serat kain, botol PET baru, pot tanaman, dan kemasan daur ulang.",
    fact: "Botol PET adalah jenis plastik yang paling mudah dan paling sering didaur ulang di dunia.",
    spline: "https://prod.spline.design/jjTkXrBBJ6u12K3O/scene.splinecode",
  },
  {
    title: "Kardus Bekas",
    recycling:
      "Kardus direndam dalam air hingga menjadi bubur kertas, seratnya dipisahkan, lalu dicetak ulang menjadi kardus baru.",
    impact:
      "Setiap 1 kg kardus daur ulang mampu menghemat hingga 2.3 liter air dalam proses produksi.",
    product: "Kardus baru, kertas coklat, kemasan ramah lingkungan.",
    fact: "Kardus bisa didaur ulang hingga 7 kali sebelum seratnya melemah.",
    spline: "https://prod.spline.design/fgx4xQDYhnfWnII5/scene.splinecode",
  },
  {
    title: "Dampak Pengurangan Sampah Terhadap Tumbuhan",
    recycling:
      "Ketika sampah berkurang, ekosistem tanah menjadi lebih sehat, kadar racun menurun, dan tumbuhan dapat menyerap nutrisi dengan optimal.",
    impact:
      "Pengurangan sampah anorganik meningkatkan kualitas tanah hingga 40%, membuat akar tanaman tumbuh lebih kuat dan cepat.",
    product:
      "Lahan hijau lebih subur, peningkatan biodiversitas, serta tumbuhan yang tumbuh lebih sehat.",
    fact: "Penurunan sampah plastik di tanah membantu mikroorganisme berkembang lebih baik, yang secara langsung mempercepat kesuburan tanaman.",
    spline: "https://prod.spline.design/9Gm80JTu09t2WlT4/scene.splinecode",
  },
];

export default function GalleryTrashUp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 300);
    return () => clearTimeout(timer);
  }, [activeIndex]);

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
                animation: `floatRandom ${
                  9 + Math.random() * 8
                }s ease-in-out infinite`,
                animationDelay: Math.random() * 5 + "s",
              }}
            ></div>
          );
        })}
      </div>

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
            <h4 className="text-xl text-[#58ff9c] font-semibold mb-1">
              Fun Fact
            </h4>
            <p className="text-gray-300">{trashData[activeIndex].fact}</p>
          </div>
        </div>
      </div>

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
