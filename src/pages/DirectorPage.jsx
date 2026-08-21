import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Award } from "lucide-react";

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

export default function DirectorPage() {
  const navigate = useNavigate();
  return (
    <div style={{ paddingTop: "80px" }}>
      <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(180deg, #050b17 0%, #0a1730 45%, #102a4d 100%)" }}>
        <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #2563a8, #7dd3fc, #2563a8, transparent)" }} className="absolute top-0 left-0 right-0" />
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "#2563a8" }} />
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: "#7dd3fc" }} />

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <Reveal>
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl ring-1" style={{ aspectRatio: "3/4", borderColor: "rgba(56,189,248,0.2)" }}>
                  <img src="/director-matunda.jpg" alt="Dr. Amos Matunda"
                    className="w-full h-full object-cover object-top"
                    onError={e => { e.target.style.background = "#0a1730"; }} />
                </div>
                <div className="p-5 rounded-2xl text-center relative overflow-hidden" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(56,189,248,0.2)" }}>
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, #38bdf8, transparent)" }} />
                  <div className="text-white font-bold text-lg" style={{ fontFamily: "'DM Serif Display',serif" }}>Dr. Matunda Amos Kong'a</div>
                  <div className="text-sky-400 text-sm font-medium mt-1 tracking-wide">Chief Executive Officer</div>
                  <div className="text-white/40 text-xs mt-1 tracking-widest uppercase">ENAMOS SECURITY SERVICES LTD</div>
                  <div className="flex items-center justify-center gap-2 mt-3 p-3 rounded-xl" style={{ background: "rgba(56,189,248,0.08)" }}>
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-white/70 text-xs font-medium">Protection You Can Rely On</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="space-y-6">
                <div className="text-sky-400 opacity-50">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                <blockquote className="text-white text-2xl md:text-3xl leading-relaxed font-medium border-l-2 pl-6" style={{ fontFamily: "'DM Serif Display',serif", borderColor: "rgba(56,189,248,0.4)" }}>
                  "Security is not just about gates, alarms or patrols. Security is peace of mind — knowing that when the world sleeps, someone is watching."
                </blockquote>

                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>Hello valued clients, dedicated security officers and members of the public. My name is Dr. Amos Matunda, and I'm the Chief Executive Officer of ENAMOS SECURITY SERVICES.</p>

                  <p className="text-sky-300 font-semibold tracking-wide" style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.05rem" }}>To Our Clients:</p>
                  <p>Thank you. Your trust is our greatest asset. You invite ENAMOS SECURITY SERVICES into your homes, your businesses and your communities, and we do not take this responsibility lightly. We promise to keep upgrading our technology, our training and our response times. We remain fully committed to protecting what matters most to you.</p>

                  <p className="text-sky-300 font-semibold tracking-wide" style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.05rem" }}>To Our Frontline Heroes:</p>
                  <p>You are the heartbeat of ENAMOS SECURITY SERVICES. Day and night, in the rain and heat, you stand on the front lines and make sacrifices every single day. Many people walk past you without realising the vigilance it takes to keep them safe — I see you, and our entire company sees you. We are dedicated to supporting your welfare, your safety and your professional growth, because you carry our reputation on your shoulders.</p>

                  <p className="text-sky-300 font-semibold tracking-wide" style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.05rem" }}>To The Public:</p>
                  <p>Safety is a shared duty. ENAMOS SECURITY SERVICES believes in strong community partnerships — a secure neighbourhood requires cooperation between professional security officers, residents and local authorities. We stand ready to serve and protect the wider community, building a culture of alertness and mutual respect.</p>

                  <p className="text-white/70 leading-relaxed">At ENAMOS SECURITY SERVICES, our mission is simple: your safety is our watch. Protection You Can Rely On. We will never stop working to earn your trust, protect our people, and secure our future together. Thank you, and stay safe.</p>
                </div>

                <div className="pt-6 border-t" style={{ borderColor: "rgba(56,189,248,0.15)" }}>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      "Zero-tolerance on corruption",
                      "Ethical & responsible conduct",
                      "International partnerships",
                      "Continuous employee development",
                      "Good Corporate Governance",
                      "Respectful workplace culture",
                    ].map((c, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                        <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                        {c}
                      </div>
                    ))}
                  </div>
                  <button onClick={() => navigate("/contact")}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:-translate-y-0.5 transition-all hover:shadow-sky-500/20"
                    style={{ background: "linear-gradient(135deg,#2563a8,#0369a1)" }}>
                    Work With Us <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Light CTA */}
      <section className="py-20" style={{ background: "linear-gradient(180deg,#fafafa,#f8fafc)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="w-12 h-0.5 mx-auto mb-5" style={{ background: "linear-gradient(90deg, transparent, #0369a1, transparent)" }} />
            <h2 className="text-4xl text-gray-900 mb-4" style={{ fontFamily: "'DM Serif Display',serif" }}>
              Guided by Vision, Mission & Values
            </h2>
            <p className="text-gray-500 mb-8">
              At ENAMOS SECURITY SERVICES LIMITED, every decision — from hiring to service delivery — is guided by our leadership's commitment to excellence and ethical conduct.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => navigate("/about")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:-translate-y-0.5 transition-all"
                style={{ background: "linear-gradient(135deg,#0a1730,#2563a8)" }}>
                About Us <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-700 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
                Get a Free Quote
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
