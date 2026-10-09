const steps = [
  { n: '01', title: 'Download Aplikasi', desc: 'Unduh FeederKu App di Android kamu.', icon: '📲' },
  { n: '02', title: 'Hubungkan Alat', desc: 'Sambungkan alat via WiFi hanya dalam 1 menit.', icon: '🔗' },
  { n: '03', title: 'Atur Jadwal', desc: 'Tentukan porsi & waktu makan sesuai selera.', icon: '⏰' },
  { n: '04', title: 'Si Meong Kenyang!', desc: 'Duduk manis, alat akan bekerja otomatis. 🐱', icon: '🎉' },
]

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-20 md:py-28 bg-gradient-to-b from-cream to-mango/20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="inline-block bg-mango text-deepsea font-bold px-4 py-2 rounded-full text-sm mb-4">
            🚀 CARA KERJA
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Hanya <span className="text-bubblegum">4 Langkah</span> Mudah
          </h2>
          <p className="text-lg text-deepsea/60 max-w-2xl mx-auto">
            Dari unboxing sampai si meong makan, tidak sampai 5 menit!
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-20 left-[12%] right-[12%] h-1 border-t-4 border-dashed border-bubblegum/40"></div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center text-6xl md:text-7xl shadow-xl border-4 border-mango hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-bubblegum text-cream rounded-full flex items-center justify-center font-display font-extrabold text-lg shadow-lg">
                    {s.n}
                  </div>
                </div>
                <h3 className="text-xl font-extrabold mb-2">{s.title}</h3>
                <p className="text-deepsea/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}