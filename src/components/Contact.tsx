import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const contactDetails = [
    {
      id: "contact-addr",
      icon: MapPin,
      title: "Our Address",
      value: "Bright Future Towers, 4th Cross, Science City Road, Sector 3, Bengaluru, Karnataka - 560034",
    },
    {
      id: "contact-phone",
      icon: Phone,
      title: "Phone Number",
      value: "+91 98765 43210 / +91 80 1234 5678",
      link: "tel:+919876543210",
    },
    {
      id: "contact-email",
      icon: Mail,
      title: "Email Address",
      value: "info@brightfuturetuition.com",
      link: "mailto:info@brightfuturetuition.com",
    },
    {
      id: "contact-hours",
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sat: 3:00 PM - 8:30 PM (Sunday: Closed)",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-24 bg-brand-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-widest rounded-md mb-3">
            Get In Touch
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Contact Information
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-sans">
            Have questions about admission, fees, or batch timings? Reach out to us directly or visit our center.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Cards Side */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Contact Info Widget - Blue high-contrast card from the Artistic Flair design */}
            <div className="bg-brand-600 text-white rounded-3xl p-6 shadow-xl shadow-brand-200/50 flex-1 flex flex-col justify-center">
              <h3 className="font-display font-bold text-lg mb-4">
                Visit Our Center
              </h3>
              <div className="space-y-4">
                {contactDetails.map((detail) => {
                  const IconComp = detail.icon;
                  return (
                    <div id={detail.id} key={detail.id} className="flex gap-3 items-start">
                      <div className="text-brand-100 shrink-0 mt-0.5">
                        <IconComp className="h-5 w-5 opacity-90" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[10px] font-bold text-brand-200 uppercase tracking-wider">
                          {detail.title}
                        </h4>
                        {detail.link ? (
                          <a
                            href={detail.link}
                            className="text-sm font-semibold text-white hover:underline transition-all block mt-0.5"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-white mt-0.5">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Support Highlight Box */}
            <div className="bg-brand-950 text-white p-6 rounded-2xl flex flex-col justify-center relative overflow-hidden">
              <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-32 h-32 bg-brand-600 rounded-full blur-2xl opacity-40"></div>
              <h4 className="font-display font-bold text-base mb-1 z-10">Parent-Teacher Desk</h4>
              <p className="text-xs text-brand-200 leading-relaxed font-sans z-10">
                We organize routine parent-teacher interactions (PTI) every alternative month to share actionable academic insights and support your child's milestones.
              </p>
            </div>
          </div>

          {/* Embedded Google Map Side */}
          <div className="lg:col-span-7">
            <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm h-[380px] lg:h-full min-h-[350px]">
              <div className="relative w-full h-full bg-slate-100 rounded-xl overflow-hidden">
                <iframe
                  id="google-map-iframe"
                  title="Bright Future Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9262243454376!2d77.59254061534726!3d12.976451618304918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1672c1012c5f%3A0xf603f0b2405615d!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1677300000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0 rounded-xl"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
