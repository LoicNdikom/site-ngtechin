import { Routes, Route } from "react-router-dom";
import Navbar from "./composant/Navbar";
import Footer from "./composant/Footer";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Hero from "./composant/Hero";
import Services from "./pages/Services";
import Conseils from "./pages/Conseils";
import Contact from "./pages/Contact";
import MobileDevelopment from "./pages/MobileDevelopment";
import WebDevelopment from "./pages/WebDevelopment";
import IntegrationERP from "./pages/IntegrationERP";
import Reseau from "./pages/Reseau";
import Electricite from "./pages/Electricite";
import DesignGraphique from "./pages/DesignGraphique";
import Formation from "./pages/Formation";
import VideoSurveillance from "./pages/Videosurveillance";

export default function App() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}

      <Routes>
        <Route path="/" element={Home} />
        <Route path="/apropos" element={Apropos} />
        <Route path="/services" element={<Services />} />
        <Route path="/conseils" element={<Conseils />} />
        <Route
          path="/services/developpement-mobile"
          element={<MobileDevelopment />}
        />
        <Route
          path="/services/developpement-web"
          element={<WebDevelopment />}
        />
        <Route
          path="/services/electricite-domestique"
          element={<Electricite />}
        />
        <Route
          path="/services/videosurveillance"
          element={<VideoSurveillance />}
        />
        <Route
          path="/services/design-graphique"
          element={<DesignGraphique />}
        />
        <Route
          path="/services/reseaux-informatiques"
          element={<Reseau />}
        />
        <Route
          path="/services/integration-erp"
          element={<IntegrationERP />}
        />
        <Route
          path="/services/formation"
          element={<Formation />}
        />




























        <Route
          path="/services/integration-erp"
          element={<IntegrationERP />}
        />
        <Route path="/realisations" element={<h1>Réalisations</h1>} />
        <Route path="/contact" element={<Contact />} />
        {/* Vous pouvez supprimer cette route si elle n'est pas utilisée */}
        {/* <Route path="/mobile" element={<MobileDevelopment/>}/> */}
      </Routes>

      <Footer />
    </div>
  );
}