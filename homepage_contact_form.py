with open('src/App.jsx') as f:
    content = f.read()

changes = []

# 1. Expand form state to include businessName, propertyType, location
old_state = 'const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });'
new_state = 'const [form, setForm] = useState({ name: "", businessName: "", propertyType: "", location: "", email: "", phone: "", service: "", message: "" });'
changes.append(('Form state', content.count(old_state)))
content = content.replace(old_state, new_state)

# 2. Expand handleSubmit reset to match
old_reset = 'setForm({ name: "", email: "", phone: "", service: "", message: "" });'
new_reset = 'setForm({ name: "", businessName: "", propertyType: "", location: "", email: "", phone: "", service: "", message: "" });'
changes.append(('Form reset', content.count(old_reset)))
content = content.replace(old_reset, new_reset)

# 3. Replace Full Name/Email/Phone grid with full field set matching ContactPage
old_grid = '''                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider" style={{ color: "#1e3a8a" }}>Full Name *</label>
                      <input type="text" placeholder="Your full name" value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })} required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider" style={{ color: "#1e3a8a" }}>Email *</label>
                      <input type="email" placeholder="you@example.com" value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })} required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider" style={{ color: "#1e3a8a" }}>Phone</label>
                      <input type="tel" placeholder="+254 7XX XXX XXX" value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500" />
                    </div>
                  </div>'''

new_grid = '''                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "#1e3a8a" }}>Full Name *</label>
                      <input type="text" placeholder="Your full name" value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })} required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "#1e3a8a" }}>Email *</label>
                      <input type="email" placeholder="you@example.com" value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })} required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "#1e3a8a" }}>Phone</label>
                      <input type="tel" placeholder="+254 7XX XXX XXX" value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500" />
                    </div>
                      <div>
                        <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "#1e3a8a" }}>Business / Organization Name <span className="text-gray-500 normal-case font-normal">(optional)</span></label>
                        <input type="text" placeholder="Your company or organization" value={form.businessName}
                          onChange={e => setForm({ ...form, businessName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "#1e3a8a" }}>Property Type <span className="text-gray-500 normal-case font-normal">(optional)</span></label>
                        <select value={form.propertyType}
                          onChange={e => setForm({ ...form, propertyType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-900 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500">
                          <option value="">Select property type</option>
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Industrial">Industrial</option>
                          <option value="Estate / Gated Community">Estate / Gated Community</option>
                          <option value="Event">Event</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "#1e3a8a" }}>Location / Address <span className="text-gray-500 normal-case font-normal">(optional)</span></label>
                        <input type="text" placeholder="e.g. Nairobi, Westlands" value={form.location}
                          onChange={e => setForm({ ...form, location: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500" />
                      </div>
                  </div>'''

changes.append(('Field grid expansion', content.count(old_grid)))
content = content.replace(old_grid, new_grid)

for label, n in changes:
    print(f'{label}: {n}')

if all(n > 0 for _, n in changes):
    with open('src/App.jsx', 'w') as f:
        f.write(content)
    print('Homepage form now has all the same fields as /contact.')
else:
    print('One or more patterns did not match — nothing written. Check the 0-count line(s) above.')
