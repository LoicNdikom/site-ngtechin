import React from 'react'
import heroBg from "../assets/images/hero5.jpg"  // on importe ton image

function Apropo() {
  return (
    <>
      <Navbar />
      <main>
        {/* Section Hero */}
        <section 
          className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="relative text-center text-white max-w-3xl">
            <span className="block text-lg font-semibold font-poppins text-[#07E50D]">Qui sommes-nous.</span>
            <h4 className="mt-4 text-xl md:text-2xl font-inter leading-relaxed text-justify">
              Créer un avenir où chaque jeune a la possibilité de réaliser ses rêves grâce à l'innovation et à la collaboration.
            </h4>
            <div className="mt-6">
              <button className="px-6 py-2 bg-[#07E50D] hover:bg-green-600 text-white font-semibold rounded-lg transition">
                En Savoir plus
              </button>
            </div>
          </div>
        </section>

        {/* Mission / Vision / Valeurs */}
    <div className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-between">
    {/* Mission */}
    <div className="bg-[#f9fbe7] border-l-4 border-[#067819] rounded-lg p-6 shadow hover:-translate-y-1 hover:shadow-lg transition flex-1 min-w-[250px]">
      <h2 className="font-poppins text-[#07E50D] font-bold text-2xl mb-3">
        Notre Mission
      </h2>
      <p className="font-inter text-gray-700 text-justify leading-relaxed">
        Notre mission est de fournir des solutions innovantes qui transforment 
        les défis technologiques en opportunités.
      </p>
    </div>

    {/* Vision */}
    <div className="bg-[#f9fbe7] border-l-4 border-[#067819] rounded-lg p-6 shadow hover:-translate-y-1 hover:shadow-lg transition flex-1 min-w-[250px]">
      <h2 className="font-poppins text-[#07E50D] font-bold text-2xl mb-3">
        Notre Vision
      </h2>
      <p className="font-inter text-gray-700 text-justify leading-relaxed">
        Nous visons à être le leader des solutions informatiques en Afrique, 
        en offrant des services de qualité qui dépassent les attentes de nos clients.
      </p>
    </div>

    {/* Valeurs */}
    <div className="bg-[#fefefe] border-l-4 border-red-500 rounded-lg p-6 shadow hover:-translate-y-1 hover:shadow-lg transition flex-1 min-w-[250px]">
      <h2 className="font-poppins text-[#07E50D] font-bold text-2xl mb-3">
        Nos Valeurs
      </h2>
      <ul className="font-inter text-gray-700 space-y-2 leading-relaxed">
        <li>🌟 Innovation</li>
        <li>🤝 Intégrité</li>
        <li>💡 Collaboration</li>
        <li>🏆 Excellence</li>
      </ul>
    </div>
  </div>
</div>


        {/* Notre Histoire */}
        <section className="py-16 bg-white shadow-lg rounded-2xl mx-4 md:mx-16">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Texte */}
    <div className="md:w-7/12 p-6">
      <h2 className="font-poppins text-[#07E50D] font-bold text-3xl md:text-4xl mb-6">
        Notre Histoire:
      </h2>
      <p className="font-inter text-gray-700 text-justify leading-relaxed text-base md:text-lg">
        New Generation Technologie Innovation est née de la convergence d'une passion commune : celle de l'apprentissage et de la création dans le domaine du génie logiciel.  
        Issus d'une même promotion d'étudiants en génie logiciel, nous avons partagé un désir profond de repousser les limites de la technologie et de transformer nos idées en solutions concrètes. 
        C'est de cette volonté d'apprendre ensemble et de vivre une aventure entrepreneuriale commune qu'est née notre entreprise.
        Notre entreprise se spécialise dans la conception et le développement de solutions informatiques de pointe adaptées aux besoins spécifiques des entreprises. Nous sommes convaincus que la technologie est un levier puissant pour améliorer l'efficacité et la compétitivité. Notre mission est donc de fournir des solutions innovantes, robustes et sur mesure qui non seulement répondent aux défis actuels de nos clients, mais les préparent également pour l'avenir.
      </p>
    </div>

    {/* Image avec style */}
    <div className="md:w-5/12 p-6">
      <img 
        src="../public/equipe.jpg" 
        alt="Notre équipe" 
        className="w-full rounded-2xl shadow-xl object-cover transform transition duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl"
      />
    </div>
  </div>
</section>

        {/* Équipe */}
       <section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    {/* Titre principal */}
    <h2 className="font-poppins font-bold text-3xl mb-12 text-[#07E50D]">
      Les membres de notre équipe
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      
      {/* Membre 1 */}
      <div className="bg-white rounded-lg shadow-lg p-4 hover:-translate-y-1 hover:shadow-xl transition">
        <img 
          src="../public/team_03.jpg" 
          alt="NOUKETOU KOUAMOU MAXIME" 
          className="w-36 h-36 mx-auto rounded-full object-cover mb-4 border-4 border-[#07E50D] hover:scale-105 transition-transform" 
        />
        <h4 className="font-poppins font-bold text-lg text-[#057CE5] leading-snug">
          NOUKETOU KOUAMOU 
        </h4>
        <span className="font-inter text-gray-600 text-sm">DG</span>
      </div>

      {/* Membre 2 */}
      <div className="bg-white rounded-lg shadow-lg p-4 hover:-translate-y-1 hover:shadow-xl transition">
        <img 
          src="../public/team_01.jpg" 
          alt="KENFACK GERY STEVE" 
          className="w-36 h-36 mx-auto rounded-full object-cover mb-4 border-4 border-[#07E50D] hover:scale-105 transition-transform" 
        />
        <h4 className="font-poppins font-bold text-lg text-[#057CE5] leading-snug">
          KENFACK GERY <br /> STEVE
        </h4>
        <span className="font-inter text-gray-600 text-sm">Vice-DG</span>
      </div>

      {/* Membre 3 */}
      <div className="bg-white rounded-lg shadow-lg p-4 hover:-translate-y-1 hover:shadow-xl transition">
        <img 
          src="../public/team_02.jpg" 
          alt="NDIKOM CHE LOIC" 
          className="w-36 h-36 mx-auto rounded-full object-cover mb-4 border-4 border-[#07E50D] hover:scale-105 transition-transform" 
        />
        <h4 className="font-poppins font-bold text-lg text-[#057CE5] leading-snug">
          LOIC <br /> NDIKOM CHE
        </h4>
        <span className="font-inter text-gray-600 text-sm">Développeur Web</span>
      </div>

      {/* Membre 4 */}
      <div className="bg-white rounded-lg shadow-lg p-4 hover:-translate-y-1 hover:shadow-xl transition">
        <img 
          src="../public/yanelle.jpg" 
          alt="MOGUO DJOMMUM YANELLE" 
          className="w-36 h-36 mx-auto rounded-full object-cover mb-4 border-4 border-[#07E50D] hover:scale-105 transition-transform" 
        />
        <h4 className="font-poppins font-bold text-lg text-[#057CE5] leading-snug">
          MOGUO DJOMMUM 
        </h4>
        <span className="font-inter text-gray-600 text-sm">Analyste Programmeur</span>
      </div>

      {/* Membre 5 */}
      <div className="bg-white rounded-lg shadow-lg p-4 hover:-translate-y-1 hover:shadow-xl transition">
        <img 
          src="../public/kenfack.jpg" 
          alt="KENFACK MEGOUHOU VANELLA" 
          className="w-36 h-36 mx-auto rounded-full object-cover mb-4 border-4 border-[#07E50D] hover:scale-105 transition-transform" 
        />
        <h4 className="font-poppins font-bold text-lg text-[#057CE5] leading-snug">
          KENFACK MEGOUHOU 
        </h4>
        <span className="font-inter text-gray-600 text-sm">Développeur Full-Stack</span>
      </div>

    </div>
  </div>
</section>


      </main>
      <Footer />
    </>
  )
}

export default Apropo
