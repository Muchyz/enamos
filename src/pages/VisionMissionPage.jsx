import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { Shield, Users, Award, Eye, Target, CheckCircle, ArrowRight, TrendingUp } from "lucide-react";

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

export default function VisionMissionPage() {
  const navigate = useNavigate();
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "300px", background: "linear-gradient(135deg,#1e3a8a,#0f172a)" }}>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 border border-white/20">Our Foundation</span>
          <h1 className="text-5xl md:text-6xl text-white mb-4" style={{ fontFamily: "'DM Serif Display',serif" }}>
            Vision, Mission<br />
            <span style={{ background: "linear-gradient(135deg,#fca5a5,#93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              & Values
            </span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">The principles that drive every decision, every deployment, every interaction at ENAMOS SECURITY SERVICES LIMITED.</p>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 grid md:grid-cols-2 gap-10 md:gap-14">
            <Reveal>
              <div className="relative pl-8" style={{ borderLeft: "4px solid #dc2626" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6" style={{ color: "#dc2626" }} />
                  <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#dc2626" }}>Our Vision</span>
                </div>
                <p className="text-2xl md:text-3xl text-gray-900 leading-snug" style={{ fontFamily: "'DM Serif Display',serif" }}>
                  Enamos Security Services' vision is to be the security company of choice in and outside Kenya by offering the best services tailor-made to suit individual customer needs.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative pl-8" style={{ borderLeft: "4px solid #1e3a8a" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6" style={{ color: "#1e3a8a" }} />
                  <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#1e3a8a" }}>Our Mission</span>
                </div>
                <p className="text-2xl md:text-3xl text-gray-900 leading-snug" style={{ fontFamily: "'DM Serif Display',serif" }}>
                  Enamos Security Services' mission is to exceed our clients' specific and customized security needs by delivering the highest quality of professional private security services based on trust and confidence.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Mission Statement Banner */}
          <Reveal delay={0.12}>
            <div className="rounded-3xl overflow-hidden relative shadow-2xl mb-16" style={{ minHeight: "260px" }}>
              <img src="/mission-team.jpg" alt="Enamos Mission"
                className="absolute inset-0 w-full h-full object-cover"
                onError={e => { e.target.style.background = "#1e293b"; }} />
              <div className="relative z-10 p-12 md:p-16" style={{ background: "linear-gradient(160deg,rgba(15,31,69,0.90) 0%,rgba(30,58,138,0.85) 45%,rgba(37,99,235,0.82) 100%)" }}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5" style={{ fontFamily: "'DM Serif Display',serif" }}>Mission Statement</h2>
                <p className="text-white/90 text-xl leading-relaxed mb-4 max-w-3xl">
                  ENAMOS SECURITY is committed to providing exceptional services by delivering personalized, high-quality and cost efficient solutions to meet the needs of our clients.
                </p>
                <p className="text-white/75 leading-relaxed max-w-3xl">
                  We strive to exceed the requests of our clients by going above and beyond what is asked to ensure that every detail is to your requirements.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Values */}
          <Reveal delay={0.14}>
            <div className="relative overflow-hidden text-center mb-10 rounded-3xl" style={{ padding: "32px 24px", background: "linear-gradient(160deg,#0f1f45 0%,#1e3a8a 45%,#2563eb 100%)" }}>
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 85% 75%, rgba(96,165,250,0.15) 0%, transparent 45%)"
              }} />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-4 border border-white/20 backdrop-blur-sm">
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#60a5fa" }} />
                  Core Values
                </span>
                <h2 className="text-4xl text-white" style={{ fontFamily: "'DM Serif Display',serif" }}>What Guides Us Daily</h2>
              </div>
            </div>
          </Reveal>

          <div className="relative rounded-3xl p-6 md:p-8 mb-16 overflow-hidden" style={{ background: "linear-gradient(180deg,#eff6ff 0%,#f8fafc 45%,#ffffff 100%)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "radial-gradient(circle at 15% 10%, rgba(37,99,235,0.08) 0%, transparent 40%), radial-gradient(circle at 90% 30%, rgba(96,165,250,0.10) 0%, transparent 45%)"
            }} />
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {[
                { icon: Users, gradient: "linear-gradient(135deg,#2563eb,#1e3a8a)", title: "Human Resource", desc: "We endeavor to hire and maintain highly trained and well-motivated human resource." },
                { icon: Shield, gradient: "linear-gradient(135deg,#dc2626,#f59e0b)", title: "Absolute Integrity", desc: "We deliver true value of our esteemed clients' money through open liaison and consultation." },
                { icon: Award, gradient: "linear-gradient(135deg,#15803d,#22c55e)", title: "Solution Provider", desc: "We use proprietary process and extensive experience to deliver expert solutions in each product area, ensuring improved management, increased safety and demonstrable risk and loss reduction." },
                { icon: TrendingUp, gradient: "linear-gradient(135deg,#7c3aed,#a78bfa)", title: "Innovation", desc: "We are a professional and progressive company with staff who work hard and proactively in the delivery of security solutions to our esteemed clients." },
              ].map((v, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="p-8 rounded-3xl text-center group h-full flex flex-col items-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.55)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.9)",
                      boxShadow: "0 8px 32px rgba(30,58,138,0.10)"
                    }}>
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform" style={{ background: v.gradient }}>
                      <v.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Why Us */}
          <Reveal delay={0.15}>
            <div className="grid md:grid-cols-3 gap-6 p-10 rounded-3xl" style={{ background: "linear-gradient(135deg,#0f172a,#1e1b4b)" }}>
              <div className="md:col-span-3 mb-2">
                <h3 className="text-2xl font-bold text-white mb-2">Why Choose Enamos?</h3>
                <p className="text-white/50 text-sm">Our security packages are designed to cater for clients with respect to their specific needs and financial capabilities.</p>
              </div>
              {[
                { icon: Users, color: "#fca5a5", title: "Independent & Unbiased", desc: "As an independent firm, we offer unbiased, objective and impartial advice. We make recommendations right for your business — at your budget." },
                { icon: Shield, color: "#93c5fd", title: "Full Risk Assessment", desc: "We take the time to understand your needs and your environment as well as a full risk assessment to ensure our officers fit your requirements." },
                { icon: TrendingUp, color: "#6ee7b7", title: "Above-Average Training", desc: "We implement stringent training for our entire force over and above the average, ensuring a disciplined, well-prepared security workforce." },
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <p.icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold mb-1">{p.title}</div>
                    <div className="text-white/50 text-xs leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(160deg,#fef2f2,#fafafa,#eff6ff)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl text-gray-900 mb-4" style={{ fontFamily: "'DM Serif Display',serif" }}>Driven by Values, Delivered with Excellence</h2>
            <p className="text-gray-500 mb-8">Experience security services built on a foundation of purpose, professionalism, and genuine care for your safety.</p>
            <button onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              style={{ background: "linear-gradient(135deg,#dc2626,#1e3a8a)" }}>
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}