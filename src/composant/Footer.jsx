import React from "react";
import { FaFacebook, FaWhatsapp, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white font-sans">
      <div className="container mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Col 1 */}
        <div>
          <h3 className="mb-3 text-[#07E50D] font-poppins text-xl font-bold">
            New Generation Innovator
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Faites nous confiance <br /> et vous ne serez plus déçu
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h3 className="mb-3 text-[#07E50D] font-poppins text-xl font-bold">
            Nos services
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#07E50D] transition-colors">Réalisation sites web</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#07E50D] transition-colors">Maintenance réseau</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#07E50D] transition-colors">Installation caméras</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#07E50D] transition-colors">Services digitaux</a>
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h3 className="mb-3 text-[#07E50D] font-poppins text-xl font-bold">
            Liens
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#07E50D] transition-colors">🏠 Accueil</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#07E50D] transition-colors">📖 À propos</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#07E50D] transition-colors">🛠️ Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#07E50D] transition-colors">📱 Contact</a>
            </li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h3 className="mb-3 text-[#07E50D] font-poppins text-xl font-bold">
            Contactez-nous
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#07E50D] transition-colors">(+237) 657386115/682152095</a></li>
            <li><a href="mailto:digitalgenerationinnovator@gmail.com" className="hover:text-[#07E50D] transition-colors">ngtechin5@gmail.com</a></li>
            <li><a href="#" className="hover:text-[#07E50D] transition-colors"> Cameroun <br /> Yaoundé <br /> </a></li>
          </ul>

          {/* Réseaux sociaux */}
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="#" className="hover:text-[#07E50D] transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-[#07E50D] transition-colors">
              <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-[#07E50D] transition-colors">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-200 py-4 mt-6">
        <p className="text-center text-gray-700 text-sm">
          © 2024 NG Tech IN - All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
