// src/components/pages/DeveloppementMobile.jsx
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Smartphone, Zap, Code, Database } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileDevelopment() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const technologies = [
    { name: "React Native", desc: "Développement multi-plateforme pour iOS et Android.", icon: <Smartphone className="w-5 h-5" /> },
    { name: "Swift", desc: "Langage natif pour des applications iOS performantes.", icon: <Zap className="w-5 h-5" /> },
    { name: "Kotlin", desc: "Langage natif pour des applications Android modernes.", icon: <Code className="w-5 h-5" /> },
    { name: "Flutter", desc: "Framework de Google pour des interfaces utilisateur magnifiques.", icon: <Smartphone className="w-5 h-5" /> },
    { name: "Firebase", desc: "Plateforme backend as-a-service pour le développement mobile rapide.", icon: <Database className="w-5 h-5" /> },
  ];

  const benefits = [
    "Une interface intuitive et un design percutant (UI/UX)",
    "Des performances fluides et une vitesse d'exécution optimale",
    "Une compatibilité garantie sur tous les appareils iOS et Android",
    "Un suivi post-lancement et des mises à jour régulières",
  ];

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-500 to-blue-600 text-white py-30 px-1 md:px-1 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Développement Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300">Sur Mesure</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-2 text-base md:text-lg max-w-2xl mx-auto mb-6 text-justify"
          >
            Transformez votre idée en une application mobile performante et intuitive pour iOS et Android.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 group text-sm"
            >
              Demander une consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projets"
              className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
            >
              Voir nos applications
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
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Votre application, un atout majeur pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">votre entreprise</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 text-justify">
              Une application mobile vous permet de vous connecter directement avec vos clients, d'offrir une expérience personnalisée et d'augmenter votre visibilité sur un marché de plus en plus mobile.
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
            viewport={{ once: true, margin: "-50px" }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl opacity-20 blur-md"></div>
              <img 
                src="/developpement.jpeg" 
                alt="Mobile Development" 
                className="relative rounded-2xl shadow-xl w-full z-10" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          >
            Notre Expertise en <span className="text-emerald-500">Technologies Mobiles</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base text-gray-600 max-w-2xl mx-auto text-justify"
          >
            Nous utilisons les technologies les plus adaptées pour garantir la meilleure expérience utilisateur et les performances souhaitées.
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              variants={itemVariants}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-md flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1">{tech.name}</h3>
              <p className="text-gray-600 text-sm text-justify">{tech.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-3"
            >
              Notre <span className="text-emerald-500">Méthodologie</span> de Projet Mobile
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 max-w-2xl mx-auto text-justify"
            >
              Un processus éprouvé pour transformer votre idée en une application de qualité.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gray-200 mx-12"></div>
            {[
              { step: "01", title: "Analyse & Idéation", desc: "Comprendre votre concept et définir la stratégie mobile.", icon: "📊" },
              { step: "02", title: "Design UI/UX", desc: "Concevoir des maquettes et un prototype interactif.", icon: "🎨" },
              { step: "03", title: "Développement & Tests", desc: "Coder, intégrer le backend et tester rigoureusement.", icon: "💻" },
              { step: "04", title: "Déploiement & Suivi", desc: "Publier sur les stores et fournir un support continu.", icon: "🚀" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative z-10"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold mb-3 shadow-md relative">
                  {item.step}
                  <span className="absolute -top-1 -right-1 text-xl">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-base">{item.title}</h3>
                <p className="text-xs text-gray-600 text-justify">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-3"
            >
              Questions <span className="text-emerald-500">Fréquentes</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 max-w-2xl mx-auto text-justify"
            >
              Trouvez les réponses aux questions les plus courantes sur nos services de développement mobile.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {[
              { q: "Combien coûte le développement d'une application mobile ?", r: "Le coût varie selon la complexité, les fonctionnalités et la plateforme. Nous proposons des solutions adaptées à tous les budgets avec une transparence totale sur les tarifs." },
              { q: "Quel est le délai de développement moyen ?", r: "Un MVP (Minimum Viable Product) peut prendre 2-3 mois, tandis qu'une application complète avec de nombreuses fonctionnalités peut nécessiter 4-6 mois ou plus." },
              { q: "Proposez-vous la maintenance après le lancement ?", r: "Oui, nous offrons des packages de maintenance complets incluant mises à jour, corrections de bugs, support technique et optimisation des performances." }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 shadow-md"
              >
                <h3 className="font-semibold text-gray-900 text-base mb-1">{faq.q}</h3>
                <p className="text-gray-600 text-sm text-justify">{faq.r}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 px-4 md:px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMTUiLz48L2c+PC9zdmc+')] opacity-20"></div>
        
        {/* Animated elements */}
        <div className="absolute top-8 left-8 w-12 h-12 rounded-full bg-white/5 animate-pulse"></div>
        <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-white/5 animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-poppins text-2xl md:text-3xl font-bold mb-4"
          >
            Prêt à <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300">lancer</span> votre application ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg mb-6 opacity-90 text-justify"
          >
            Contactez notre équipe pour une consultation gratuite et construisons ensemble votre future application mobile.
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
              className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group text-sm"
            >
              Contactez-nous
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
            >
              Nos autres services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}