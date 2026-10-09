// ⚠️ Link download APK FeederKu
const DOWNLOAD_LINK = 'https://drive.google.com/file/d/1Fei-W9VvFhuXT6TSHviRB4wWFcms3R2T/view?usp=sharing'

export default function AppShowcase() {
  return (
    <section id="aplikasi" className="py-20 md:py-28 relative overflow-hidden">
      {/* BG blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mint/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mango/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
        {/* Phone Mockup */}
        <div className="flex justify-center">
          <div className="relative animate-float">
            {/* Phone frame */}
            <div className="w-72 md:w-80 h-[600px] bg-deepsea rounded-[3rem] p-3 shadow-2xl border-8 border-deepsea">
              <div className="w-full h-full bg-cream rounded-[2.3rem] overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-deepsea rounded-b-2xl z-10"></div>

                {/* App UI */}
                <div className="pt-10 px-5 h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="text-xs text-deepsea/50 font-bold">Halo, CatLover! 👋</div>
                      <div className="font-display font-extrabold text-lg">FeederKu App</div>
                    </div>
                    <div className="w-10 h-10 bg-mango rounded-full flex items-center justify-center">🐱</div>
                  </div>

                  {/* Main Card */}
                  <div className="bg-gradient-to-br from-mango to-bubblegum rounded-3xl p-5 text-cream mb-4 shadow-lg">
                    <div className="text-xs opacity-90 font-bold">Porsi Terakhir</div>
                    <div className="text-3xl font-extrabold font-display my-1">120 gram</div>
                    <div className="text-xs opacity-90">Hari ini, 07:00 WIB ✓</div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white rounded-2xl p-3 shadow">
                      <div className="text-2xl mb-1">📅</div>
                      <div className="text-xs text-deepsea/50 font-bold">Jadwal</div>
                      <div className="font-extrabold">3× / hari</div>
                    </div>
                    <div className="bg-white rounded-2xl p-3 shadow">
                      <div className="text-2xl mb-1">🔋</div>
                      <div className="text-xs text-deepsea/50 font-bold">Baterai</div>
                      <div className="font-extrabold text-green-600">89%</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-deepsea text-cream font-extrabold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg">
                    🍖 Beri Makan Sekarang
                  </button>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2 animate-wiggle">
              <span>✅</span>
              <span className="text-xs font-bold">Terhubung</span>
            </div>
            <div className="absolute bottom-20 -right-4 bg-white rounded-2xl shadow-xl px-3 py-2 animate-wiggle" style={{animationDelay: '1s'}}>
              <span className="text-xs font-bold text-bubblegum">🟢 LIVE</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div id="download">
          <span className="inline-block bg-bubblegum/20 text-bubblegum font-bold px-4 py-2 rounded-full text-sm mb-4">
            📱 APLIKASI MOBILE
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Semua Kontrol Ada di <span className="text-bubblegum">Genggamanmu</span>
          </h2>
          <p className="text-lg text-deepsea/70 mb-8">
            Aplikasi FeederKu dirancang simpel, cepat, dan menyenangkan. Pantau si meong dari kantor,
            kampus, atau saat liburan. Sekali tap, makanan langsung turun!
          </p>

          <ul className="space-y-3 mb-8">
            {[
              'Notifikasi real-time saat makanan habis',
              'Rekam suara panggilan custom',
              'Riwayat makan si meong lengkap',
              'Multi-user (keluarga bisa pantau bareng)',
            ].map(t => (
              <li key={t} className="flex items-center gap-3 font-semibold">
                <div className="w-6 h-6 bg-mango rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</div>
                {t}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a href={DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-deepsea text-cream font-extrabold px-8 py-5 rounded-2xl hover:bg-bubblegum transition-all hover:scale-105 shadow-xl">
              <svg className="w-7 h-7 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Download</div>
                <div className="text-base">Aplikasi (.apk)</div>
              </div>
            </a>
          </div>

          <div className="mt-6 flex items-start gap-3 bg-mango/20 border-2 border-mango rounded-2xl p-4">
            <span className="text-2xl">🤖</span>
            <div>
              <div className="font-extrabold text-sm">Khusus Android</div>
              <p className="text-sm text-deepsea/70">
                Saat ini aplikasi FeederKu tersedia untuk <b>Android</b>. Versi iOS segera menyusul! 🍎
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}