// src/components/pages/ElectriciteDomestique.jsx
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Electricite() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    { name: "Installation Complète", desc: "Mise en place de circuits électriques pour les nouvelles constructions et extensions, selon les normes en vigueur." },
    { name: "Rénovation & Mise aux Normes", desc: "Modernisation des installations existantes pour garantir la sécurité et la conformité de votre habitat." },
    { name: "Dépannage Rapide", desc: "Intervention rapide pour résoudre les pannes, courts-circuits, ou tout autre problème électrique." },
    { name: "Installation de Systèmes Domotiques", desc: "Mise en place de solutions intelligentes (éclairage, volets, chauffage) pour une maison connectée." },
    { name: "Maintenance Préventive", desc: "Vérification et entretien régulier de vos installations pour prévenir les risques." },
  ];

  const benefits = [
    "Sécurité maximale de votre foyer",
    "Conformité totale avec les normes en vigueur",
    "Durabilité et qualité de nos installations",
    "Service client réactif et professionnel",
  ];

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-500 to-blue-600 text-white py-28 px-4 md:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Électricité Domestique Professionnelle
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-2 text-base md:text-lg max-w-2xl mx-auto mb-6 text-justify"
          >
            Pour vos installations, rénovations ou dépannages, faites confiance à des experts certifiés.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm"
            >
              Demander un devis gratuit
            </Link>
          </motion.div>
        </div>
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-12 md:h-16">
            <path fill="#FFFFFF" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Des solutions électriques pour tous vos besoins
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 text-justify">
              Que ce soit pour une nouvelle installation, une mise aux normes ou un dépannage urgent, notre équipe d'électriciens qualifiés intervient avec expertise et professionnalisme pour garantir la sécurité de votre foyer.
            </p>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-gray-800 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 w-5 h-5" />
                  <span className="text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl opacity-20 blur-md"></div>
              <img 
                src="/electrique.jpg" 
                alt="Électricité Domestique" 
                className="relative rounded-2xl shadow-xl w-full z-10" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          >
            Nos Domaines d'Intervention
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base text-gray-600 max-w-2xl mx-auto text-justify"
          >
            Nous couvrons un large éventail de services pour répondre à tous les besoins électriques de votre maison.
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((srv, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              variants={itemVariants}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-md flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1">{srv.name}</h3>
              <p className="text-gray-600 text-sm text-justify">{srv.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 px-4 md:px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMTUiLz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-poppins text-2xl md:text-3xl font-bold mb-4"
          >
            Besoin d’une intervention électrique fiable ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg mb-6 opacity-90 text-justify"
          >
            Contactez-nous dès aujourd'hui pour sécuriser et moderniser vos installations électriques.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm"
            >
              Contactez-nous
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
            >
              Découvrir nos autres services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
