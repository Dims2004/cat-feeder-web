export default function Location() {
  return (
    <section id="lokasi" className="py-20 md:py-28 bg-gradient-to-b from-cream to-mango/20 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-mint/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-72 h-72 bg-bubblegum/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-bubblegum/20 text-bubblegum font-bold px-4 py-2 rounded-full text-sm mb-4">
            📍 LOKASI KAMI
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Kunjungi <span className="text-bubblegum">Workshop</span> Kami
          </h2>
          <p className="text-lg text-deepsea/60 max-w-2xl mx-auto">
            Ingin lihat langsung alat FeederKu sebelum membeli? Silakan mampir ke workshop kami di
            <b className="text-deepsea"> Porong, Sidoarjo, Jawa Timur</b>. Kami siap menyambutmu! 🐾
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Info Cards — Left */}
          <div className="lg:col-span-2 space-y-5">
            {/* Alamat */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all border-4 border-transparent hover:border-mango">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-mango rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-extrabold text-lg mb-1">Alamat Workshop</h3>
                  <p className="text-deepsea/70 text-sm leading-relaxed">
                    Jl. Raya Porong No. 123<br />
                    Porong, Sidoarjo<br />
                    Jawa Timur 61274, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Jam Operasional */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all border-4 border-transparent hover:border-mango">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-mint rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                  🕐
                </div>
                <div className="flex-1">
                  <h3 className="font-extrabold text-lg mb-2">Jam Operasional</h3>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-deepsea/60 font-semibold">Senin - Jumat</span>
                      <span className="font-extrabold">08.00 - 17.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-deepsea/60 font-semibold">Sabtu</span>
                      <span className="font-extrabold">09.00 - 15.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-deepsea/60 font-semibold">Minggu / Libur</span>
                      <span className="font-extrabold text-bubblegum">Tutup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kontak */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all border-4 border-transparent hover:border-mango">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-bubblegum rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="font-extrabold text-lg mb-1">Hubungi Kami</h3>
                  <p className="text-deepsea/70 text-sm">
                    WhatsApp: <b>+62 812-3456-7890</b><br />
                    Email: <b>hello@feederku.id</b>
                  </p>
                </div>
              </div>
            </div>

            {/* Button Navigasi */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Porong,+Sidoarjo+Regency,+East+Java"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-deepsea text-cream font-extrabold px-6 py-5 rounded-3xl hover:bg-bubblegum transition-all hover:scale-[1.02] shadow-xl">
              <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Buka di Google Maps
            </a>
          </div>

          {/* Map — Right */}
          <div className="lg:col-span-3">
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-extrabold text-sm text-deepsea">Workshop Aktif</span>
              </div>

              {/* Badge Kanan */}
              <div className="absolute top-4 right-4 z-10 bg-mango rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2">
                <span className="text-xl">🐱</span>
                <span className="font-extrabold text-sm text-deepsea">Sidoarjo, Jatim</span>
              </div>

              {/* Google Maps Iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63286.32831410857!2d112.68874178069656!3d-7.531767617107051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7ddc2f7f4fe53%3A0xcd6fe13db70b88d0!2sPorong%2C%20Sidoarjo%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1791534669342!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Lokasi FeederKu - Porong, Sidoarjo"
                className="w-full h-full"
              ></iframe>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-deepsea/95 backdrop-blur rounded-2xl px-5 py-3 shadow-xl flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-cream">
                  <span className="text-xl">📌</span>
                  <div>
                    <div className="text-xs text-cream/60 font-bold">Lokasi</div>
                    <div className="font-extrabold text-sm">Porong, Sidoarjo, Jawa Timur</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-cream">
                  <span className="text-xl">🚗</span>
                  <div>
                    <div className="text-xs text-cream/60 font-bold">Akses</div>
                    <div className="font-extrabold text-sm">Dekat Tol Porong</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra Info */}
        <div className="grid sm:grid-cols-3 gap-5 mt-10">
          {[
            { icon: '🚗', title: 'Mudah Dijangkau', desc: 'Dekat exit Tol Porong & jalur utama Surabaya-Malang' },
            { icon: '🅿️', title: 'Parkir Luas', desc: 'Tersedia area parkir gratis untuk mobil & motor' },
            { icon: '☕', title: 'Ruang Tunggu Nyaman', desc: 'Bisa lihat demo alat sambil ngopi santai' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-center border-4 border-transparent hover:border-mango">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-extrabold mb-2">{item.title}</h3>
              <p className="text-deepsea/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}