import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Track active section via IntersectionObserver on scroll
  useEffect(() => {
    const sections = ["home", "about", "contact", "register"];
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // Trigger when section is around middle viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Smooth scroll handler
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarOffset = 80; // height of sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Home Section */}
        <Hero onNavClick={handleNavClick} />

        {/* About Section */}
        <About />

        {/* Contact Section */}
        <Contact />

        {/* Register Section */}
        <Register />
      </main>

      {/* Footer */}
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}
