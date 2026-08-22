import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { services } from "../App";

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

export default function ServicesPage() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "320px", background: "linear-gradient(160deg,#0f1f45 0%,#1e3a8a 45%,#2563eb 100%)" }}>
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 85% 75%, rgba(96,165,250,0.15) 0%, transparent 45%)"
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "36px 36px"
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-5 border border-white/20 backdrop-blur-sm">
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#60a5fa" }} />
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Proven Track Record<br />
            <span style={{ color: "#93c5fd" }}>Across the Full Spectrum</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            We have the skills, experience and commitment required to be your preferred partner, service provider and supplier.
          </p>
        </div>
      </div>

      {/* Industry Coverage */}
      <section className="py-16" style={{ background: "linear-gradient(180deg,#f8fafc 0%,#eff6ff 100%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#2563eb" }}>
              Industries We Serve
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#0f172a" }}>
              Trusted Across Every Sector
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {["Residential & Estates","Corporate","Commercial & Industrial","Oil & Gas","Banking & Finance","Health & Education","Government Agencies","Ports & Airports","Diplomatic","Events","Executive Protection","Access Control","CCTV & Surveillance","Electric Fencing","Alarm Systems","Retail Security","Door Supervision","Fingerprint & Biometrics"].map((tag, i) => (
              <div key={i} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white border transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ borderColor: "#dbeafe" }}>
                <span style={{
                  width: "8px", height: "8px", borderRadius: "50%", flexShrink: 0,
                  background: "linear-gradient(135deg,#2563eb,#1e40af)"
                }} />
                <span className="text-sm font-semibold" style={{ color: "#1e3a8a" }}>
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24" style={{ background: "linear-gradient(180deg,#fafafa,#f8fafc)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div
                  className="relative rounded-3xl border border-gray-100 cursor-pointer overflow-hidden"
                  style={{
                    background: active === i ? s.gradient : "#ffffff",
                    transition: "all 0.3s ease",
                    transform: active === i ? "translateY(-6px)" : "translateY(0)",
                    boxShadow: active === i ? "0 24px 48px -12px rgba(0,0,0,0.14)" : "none"
                  }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => navigate(`/services/${s.slug}`)}>
                  {s.tag && (
                    <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white z-10"
                      style={{ background: s.color }}>{s.tag}</span>
                  )}
                  <div className="h-44 overflow-hidden">
                    <img src={`/${s.photo}`} alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                      style={{ transform: active === i ? "scale(1.05)" : "scale(1)" }}
                      onError={e => { e.target.parentElement.style.background = s.bg; e.target.style.display = "none"; }} />
                  </div>
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm -mt-9 relative z-10" style={{ background: s.bg }}>
                      <s.icon className="w-7 h-7" style={{ color: s.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: s.color }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: s.color }}>
                      Learn more <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                  {active === i && <div className="h-1 w-full" style={{ background: s.color }} />}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-0">
        <div className="relative overflow-hidden" style={{ height: "280px" }}>
          <img src="/supervision-officer.jpg" alt="Security patrol"
            className="w-full h-full object-cover"
            onError={e => { e.target.style.background = "#0f172a"; }} />
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,rgba(220,38,38,0.85),rgba(30,58,138,0.80))" }}>
            <div className="text-center text-white px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "'DM Serif Display',serif" }}>
                Every Package Custom-Designed for You
              </h2>
              <p className="text-white/80 max-w-lg mx-auto mb-6 text-sm">
                Our security packages are tailored to your specific needs and financial capabilities — no one-size-fits-all.
              </p>
              <button onClick={() => navigate("/contact")}
                className="px-8 py-3 rounded-xl font-semibold text-red-700 bg-white hover:-translate-y-0.5 transition-transform shadow-lg">
                Get a Free Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}