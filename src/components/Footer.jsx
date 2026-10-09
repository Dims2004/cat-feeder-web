export default function Footer() {
  return (
    <footer className="bg-deepsea text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-11 h-11 bg-mango rounded-2xl flex items-center justify-center text-2xl">🐱</div>
              <span className="font-display font-extrabold text-2xl">
                Feeder<span className="text-mango">Ku</span>
              </span>
            </div>
            <p className="text-cream/70 max-w-md mb-6">
              Alat pemberi makan kucing otomatis berbasis IoT. Dibuat dengan ❤️ di Sidoarjo untuk para cat lover Indonesia.
            </p>
            <div className="flex gap-3">
              {['📷', '📘', '🐦', '▶️'].map((icon, i) => (
                <a key={i} href="#"
                  className="w-11 h-11 bg-cream/10 hover:bg-mango hover:text-deepsea rounded-full flex items-center justify-center text-xl transition-all">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Produk */}
          <div>
            <h4 className="font-extrabold text-lg mb-4 text-mango">Produk</h4>
            <ul className="space-y-3 text-cream/70">
              <li><a href="#fitur" className="hover:text-mango transition">Fitur</a></li>
              <li><a href="#cara-kerja" className="hover:text-mango transition">Cara Kerja</a></li>
              <li><a href="#harga" className="hover:text-mango transition">Harga</a></li>
              <li><a href="#lokasi" className="hover:text-mango transition">Lokasi</a></li>
              <li><a href="#download" className="hover:text-mango transition">Download App</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-extrabold text-lg mb-4 text-mango">Kontak</h4>
            <ul className="space-y-3 text-cream/70">
              <li className="flex items-center gap-2">📧 hello@feederku.id</li>
              <li className="flex items-center gap-2">📱 +62 812-3456-7890</li>
              <li className="flex items-center gap-2">📍 Porong, Sidoarjo, Jawa Timur</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/60">
          <div>© {new Date().getFullYear()} FeederKu. All rights reserved. Made with 🐾 in Sidoarjo</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-mango transition">Privacy Policy</a>
            <a href="#" className="hover:text-mango transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}