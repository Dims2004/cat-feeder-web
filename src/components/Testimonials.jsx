const testimonials = [
  { text: 'Kerja di luar kota jadi tenang, si Mochi selalu kenyang. Appnya gampang banget dipakai!', role: 'Cat Lover, Jakarta', avatar: '🐱' },
  { text: 'Harga masuk, fitur juara. Kamera live-nya bikin kangen kucing jadi terobati.', role: 'Cat Dad, Bandung', avatar: '🐈' },
  { text: 'Anak-anak suka banget karena bisa kasih makan via HP. Recommended buat keluarga!', role: 'Ibu Rumah Tangga, Surabaya', avatar: '🐈‍⬛' },
  { text: 'Kucingku gak rewel lagi karena makannya teratur. Terima kasih FeederKu!', role: 'Mahasiswa, Yogyakarta', avatar: '🐾' },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-deepsea text-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 left-10 text-8xl opacity-10">🐾</div>
      <div className="absolute bottom-10 right-10 text-8xl opacity-10">🐾</div>

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="inline-block bg-mango text-deepsea font-bold px-4 py-2 rounded-full text-sm mb-4">
            💬 TESTIMONI
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Kata Mereka Tentang <span className="text-mango">FeederKu</span>
          </h2>
          <p className="text-lg text-cream/60 max-w-2xl mx-auto">
            Ribuan cat lover sudah merasakan manfaatnya. Kamu kapan?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div key={i}
              className="bg-cream/5 backdrop-blur border-2 border-cream/10 rounded-3xl p-6 hover:bg-cream/10 hover:-translate-y-2 transition-all">
              <div className="text-mango text-xl mb-3">★★★★★</div>
              <p className="text-cream/90 mb-5 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-mango rounded-full flex items-center justify-center text-2xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-extrabold">Anonim</div>
                  <div className="text-xs text-cream/60">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}