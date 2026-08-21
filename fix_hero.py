import re

with open('src/pages/ContactPage.jsx') as f:
    content = f.read()

pattern = re.compile(
    r'\{/\* Hero \*/\}.*?(?=\{/\* Contact Form \+ Info \*/\})',
    re.S
)

new_hero = '''{/* Hero */}
        <style>{`
          @keyframes scanline {
            0%, 100% { top: 15%; opacity: 0; }
            50% { top: 85%; opacity: 1; }
          }
        `}</style>
        <div className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #050b17 0%, #0a1730 55%, #102a4d 100%)" }}>
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, #38bdf8, transparent)" }} />
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: "#dc2626" }} />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: "#38bdf8" }} />

          <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full" style={{ background: "rgba(220,38,38,0.12)", border: "1px solid rgba(220,38,38,0.35)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="font-mono text-red-400 text-[11px] tracking-[0.2em] uppercase">Dispatch Request &middot; Open Now</span>
              </div>

              <h1 className="text-5xl md:text-6xl text-white mb-5 leading-[1.05]" style={{ fontFamily: "'DM Serif Display',serif" }}>
                Let's Build Your<br />
                <span style={{ background: "linear-gradient(135deg,#fca5a5,#bfdbfe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Security Plan
                </span>
              </h1>

              <p className="text-white/60 text-lg max-w-md leading-relaxed mb-8">
                Free site assessment and custom quote. Our team responds within 2 hours &mdash; day or night.
              </p>

              <div className="flex items-center gap-6 font-mono text-xs text-white/40 tracking-wider">
                <div><span className="text-white text-base font-semibold block">24/7</span>DISPATCH</div>
                <div className="w-px h-8 bg-white/10" />
                <div><span className="text-white text-base font-semibold block">2 hrs</span>AVG RESPONSE</div>
                <div className="w-px h-8 bg-white/10" />
                <div><span className="text-white text-base font-semibold block">2</span>BRANCH OFFICES</div>
              </div>
            </div>

            <div className="relative mt-4 md:mt-0">
              <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5", border: "1px solid rgba(56,189,248,0.2)" }}>
                <img src="/contact-officer.jpg" alt="Contact ENAMOS SECURITY"
                  className="w-full h-full object-cover object-top"
                  onError={e => { e.target.style.background = "#0f172a"; }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(5,11,23,0.85) 100%)" }} />

                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 rounded-tl-md" style={{ borderColor: "#38bdf8" }} />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 rounded-tr-md" style={{ borderColor: "#38bdf8" }} />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 rounded-bl-md" style={{ borderColor: "#38bdf8" }} />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 rounded-br-md" style={{ borderColor: "#38bdf8" }} />

                <div className="absolute left-4 right-4 h-px opacity-70 pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, #38bdf8, transparent)", animation: "scanline 3.5s ease-in-out infinite" }} />

                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: "rgba(5,11,23,0.6)", backdropFilter: "blur(4px)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-mono text-white text-[10px] tracking-widest uppercase">On Duty</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 md:-left-10 rounded-2xl px-5 py-4 shadow-xl" style={{ background: "linear-gradient(135deg,#dc2626,#7f1d1d)", clipPath: "polygon(0 12px, 12px 0, 100% 0, 100% 100%, 0 100%)" }}>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-white/90" />
                  <div>
                    <div className="text-white font-bold text-lg leading-none">2 Hour</div>
                    <div className="text-white/70 font-mono text-[10px] tracking-widest uppercase mt-1">Response Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        '''

new_content, n = pattern.subn(new_hero, content)
print('Replacements made:', n)
if n > 0:
    with open('src/pages/ContactPage.jsx', 'w') as f:
        f.write(new_content)
    print('Hero redesigned.')
else:
    print('No match — run: grep -n "Hero \\*/\\|Contact Form" src/pages/ContactPage.jsx')
