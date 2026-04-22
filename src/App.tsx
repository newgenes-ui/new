import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Equipment from "./pages/Equipment";
import Products from "./pages/Products";
import Partners from "./pages/Partners";
import Inquiry from "./pages/Inquiry";
import AboutCompany from "./pages/AboutCompany";
import Location from "./pages/Location";
import NanoEntek from "./pages/NanoEntek";
import EstekBio from "./pages/EstekBio";
import GenicsBio from "./pages/GenicsBio";
import TwistBio from "./pages/TwistBio";
import ResearchConsulting from "./pages/ResearchConsulting";
import Archive from "./pages/Archive";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutCompany />} />
            <Route path="/location" element={<Location />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/equipment/nanoentek" element={<NanoEntek />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/estek" element={<EstekBio />} />
            <Route path="/products/genics" element={<GenicsBio />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/partners/twist" element={<TwistBio />} />
            <Route path="/partners/consulting" element={<ResearchConsulting />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/inquiry" element={<Inquiry />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
