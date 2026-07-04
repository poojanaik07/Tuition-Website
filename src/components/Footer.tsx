import { GraduationCap, Phone, Mail, MapPin, Heart } from "lucide-react";

interface FooterProps {
  onNavClick: (section: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = 2026;

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
    { id: "register", label: "Register" },
  ];

  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1 - Brand Summary */}
          <div className="md:col-span-5 space-y-4">
            <button
              id="footer-logo"
              onClick={() => onNavClick("home")}
              className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            >
              <div className="bg-brand-600 text-white p-2 rounded-xl group-hover:bg-brand-500 transition-colors">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Bright <span className="text-brand-400">Future</span>
              </span>
            </button>
            <p className="text-sm text-slate-400 leading-relaxed font-sans max-w-sm">
              Nurturing key school concepts, academic accountability, and problem-solving skills for students from Class 5 to 10. Learn today, lead tomorrow.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-white text-base tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-link-${link.id}`}
                    onClick={() => onNavClick(link.id)}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Snippet */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-semibold text-white text-base tracking-wide uppercase">
              Get in Touch
            </h4>
            <ul className="space-y-3 font-sans text-sm text-slate-400">
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-4.5 w-4.5 text-brand-400 shrink-0 mt-0.5" />
                <span>Science City Road, Sector 3, Bengaluru, KA - 560034</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="h-4.5 w-4.5 text-brand-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="h-4.5 w-4.5 text-brand-400 shrink-0" />
                <a href="mailto:info@brightfuturetuition.com" className="hover:text-white transition-colors">
                  info@brightfuturetuition.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-sans">
          <p>© {currentYear} Bright Future Tuition Classes. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-rose-500" /> for brighter academic futures.
          </p>
        </div>

      </div>
    </footer>
  );
}
