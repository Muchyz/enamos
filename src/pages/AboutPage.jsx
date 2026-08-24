import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import { useRef, useState, useEffect } from "react";
import { Shield, Cpu, Users, Globe, Award, ArrowRight, Eye, TrendingUp, FileCheck, Radio, Clock, MapPin } from "lucide-react";

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

const NAVY = "#1E3A5F";
const SKY = "#2563EB";
const INK = "#0F172A";
const MONO = "ui-monospace, SFMono-Regular, 'IBM Plex Mono', Menlo, Consolas, monospace";

/* Duty-log ledger row */
function LogRow({ code, label, value, live, color, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="flex items-center gap-4 py-3 px-4 border-b" style={{ borderColor: "#e2e8f0" }}>
        <span style={{ fontFamily: MONO, color, fontSize: "11px", letterSpacing: "0.05em", fontWeight: 700 }}>{code}</span>
        <span className="flex-1 text-slate-500 text-sm">{label}</span>
        <span className="flex items-center gap-2">
          {live && <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 0 3px #22c55e33", animation: "pulseDot 1.8s ease infinite" }} />}
          <span className="text-slate-900 font-bold text-sm" style={{ fontFamily: MONO }}>{value}</span>
        </span>
      </div>
    </Reveal>
  );
}

/* Case-file credential card, one colour per entry */
function LogCard({ n, icon: Icon, label, desc, color, bg, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="p-6 h-full bg-white" style={{ border: "1px solid #e2e8f0", borderLeft: `4px solid ${color}` }}>
        <div className="flex items-center justify-between mb-4">
          <span style={{ fontFamily: MONO, fontSize: "11px", color: "#94a3b8", letterSpacing: "0.05em" }}>LOG–{String(n).padStart(2, "0")}</span>
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: bg }}>
            <Icon className="w-4.5 h-4.5" style={{ color }} />
          </div>
        </div>
        <h3 className="font-bold mb-2 text-slate-900">{label}</h3>
        <p className="text-sm leading-relaxed text-slate-500">{desc}</p>
      </div>
    </Reveal>
  );
}

export default function AboutPage() {
  const navigate = useNavigate();

  const credentials = [
    { icon: FileCheck, label: "PSRA Licensed", color: "#2563EB", bg: "#EFF6FF", desc: "Duly registered under Chapter 486 of the Laws of Kenya and licensed by the Private Security Regulatory Authority." },
    { icon: Eye, label: "Corporate Control Room", color: "#0891B2", bg: "#ECFEFF", desc: "A dedicated monitoring centre with live CCTV feeds and rapid alarm dispatch, watching over client sites around the clock." },
    { icon: Users, label: "Trained Guard Force", color: "#7C3AED", bg: "#F5F3FF", desc: "Recruits undergo structured training in patrols, searches, first aid, firefighting, and occurrence-book reporting before deployment." },
    { icon: MapPin, label: "Free Security Surveys", color: "#EA580C", bg: "#FFF7ED", desc: "Every new client site is assessed at no cost to determine guard numbers, lighting, fencing, and alarm requirements." },
    { icon: Shield, label: "Dog Patrol Services", color: "#15803D", bg: "#F0FDF4", desc: "Trained canine units supplement guard deployments for high-risk sites and after-hours patrols." },
    { icon: TrendingUp, label: "Guard Welfare Focus", color: "#DB2777", bg: "#FDF2F8", desc: "Guards receive fair pay and scheduled days off each month, supporting morale and consistent duty performance." },
  ];

  const values = [
    { icon: Users, color: "#2563EB", bg: "#EFF6FF", title: "Human Resource", desc: "We endeavor to hire and maintain highly trained and well-motivated security personnel across every deployment." },
    { icon: Shield, color: "#15803D", bg: "#F0FDF4", title: "Absolute Integrity", desc: "We deliver true value for our clients through open liaison and consultation, with zero tolerance for corruption." },
    { icon: Award, color: "#EA580C", bg: "#FFF7ED", title: "Solution Provider", desc: "We use proprietary processes and extensive experience to deliver expert solutions, improving safety and reducing risk and loss." },
    { icon: Cpu, color: "#7C3AED", bg: "#F5F3FF", title: "Innovation", desc: "We are a professional and progressive company, proactive in delivering forward-thinking security solutions to our clients." },
  ];

  return (
    <div style={{ paddingTop: "80px" }}>
      <SEO title="About Us | Enamos Security Services Nairobi Kenya" description="Learn about Enamos Security Services Limited — PSRA licensed, Nairobi-based security company with a 24/7 control room, trained guard force, and free security assessments." path="/about" />

      <style>{`
        @keyframes pulseDot { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
        @keyframes fadeUp { from { opacity:0; transform: translateY(14px); } to { opacity:1; transform: translateY(0); } }
      `}</style>

      {/* Hero — white, blue accent */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(180deg,#F8FAFC,#ffffff)" }}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2" style={{ border: "1px solid #dbeafe", background: "#EFF6FF" }}>
              <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 0 3px #22c55e33", animation: "pulseDot 1.8s ease infinite" }} />
              <span style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.1em", color: SKY }}>PSRA REGISTERED · CHAPTER 486, LAWS OF KENYA</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.95] mb-6" style={{ color: INK, letterSpacing: "-0.01em" }}>
              Protecting Kenya<br />
              <span style={{ color: SKY }}>with Purpose</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-500 max-w-xl text-lg">A Kenyan company dedicated to the provision of excellent security services since inception.</p>
          </Reveal>
        </div>

        {/* Duty log strip */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10">
          <div className="bg-white" style={{ border: "1px solid #e2e8f0" }}>
            <LogRow code="2023" label="Company incorporated" value="EST." color={SKY} delay={0} />
            <LogRow code="24/7" label="Control room manned" value="ACTIVE" color="#0891B2" live delay={0.05} />
            <LogRow code="200+" label="Client sites under coverage" value="NAIROBI · ELDORET" color="#7C3AED" delay={0.1} />
            <LogRow code="35YR" label="Combined GM industry experience" value="ON RECORD" color="#EA580C" delay={0.15} />
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: "5/4" }}>
                <img src="/team-briefing.jpg" alt="Enamos Security team on duty"
                  className="w-full h-full object-cover object-top"
                  onError={e => { e.target.style.background = "#e2e8f0"; }} />
              </div>
              <div className="absolute -bottom-8 -right-6 w-40 rounded-xl overflow-hidden" style={{ aspectRatio: "3/2", border: "4px solid #ffffff", boxShadow: "0 10px 30px -10px rgba(30,58,95,0.35)" }}>
                <img src="/vip-vehicle.jpg" alt="VIP Protection"
                  className="w-full h-full object-cover"
                  onError={e => { e.target.style.background = "#f1f5f9"; }} />
              </div>
              <div className="absolute top-4 left-4 px-3 py-2 rounded-lg" style={{ background: NAVY }}>
                <span style={{ fontFamily: MONO, fontSize: "10px", color: "#93C5FD", letterSpacing: "0.08em" }}>TEAM — ON DUTY</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <span style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.1em", color: SKY }}>WHO WE ARE</span>
              <h2 className="text-4xl md:text-5xl text-slate-900 mt-3 mb-5 leading-tight" style={{ fontFamily: "'DM Serif Display',serif" }}>
                Kenya's Most <span style={{ color: SKY }}>Trusted</span> Security Partner
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed mb-8">
                <p>ENAMOS SECURITY SERVICES LIMITED is duly incorporated and registered under the Companies Act, Chapter 486, Laws of Kenya. We are a Kenyan-based company specializing in quality, nationwide security services — from an extra pair of eyes and crowd control at a major event, to daily guarding for a business premise, backed by planning, system analysis, design and executive protection tailored to every client.</p>
                <p>Our range extends across specialized VIP protection, security consultancy, guard force training, commercial and industrial protection, private investigations, free security surveys, and dog patrol services. Top-level management combined with reliable customer service is the cornerstone of every deployment.</p>
                <p>Our Management team brings over <span className="font-semibold text-slate-700">35 years</span> of combined industry experience and standing membership in recognized security professional associations. We invest continuously in the development of our employees so the quality of our service never slips.</p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <button onClick={() => navigate("/contact")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: SKY }}>
                  Work With Us <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={() => navigate("/director")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-700 bg-white border border-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-md">
                  Director's Message <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Credentials — colour-coded occurrence-book cards */}
      <section className="py-12 md:py-24" style={{ background: "linear-gradient(180deg,#F8FAFC,#ffffff)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="mb-8 md:mb-14">
              <span style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.1em", color: SKY }}>WHAT SETS US APART</span>
              <h2 className="text-4xl md:text-5xl text-slate-900 mt-3" style={{ fontFamily: "'DM Serif Display',serif" }}>
                Built on <span style={{ color: SKY }}>Excellence</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((c, i) => (
              <LogCard key={i} n={i + 1} icon={c.icon} label={c.label} desc={c.desc} color={c.color} bg={c.bg} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="mb-8 md:mb-14">
              <span style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.1em", color: SKY }}>CORE VALUES</span>
              <h2 className="text-4xl md:text-5xl text-slate-900 mt-3" style={{ fontFamily: "'DM Serif Display',serif" }}>
                What We Stand For
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="p-8 h-full rounded-2xl" style={{ border: "1px solid #e2e8f0" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: v.bg }}>
                    <v.icon className="w-6 h-6" style={{ color: v.color }} />
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg mb-3">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
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
            <h2 className="text-4xl text-slate-900 mb-4" style={{ fontFamily: "'DM Serif Display',serif" }}>Ready to Secure Your Premises?</h2>
            <p className="text-slate-500 mb-8">Contact our team today for a free, no-obligation security assessment tailored to your specific needs.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: SKY }}>
                Get Free Assessment <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => navigate("/services")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-700 bg-white border border-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-md">
                View Our Services
              </button>
              <a href="/enamos-company-profile.pdf" target="_blank" rel="noopener noreferrer"
                onClick={(e) => {
                  const link = document.createElement("a");
                  link.href = "/enamos-company-profile.pdf";
                  link.download = "Enamos-Company-Profile.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-700 bg-white border border-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-md">
                Download Company Profile
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
