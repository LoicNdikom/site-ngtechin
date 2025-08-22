// src/components/pages/Formation.jsx
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Smartphone, 
  Award, 
  Briefcase, 
  CheckCircle2 
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Formation() {
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

  const themes = [
    { 
      icon: <BookOpen size={40} className="text-emerald-500" />, 
      name: "Développement Web", 
      desc: "Maîtrisez les dernières technologies front-end et back-end (React, Node.js, Python)." 
    },
    { 
      icon: <Smartphone size={40} className="text-blue-600" />, 
      name: "Développement Mobile", 
      desc: "Créez des applications natives et hybrides pour iOS et Android (React Native, Flutter, Swift, Kotlin)." 
    },
    { 
      icon: <Briefcase size={40} className="text-emerald-500" />, 
      name: "Infrastructure & Réseau", 
      desc: "Découvrez l'administration système, la sécurité et les solutions cloud." 
    },
    { 
      icon: <Award size={40} className="text-blue-600" />, 
      name: "Gestion de Projet", 
      desc: "Apprenez les méthodologies agiles (Scrum, Kanban) pour mener vos projets au succès." 
    }
  ];

  const benefits = [
    "Programmes de formation sur mesure, adaptés à vos besoins",
    "Formateurs experts et pédagogues",
    "Méthodes d'apprentissage interactives et pratiques",
    "Amélioration de la productivité et de la rétention des talents",
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
            Formations Professionnelles sur Mesure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-2 text-base md:text-lg max-w-2xl mx-auto mb-6 text-justify"
          >
            Développez les compétences de votre équipe avec nos programmes de formation personnalisés.
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
              Découvrir nos programmes
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
              L'investissement le plus rentable : la connaissance
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 text-justify">
              Dans un monde en constante évolution, la mise à jour des compétences est essentielle pour rester compétitif. Nos formations sont conçues pour offrir un savoir-faire pratique et directement applicable.
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
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl opacity-20 blur-md"></div>
              <img 
                src="/formation.jpeg" 
                alt="Formation Professionnelle" 
                className="relative rounded-2xl shadow-xl w-full z-10" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Themes Section */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          >
            Nos Thèmes de Formation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base text-gray-600 max-w-2xl mx-auto text-justify"
          >
            Nous couvrons une large gamme de compétences pour répondre aux défis technologiques d'aujourd'hui.
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="p-3 rounded-full bg-gray-100 mb-3 group-hover:scale-110 transition-transform">
                {theme.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1">
                {theme.name}
              </h3>
              <p className="text-gray-600 text-sm text-justify">{theme.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-3"
            >
              Notre Approche Pédagogique
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 max-w-2xl mx-auto text-justify"
            >
              Un processus d'apprentissage structuré et interactif pour un maximum d'efficacité.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gray-200 mx-16"></div>
            {[
              { step: "01", title: "Audit des Besoins", desc: "Analyse des compétences à acquérir et des objectifs de l'entreprise." },
              { step: "02", title: "Conception du Programme", desc: "Création d'un syllabus et de supports de cours personnalisés." },
              { step: "03", title: "Dispense de la Formation", desc: "Sessions pratiques animées par nos formateurs experts." },
              { step: "04", title: "Suivi & Évaluation", desc: "Vérification des acquis et remise de certifications de fin de formation." }
            ].map((item, index) => (
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

      {/* Final CTA Section */}
      <section className="relative py-16 px-4 md:px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMTUiLz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-poppins text-2xl md:text-3xl font-bold mb-4"
          >
            Prêt à faire grandir votre équipe ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg mb-6 opacity-90 text-justify"
          >
            Contactez-nous pour élaborer un plan de formation qui répond à vos objectifs.
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
              Demander un plan de formation
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
            >
              Voir tous nos services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
