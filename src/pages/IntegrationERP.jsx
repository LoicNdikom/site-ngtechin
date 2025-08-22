// src/components/pages/IntegrationERP.jsx
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Wallet,
  Truck,
  Users,
  UserCog,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function IntegrationERP() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const benefits = [
    "Centralisation des données pour une vision à 360°",
    "Automatisation des processus métier complexes",
    "Amélioration de la productivité et réduction des coûts",
    "Sécurité et fiabilité de vos informations d'entreprise",
  ];

  const modules = [
    {
      title: "Gestion financière et comptabilité",
      desc: "Simplifiez la gestion de vos finances, la facturation et le suivi de vos budgets.",
      icon: <Wallet className="w-5 h-5" />,
    },
    {
      title: "Gestion de la chaîne d'approvisionnement (SCM)",
      desc: "Optimisez vos stocks, commandes et flux logistiques pour une efficacité accrue.",
      icon: <Truck className="w-5 h-5" />,
    },
    {
      title: "Gestion de la relation client (CRM)",
      desc: "Unifiez les données clients pour booster le suivi commercial et le service.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Gestion des ressources humaines (RH)",
      desc: "Accélérez la paie, les congés et la gestion des dossiers collaborateurs.",
      icon: <UserCog className="w-5 h-5" />,
    },
    {
      title: "Business Intelligence & reporting",
      desc: "Transformez vos données en tableaux de bord décisionnels clairs.",
      icon: <BarChart3 className="w-5 h-5" />,
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Audit & Planification",
      desc: "Cartographier vos processus, définir les objectifs et la roadmap.",
      emoji: "🧭",
    },
    {
      step: "02",
      title: "Conception",
      desc: "Paramétrage, personnalisation et préparation des modules sur mesure.",
      emoji: "🧩",
    },
    {
      step: "03",
      title: "Déploiement & Migration",
      desc: "Installation, reprise de données sécurisée et tests d’intégration.",
      emoji: "🔁",
    },
    {
      step: "04",
      title: "Formation & Suivi",
      desc: "Montée en compétence des équipes et support continu.",
      emoji: "🎓",
    },
  ];

  const faqs = [
    {
      q: "Combien de temps dure un projet d'intégration ERP ?",
      r: "Selon la portée : de 8–12 semaines pour un périmètre ciblé à 4–6 mois pour un déploiement multi-modules.",
    },
    {
      q: "Pouvez-vous reprendre mes données historiques ?",
      r: "Oui. Nous définissons un plan de migration (nettoyage, mapping, tests) pour garantir l’intégrité des données.",
    },
    {
      q: "Assurez-vous la formation et la maintenance ?",
      r: "Nous proposons des sessions de formation, de la documentation et des offres de support/maintenance post-déploiement.",
    },
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
            Intégration ERP Sur Mesure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-2 text-base md:text-lg max-w-2xl mx-auto mb-6 text-justify"
          >
            Centralisez vos opérations, alignez vos équipes et pilotez votre
            activité en temps réel grâce à une solution ERP adaptée à vos
            processus.
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
              Voir nos intégrations
            </Link>
          </motion.div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-12 md:h-16"
          >
            <path
              fill="#FFFFFF"
              fillOpacity="1"
              d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Pourquoi intégrer un ERP pour votre entreprise
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 text-justify">
              L’ERP supprime les silos d’informations, fiabilise vos données et
              accélère la prise de décision. Il devient l’ossature de vos
              opérations au quotidien.
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
                  <p className="text-base">{benefit}</p>
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
                src="/Erp.jpeg"
                alt="ERP Integration"
                className="relative rounded-2xl shadow-xl w-full z-10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          >
            Modules et fonctions clés
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base text-gray-600 max-w-2xl mx-auto text-justify"
          >
            Nous activons uniquement les briques dont vous avez besoin et les
            faisons évoluer avec votre activité.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {modules.map((mod, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              variants={itemVariants}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-md flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
                {mod.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1">
                {mod.title}
              </h3>
              <p className="text-gray-600 text-sm text-justify">{mod.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process */}
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
              Méthodologie d’intégration
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 max-w-2xl mx-auto text-justify"
            >
              Un parcours clair pour une transition fluide et sécurisée.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gray-200 mx-12"></div>

            {steps.map((s, index) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative z-10"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold mb-3 shadow-md relative">
                  {s.step}
                  <div className="absolute -top-1 -right-1 text-xl">{s.emoji}</div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-base">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-600 text-justify">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              Questions fréquentes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 max-w-2xl mx-auto text-justify"
            >
              Quelques réponses rapides sur notre approche et notre accompagnement.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 shadow-md"
              >
                <h3 className="font-semibold text-gray-900 text-base mb-1">
                  {f.q}
                </h3>
                <p className="text-gray-600 text-sm text-justify">{f.r}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 px-4 md:px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHstcm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMTUiLz48L2c+PC9zdmc+')] opacity-20"></div>

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
            Prêt à optimiser votre gestion d’entreprise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg mb-6 opacity-90 text-justify"
          >
            Discutons de votre périmètre, de vos priorités et des gains rapides
            possibles avec une intégration ERP adaptée.
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
