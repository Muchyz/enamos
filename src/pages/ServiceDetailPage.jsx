import { useNavigate, useParams } from "react-router-dom";
import SEO from "../components/SEO";
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
      <SEO title={`${service.title} | Enamos Security Services Kenya`} description={service.description || `Professional ${service.title} from Enamos Security Services, Kenya's trusted security company.`} path={`/services/${service.slug}`} />
      {/* Hero */}
      <div className="px-4 pt-4 md:px-6 md:pt-6">
        <div className="relative overflow-hidden rounded-3xl" style={{ minHeight: "360px" }}>
          <img src={`/${service.photo}`} alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }}
            onError={e => { e.target.style.background = "#0f172a"; }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(15,23,42,0.75) 0%,rgba(15,23,42,0.55) 40%,rgba(15,23,42,0.92) 100%)" }} />
          <div className="absolute inset-0" style={{ background: `${service.color}22`, mixBlendMode: "multiply" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8 pb-10 flex flex-col justify-end" style={{ minHeight: "360px" }}>
          <button onClick={() => navigate("/services")}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-6 w-fit transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </button>
          <div className="flex items-center gap-3 mb-3 flex-nowrap overflow-hidden">
            <div className="w-6 h-[2px] shrink-0" style={{ background: service.color }} />
            <p className="text-white/60 text-xs font-semibold tracking-[0.15em] uppercase whitespace-nowrap">Our Services</p>
            {service.tag && (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase text-white px-2.5 py-1 rounded-full ml-1 whitespace-nowrap" style={{ background: service.color }}>
                {service.tag}
              </span>
            )}
          </div>
          <h1 className="leading-[1.15] max-w-3xl mb-1 whitespace-nowrap sm:whitespace-normal sm:text-4xl md:text-6xl" style={{ fontFamily: "'DM Serif Display',serif", color: "#93c5fd", fontSize: "clamp(20px, 6.5vw, 40px)" }}>
            {service.title}
          </h1>
          </div>
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
                <div className="mt-16 space-y-8">
                  <h3 className="text-2xl font-bold text-gray-900 border-l-4 pl-4" style={{borderColor:"#dc2626"}}>
                    What We Offer
                  </h3>
                  {service.subSystems.map((sys, i) => (
                    <div key={i} className="rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                      <div className="flex items-center gap-4 px-8 py-7" style={{ background: `linear-gradient(135deg, ${sys.color}28 0%, ${sys.color}12 100%)` }}>
                        <span className="text-4xl font-black shrink-0" style={{ color: sys.color }}>{sys.number}</span>
                        <h4 className="text-2xl font-bold text-gray-900 leading-tight">{sys.title}</h4>
                      </div>
                      <div className="p-8 bg-white">
                        <p className="text-gray-500 text-[15px] leading-relaxed mb-6">{sys.desc}</p>
                        <p className="text-xs font-bold tracking-wider uppercase mb-3" style={{ color: sys.color }}>What to expect</p>
                        <ul className="space-y-2.5 mb-6">
                          {sys.bullets.map((b, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-[15px] text-gray-700">
                              <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ background: sys.color }} />
                              {b}
                            </li>
                          ))}
                        </ul>
                        {sys.photos && sys.photos.length > 0 && (
                          <div className={`grid gap-3 ${sys.photos.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                            {sys.photos.map((photo, k) => (
                              <div key={k} className="rounded-xl overflow-hidden" style={{aspectRatio:"4/3"}}>
                                <img src={`/${photo}`} alt={sys.title}
                                  className="w-full h-full object-cover"
                                  onError={e => { e.target.closest('div').style.display = "none"; }} />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>

            <Reveal delay={0.1}>
                <div className="border border-gray-200 rounded-2xl mb-8">
                  <div className="px-8 py-5 border-b border-gray-200 flex items-center gap-2">
                    <div className="w-6 h-[2px]" style={{ background: service.color }} />
                    <h3 className="text-lg" style={{ fontFamily: "'DM Serif Display',serif" }}>What's Included</h3>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 px-8 py-6">
                    {service.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: service.color }} />
                        <span className="text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

            <Reveal delay={0.15}>
                <div className="p-9 rounded-2xl" style={{ background: "#0f172a" }}>
                  <div className="w-8 h-[2px] mb-5" style={{ background: "#1e3a8a" }} />
                  <h3 className="text-white text-[26px] leading-tight mb-3" style={{ fontFamily: "'DM Serif Display',serif" }}>
                    Ready to get started?
                  </h3>
                  <p className="text-white/50 text-sm mb-8 leading-relaxed">A member of our team will conduct a free site assessment and provide a custom quote within two hours.</p>
                  <button onClick={() => navigate("/contact")}
                    className="w-full text-center py-4 rounded-lg font-semibold text-white text-sm tracking-wide border border-white/20 hover:bg-white/5 transition-colors mb-3">
                    Request a Quote
                  </button>
                  <a href="tel:+254722981621"
                    className="block w-full text-center py-4 rounded-lg font-semibold text-sm tracking-wide"
                    style={{ background: "#1e3a8a", color: "#ffffff" }}>
                    Call +254 722 981 621
                  </a>
                </div>
              </Reveal>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-7 py-4" style={{ background: "#1e3a8a" }}>
                  <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/80">Control Room</span>
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Active 24/7
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <a href="tel:+254722981621" className="px-4 py-6 border-r border-gray-200 active:bg-gray-50 transition-colors">
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-400 block mb-2">Emergency</span>
                    <span className="text-[15px] text-gray-900 tabular-nums block whitespace-nowrap" style={{ fontFamily: "'DM Serif Display',serif" }}>+254 722 981 621</span>
                  </a>
                  <a href="tel:+254710509780" className="px-4 py-6 active:bg-gray-50 transition-colors">
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-400 block mb-2">Office</span>
                    <span className="text-[15px] text-gray-900 tabular-nums block whitespace-nowrap" style={{ fontFamily: "'DM Serif Display',serif" }}>+254 710 509 780</span>
                  </a>
                </div>
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