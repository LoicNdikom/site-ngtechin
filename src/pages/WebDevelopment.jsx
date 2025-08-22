// src/components/pages/DeveloppementWeb.jsx
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Code, Palette, Zap, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function WebDevelopment() {
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
    { name: "React", desc: "Bibliothèque JavaScript pour les interfaces utilisateur dynamiques.", icon: <Code className="w-5 h-5" /> },
    { name: "Next.js", desc: "Framework React pour des applications web performantes et SEO-friendly.", icon: <Rocket className="w-5 h-5" /> },
    { name: "Node.js", desc: "Environnement d'exécution JavaScript pour des backends robustes.", icon: <Zap className="w-5 h-5" /> },
    { name: "Strapi", desc: "Solution de CMS Headless pour une gestion de contenu flexible.", icon: <Palette className="w-5 h-5" /> },
    { name: "Tailwind CSS", desc: "Framework CSS pour un design rapide et sur mesure.", icon: <Palette className="w-5 h-5" /> },
  ];

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-30 px-1 md:px-1 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Développement Web Sur Mesure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-2 text-base md:text-lg max-w-2xl mx-auto mb-6 text-justify"
          >
            Transformez vos idées en une présence web puissante, performante et sécurisée.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 group text-sm"
            >
              Demander un devis gratuit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projets"
              className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
            >
              Voir nos réalisations
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
              Votre site web, un puissant outil de croissance
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 text-justify">
              Un site web ne doit pas seulement être beau ; il doit être un moteur de croissance pour votre entreprise. Nous concevons et développons des solutions web qui captivent votre audience, génèrent des prospects et renforcent votre marque.
            </p>
            <div className="space-y-3">
              {[
                "Expérience utilisateur exceptionnelle (UX/UI)",
                "Optimisé pour le référencement (SEO)",
                "Performance et rapidité inégalées",
                "Sécurité et maintenance continues",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-gray-800 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0 w-5 h-5" />
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
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl opacity-20 blur-md"></div>
              <img 
                src="/developpementweb.jpeg" 
                alt="Web Development" 
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
            Nos Technologies de Pointe
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base text-gray-600 max-w-2xl mx-auto text-justify"
          >
            Nous utilisons les technologies les plus modernes et performantes pour garantir des résultats exceptionnels.
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
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-md flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
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
              Notre Méthodologie de Projet
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 max-w-2xl mx-auto text-justify"
            >
              Un processus transparent et efficace pour un succès garanti.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Ligne de connexion */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gray-200 mx-12"></div>
            
            {[
              { step: "01", title: "Analyse", desc: "Comprendre vos besoins et définir la stratégie.", icon: "📊" },
              { step: "02", title: "Design & UX", desc: "Création de maquettes et d'une interface intuitive.", icon: "🎨" },
              { step: "03", title: "Développement", desc: "Codage de votre site avec les meilleures pratiques.", icon: "💻" },
              { step: "04", title: "Lancement", desc: "Mise en ligne, tests finaux et support.", icon: "🚀" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative z-10"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center text-white text-lg font-bold mb-3 shadow-md relative">
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
              Questions Fréquentes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 max-w-2xl mx-auto text-justify"
            >
              Trouvez les réponses aux questions les plus courantes sur nos services de développement web.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {[
              { q: "Combien de temps prend le développement d'un site web ?", r: "Le délai varie selon la complexité du projet. Un site vitrine simple peut prendre 2-3 semaines, tandis qu'une application web complexe peut nécessiter plusieurs mois." },
              { q: "Proposez-vous des formules d'entretien après la livraison ?", r: "Oui, nous proposons différents packages de maintenance incluant mises à jour, sauvegardes et support technique pour garantir le bon fonctionnement de votre site." },
              { q: "Mes données seront-elles sécurisées ?", r: "Absolument. La sécurité est notre priorité. Nous implémentons les meilleures pratiques et protocoles pour protéger vos données et celles de vos utilisateurs." }
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500"></div>
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
            Prêt à <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-300">lancer</span> votre projet web ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg mb-6 opacity-90 text-justify"
          >
            Contactez notre équipe pour une consultation gratuite et construisons ensemble votre future plateforme en ligne.
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
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group text-sm"
            >
              Contactez-nous
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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