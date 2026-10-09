const plan = {
  name: 'FeederKu Pro',
  price: '250',
  tagline: 'Semua fitur premium dalam satu paket!',
  features: [
    '1 unit alat FeederKu Pro',
    'Kontrol via Aplikasi Android',
    'Jadwal makan unlimited',
    'Kamera Live HD 1080p',
    'Rekam suara panggilan custom',
    'Baterai backup 12 jam',
    'Koneksi WiFi IoT stabil',
    'Garansi resmi 1 tahun',
    'Free support 24/7',
  ],
}

export default function Pricing({ onCheckout }) {
  return (
    <section id="harga" className="py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-mango/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-mint/40 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="inline-block bg-mango text-deepsea font-bold px-4 py-2 rounded-full text-sm mb-4">
            💰 HARGA SPESIAL
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Satu Paket, <span className="text-bubblegum">Semua Fitur</span>
          </h2>
          <p className="text-lg text-deepsea/60 max-w-2xl mx-auto">
            Tanpa pilihan ribet. Satu harga, semua yang kamu dan si meong butuhkan.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative bg-gradient-to-br from-mango to-bubblegum rounded-[2.5rem] p-1.5 shadow-2xl">
            <div className="bg-white rounded-[2rem] p-8 md:p-12">
              {/* Badge Populer */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-deepsea text-cream font-extrabold px-6 py-2 rounded-full text-sm shadow-lg flex items-center gap-2">
                🔥 BEST SELLER
              </div>

              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-2">{plan.name}</h3>
                <p className="text-deepsea/60">{plan.tagline}</p>
              </div>

              {/* Harga */}
              <div className="text-center mb-8">
                <div className="inline-flex items-end gap-1">
                  <span className="text-2xl font-bold text-deepsea/60 mb-3">Rp</span>
                  <span className="text-7xl md:text-8xl font-extrabold font-display text-bubblegum">
                    {plan.price}
                  </span>
                  <span className="text-2xl font-bold text-deepsea/60 mb-3">rb</span>
                </div>
                <div className="mt-2">
                  <span className="inline-block bg-mango/30 text-deepsea font-bold px-4 py-1 rounded-full text-sm line-through opacity-60 mr-2">
                    Rp 399rb
                  </span>
                  <span className="inline-block bg-bubblegum text-cream font-extrabold px-4 py-1 rounded-full text-sm">
                    Hemat 37% 🎉
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {plan.features.map(f => (
                  <div key={f} className="flex items-start gap-2 text-sm font-semibold">
                    <span className="w-5 h-5 bg-mango rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    {f}
                  </div>
                ))}
              </div>

              {/* Button — ke Checkout */}
              <button
                onClick={onCheckout}
                className="group w-full text-center bg-deepsea text-cream font-extrabold py-5 rounded-2xl hover:bg-bubblegum transition-all hover:scale-[1.02] shadow-xl text-lg flex items-center justify-center gap-3"
              >
                <span className="text-2xl group-hover:animate-bounce">🛒</span>
                Pesan Sekarang
              </button>

              <p className="text-center text-sm text-deepsea/50 mt-4">
                ✅ Gratis ongkir se-Indonesia • ✅ Bisa COD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}