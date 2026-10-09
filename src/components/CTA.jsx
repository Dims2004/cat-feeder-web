// ⚠️ Link download APK FeederKu
const DOWNLOAD_LINK = 'https://drive.google.com/file/d/1Fei-W9VvFhuXT6TSHviRB4wWFcms3R2T/view?usp=sharing'

export default function CTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <div className="relative bg-gradient-to-br from-deepsea via-deepsea to-sky rounded-[3rem] p-10 md:p-16 text-center text-cream overflow-hidden shadow-2xl">
          {/* Decorative */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-mango/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-bubblegum/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="relative">
            <div className="text-6xl md:text-7xl mb-6 animate-bounce-slow">🐱🍽️</div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Siap Bikin Si Meong <br />
              <span className="text-mango">Selalu Kenyang?</span>
            </h2>
            <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10">
              Download aplikasi FeederKu sekarang dan rasakan kemudahan memberi makan kucing kesayanganmu
              dari mana saja. Gratis, tanpa biaya bulanan!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-mango text-deepsea font-extrabold px-10 py-5 rounded-full hover:bg-cream transition-all hover:scale-105 shadow-2xl text-lg">
                <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                </svg>
                Download App Sekarang
              </a>
              <a href="#fitur"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-cream text-cream font-extrabold px-10 py-5 rounded-full hover:bg-cream hover:text-deepsea transition-all text-lg">
                Pelajari Lebih Lanjut
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-cream/70">
              <span className="flex items-center gap-2">✅ Gratis Selamanya</span>
              <span className="flex items-center gap-2">✅ Tanpa Iklan</span>
              <span className="flex items-center gap-2">✅ Support 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}