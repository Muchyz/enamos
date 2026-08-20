import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { CheckCircle, ArrowRight, ChevronRight, ArrowLeft, Phone } from "lucide-react";
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

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div style={{ paddingTop: "120px" }} className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h2>
        <button onClick={() => navigate("/services")} className="px-6 py-3 rounded-xl text-white font-semibold"
          style={{ background: "linear-gradient(135deg,#dc2626,#1e3a8a)" }}>
          Back to Services
        </button>
      </div>
    );
  }

  const others = services.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "440px" }}>
        <img src={`/${service.photo}`} alt={service.title}
          className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
          onError={e => { e.target.style.background = "#0f172a"; }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(15,23,42,0.96) 0%,rgba(15,23,42,0.72) 40%,rgba(15,23,42,0.25) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8 pb-16 md:pt-10 md:pb-20 flex flex-col justify-end" style={{ minHeight: "440px" }}>
          <button onClick={() => navigate("/services")}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium mb-10 w-fit bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </button>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-md ring-1 ring-white/20" style={{ background: `${service.color}26` }}>
              <service.icon className="w-7 h-7" style={{ color: service.color }} />
            </div>
            {service.tag && (
              <span className="inline-block text-xs font-bold tracking-wide px-3.5 py-1.5 rounded-full text-white"
                style={{ background: service.color }}>{service.tag.toUpperCase()}</span>
            )}
          </div>
          <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-2">Our Services</p>
          <h1 className="text-4xl md:text-6xl text-white leading-[1.1] max-w-3xl" style={{ fontFamily: "'DM Serif Display',serif" }}>
            {service.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Left: Description */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-[3px] rounded-full" style={{ background: service.color }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: service.color }}>Overview</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'DM Serif Display',serif" }}>
                About This Service
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8 pl-5 border-l-2" style={{ borderColor: `${service.color}30` }}>{service.longDesc || service.desc}</p>

              {service.subSystems && (
                <div className="mt-16 space-y-14">
                  <h3 className="text-2xl font-bold text-gray-900 border-l-4 pl-4" style={{borderColor:"#dc2626"}}>
                    What We Offer
                  </h3>
                  {service.subSystems.map((sys, i) => (
                    <div key={i} className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow bg-white">
                      <div className="flex items-center gap-5 px-8 py-6 border-b border-gray-100" style={{background: `${sys.color}0d`}}>
                        <span className="text-5xl font-black leading-none opacity-20" style={{color: sys.color}}>{sys.number}</span>
                        <h4 className="text-xl font-bold text-gray-900">{sys.title}</h4>
                      </div>
                      <div className="p-8 bg-white">
                        <p className="text-gray-500 mb-6">{sys.desc}</p>
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                          <div>
                            <p className="text-xs font-bold tracking-wider uppercase mb-3" style={{color: sys.color}}>What to expect</p>
                            <ul className="space-y-2">
                              {sys.bullets.map((b, j) => (
                                <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{background: sys.color}} />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className={`grid gap-3 ${sys.photos.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                            {sys.photos.map((photo, k) => (
                              <div key={k} className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5" style={{aspectRatio:"4/3"}}>
                                <img src={`/${photo}`} alt={sys.title}
                                  className="w-full h-full object-cover"
                                  onError={e => { e.target.parentElement.style.background="#e2e8f0"; e.target.style.display="none"; }} />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>

            <Reveal delay={0.1}>
              <div className="p-8 rounded-3xl mb-8 bg-white border border-gray-100 shadow-sm border-t-4" style={{ borderTopColor: service.color }}>
                <h3 className="font-bold text-gray-900 mb-5 text-lg">What's Included</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: `${service.color}18` }}>
                        <CheckCircle className="w-3.5 h-3.5" style={{ color: service.color }} />
                      </div>
                      <span className="font-medium text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="p-8 rounded-3xl" style={{ background: "linear-gradient(135deg,#0f172a,#1e1b4b)" }}>
                <h3 className="font-bold text-white mb-3">Ready to Get Started?</h3>
                <p className="text-white/60 text-sm mb-5">Contact us today for a free site assessment and custom quote. Our team responds within 2 hours.</p>
                <div className="flex gap-3 flex-wrap">
                  <button onClick={() => navigate("/contact")}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white"
                    style={{ background: service.color }}>
                    Get Free Quote <ArrowRight className="w-4 h-4" />
                  </button>
                  <a href="tel:+254722981621"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 transition-all">
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-6">
            <Reveal delay={0.05}>
              <div className="rounded-3xl overflow-hidden shadow-xl" style={{ aspectRatio: "4/3" }}>
                <img src={`/${service.photo}`} alt={service.title}
                  className="w-full h-full object-cover"
                  onError={e => { e.target.style.background = "#e2e8f0"; }} />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4">Quick Contact</h4>
                <div className="space-y-3">
                  <a href="tel:+254722981621"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Emergency Line</div>
                      <div className="text-sm font-bold text-gray-900">+254 722 981 621</div>
                    </div>
                  </a>
                  <a href="tel:+254710509780"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-blue-700" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Office Line</div>
                      <div className="text-sm font-bold text-gray-900">+254 710 509 780</div>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="p-6 rounded-3xl" style={{ background: "linear-gradient(135deg,#dc2626,#991b1b)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-white/70 text-xs font-bold tracking-widest uppercase">24/7 Control Room</span>
                </div>
                <p className="text-white text-sm font-medium">Our control room is manned around the clock for immediate response to all emergencies.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20" style={{ background: "linear-gradient(180deg,#f8fafc,#ffffff)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl font-bold text-gray-900 mb-10" style={{ fontFamily: "'DM Serif Display',serif" }}>
              Other Services
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all cursor-pointer group overflow-hidden"
                  onClick={() => navigate(`/services/${s.slug}`)}>
                    <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                      <img src={`/${s.photo}`} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={e => { e.target.style.display = "none"; }} />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(15,23,42,0.55),transparent 60%)" }} />
                    </div>
                    <div className="p-6">
                  <div className="-mt-9 ml-6 relative w-11 h-11 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md ring-1 ring-white/30" style={{ background: `${s.color}cc` }}>
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">{s.desc}</p>
                  <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: s.color }}>
                    View service <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}