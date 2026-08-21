import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, Zap, Shield, Globe } from "lucide-react";
import { services } from "../App";


const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z"/></svg>
);
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.75H5.67v8.59h2.67zM7 8.6a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18.34v-4.68c0-2.5-1.34-3.66-3.13-3.66a2.7 2.7 0 0 0-2.44 1.34h-.04V9.75h-2.56v8.59h2.67v-4.25c0-1.12.21-2.2 1.6-2.2 1.37 0 1.39 1.28 1.39 2.27v4.18h2.51z"/></svg>
);

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={className}
      style={{ opacity: visible ? undefined : 0, animation: visible ? `fadeUp 0.65s ease ${delay}s both` : "none" }}>
      {children}
    </div>
  );
}

const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-red-500/15 focus:border-red-400 focus:bg-white";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://formspree.io/f/mlgkdeoo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "300px" }}>
        <img src="/contact-officer.jpg" alt="Contact ENAMOS SECURITY"
          className="absolute inset-0 w-full h-full object-cover object-top"
          onError={e => { e.target.style.background = "#0f172a"; }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(15,23,42,0.92) 0%,rgba(15,23,42,0.5) 45%,rgba(15,23,42,0.15) 100%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Contact Us
          </span>
          <h1 className="text-5xl md:text-6xl text-white mb-4" style={{ fontFamily: "'DM Serif Display',serif" }}>
            Let's Build Your<br />
            <span style={{ background: "linear-gradient(135deg,#fca5a5,#bfdbfe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Security Plan
            </span>
          </h1>
          <p className="text-white/70 text-lg max-w-lg">Free site assessment and custom quote. Our team responds within 2 hours.</p>
        </div>
      </div>

      {/* Contact Form + Info */}
      <section className="py-20" style={{ background: "linear-gradient(160deg,#fef2f2,#fafafa,#eff6ff)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Form */}
            <Reveal className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg,#dc2626,#1e3a8a)" }}>
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Request a Free Assessment</h2>
                    <p className="text-sm text-gray-400 mt-0.5">We respond within 2 hours</p>
                  </div>
                </div>

                {sent && (
                  <div className="mb-5 flex flex-col items-center gap-4 p-8 rounded-2xl text-center" style={{background:"linear-gradient(135deg,#f0fdf4,#dcfce7)",border:"2px solid #86efac"}}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{background:"linear-gradient(135deg,#16a34a,#15803d)"}}>
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-xl font-bold text-green-800">Message Sent!</div>
                    <div className="text-green-700 text-sm">Thank you for reaching out. Our team will contact you within 2 hours.</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-green-600 text-xs font-semibold">We typically respond faster during business hours</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Full Name *</label>
                      <input type="text" placeholder="Your full name" value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })} required
                        className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Email *</label>
                      <input type="email" placeholder="you@example.com" value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })} required
                        className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Phone</label>
                      <input type="tel" placeholder="+254 7XX XXX XXX" value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Service Required</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                      className={inputClass + " text-gray-700"}>
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Message</label>
                    <textarea rows={5} placeholder="Tell us about your security requirements..."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className={inputClass + " resize-none"} />
                  </div>
                  <button type="submit"
                    className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all text-base"
                    style={{ background: "linear-gradient(135deg,#dc2626,#1e3a8a)" }}>
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </Reveal>

            {/* Info Sidebar */}
            <Reveal delay={0.15} className="lg:col-span-2 space-y-5 lg:sticky lg:top-24">
              <div className="rounded-3xl overflow-hidden shadow-xl" style={{ height: "200px" }}>
                <img src="/officers-squad.jpg" alt="Enamos team"
                  className="w-full h-full object-cover object-top"
                  onError={e => { e.target.style.background = "#e2e8f0"; }} />
              </div>

              <div className="relative overflow-hidden rounded-3xl p-7 space-y-4" style={{ background: "linear-gradient(180deg, #050b17 0%, #0a1730 45%, #102a4d 100%)" }}>
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, #38bdf8, transparent)" }} />
                <h3 className="text-white font-bold text-base tracking-wide">Get In Touch</h3>
                {[
                  { icon: Phone, label: "Call Us", lines: [{ text: "+254 722 981 621", href: "tel:+254722981621" }, { text: "+254 710 509 780", href: "tel:+254710509780" }] },
                  { icon: Mail, label: "Email Us", lines: [{ text: "enamossecsolutions@gmail.com", href: "mailto:enamossecsolutions@gmail.com" }, { text: "info@enamossecurity.co.ke", href: "mailto:info@enamossecurity.co.ke" }] },
                  { icon: MapPin, label: "Nairobi HQ", lines: [{ text: "Mlolongo, End of Expressway, Opp. Total Petrol Station", href: null }, { text: "P.O. Box 132, City Square, Nairobi, Kenya", href: null }] },
                  { icon: MapPin, label: "Eldoret Branch", lines: [{ text: "West Indies Building, 1st Floor, Next to Columbus Hotel, Opp. Kheits Wholesale", href: null }] },
                  { icon: Globe, label: "Website", lines: [{ text: "www.enamossecurity.co.ke", href: "https://www.enamossecurity.co.ke" }] },
                ].map((c, i) => (
                  <div key={i} className="group flex items-start gap-3 p-3 rounded-xl transition-all" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(56,189,248,0.12)" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}>
                      <c.icon className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs font-bold tracking-widest uppercase mb-0.5">{c.label}</div>
                      {c.lines.map(l => l.href
                        ? <a key={l.text} href={l.href} className="text-white/85 text-xs font-medium hover:text-sky-300 transition-colors block">{l.text}</a>
                        : <div key={l.text} className="text-white/85 text-xs font-medium">{l.text}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl p-6 relative overflow-hidden shadow-lg" style={{ background: "linear-gradient(135deg,#dc2626,#7f1d1d)" }}>
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-15 bg-white" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full opacity-10 bg-white" />
                <div className="relative flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-white/80 text-xs font-bold tracking-widest uppercase">Emergency Line</span>
                </div>
                <a href="tel:+254722981621" className="relative text-4xl font-black text-white hover:opacity-80 transition-opacity block">0722 981 621</a>
                <div className="relative text-white/60 text-xs mt-1">Available 24 hours, 7 days a week</div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Zap, label: "2hr Response" },
                  { icon: Shield, label: "Free Quote" },
                  { icon: CheckCircle, label: "No Obligation" },
                ].map((t, i) => (
                  <div key={i} className="p-4 rounded-2xl text-center bg-white border border-gray-100 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
                    <t.icon className="w-5 h-5 mx-auto mb-1.5 text-red-500" />
                    <div className="text-xs font-semibold text-gray-700">{t.label}</div>
                  </div>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-3xl p-6" style={{ background: "linear-gradient(180deg, #050b17 0%, #0a1730 45%, #102a4d 100%)" }}>
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, #38bdf8, transparent)" }} />
                <h3 className="text-white font-bold text-base tracking-wide mb-4 text-center">Follow Us</h3>
                <div className="flex items-center justify-center gap-3">
                  <a href="https://www.facebook.com/profile.php?id=61591166723204" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: "#1877f2" }} title="Facebook">
                    <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/254710509780" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: "linear-gradient(135deg,#25d366,#128c7e)" }} title="WhatsApp">
                    <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a href="mailto:info@enamos.co.ke"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: "linear-gradient(135deg,#2563a8,#0f172a)" }} title="Email">
                    <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                  <a href="tel:+254710509780"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: "linear-gradient(135deg,#0ea5e9,#0369a1)" }} title="Call">
                    <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
