import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { Shield, Cpu, Users, Globe, Award, ArrowRight, CheckCircle, Eye, Target, TrendingUp, BadgeCheck, FileCheck, BookOpen } from "lucide-react";

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

export default function AboutPage() {
  const navigate = useNavigate();
  const points = [
    { icon: FileCheck, color: "#dc2626", bg: "#fef2f2", label: "PSRA Licensed", desc: "Duly registered under Chapter 486 of the Laws of Kenya and licensed by the Private Security Regulatory Authority." },
    { icon: Eye, color: "#1e3a8a", bg: "#eff6ff", label: "Corporate Control Room", desc: "A dedicated monitoring centre with live CCTV feeds and rapid alarm dispatch, watching over client sites around the clock." },
    { icon: Users, color: "#15803d", bg: "#f0fdf4", label: "Trained Guard Force", desc: "Recruits undergo structured training in patrols, searches, first aid, firefighting, and occurrence-book reporting before deployment." },
    { icon: Globe, color: "#b45309", bg: "#fffbeb", label: "Free Security Surveys", desc: "Every new client site is assessed at no cost to determine guard numbers, lighting, fencing, and alarm requirements." },
    { icon: Award, color: "#7c3aed", bg: "#f5f3ff", label: "Dog Patrol Services", desc: "Trained canine units supplement guard deployments for high-risk sites and after-hours patrols." },
    { icon: TrendingUp, color: "#0891b2", bg: "#ecfeff", label: "Guard Welfare Focus", desc: "Guards receive fair pay and scheduled days off each month, supporting morale and consistent duty performance." },
  ];

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero Banner */}
      <div className="relative overflow-hidden" style={{ minHeight: "320px", background: "linear-gradient(135deg,#0f172a,#1e1b4b)" }}>
        <img src="/officers-squad.jpg" alt="ENAMOS SECURITY Team"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          onError={e => { e.target.style.display = "none"; }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 border border-white/20">
            About ENAMOS SECURITY
          </span>
          <h1 className="text-5xl md:text-6xl text-white mb-4" style={{ fontFamily: "'DM Serif Display',serif" }}>
            Protecting Kenya<br />
            <span style={{ background: "linear-gradient(135deg,#fca5a5,#93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              with Purpose
            </span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">A Kenyan company dedicated to the provision of excellent security services since inception.</p>
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "5/4" }}>
                <img src="/director-matunda.jpg" alt="Dr. Amos Matunda - Director"
                  className="w-full h-full object-cover object-top"
                  onError={e => { e.target.style.background = "#e2e8f0"; }} />
              </div>
              <div className="absolute top-4 left-4 z-10 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                  <Award className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Licensed</div>
                  <div className="text-xs text-gray-400">PSRA Registered</div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-6 w-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white" style={{ aspectRatio: "3/2" }}>
                <img src="/vip-vehicle.jpg" alt="VIP Protection"
                  className="w-full h-full object-cover"
                  onError={e => { e.target.style.background = "#f1f5f9"; }} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <span className="inline-block bg-red-50 text-red-700 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">Who We Are</span>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-5 leading-tight" style={{ fontFamily: "'DM Serif Display',serif" }}>
                Kenya's Most <span style={{ color: "#dc2626" }}>Trusted</span> Security Partner
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed mb-8">
                <p>ENAMOS SECURITY SERVICES LIMITED is duly incorporated and registered under the Companies Act, Chapter 486, Laws of Kenya. We are a Kenyan-based company specializing in quality, nationwide security services. Whether it is an extra pair of eyes, an imposing presence, crowd control at a major event, or daily guarding for a business premise, ENAMOS SECURITY SERVICES delivers a complete range of planning, system analysis, design and executive protection services tailored to every client.</p>
                <p>We pride ourselves on providing well-trained security personnel for every private security and protection need. Top-level management, combined with friendly and reliable customer service, is the cornerstone of the guarding services and private protection we deliver to every client. Our range extends across specialized VIP protection, security consultancy, guard force training programs, commercial and industrial protection, private investigations, free security surveys, and dog patrol services.</p>
                <p>Our mission is to exceed the specific and customized security needs of our clients by delivering the highest quality of professional private security services, built on trust and confidence. Our vision is to become the security company of choice in and outside Kenya, offering services tailor-made to suit individual client needs. Our Management team is complemented by reputable, experienced professionals, with over <span className="font-semibold text-gray-700">35 years</span> of combined industry experience and standing membership in recognized security professional associations.</p>
                <p>We will never compromise on the quality of our service as we keep on innovating to bring the best one can hope for. This is also why we invest significantly in the continuous development of our employees.</p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <button onClick={() => navigate("/contact")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  style={{ background: "linear-gradient(135deg,#dc2626,#1e3a8a)" }}>
                  Work With Us <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={() => navigate("/director")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-gray-700 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  Director's Message <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-24" style={{ background: "linear-gradient(180deg,#f8fafc,#ffffff)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block bg-red-50 text-red-700 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">What Sets Us Apart</span>
              <h2 className="text-4xl md:text-5xl text-gray-900" style={{ fontFamily: "'DM Serif Display',serif" }}>
                Built on <span style={{ color: "#dc2626" }}>Excellence</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.map((p, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all duration-300 group" style={{ cursor: "default" }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: p.bg }}>
                    <p.icon className="w-6 h-6" style={{ color: p.color }} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{p.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24" style={{ background: "linear-gradient(135deg,#0f172a,#1e1b4b)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block bg-white/10 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 border border-white/20">Core Values</span>
              <h2 className="text-4xl md:text-5xl text-white" style={{ fontFamily: "'DM Serif Display',serif" }}>
                What We <span style={{ background: "linear-gradient(135deg,#fca5a5,#93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Stand For</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, color: "#fca5a5", title: "Human Resource", desc: "We endeavor to hire and maintain highly trained and well-motivated security personnel across every deployment." },
              { icon: Shield, color: "#93c5fd", title: "Absolute Integrity", desc: "We deliver true value for our clients through open liaison and consultation, with zero tolerance for corruption." },
                { icon: Award, color: "#6ee7b7", title: "Solution Provider", desc: "We use proprietary processes and extensive experience to deliver expert solutions, improving safety and reducing risk and loss." },
              { icon: Cpu, color: "#fcd34d", title: "Innovation", desc: "We are a professional and progressive company, proactive in delivering forward-thinking security solutions to our clients." },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl text-center" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <v.icon className="w-8 h-8" style={{ color: v.color }} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl text-gray-900 mb-4" style={{ fontFamily: "'DM Serif Display',serif" }}>Ready to Secure Your Premises?</h2>
            <p className="text-gray-500 mb-8">Contact our team today for a free, no-obligation security assessment tailored to your specific needs.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                style={{ background: "linear-gradient(135deg,#dc2626,#1e3a8a)" }}>
                Get Free Assessment <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => navigate("/services")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-700 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
                View Our Services
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}