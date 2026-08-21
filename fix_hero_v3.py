with open('src/pages/ContactPage.jsx') as f:
    content = f.read()

old = '''        <div className="relative bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-red-50 border border-red-100">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span className="text-red-700 text-xs font-semibold tracking-wide uppercase">Open Now &middot; Dispatch Available</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
                Let's build your security plan
              </h1>

              <p className="text-gray-500 text-lg max-w-md leading-relaxed mb-8">
                Free site assessment and a custom quote. Our team responds within 2 hours, day or night.
              </p>

              <div className="grid grid-cols-3 gap-6 max-w-sm border-t border-gray-100 pt-6">
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-xs text-gray-400 font-medium tracking-wide uppercase mt-1">Dispatch</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">2 hrs</div>
                  <div className="text-xs text-gray-400 font-medium tracking-wide uppercase mt-1">Response</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">2</div>
                  <div className="text-xs text-gray-400 font-medium tracking-wide uppercase mt-1">Branches</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "4/3" }}>
                <img src="/contact-officer.jpg" alt="Contact ENAMOS SECURITY"
                  className="w-full h-full object-cover object-top"
                  onError={e => { e.target.style.background = "#f1f5f9"; }} />
              </div>

              <div className="absolute -bottom-5 left-5 right-5 bg-white rounded-xl shadow-lg border border-gray-100 px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-sm leading-none">2 Hour Response</div>
                  <div className="text-gray-400 text-xs mt-1">Guaranteed or your assessment is free</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        '''

new = '''        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-6 pt-10 pb-24 md:pt-14 md:pb-20 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full" style={{ background: "#fef2f2", border: "1px solid #fecaca" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span className="text-xs font-bold tracking-wide uppercase" style={{ color: "#1e3a8a" }}>Open Now &middot; Dispatch Available</span>
              </div>

              <h1 className="text-4xl sm:text-5xl mb-5 leading-[1.15] tracking-tight" style={{ color: "#0f172a", fontWeight: 800 }}>
                Let's build your<br />security plan
              </h1>

              <p className="text-gray-500 text-base sm:text-lg max-w-md leading-relaxed mb-8">
                Free site assessment and a custom quote. Our team responds within 2 hours, day or night.
              </p>

              <div className="grid grid-cols-3 gap-4 max-w-sm">
                {[
                  { value: "24/7", label: "Dispatch" },
                  { value: "2 hrs", label: "Response" },
                  { value: "2", label: "Branches" },
                ].map((s, i) => (
                  <div key={i} className="rounded-xl px-3 py-3" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                    <div className="text-xl font-extrabold" style={{ color: "#1e3a8a" }}>{s.value}</div>
                    <div className="text-[11px] text-gray-500 font-semibold tracking-wide uppercase mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
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
            </div>
          </div>
        </div>

        '''

n = content.count(old)
print('Match found:', n)
if n > 0:
    content = content.replace(old, new)
    with open('src/pages/ContactPage.jsx', 'w') as f:
        f.write(content)
    print('Hero polished.')
else:
    print('No match — run: grep -n "relative bg-white border-b" src/pages/ContactPage.jsx')
