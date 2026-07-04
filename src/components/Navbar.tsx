import { useState, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

export default function Navbar({ activeSection, onNavClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
    { id: "register", label: "Register" },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavClick(id);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => handleLinkClick("home")}
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <div className="w-10 h-10 bg-brand-600 text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-md shadow-brand-500/10 group-hover:bg-brand-700 transition-colors shrink-0">
              BF
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-brand-900 group-hover:text-brand-600 transition-colors">
              Bright <span className="text-brand-600">Future</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                id={`nav-link-${item.id}`}
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-sm font-semibold transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? "text-brand-600"
                    : "text-slate-600 hover:text-brand-600"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              id="nav-cta"
              onClick={() => handleLinkClick("register")}
              className="bg-brand-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md shadow-brand-200 hover:bg-brand-700 transition-all cursor-pointer active:scale-95"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-brand-600 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu-container"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen border-b border-slate-100 bg-white" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              id={`mobile-nav-link-${item.id}`}
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                activeSection === item.id
                  ? "text-brand-700 bg-brand-50 font-semibold"
                  : "text-slate-600 hover:text-brand-600 hover:bg-slate-50"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 px-4">
            <button
              id="mobile-nav-cta"
              onClick={() => handleLinkClick("register")}
              className="block w-full text-center px-5 py-3 rounded-xl text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-500/25 transition-all"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
