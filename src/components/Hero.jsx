export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-mango/40 animate-blob blur-3xl"></div>
      <div className="absolute top-40 -right-20 w-96 h-96 bg-mint/50 animate-blob blur-3xl" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-bubblegum/30 animate-blob blur-3xl" style={{animationDelay: '4s'}}></div>

      <div className="relative max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-mango/30 border-2 border-mango px-4 py-2 rounded-full font-bold text-sm mb-6">
            <span className="w-2 h-2 bg-bubblegum rounded-full animate-pulse"></span>
            IoT Smart Feeder v2.0
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Beri Makan <br />
            <span className="text-bubblegum">Si Meong</span> dari <br />
            <span className="relative inline-block">
              Mana Saja!
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="#FFB703" strokeWidth="5" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-deepsea/70 mb-8 max-w-lg mx-auto md:mx-0">
            FeederKu adalah alat pemberi makan otomatis berbasis <b>IoT</b> yang bisa dikontrol
            langsung dari smartphone kamu. Kapan pun, di mana pun. 🐾
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#download"
              className="group inline-flex items-center justify-center gap-3 bg-deepsea text-cream font-bold px-8 py-4 rounded-full hover:bg-bubblegum transition-all hover:scale-105 shadow-xl">
              <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
              </svg>
              Download Aplikasi
            </a>
            <a href="#fitur"
              className="inline-flex items-center justify-center gap-2 bg-white text-deepsea font-bold px-8 py-4 rounded-full border-2 border-deepsea hover:bg-mango transition-all">
              Lihat Fitur →
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 justify-center md:justify-start">
            {[
              { n: '10K+', l: 'Pengguna' },
              { n: '4.9★', l: 'Rating' },
              { n: '24/7', l: 'Support' },
            ].map(s => (
              <div key={s.l}>
                <div className="text-3xl font-extrabold text-bubblegum font-display">{s.n}</div>
                <div className="text-sm text-deepsea/60 font-semibold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Illustration */}
        <div className="relative">
          <div className="relative animate-float">
            <div className="bg-gradient-to-br from-mango to-bubblegum rounded-[3rem] p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-cream rounded-[2.5rem] p-8 text-center">
                <div className="text-8xl mb-4">🐱</div>
                <div className="text-6xl mb-4">🍽️</div>
                <div className="bg-deepsea text-cream rounded-2xl py-3 px-6 font-bold inline-block">
                  🍖 Porsi diberikan!
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 animate-wiggle">
              <span className="text-2xl">📱</span>
              <div>
                <div className="text-xs text-deepsea/60 font-bold">Connected</div>
                <div className="text-sm font-extrabold text-deepsea">WiFi ✓</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 animate-wiggle" style={{animationDelay: '1s'}}>
              <span className="text-2xl">⏰</span>
              <div>
                <div className="text-xs text-deepsea/60 font-bold">Jadwal</div>
                <div className="text-sm font-extrabold text-deepsea">07:00 WIB</div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-6 bg-mango rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg animate-bounce-slow">
              ⚡
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 bg-deepsea py-4 -rotate-1 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 text-cream font-display font-extrabold text-xl">
              <span>🐾 PRAKTIS</span><span>⭐</span>
              <span>🐾 AMAN</span><span>⭐</span>
              <span>🐾 OTOMATIS</span><span>⭐</span>
              <span>🐾 IOT SMART</span><span>⭐</span>
              <span>🐾 MUDAH DIPAKAI</span><span>⭐</span>
              <span>🐾 PRAKTIS</span><span>⭐</span>
              <span>🐾 AMAN</span><span>⭐</span>
              <span>🐾 OTOMATIS</span><span>⭐</span>
              <span>🐾 IOT SMART</span><span>⭐</span>
              <span>🐾 MUDAH DIPAKAI</span><span>⭐</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}