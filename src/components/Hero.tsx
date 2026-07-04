import { motion } from "motion/react";
import { Award, Users, ClipboardCheck, ArrowRight, Phone } from "lucide-react";

const tuitionHeroImage = "/src/assets/images/tuition_hero_1783181772325.jpg";

interface HeroProps {
  onNavClick: (section: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  const features = [
    {
      id: "feat-teachers",
      icon: Award,
      title: "Experienced Teachers",
      description: "Learn from subject experts who care and simplify complex concepts.",
      color: "bg-brand-100 text-brand-600",
    },
    {
      id: "feat-batch",
      icon: Users,
      title: "Small Batch Size",
      description: "We limit batch sizes to ensure personalized focus on every student.",
      color: "bg-green-100 text-green-600",
    },
    {
      id: "feat-tests",
      icon: ClipboardCheck,
      title: "Regular Tests",
      description: "Consistent tracking, assessment, and comprehensive monthly mock exams.",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section id="home" className="pt-28 lg:pt-36 pb-20 bg-gradient-to-b from-brand-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-widest rounded-md">
              Academic Excellence
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-slate-900 leading-[1.1] tracking-tight">
              Learn Today,<br />
              <span className="text-brand-600">Lead Tomorrow</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Providing quality tuition classes for students from <span className="font-semibold text-slate-700">Class 5 to 10</span> with experienced teachers, individual attention, and regular assessments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button
                id="hero-btn-register"
                onClick={() => onNavClick("register")}
                className="bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer active:scale-95"
              >
                Register Now
              </button>
              <button
                id="hero-btn-contact"
                onClick={() => onNavClick("contact")}
                className="border-2 border-slate-200 text-slate-700 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 hover:-translate-y-0.5 transition-all cursor-pointer active:scale-95"
              >
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Illustration Container */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md lg:max-w-full">
              {/* Decorative Background Glows */}
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-300 rounded-full blur-3xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-cyan-300 rounded-full blur-3xl opacity-25 -z-10"></div>
              
              <div className="bg-white p-3 rounded-2xl shadow-xl border border-slate-100/50">
                <img
                  id="hero-illustration"
                  src={tuitionHeroImage}
                  alt="Students studying illustration"
                  referrerPolicy="no-referrer"
                  className="rounded-xl w-full h-auto object-cover aspect-[4/3] shadow-inner"
                />
              </div>

              {/* Float Widget */}
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-3.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce duration-1000">
                <div className="bg-amber-100 text-amber-600 p-2 rounded-lg">
                  <span className="text-xl font-bold">★</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium font-sans">Top Rated Classes</p>
                  <p className="text-sm font-bold text-slate-800">Class 5 to 10</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Feature Cards Grid */}
        <div className="mt-20 lg:mt-24">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <motion.div
                  id={feat.id}
                  key={feat.id}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-brand-200 transition-all duration-300 flex flex-col items-start text-left space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 shrink-0 ${feat.color}`}>
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 font-display">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    {feat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
