import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  Shield,
  Laptop,
  BarChart,
  Users,
  ArrowRight,
  CheckCircle,
  Mail,
  Calendar,
  BookOpen,
} from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

export default function Conseils() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'abonnement réussi
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  const conseils = [
    {
      icon: <Shield className="w-10 h-10 text-[#07E50D]" />,
      title: "Cybersécurité",
      desc: "Protégez vos données sensibles grâce à nos astuces pour renforcer la sécurité de vos systèmes.",
      link: "/conseils/cybersecurite",
    },
    {
      icon: <Laptop className="w-10 h-10 text-[#057CE5]" />,
      title: "Outils numériques",
      desc: "Découvrez les meilleures pratiques pour tirer parti des solutions numériques dans votre activité.",
      link: "/conseils/outils-numeriques",
    },
    {
      icon: <BarChart className="w-10 h-10 text-[#07E50D]" />,
      title: "ERP & Productivité",
      desc: "Améliorez la gestion de vos ressources avec des solutions ERP efficaces et adaptées.",
      link: "/conseils/erp-productivite",
    },
    {
      icon: <Users className="w-10 h-10 text-[#057CE5]" />,
      title: "Collaboration en équipe",
      desc: "Optimisez la communication interne grâce à nos recommandations pour le travail collaboratif.",
      link: "/conseils/collaboration",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-[#07E50D]" />,
      title: "Formation continue",
      desc: "Développez les compétences de vos équipes avec nos méthodes d'apprentissage innovantes.",
      link: "/conseils/formation",
    },
    {
      icon: <Calendar className="w-10 h-10 text-[#057CE5]" />,
      title: "Gestion de projet",
      desc: "Maîtrisez les méthodologies agiles et optimisez le suivi de vos projets digitaux.",
      link: "/conseils/gestion-projet",
    },
  ];

  const avantages = [
    "Accédez à des conseils fiables et pratiques",
    "Restez à jour sur les dernières tendances technologiques",
    "Améliorez vos processus avec des solutions concrètes",
    "Profitez de notre expertise pour sécuriser vos projets",
  ];

  const stats = [
    { value: "200+", label: "Conseils publiés" },
    { value: "95%", label: "Clients satisfaits" },
    { value: "15k+", label: "Abonnés mensuels" },
    { value: "5", label: "Experts dédiés" },
  ];

  return (
    <div className="font-inter">
      {/* Nouveau Hero avec Swiper */}
      <Hero />

      {/* 2. Statistiques */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#057CE5]">
                  {stat.value}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Présentation améliorée */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 text-center"
          >
            Un partage d'expérience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-gray-600 text-lg text-center"
          >
            Chez NG-Tech-In, nous croyons qu'un client bien informé prend de
            meilleures décisions. C'est pourquoi nous partageons nos conseils
            pratiques issus de notre expertise terrain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 bg-gradient-to-r from-[#07E50D]/10 to-[#057CE5]/10 p-6 rounded-2xl border-l-4 border-[#057CE5]"
          >
            <p className="text-gray-700 italic">
              "Notre mission va au-delà de la simple prestation de services.
              Nous nous engageons à partager notre savoir pour vous permettre de
              tirer le meilleur parti des technologies digitales dans votre
              entreprise."
            </p>
            <p className="mt-4 font-medium text-gray-900">
              — L'équipe NG-Tech-In
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Grille de Conseils améliorée */}
      <section id="conseils" className="py-20 px-6 bg-gray-50">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-poppins text-4xl font-bold text-gray-900"
          >
            Nos Recommandations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explorez nos articles et guides pratiques pour renforcer vos
            connaissances.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {conseils.map((conseil, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
                {conseil.icon}
              </div>
              <h3 className="font-poppins text-xl font-semibold text-gray-900">
                {conseil.title}
              </h3>
              <p className="mt-3 text-gray-600 flex-grow">{conseil.desc}</p>
              <a
                href={conseil.link}
                className="mt-6 inline-flex items-center gap-2 text-[#057CE5] font-medium text-sm hover:text-[#0469c2] transition group"
              >
                Lire plus
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Avantages améliorés */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-poppins text-3xl font-bold text-gray-900 text-center"
          >
            Pourquoi lire nos Conseils ?
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {avantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="text-[#07E50D] w-6 h-6 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Final amélioré */}
      <section className="bg-gradient-to-r from-[#057CE5] to-[#07E50D] py-12 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-poppins text-3xl md:text-4xl font-bold relative z-10"
        >
          Des questions spécifiques ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg max-w-2xl mx-auto relative z-10"
        >
          Notre équipe d'experts est à votre disposition pour répondre à toutes
          vos interrogations techniques.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center relative z-10"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#057CE5] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition hover:shadow-xl"
          >
            Contactez-nous <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-[#057CE5] transition"
          >
            Découvrir nos services
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

/* ---------- Composant Hero ---------- */
function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative w-full h-screen min-h-[600px] max-h-[80vh] font-inter"
      aria-label="Carrousel de présentation"
    >
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        effect={shouldReduceMotion ? undefined : "fade"}
        fadeEffect={{ crossFade: true }}
        speed={shouldReduceMotion ? 0 : 900}
        loop
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet bg-white/50 hover:bg-white/80 transition-colors duration-300",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full h-full"
      >
        {/* Slide 1 — classique */}
        <SwiperSlide>
          {({ isActive }) => (
            <SlideClassic
              bg="/formation.jpg"
              title="Au cœur de l'innovation technologique"
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
              title="Des solutions digitales pour un monde connecté"
              text="Innovation, performance et fiabilité au service de votre croissance."
              animate={isActive && !shouldReduceMotion ? "zoom" : "none"}
            />
          )}
        </SwiperSlide>

        {/* Slide 3 — centré */}
        <SwiperSlide>
          {({ isActive }) => (
            <SlideClassic
              bg="/slide.jpeg"
              title="Propulsez vos projets avec NG-Tech-In"
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
            opacity: imageLoaded ? 1 : 0,
          }}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        ></div>
      ) : (
        <div className="absolute inset-0" style={{ background: fallbackBg }}></div>
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
              opacity: imageLoaded ? 1 : 0,
            }}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          ></div>
        ) : (
          <div
            className="w-full h-full"
            style={{ background: fallbackBg }}
          ></div>
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
      <Link
        to="/services"
        className="px-5 py-3 bg-white text-[#07E50D] rounded-full font-semibold shadow hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
      >
        Découvrir nos services
      </Link>
      <Link
        to="/contact"
        className="px-5 py-3 bg-[#057CE5] text-white rounded-full font-semibold shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-[#057CE5] focus:ring-offset-2 focus:ring-offset-black/50"
      >
        Contactez-nous
      </Link>
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