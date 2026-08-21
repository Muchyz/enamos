with open('src/App.jsx') as f:
    content = f.read()

changes = []

# 1. Emergency Line -> exact ContactPage tel-link card (navy-to-red diagonal, glow, phone icon, footer)
old_emergency = '''              <div className="rounded-3xl p-5 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#dc2626,#991b1b)" }}>
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-15 bg-white" />
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-white/70 text-xs font-bold tracking-widest uppercase">Emergency Line</span>
                </div>
                <a href="tel:+254722981621" className="text-3xl font-black text-white hover:opacity-80 transition-opacity block">0722 981 621</a>
                <div className="text-white/60 text-xs mt-0.5">Available 24 hours, 7 days a week</div>
              </div>'''

new_emergency = '''              <a href="tel:+254722981621" className="block rounded-3xl p-6 relative overflow-hidden shadow-lg group" style={{ background: "linear-gradient(115deg,#1e3a8a 0%,#1e40af 22%,#7f1d1d 55%,#dc2626 78%,#ef4444 100%)" }}>
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 10% 0%, rgba(56,189,248,0.25), transparent 45%), radial-gradient(circle at 95% 100%, rgba(255,255,255,0.15), transparent 45%)" }} />
                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                      </span>
                      <span className="text-white/80 text-[11px] font-bold tracking-widest uppercase">24/7 Emergency Line</span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none">0722 981 621</div>
                    <div className="text-white/60 text-xs mt-2 font-medium">Available 24 hours, 7 days a week</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
                    <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                </div>
                <div className="relative mt-4 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                  <span className="text-white/70 text-xs font-semibold">Tap to call now</span>
                  <span className="inline-flex items-center gap-1 text-white text-xs font-bold bg-white/15 px-3 py-1.5 rounded-full group-hover:bg-white/25 transition-colors">
                    Call Now &rarr;
                  </span>
                </div>
              </a>'''

changes.append(('Emergency Line', content.count(old_emergency)))
content = content.replace(old_emergency, new_emergency)

# 2. Stat boxes -> match ContactPage padding, icon size, hover lift
old_stats = '''              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Zap, label: "2hr Response" },
                  { icon: Shield, label: "Free Quote" },
                  { icon: CheckCircle, label: "No Obligation" },
                ].map((t, i) => (
                  <div key={i} className="p-3 rounded-2xl text-center bg-white border border-gray-100 shadow-sm">
                    <t.icon className="w-4 h-4 mx-auto mb-1 text-blue-600" />
                    <div className="text-xs font-semibold text-gray-700">{t.label}</div>
                  </div>
                ))}
              </div>'''

new_stats = '''              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Zap, label: "2hr Response" },
                  { icon: Shield, label: "Free Quote" },
                  { icon: CheckCircle, label: "No Obligation" },
                ].map((t, i) => (
                  <div key={i} className="p-4 rounded-2xl text-center bg-white border border-gray-100 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
                    <t.icon className="w-5 h-5 mx-auto mb-1.5 text-blue-600" />
                    <div className="text-xs font-semibold text-gray-700">{t.label}</div>
                  </div>
                ))}
              </div>'''

changes.append(('Stat boxes', content.count(old_stats)))
content = content.replace(old_stats, new_stats)

# 3. Follow Us -> navy card with top accent stripe, centered heading, centered icons
old_followus_header = '''              <div className="rounded-3xl p-5 bg-white border border-gray-100 shadow-sm">
                <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">Follow Us</div>
                <div className="flex items-center gap-3">'''

new_followus_header = '''              <div className="relative overflow-hidden rounded-3xl p-6" style={{ background: "linear-gradient(180deg, #050b17 0%, #0a1730 45%, #102a4d 100%)" }}>
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, #38bdf8, transparent)" }} />
                <h3 className="text-white font-bold text-base tracking-wide mb-4 text-center">Follow Us</h3>
                <div className="flex items-center justify-center gap-3">'''

changes.append(('Follow Us header/wrapper', content.count(old_followus_header)))
content = content.replace(old_followus_header, new_followus_header)

for label, n in changes:
    print(f'{label}: {n}')

if all(n > 0 for _, n in changes):
    with open('src/App.jsx', 'w') as f:
        f.write(content)
    print('All three boxes now match /contact exactly.')
else:
    print('One or more patterns did not match — nothing written. Check the 0-count line(s) above.')
