with open('src/pages/ContactPage.jsx') as f:
    content = f.read()

old = '''            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "4/3", boxShadow: "0 20px 40px -12px rgba(15,23,42,0.25)" }}>
                <img src="/contact-officer.jpg" alt="Contact ENAMOS SECURITY"
                  className="w-full h-full object-cover object-top"
                  onError={e => { e.target.style.background = "#f1f5f9"; }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,23,42,0.15) 0%, transparent 30%)" }} />
              </div>

              <div className="absolute -bottom-6 left-4 right-4 bg-white rounded-xl px-5 py-4 flex items-center gap-3" style={{ boxShadow: "0 10px 30px -8px rgba(15,23,42,0.2)", border: "1px solid #f1f5f9" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#dc2626" }}>
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm leading-none" style={{ color: "#0f172a", fontWeight: 700 }}>2 Hour Response</div>
                  <div className="text-gray-400 text-xs mt-1">Guaranteed or your assessment is free</div>
                </div>
              </div>
            </div>'''

new = '''            <div className="relative pb-10 pr-6 sm:pr-10">
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-full rounded-2xl" style={{ background: "linear-gradient(135deg,#1e3a8a,#0f172a)" }} />

              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3", boxShadow: "0 20px 45px -14px rgba(15,23,42,0.35)" }}>
                <img src="/contact-officer.jpg" alt="Contact ENAMOS SECURITY"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 30%" }}
                  onError={e => { e.target.style.background = "#f1f5f9"; }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,23,42,0.08) 0%, transparent 25%, transparent 75%, rgba(15,23,42,0.25) 100%)" }} />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: "rgba(15,23,42,0.55)", backdropFilter: "blur(4px)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-white text-[10px] font-bold tracking-widest uppercase">On Duty</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-4 right-10 sm:right-14 bg-white rounded-xl px-5 py-4 flex items-center gap-3" style={{ boxShadow: "0 10px 30px -8px rgba(15,23,42,0.2)", border: "1px solid #f1f5f9" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#dc2626" }}>
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm leading-none" style={{ color: "#0f172a", fontWeight: 700 }}>2 Hour Response</div>
                  <div className="text-gray-400 text-xs mt-1">Guaranteed or your assessment is free</div>
                </div>
              </div>
            </div>'''

n = content.count(old)
print('Match found:', n)
if n > 0:
    content = content.replace(old, new)
    with open('src/pages/ContactPage.jsx', 'w') as f:
        f.write(content)
    print('Photo area upgraded.')
else:
    print('No match — run: grep -n "aspectRatio: \\"4/3\\"" src/pages/ContactPage.jsx')
