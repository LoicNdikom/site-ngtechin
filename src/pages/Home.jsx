import React from 'react'
import About from '../assets/images/hero1.jpg'
import About1 from '../assets/images/hero3.jpg'
import About2 from '../assets/images/b1.jpg'
import HeroImage from '../assets/images/hero4.jpg'


function Home() {
  return (
    <>
      <Navbar />
      <main className="font-inter">

        {/* Hero Section corrigée */}
        <section 
          className="relative flex items-center justify-center h-screen text-center px-6 bg-cover bg-center" 
          style={{ backgroundImage: `url(${HeroImage})` }} // Utilisation de l'import
        >
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Contenu */}
          <div className="relative z-10 container mx-auto animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-[#07E50D]">
              BIENVENUE A NEW GENERATION INNOVATOR
            </h1>
            <h2 className="text-2xl md:text-3xl mt-4 text-white">
              Au Coeur et au Service de la Technologie
            </h2>
            <div className="mt-8 flex justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Savoir <i className="bi bi-plus text-xl"></i>
              </button>
            </div>
          </div>
        </section>

        {/* Le reste du code reste inchangé */}
        {/* About / Services Sections */}
        {[{
          img: About,
          title: "AU SERVICE DES NOUVELLES TECHNOLOGIES",
          text: "Nous sommes spécialisés dans les solutions informatiques pour les entreprises. Notre mission est de fournir des solutions innovantes pour améliorer la productivité de nos clients. Nous travaillons dans le développement web, la sécurité et l’automatisation des processus.",
          reverse: false
        },{
          img: About1,
          title: "CONCEPTION DES SITES INTERNET PROFESSIONNELS",
          text: "Vous souhaitez vous faire connaître ou élargir votre vision et gagner en crédibilité auprès de vos clients. Nos solutions web permettent de booster votre image et de rendre votre entreprise plus visible sur Internet.",
          reverse: true
        },{
          img: About2,
          title: "INSTALLATION CAMERAS DE SURVEILLANCE",
          text: "Prenez le contrôle total de vos surfaces et sécurisez vos locaux avec nos solutions de surveillance professionnelles.",
          reverse: false
        }].map((section, idx) => (
          <section key={idx} className={`py-16 ${section.reverse ? "bg-gray-50" : ""}`}>
            <div className={`container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 ${section.reverse ? "md:flex-row-reverse" : ""}`}>
              <img src={section.img} alt={section.title} className="w-full md:w-1/2 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 h-[350px] md:h-[420px] object-cover" />
              <div className="md:w-1/2 flex flex-col justify-center h-[350px] md:h-[420px] animate-fadeIn">
                <span className="text-[#07E50D] font-poppins font-semibold uppercase tracking-wide">{section.title}</span>
                <p className="mt-6 text-gray-700 text-lg leading-relaxed text-justify">{section.text}</p>
              </div>
            </div>
          </section>
        ))}

        {/* Témoignages Section */}
<section className="py-16 bg-gray-50 text-center">
  <div className="container mx-auto px-6">
    <span className="text-[#07E50D] font-poppins font-bold uppercase tracking-wide">Témoignages</span>
    <p className="mt-2 text-gray-700 text-lg text-justify">Une clientèle plus que satisfaite. Ce qu'ils disent <em>de nous</em></p>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Témoignage 1 */}
      <div 
        className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 flex flex-col justify-between min-h-[420px] animate-fadeIn"
      >
        <div>
          <div className="flex justify-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="bi bi-star-fill"></i>
            ))}
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed text-justify">
            "New Generation Innovator a révolutionné notre présence en ligne. Leur équipe a créé un site web professionnel qui a augmenté nos leads de 40% en seulement trois mois. Leur support technique est exceptionnel et toujours disponible."
          </p>
        </div>
        <div className="mt-4 flex items-center gap-4 justify-center md:justify-start">
          <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">SM</div>
          <div className="text-left">
            <div className="font-semibold">Sophie Mbala</div>
            <div className="text-gray-500 text-sm">Directrice, Mbala Consulting</div>
          </div>
        </div>
      </div>

      {/* Témoignage 2 */}
      <div 
        className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 flex flex-col justify-between min-h-[420px] animate-fadeIn"
      >
        <div>
          <div className="flex justify-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="bi bi-star-fill"></i>
            ))}
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed text-justify">
            "Le système de sécurité que NG-TECH-IN a installé dans nos locaux est tout simplement impressionnant. Non seulement ils ont respecté le budget et les délais, mais leur formation du personnel était complète. Nous nous sentons maintenant en sécurité 24h/24."
          </p>
        </div>
        <div className="mt-4 flex items-center gap-4 justify-center md:justify-start">
          <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">DK</div>
          <div className="text-left">
            <div className="font-semibold">David Kabasele</div>
            <div className="text-gray-500 text-sm">Gérant, SuperMarché Proximité</div>
          </div>
        </div>
      </div>

      {/* Témoignage 3 */}
      <div 
        className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 flex flex-col justify-between min-h-[420px] animate-fadeIn"
      >
        <div>
          <div className="flex justify-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="bi bi-star-fill"></i>
            ))}
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed text-justify">
            "L'automatisation de nos processus administratifs par NG-TECH-IN nous a fait gagner un temps précieux. Leur solution sur mesure a réduit nos erreurs de 75% et augmenté notre productivité. Je les recommande vivement à toute entreprise cherchant à se digitaliser."
          </p>
        </div>
        <div className="mt-4 flex items-center gap-4 justify-center md:justify-start">
          <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">AM</div>
          <div className="text-left">
            <div className="font-semibold">Amina Mulumba</div>
            <div className="text-gray-500 text-sm">Directrice Financière, Groupe Elikya</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </main>
      <Footer />
    </>
  )
}

export default Home