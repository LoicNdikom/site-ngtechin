import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsHouse, BsInfoCircle, BsBriefcase, BsLightbulb, BsKanban, BsEnvelope } from "react-icons/bs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md fixed top-0 w-full z-50 bg-white">
      <div className="container mx-auto py-3 px-6 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img 
            src="logo.png" 
            alt="Logo" 
            className="h-12 w-auto lg:h-14" 
          />
        </NavLink>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex space-x-6 text-gray-700 font-medium">
          <NavItem to="/" icon={<BsHouse size={20} />} label="Accueil" />
          <NavItem to="/apropos" icon={<BsInfoCircle size={20} />} label="À propos" />
          <NavItem to="/services" icon={<BsBriefcase size={20} />} label="Services" />
          <NavItem to="/conseils" icon={<BsLightbulb size={20} />} label="Conseils" />
          <NavItem to="/realisations" icon={<BsKanban size={20} />} label="Réalisations" />
          <NavItem to="/contact" icon={<BsEnvelope size={20} />} label="Contact" />
        </nav>

        {/* Burger Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl text-green-600 focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-sm px-6 py-4 flex flex-col space-y-3 text-gray-700 font-medium">
          <NavItem to="/" icon={<BsHouse size={20} />} label="Accueil" onClick={() => setIsOpen(false)} />
          <NavItem to="/apropos" icon={<BsInfoCircle size={20} />} label="À propos" onClick={() => setIsOpen(false)} />
          <NavItem to="/services" icon={<BsBriefcase size={20} />} label="Services" onClick={() => setIsOpen(false)} />
          <NavItem to="/conseils" icon={<BsLightbulb size={20} />} label="Conseils" onClick={() => setIsOpen(false)} />
          <NavItem to="/realisations" icon={<BsKanban size={20} />} label="Réalisations" onClick={() => setIsOpen(false)} />
          <NavItem to="/contact" icon={<BsEnvelope size={20} />} label="Contact" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  );
}

/* --- Sous-composant lien --- */
function NavItem({ to, icon, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 transition ${
          isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}
