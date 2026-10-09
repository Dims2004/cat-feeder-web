const features = [
  { icon: '📱', title: 'Kontrol via Smartphone', desc: 'Atur jadwal & porsi makan langsung dari aplikasi.', color: 'bg-mango' },
  { icon: '⏰', title: 'Jadwal Otomatis', desc: 'Set hingga 10 jadwal makan per hari, otomatis berjalan.', color: 'bg-mint' },
  { icon: '📡', title: 'Koneksi WiFi IoT', desc: 'Terhubung internet, bisa dipantau real-time dari mana saja.', color: 'bg-bubblegum' },
  { icon: '📹', title: 'Kamera Live', desc: 'Lihat si meong makan langsung dari kamera HD.', color: 'bg-mango' },
  { icon: '🔋', title: 'Baterai Tahan Lama', desc: 'Backup baterai hingga 12 jam saat mati lampu.', color: 'bg-mint' },
  { icon: '🎤', title: 'Suara Panggilan', desc: 'Rekam suara kamu untuk panggil kucing saat makan.', color: 'bg-bubblegum' },
]

export default function Features() {
  return (
    <section id="fitur" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="inline-block bg-bubblegum/20 text-bubblegum font-bold px-4 py-2 rounded-full text-sm mb-4">
            ✨ FITUR UNGGULAN
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Kenapa Pilih <span className="text-bubblegum">FeederKu</span>?
          </h2>
          <p className="text-lg text-deepsea/60 max-w-2xl mx-auto">
            Semua yang kamu butuhkan untuk menjaga si meong tetap kenyang dan bahagia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-4 border-transparent hover:border-mango">
              <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:rotate-12 transition-transform shadow-md`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-extrabold mb-2">{f.title}</h3>
              <p className="text-deepsea/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}