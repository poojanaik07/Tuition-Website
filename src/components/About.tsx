import { motion } from "motion/react";
import { CheckCircle2, Award, UserCheck, DollarSign, Heart, FileSpreadsheet } from "lucide-react";

export default function About() {
  const whyChooseUs = [
    {
      id: "why-teachers",
      icon: Award,
      title: "Qualified Teachers",
      description: "Our teachers are highly certified subject-matter specialists with years of school-level pedagogy experience.",
    },
    {
      id: "why-attention",
      icon: UserCheck,
      title: "Individual Attention",
      description: "With low student-to-teacher ratios, we notice when a student is struggling and instantly pivot to address it.",
    },
    {
      id: "why-fees",
      icon: DollarSign,
      title: "Affordable Fees",
      description: "We believe premium tutoring should be financially accessible to every middle and high-school family.",
    },
    {
      id: "why-env",
      icon: Heart,
      title: "Friendly Learning Environment",
      description: "A warm, pressure-free classroom climate that rewards curiosity and turns anxiety into positive motivation.",
    },
    {
      id: "why-tests",
      icon: FileSpreadsheet,
      title: "Regular Practice Tests",
      description: "Comprehensive mock exams designed strictly on current school boards and curriculum patterns.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Intro Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-widest rounded-md">
              Who We Are
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-snug">
              Shaping Minds & Empowering Success Since Day One
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-slate-500 leading-relaxed font-sans">
            <p className="text-base">
              At <strong className="text-slate-900 font-semibold">Bright Future Tuition Classes</strong>, we believe every child possesses unique talents and capacities to excel. We bridge the academic gaps by offering precise instruction, comprehensive concept breakdowns, and dedicated confidence-building strategies.
            </p>
            
            {/* Mission Statement Banner */}
            <div className="bg-brand-50/70 p-6 rounded-2xl border border-brand-100 flex gap-4">
              <div className="mt-1 text-brand-600 shrink-0">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-900 mb-1">Our Mission</h4>
                <p className="text-slate-600 text-sm">
                  "Our mission is to help every student build confidence, improve academic performance, and achieve their educational goals through personalized guidance."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Segment */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-widest rounded-md mb-3">
              Our Key Strengths
            </div>
            <h3 className="font-display font-black text-3xl text-slate-900 tracking-tight">
              Why Choose Us?
            </h3>
            <p className="text-sm text-slate-500 mt-2 font-sans">
              Discover the standard of quality education and comprehensive support we promise in every session.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  id={item.id}
                  key={item.id}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start hover:border-brand-200 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mb-4 shrink-0">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    {item.description}
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
