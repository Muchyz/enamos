import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Menu, X, ChevronDown, Shield, Radio, Users, Eye, MapPin, Award,
  FileCheck, TrendingUp, Briefcase, Image as ImageIcon, ArrowRight,
  Phone, Compass, HelpCircle, Lock, Building2
} from "lucide-react";

const NAVY = "#1E3A5F";
const SKY = "#2563EB";

// Matches routes registered in App.jsx
const companyLinks = [
  { icon: FileCheck, label: "About Us", path: "/about", desc: "Who we are and what we stand for" },
  { icon: Users, label: "Director Statement", path: "/director", desc: "A message from our General Manager" },
  { icon: Compass, label: "Vision & Mission", path: "/vision-mission", desc: "Where we're headed as a company" },
  { icon: Building2, label: "Our Team", path: "/team", desc: "Meet the people behind Enamos" },
  { icon: Award, label: "Our Clients", path: "/clients", desc: "Organizations that trust us" },
  { icon: Briefcase, label: "Careers", path: "/careers", desc: "Join our guard force and management teams" },
  { icon: ImageIcon, label: "Gallery", path: "/gallery", desc: "Photos from deployments and briefings" },
  { icon: HelpCircle, label: "FAQ", path: "/faq", desc: "Common questions, answered" },
];

// /services/:slug — update slugs to match your ServiceDetailPage data
const serviceLinks = [
  { icon: Shield, label: "Guarding & Protection", path: "/services/guarding-protection", desc: "Static and patrol guarding for any site" },
  { icon: Radio, label: "Armed Response", path: "/services/armed-response", desc: "Rapid-dispatch alarm response teams" },
  { icon: Eye, label: "Security Systems", path: "/services/security-systems", desc: "CCTV, alarms and electronic surveillance" },
  { icon: Award, label: "VIP & Executive Protection", path: "/services/vip-executive-protection", desc: "Close protection for individuals and events" },
  { icon: Lock, label: "Access Control", path: "/services/access-control", desc: "Gate and entry management systems" },
  { icon: TrendingUp, label: "Supervision & Management", path: "/services/supervision-management", desc: "Site managers overseeing every deployment" },
  { icon: FileCheck, label: "Cleaning Services", path: "/services/cleaning-services", desc: "Professional cleaning for commercial and residential sites" },
];

function NavItemRow({ item, onClick }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => { navigate(item.path); onClick && onClick(); }}
      className="flex items-start gap-3 p-3 rounded-lg text-left hover:bg-slate-50 transition-colors w-full"
    >
      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#EFF6FF" }}>
        <item.icon className="w-4.5 h-4.5" style={{ color: SKY }} />
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-900">{item.label}</div>
        <div className="text-xs text-slate-500 mt-0.5 leading-snug">{item.desc}</div>
      </div>
    </button>
  );
}

function MegaMenu({ label, items, open, setOpen, columns = 2 }) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors">
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 transition-all duration-200"
        style={{
          width: columns === 2 ? "560px" : "300px",
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transform: `translateX(-50%) translateY(${open ? "0" : "-6px"})`,
        }}
      >
        <div
          className="bg-white rounded-xl p-3 grid gap-1"
          style={{
            border: "1px solid #e2e8f0",
            boxShadow: "0 20px 40px -12px rgba(30,58,95,0.18)",
            gridTemplateColumns: columns === 2 ? "1fr 1fr" : "1fr",
          }}
        >
          {items.map((item) => (
            <NavItemRow key={item.path} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  const navRef = useRef(null);
  const location = useLocation();
  const [companyOpen, setCompanyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const setNavH = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty("--nav-h", `${navRef.current.offsetHeight}px`);
      }
    };
    setNavH();
    window.addEventListener("resize", setNavH);
    return () => window.removeEventListener("resize", setNavH);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
    setCompanyOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur transition-shadow"
        style={{
          borderBottom: "1px solid #e2e8f0",
          boxShadow: scrolled ? "0 4px 20px -6px rgba(30,58,95,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center flex-shrink-0">
            <img src="/enamos-logo-navbar.png" alt="Enamos Security Services" style={{ height: "72px", objectFit: "contain" }}
              onError={(e) => { e.target.style.display = "none"; }} />
          </button>

          <nav className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => navigate("/")}
              className="text-sm font-semibold transition-colors"
              style={{ color: isActive("/") ? SKY : "#334155" }}
            >
              Home
            </button>
            <MegaMenu label="Company" items={companyLinks} open={companyOpen} setOpen={setCompanyOpen} columns={2} />
            <MegaMenu label="Services" items={serviceLinks} open={servicesOpen} setOpen={setServicesOpen} columns={1} />
            <button
              onClick={() => navigate("/contact")}
              className="text-sm font-semibold transition-colors"
              style={{ color: isActive("/contact") ? SKY : "#334155" }}
            >
              Contact
            </button>
            <button
              onClick={() => navigate("/privacy")}
              className="text-sm font-semibold transition-colors"
              style={{ color: isActive("/privacy") ? SKY : "#334155" }}
            >
              Privacy
            </button>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+254722981621" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Phone className="w-4 h-4" style={{ color: SKY }} />
              +254 722 981621
            </a>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: SKY }}
            >
              Get Free Assessment <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
            <Menu className="w-6 h-6" style={{ color: NAVY }} />
          </button>
        </div>
      </header>


      <div
        className="fixed inset-0 z-[60] lg:hidden"
        style={{ pointerEvents: drawerOpen ? "auto" : "none" }}
      >
        <div
          className="absolute inset-0 bg-black/40 transition-opacity duration-300"
          style={{ opacity: drawerOpen ? 1 : 0 }}
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className="absolute top-0 left-0 h-full bg-white overflow-y-auto transition-transform duration-300 ease-out"
          style={{
            width: "78%",
            maxWidth: "340px",
            borderRight: "1px solid #e2e8f0",
            transform: drawerOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <div className="flex items-center justify-between px-5 h-[76px]" style={{ borderBottom: "1px solid #e2e8f0" }}>
            <img src="/enamos-logo-navbar.png" alt="Enamos Security Services" style={{ height: "56px", objectFit: "contain" }}
              onError={(e) => { e.target.style.display = "none"; }} />
            <button onClick={() => setDrawerOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" style={{ color: NAVY }} />
            </button>
          </div>

          <div className="p-5">
            <button
              onClick={() => navigate("/")}
              className="block w-full text-left py-3 text-base font-semibold text-slate-900"
              style={{ borderBottom: "1px solid #f1f5f9" }}
            >
              Home
            </button>

            <div style={{ borderBottom: "1px solid #f1f5f9" }}>
              <button
                onClick={() => setMobileCompanyOpen((v) => !v)}
                className="flex items-center justify-between w-full py-3"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Company</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileCompanyOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileCompanyOpen && (
                <div className="pb-2">
                  {companyLinks.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => { navigate(item.path); setDrawerOpen(false); }}
                      className="flex items-center gap-3 w-full text-left py-2.5"
                    >
                      <item.icon className="w-4.5 h-4.5" style={{ color: SKY }} />
                      <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div style={{ borderBottom: "1px solid #f1f5f9" }}>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex items-center justify-between w-full py-3"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Services</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pb-2">
                  {serviceLinks.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => { navigate(item.path); setDrawerOpen(false); }}
                      className="flex items-center gap-3 w-full text-left py-2.5"
                    >
                      <item.icon className="w-4.5 h-4.5" style={{ color: SKY }} />
                      <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="block w-full text-left py-3 text-base font-semibold text-slate-900"
              style={{ borderBottom: "1px solid #f1f5f9" }}
            >
              Contact
            </button>
            <button
              onClick={() => navigate("/privacy")}
              className="block w-full text-left py-3 text-base font-semibold text-slate-900"
            >
              Privacy Policy
            </button>

            <a href="tel:+254722981621" className="flex items-center gap-2 mt-4 text-sm font-semibold text-slate-700">
              <Phone className="w-4 h-4" style={{ color: SKY }} />
              +254 722 981621
            </a>

            <button
              onClick={() => { navigate("/contact"); setDrawerOpen(false); }}
              className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white"
              style={{ background: SKY }}
            >
              Get Free Assessment <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
