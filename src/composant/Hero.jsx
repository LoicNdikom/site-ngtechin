import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[80vh] font-inter" aria-label="Carrousel de présentation">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        effect={shouldReduceMotion ? undefined : "fade"}
        fadeEffect={{ crossFade: true }}
        speed={shouldReduceMotion ? 0 : 900}
        loop
        pagination={{ 
          clickable: true,
          bulletClass: "swiper-pagination-bullet bg-white/50 hover:bg-white/80 transition-colors duration-300",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white"
        }}
        autoplay={{ 
          delay: 5000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        className="w-full h-full"
      >
        {/* Slide 1 — classique */}
        <SwiperSlide>
          {({ isActive }) => (
            <SlideClassic
              bg="/formation.jpg"
              title={
                <>
                  Au cœur de{" "}
                  <span className="text-[#07E50D]">l'innovation</span>{" "}
                  technologique
                </>
              }
              text="NG-Tech-In vous accompagne dans la transformation digitale avec des solutions fiables et innovantes."
              animate={isActive && !shouldReduceMotion ? "up" : "none"}
              priority={true}
            />
          )}
        </SwiperSlide>

        {/* Slide 2 — split layout */}
        <SwiperSlide>
          {({ isActive }) => (
            <SlideSplit
              bg="/slide1.jpeg"
              title={
                <>
                  Des{" "}
                  <span className="text-[#057CE5]">solutions digitales</span>{" "}
                  pour un monde connecté
                </>
              }
              text="Innovation, performance et fiabilité au service de votre croissance."
              animate={isActive && !shouldReduceMotion ? "zoom" : "none"}
            />
          )}
        </SwiperSlide>

        {/* Slide 3 — centré */}
        <SwiperSlide>
          {({ isActive }) => (
            <SlideClassic
              bg="/slide.jpg"
              title={
                <>
                  Propulsez vos projets avec{" "}
                  <span className="text-[#07E50D]">NG-Tech-In</span>
                </>
              }
              text="Nous concrétisons vos idées avec des technologies modernes et un accompagnement sur mesure."
              animate={isActive && !shouldReduceMotion ? "left" : "none"}
            />
          )}
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

/* ---------- Slide classique (plein écran) ---------- */
function SlideClassic({ bg, title, text, animate, priority = false }) {
  const anim = animations[animate] || animations.none;
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Couleur de fond de secours basée sur le type de slide
  const fallbackBg = "linear-gradient(135deg, #057CE5 0%, #07E50D 100%)";

  return (
    <div className="relative w-full h-full">
      {/* Image avec gestion d'erreur */}
      {!imageError ? (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{ 
            backgroundImage: `url('${bg}')`,
            opacity: imageLoaded ? 1 : 0
          }}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      ) : (
        <div 
          className="absolute inset-0"
          style={{ background: fallbackBg }}
        />
      )}
      
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <motion.div
          key={animate}
          initial={anim.initial}
          animate={anim.animate}
          transition={anim.transition}
          className="text-center max-w-3xl text-white"
        >
          <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg lg:text-xl max-w-2xl mx-auto">{text}</p>
          <Buttons />
        </motion.div>
      </div>
    </div>
  );
}

/* ---------- Slide split (60% image / 40% contenu arrondi) ---------- */
function SlideSplit({ bg, title, text, animate }) {
  const anim = animations[animate] || animations.none;
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Couleur de fond de secours basée sur le type de slide
  const fallbackBg = "linear-gradient(135deg, #057CE5 0%, #07E50D 100%)";

  return (
    <div className="grid grid-cols-1 md:grid-cols-10 w-full h-full">
      {/* Image 60% avec gestion d'erreur */}
      <div className="col-span-1 md:col-span-6 relative">
        {!imageError ? (
          <div 
            className="w-full h-full bg-cover bg-center transition-opacity duration-500"
            style={{ 
              backgroundImage: `url('${bg}')`,
              opacity: imageLoaded ? 1 : 0
            }}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div 
            className="w-full h-full"
            style={{ background: fallbackBg }}
          />
        )}
      </div>

      {/* Texte 40% */}
      <div className="col-span-1 md:col-span-4 relative flex items-center justify-center p-4 md:p-6">
        {/* Bulle animée */}
        <motion.div
          className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#057CE5]/20"
          animate={{ scale: [1, 1.1, 1], x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Carte arrondie */}
        <motion.div
          key={animate}
          initial={anim.initial}
          animate={anim.animate}
          transition={anim.transition}
          className="relative z-10 bg-black/70 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center text-white shadow-2xl max-w-md"
        >
          <h1 className="font-poppins text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-base lg:text-lg">{text}</p>
          <Buttons />
        </motion.div>
      </div>
    </div>
  );
}

/* ---------- Boutons réutilisables ---------- */
function Buttons() {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/services"
        className="px-5 py-3 bg-white text-[#07E50D] rounded-full font-semibold shadow hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
      >
        Découvrir nos services
      </a>
      <a
        href="/contact"
        className="px-5 py-3 bg-[#057CE5] text-white rounded-full font-semibold shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-[#057CE5] focus:ring-offset-2 focus:ring-offset-black/50"
      >
        Contactez-nous
      </a>
    </div>
  );
}

/* ---------- Animations ---------- */
const animations = {
  up: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: "easeOut" },
  },
  zoom: {
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.9, ease: "easeOut" },
  },
  left: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.9, ease: "easeOut" },
  },
  none: {
    initial: false,
    animate: false,
    transition: { duration: 0 },
  },
};