import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      image: "/developpementweb.jpeg",
      title: "Développement Web",
      desc: "Création de sites web modernes, performants et sécurisés pour booster votre visibilité en ligne.",
      color: "from-blue-500 to-emerald-500",
      bgColor: "bg-gradient-to-r from-blue-500 to-emerald-500",
      slug: "developpement-web",
    },
    {
      image: "/developpement.jpeg",
      title: "Développement Mobile",
      desc: "Applications mobiles natives et hybrides adaptées à vos besoins sur iOS et Android.",
      color: "from-emerald-500 to-blue-500",
      bgColor: "bg-gradient-to-r from-emerald-500 to-blue-500",
      slug: "developpement-mobile",
    },
    {
      image: "/Erp.jpeg",
      title: "Intégration ERP",
      desc: "Des solutions ERP personnalisées pour améliorer la gestion et la productivité de votre entreprise.",
      color: "from-blue-500 to-emerald-500",
      bgColor: "bg-gradient-to-r from-blue-500 to-emerald-500",
      slug: "integration-erp",
    },
    {
      image: "/electrique.jpg",
      title: "Électricité Domestique",
      desc: "Installation et maintenance électriques fiables et sécurisées pour vos bâtiments.",
      color: "from-emerald-500 to-blue-500",
      bgColor: "bg-gradient-to-r from-emerald-500 to-blue-500",
      slug: "electricite-domestique",
    },
    {
      image: "/video.jpeg",
      title: "Vidéosurveillance",
      desc: "Installation et entretien de systèmes de vidéosurveillance pour votre sécurité.",
      color: "from-blue-500 to-emerald-500",
      bgColor: "bg-gradient-to-r from-blue-500 to-emerald-500",
      slug: "videosurveillance",
    },
    {
      image: "/design.jpeg",
      title: "Design Graphique",
      desc: "Identité visuelle, logos et supports graphiques modernes pour renforcer votre image de marque.",
      color: "from-emerald-500 to-blue-500",
      bgColor: "bg-gradient-to-r from-emerald-500 to-blue-500",
      slug: "design-graphique",
    },
    {
      image: "/reseau.jpeg",
      title: "Réseaux Informatiques",
      desc: "Mise en place et maintenance de réseaux fiables pour garantir votre connectivité.",
      color: "from-blue-500 to-emerald-500",
      bgColor: "bg-gradient-to-r from-blue-500 to-emerald-500",
      slug: "reseaux-informatiques",
    },
    {
      image: "/formation.jpg",
      title: "Formation",
      desc: "Ateliers et formations pour renforcer vos compétences numériques et technologiques.",
      color: "from-emerald-500 to-blue-500",
      bgColor: "bg-gradient-to-r from-emerald-500 to-blue-500",
      slug: "formation",
    },
  ];

  const avantages = [
    "Équipe expérimentée et passionnée",
    "Solutions personnalisées adaptées à vos besoins",
    "Support technique réactif et fiable",
    "Transparence et respect des délais",
  ];

  return (
    <div className="font-inter">
      {/* 1. Hero Section améliorée */}
      <section className="relative bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-20 px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Solutions Technologiques Sur Mesure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            Nous transformons vos idées en solutions digitales performantes qui propulsent votre entreprise vers l'avant.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="#services"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Découvrir nos services
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3. Présentation améliorée */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Un partenariat technologique complet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            Chez NG-Tech-In, nous ne nous contentons pas de livrer des projets. Nous établissons des relations durables en accompagnant nos clients de l'audit initial à la mise en œuvre et au support continu, garantissant ainsi la réussite et la pérennité de vos solutions IT.
          </motion.p>
        </div>
      </section>

      {/* 4. Liste des services améliorée avec images */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-poppins text-4xl font-bold text-gray-900 mb-4"
          >
            Nos Domaines d'Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Une gamme complète de services sur-mesure pour répondre aux défis technologiques de votre entreprise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600 flex-grow mb-4">{service.desc}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="flex items-center text-blue-600 font-semibold mt-auto"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: hoveredCard === index ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-gradient-to-r from-blue-600 to-emerald-500"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Processus de travail */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Méthodologie
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un processus éprouvé pour garantir le succès de votre projet à chaque étape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Ligne de connexion */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gray-200 mx-16"></div>

            {[
              { step: "01", title: "Consultation", desc: "Analyse de vos besoins et objectifs" },
              { step: "02", title: "Conception", desc: "Élaboration de la solution sur mesure" },
              { step: "03", title: "Développement", desc: "Implémentation avec les meilleures technologies" },
              { step: "04", title: "Support", desc: "Maintenance et évolution continue" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative z-10"
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Avantages améliorés */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les atouts qui font de NG-Tech-In le partenaire idéal pour vos projets technologiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {avantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item}</h3>
                  <p className="text-gray-600 text-sm">
                    {item === "Équipe expérimentée et passionnée" && "Nos experts cumulent plus de 10 ans d'expérience dans leurs domaines respectifs."}
                    {item === "Solutions personnalisées adaptées à vos besoins" && "Nous développons des solutions sur mesure qui répondent parfaitement à vos objectifs spécifiques."}
                    {item === "Support technique réactif et fiable" && "Notre équipe support vous accompagne 24/7 pour résoudre rapidement tout problème technique."}
                    {item === "Transparence et respect des délais" && "Nous communiquons ouvertement sur l'avancement des projets et respectons scrupuleusement les échéances."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Final amélioré */}
      <section className="relative py-24 px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHstcm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMTUiLz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-poppins text-3xl md:text-4xl font-bold mb-6"
          >
            Prêt à transformer votre vision en réalité ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl mb-8 opacity-90"
          >
            Contactez notre équipe dès aujourd'hui pour une consultation gratuite et découvrez comment nos solutions peuvent propulser votre entreprise.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Demander une consultation
            </Link>
            <Link
              to="/realisations"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Voir nos réalisations
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}