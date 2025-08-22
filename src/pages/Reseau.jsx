// src/components/pages/Reseau.jsx
import { motion } from "framer-motion";
import { CheckCircle2, Wifi, Shield, Activity, Cable } from "lucide-react";
import { Link } from "react-router-dom";

export default function Reseau() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      name: "Installation & Configuration",
      desc: "Mise en place de réseaux locaux (LAN), Wi-Fi sécurisé et étendus (WAN) pour une connectivité sans faille.",
      icon: <Wifi size={40} className="text-blue-600" />,
    },
    {
      name: "Sécurité Réseau",
      desc: "Configuration de pare-feu, VPN et systèmes de détection d'intrusion pour protéger vos données sensibles.",
      icon: <Shield size={40} className="text-emerald-500" />,
    },
    {
      name: "Optimisation de la Performance",
      desc: "Analyse des flux de trafic et ajustement des paramètres pour une vitesse et une fiabilité maximales.",
      icon: <Activity size={40} className="text-indigo-500" />,
    },
    {
      name: "Maintenance Proactive",
      desc: "Surveillance continue de votre réseau pour anticiper les pannes et les vulnérabilités.",
      icon: <CheckCircle2 size={40} className="text-green-500" />,
    },
    {
      name: "Câblage Structuré",
      desc: "Installation professionnelle et soignée de l'ensemble du câblage de votre infrastructure.",
      icon: <Cable size={40} className="text-gray-700" />,
    },
  ];

  const benefits = [
    "Une connectivité stable et rapide",
    "Une sécurité renforcée contre les cybermenaces",
    "Une gestion simplifiée de l'ensemble de votre réseau",
    "Une évolutivité pour accompagner la croissance de votre entreprise",
  ];

  const steps = [
    {
      step: "01",
      title: "Audit & Diagnostic",
      desc: "Évaluation de l'infrastructure existante et identification des points d'amélioration.",
    },
    {
      step: "02",
      title: "Conception",
      desc: "Création d'un plan réseau sur mesure, adapté à vos besoins.",
    },
    {
      step: "03",
      title: "Déploiement",
      desc: "Mise en place des équipements et configuration des systèmes.",
    },
    {
      step: "04",
      title: "Suivi & Support",
      desc: "Surveillance et maintenance pour garantir une performance continue.",
    },
  ];

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-28 px-4 md:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Services Réseau
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-2 text-base md:text-lg max-w-2xl mx-auto mb-6 text-justify"
          >
            De la conception à l'optimisation, nous gérons votre infrastructure
            réseau pour une performance et une sécurité optimales.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm"
            >
              Demander une consultation gratuite
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

      {/* Overview Section */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Un réseau performant, le cœur de votre activité
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 text-justify">
              Une infrastructure réseau bien conçue est essentielle pour la
              collaboration, le partage de données et l'efficacité
              opérationnelle. Nous vous aidons à construire un réseau qui
              soutient vos objectifs d'affaires.
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
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0 w-5 h-5" />
                  <p className="text-base">{benefit}</p>
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
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl opacity-20 blur-md"></div>
              <img
                src="/reseau.jpeg"
                alt="Réseau informatique"
                className="relative rounded-2xl shadow-xl w-full z-10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h2 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Nos Services Réseau
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto text-justify">
            Nous proposons une gamme complète de services pour répondre à tous
            vos besoins en matière d'infrastructure.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col items-start text-left"
              variants={itemVariants}
            >
              <div className="p-3 rounded-full bg-gray-100 mb-3 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm text-justify">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Notre Méthodologie de Projet
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto text-justify">
              Un processus transparent et efficace pour garantir un projet
              réussi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gray-200 mx-16"></div>
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative z-10"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center text-white text-lg font-bold mb-3 shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 md:px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMTUiLz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-poppins text-2xl md:text-3xl font-bold mb-6"
          >
            Votre réseau est-il à la hauteur de vos ambitions ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg mb-6 opacity-90 text-justify"
          >
            Contactez notre équipe pour une évaluation gratuite et sans
            engagement.
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
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm"
            >
              Demander un devis
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
