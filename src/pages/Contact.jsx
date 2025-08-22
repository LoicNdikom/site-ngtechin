import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Clock,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi de formulaire
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  // Animations
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="font-inter bg-gray-50">
      {/* 1. Hero Section améliorée */}
      <section className="relative bg-gradient-to-r from-[#07E50D] to-[#057CE5] text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white opacity-10"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="font-poppins text-4xl md:text-6xl font-bold mb-6">
            Contactez-nous
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Une question, un projet ou un partenariat ? L'équipe NG-Tech-In est
            à votre écoute pour vous accompagner vers le succès.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Section Informations supplémentaires */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50">
              <Clock className="w-12 h-12 mx-auto mb-4 text-[#07E50D]" />
              <h3 className="font-poppins text-xl font-semibold mb-2">
                Horaires d'ouverture
              </h3>
              <p className="text-gray-600">
                Lun - Ven: 8h - 18h
                <br />
                Sam: 9h - 13h
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-green-50">
              <Users className="w-12 h-12 mx-auto mb-4 text-[#057CE5]" />
              <h3 className="font-poppins text-xl font-semibold mb-2">
                Équipe dédiée
              </h3>
              <p className="text-gray-600">
                Experts techniques à votre service pour répondre à tous vos
                besoins
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50">
              <Send className="w-12 h-12 mx-auto mb-4 text-[#07E50D]" />
              <h3 className="font-poppins text-xl font-semibold mb-2">
                Réponse rapide
              </h3>
              <p className="text-gray-600">
                Nous nous engageons à vous répondre dans les 24 heures
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Section Contact principale */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Formulaire amélioré */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
            Envoyez-nous un message
          </h2>

          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg"
            >
              Votre message a été envoyé avec succès ! Nous vous répondrons très
              prochainement.
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg"
            >
              Une erreur s'est produite. Veuillez réessayer ou nous contacter
              directement.
            </motion.div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Nom complet *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom complet"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#07E50D] outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre adresse email"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#057CE5] outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez-nous votre projet ou question..."
                rows="5"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#07E50D] outline-none transition"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#07E50D] to-[#057CE5] text-white font-semibold transition flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer le message
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Coordonnées améliorées */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-8"
        >
          <motion.h2
            variants={fadeIn}
            className="font-poppins text-2xl font-bold text-gray-900"
          >
            Nos coordonnées
          </motion.h2>
          <motion.p variants={fadeIn} className="text-gray-600 text-lg">
            Vous pouvez aussi nous joindre directement via nos canaux de
            communication préférés :
          </motion.p>

          <motion.div variants={fadeIn} className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-green-50">
              <div className="p-3 rounded-full bg-green-100">
                <Phone className="w-6 h-6 text-[#07E50D]" />
              </div>
              <div>
                <p className="block text-gray-700 font-medium">Téléphone</p>
                <p className="text-gray-600">+237 6 90 00 00 00</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50">
              <div className="p-3 rounded-full bg-blue-100">
                <Mail className="w-6 h-6 text-[#057CE5]" />
              </div>
              <div>
                <p className="block text-gray-700 font-medium">Email</p>
                <p className="text-gray-600">contact@ng-tech-in.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-green-50">
              <div className="p-3 rounded-full bg-green-100">
                <MessageSquare className="w-6 h-6 text-[#07E50D]" />
              </div>
              <div>
                <p className="block text-gray-700 font-medium">WhatsApp</p>
                <p className="text-gray-600">+237 6 90 00 00 00</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50">
              <div className="p-3 rounded-full bg-blue-100">
                <MapPin className="w-6 h-6 text-[#057CE5]" />
              </div>
              <div>
                <p className="block text-gray-700 font-medium">Adresse</p>
                <p className="text-gray-600">Yaoundé, Cameroun</p>
              </div>
            </div>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div variants={fadeIn} className="pt-6">
            <h3 className="font-poppins text-xl font-bold text-gray-900 mb-4">
              Suivez-nous
            </h3>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-[#07E50D] flex items-center justify-center text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-[#057CE5] flex items-center justify-center text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-[#07E50D] flex items-center justify-center text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-[#057CE5] flex items-center justify-center text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. Carte / localisation améliorée */}
      <section className="w-full h-96 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07E50D] to-[#057CE5] opacity-10 z-0"></div>
        <iframe
          title="Localisation NG-Tech-In"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127432.347868078!2d11.446!3d3.848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7b28dfc46f%3A0x300d7f5aeef4000!2sYaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2scm!4v000000"
          className="w-full h-full border-0 relative z-10"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md z-20">
          <h3 className="font-poppins font-semibold text-gray-800 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#057CE5]" />
            Notre siège à Yaoundé
          </h3>
          <p className="text-sm text-gray-600 mt-1">Cameroun</p>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-gray-600 text-lg">
              Trouvez rapidement des réponses à vos interrogations
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Quels sont vos délais de réponse?",
                answer:
                  "Nous nous engageons à répondre à toutes les demandes dans un délai de 24 heures ouvrées.",
              },
              {
                question: "Proposez-vous des consultations gratuites?",
                answer:
                  "Oui, nous offrons une première consultation gratuite de 30 minutes pour discuter de votre projet et voir comment nous pouvons vous aider.",
              },
              {
                question: "Travaillez-vous avec des clients internationaux?",
                answer:
                  "Absolument! Nous avons des clients partout dans le monde et adaptons nos horaires pour collaborer efficacement quel que soit votre fuseau horaire.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h3 className="font-poppins font-semibold text-lg text-gray-900 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#07E50D] flex items-center justify-center text-white text-sm">
                    {index + 1}
                  </div>
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Final amélioré */}
      <section className="relative bg-gradient-to-r from-[#057CE5] to-[#07E50D] py-10 px-4 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="absolute -top-20 -left-20 w-64 h-50 rounded-full bg-white opacity-10"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-50 rounded-full bg-white opacity-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
            Discutons de votre projet 🚀
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Nous sommes disponibles pour répondre à vos questions et vous aider
            à concrétiser vos idées les plus ambitieuses.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:contact@ng-tech-in.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-[#057CE5] font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              Envoyez un email
            </motion.a>
            <motion.a
              href="tel:+237682152095"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-white hover:text-[#057CE5] transition"
            >
              Appelez-nous
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}