import { useState } from 'react'

// ⚠️ Ganti nomor WA admin di sini (format internasional tanpa +)
const ADMIN_WA = '6281234567890'

// 💳 Data bank: logo, warna, & info rekening
const BANKS = [
  {
    id: 'bca',
    name: 'BCA',
    fullName: 'Bank Central Asia',
    rekening: '1234567890',
    atasNama: 'PT FeederKu Indonesia',
    color: 'from-blue-600 to-blue-800',
    textColor: 'text-blue-700',
    bgLight: 'bg-blue-50',
    border: 'border-blue-500',
    logo: (
      <svg viewBox="0 0 100 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="65%" textAnchor="middle" fontSize="18" fontWeight="900" fill="#0060AF" fontFamily="Arial, sans-serif">
          BCA
        </text>
      </svg>
    ),
  },
  {
    id: 'bni',
    name: 'BNI',
    fullName: 'Bank Negara Indonesia',
    rekening: '0987654321',
    atasNama: 'PT FeederKu Indonesia',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-700',
    bgLight: 'bg-orange-50',
    border: 'border-orange-500',
    logo: (
      <svg viewBox="0 0 100 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="65%" textAnchor="middle" fontSize="18" fontWeight="900" fill="#F15A22" fontFamily="Arial, sans-serif">
          BNI
        </text>
      </svg>
    ),
  },
  {
    id: 'mandiri',
    name: 'Mandiri',
    fullName: 'Bank Mandiri',
    rekening: '1122334455',
    atasNama: 'PT FeederKu Indonesia',
    color: 'from-blue-800 to-yellow-500',
    textColor: 'text-blue-900',
    bgLight: 'bg-yellow-50',
    border: 'border-blue-700',
    logo: (
      <svg viewBox="0 0 100 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="65%" textAnchor="middle" fontSize="16" fontWeight="900" fill="#003D79" fontFamily="Arial, sans-serif">
          mandiri
        </text>
      </svg>
    ),
  },
  {
    id: 'bri',
    name: 'BRI',
    fullName: 'Bank Rakyat Indonesia',
    rekening: '5566778899',
    atasNama: 'PT FeederKu Indonesia',
    color: 'from-blue-600 to-blue-900',
    textColor: 'text-blue-800',
    bgLight: 'bg-blue-50',
    border: 'border-blue-700',
    logo: (
      <svg viewBox="0 0 100 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="65%" textAnchor="middle" fontSize="18" fontWeight="900" fill="#00529C" fontFamily="Arial, sans-serif">
          BRI
        </text>
      </svg>
    ),
  },
  {
    id: 'lain',
    name: 'Bank Lain',
    fullName: 'Bank Lainnya',
    rekening: '-',
    atasNama: 'Hubungi Admin',
    color: 'from-gray-500 to-gray-700',
    textColor: 'text-gray-700',
    bgLight: 'bg-gray-50',
    border: 'border-gray-400',
    logo: (
      <svg viewBox="0 0 100 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="65%" textAnchor="middle" fontSize="14" fontWeight="900" fill="#6B7280" fontFamily="Arial, sans-serif">
          BANK LAIN
        </text>
      </svg>
    ),
  },
]

export default function Checkout({ onBack }) {
  const [form, setForm] = useState({
    nama: '',
    wa: '',
    email: '',
    alamat: '',
    kota: '',
    kodepos: '',
    jumlah: 1,
    metodeBayar: 'Transfer Bank',
    bank: '',
    catatan: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const hargaSatuan = 250000
  const ongkir = 20000
  const total = form.jumlah * hargaSatuan + ongkir

  const selectedBank = BANKS.find(b => b.id === form.bank)

  const formatRupiah = (n) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => {
      const next = { ...prev, [name]: value }
      // Reset bank kalau ganti metode bayar
      if (name === 'metodeBayar' && value !== 'Transfer Bank') next.bank = ''
      return next
    })
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleBankSelect = (bankId) => {
    setForm(prev => ({ ...prev, bank: bankId }))
    if (errors.bank) setErrors(prev => ({ ...prev, bank: '' }))
  }

  const validate = () => {
    const err = {}
    if (!form.nama.trim()) err.nama = 'Nama wajib diisi'
    if (!form.wa.trim()) err.wa = 'Nomor WhatsApp wajib diisi'
    else if (!/^[0-9+\-\s]{9,}$/.test(form.wa)) err.wa = 'Format nomor tidak valid'
    if (!form.email.trim()) err.email = 'Email wajib diisi'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Format email tidak valid'
    if (!form.alamat.trim()) err.alamat = 'Alamat wajib diisi'
    if (!form.kota.trim()) err.kota = 'Kota wajib diisi'
    if (!form.kodepos.trim()) err.kodepos = 'Kode pos wajib diisi'
    if (form.metodeBayar === 'Transfer Bank' && !form.bank) err.bank = 'Pilih bank untuk transfer'
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validate()
    setErrors(err)
    if (Object.keys(err).length > 0) {
      const firstError = document.querySelector('[data-error="true"]')
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    const bankInfo = form.metodeBayar === 'Transfer Bank' && selectedBank
      ? `\nBank        : ${selectedBank.fullName}\nNo. Rek     : ${selectedBank.rekening}\nAtas Nama   : ${selectedBank.atasNama}`
      : ''

    const pesan = `Halo Admin FeederKu! 🐱

Saya ingin memesan *FeederKu Pro*:

━━━━━━━━━━━━━━━━━━
📦 *DETAIL PESANAN*
━━━━━━━━━━━━━━━━━━
Jumlah      : ${form.jumlah} unit
Harga       : ${formatRupiah(hargaSatuan)} / unit
Ongkir      : ${formatRupiah(ongkir)}
*TOTAL       : ${formatRupiah(total)}*

━━━━━━━━━━━━━━━━━━
👤 *DATA PEMBELI*
━━━━━━━━━━━━━━━━━━
Nama        : ${form.nama}
No. WA      : ${form.wa}
Email       : ${form.email}
Alamat      : ${form.alamat}
Kota        : ${form.kota}
Kode Pos    : ${form.kodepos}

━━━━━━━━━━━━━━━━━━
💳 *PEMBAYARAN*
━━━━━━━━━━━━━━━━━━
Metode      : ${form.metodeBayar}${bankInfo}
Catatan     : ${form.catatan || '-'}

Mohon konfirmasi ketersediaan & instruksi pembayarannya ya. Terima kasih! 🙏`

    const url = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(pesan)}`
    window.open(url, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ==== BACKGROUND ==== */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-br from-deepsea/95 via-bubblegum/80 to-mango/70"></div>

      <div className="absolute top-20 -left-20 w-96 h-96 bg-mango/40 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-mint/40 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }}></div>

      {/* ==== CONTENT ==== */}
      <div className="relative z-10 pt-28 pb-16 px-5">
        <div className="max-w-6xl mx-auto">
          {/* Tombol Back */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-cream/90 backdrop-blur text-deepsea font-extrabold px-5 py-3 rounded-full hover:bg-mango transition-all shadow-lg mb-8"
          >
            ← Kembali ke Beranda
          </button>

          {/* Header */}
          <div className="text-center mb-10 text-cream">
            <div className="text-6xl mb-3 animate-bounce-slow">🛒🐱</div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-3">
              Checkout <span className="text-mango">FeederKu Pro</span>
            </h1>
            <p className="text-lg text-cream/80 max-w-2xl mx-auto">
              Isi data pengiriman di bawah ini. Setelah klik "Pesan Sekarang", pesananmu akan dikirim
              otomatis ke WhatsApp admin kami. 🐾
            </p>
          </div>

          {submitted ? (
            /* ==== SUCCESS STATE ==== */
            <div className="max-w-2xl mx-auto bg-cream rounded-[2.5rem] p-10 text-center shadow-2xl">
              <div className="text-7xl mb-4">🎉</div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-deepsea">
                Pesanan Terkirim!
              </h2>
              <p className="text-deepsea/70 mb-6">
                Kami sudah membuka WhatsApp kamu. Silakan lanjutkan chat dengan admin untuk konfirmasi
                pembayaran & pengiriman ya!
              </p>
              <div className="bg-mango/30 rounded-2xl p-4 mb-6 text-left">
                <div className="text-sm font-bold text-deepsea/60">Total Pesanan</div>
                <div className="text-3xl font-extrabold text-bubblegum font-display">
                  {formatRupiah(total)}
                </div>
              </div>
              <button
                onClick={onBack}
                className="w-full bg-deepsea text-cream font-extrabold py-4 rounded-2xl hover:bg-bubblegum transition-all"
              >
                🏠 Kembali ke Beranda
              </button>
            </div>
          ) : (
            /* ==== FORM ==== */
            <div className="grid lg:grid-cols-5 gap-8">
              {/* FORM KIRI */}
              <form onSubmit={handleSubmit} className="lg:col-span-3 bg-cream/95 backdrop-blur rounded-[2rem] p-6 md:p-8 shadow-2xl">
                <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-2 text-deepsea">
                  <span className="w-10 h-10 bg-mango rounded-full flex items-center justify-center text-xl">👤</span>
                  Data Pembeli
                </h2>

                <div className="space-y-5">
                  {/* Nama */}
                  <div data-error={!!errors.nama}>
                    <label className="block font-bold text-sm mb-2 text-deepsea">
                      Nama Lengkap <span className="text-bubblegum">*</span>
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={form.nama}
                      onChange={handleChange}
                      placeholder="Contoh: Budi Santoso"
                      className={`w-full px-4 py-3 rounded-2xl border-2 bg-white outline-none transition-all ${
                        errors.nama
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-mango/30 focus:border-bubblegum'
                      }`}
                    />
                    {errors.nama && <p className="text-red-500 text-xs mt-1 font-bold">⚠ {errors.nama}</p>}
                  </div>

                  {/* WA & Email */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div data-error={!!errors.wa}>
                      <label className="block font-bold text-sm mb-2 text-deepsea">
                        Nomor WhatsApp <span className="text-bubblegum">*</span>
                      </label>
                      <input
                        type="tel"
                        name="wa"
                        value={form.wa}
                        onChange={handleChange}
                        placeholder="0812-3456-7890"
                        className={`w-full px-4 py-3 rounded-2xl border-2 bg-white outline-none transition-all ${
                          errors.wa
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-mango/30 focus:border-bubblegum'
                        }`}
                      />
                      {errors.wa && <p className="text-red-500 text-xs mt-1 font-bold">⚠ {errors.wa}</p>}
                    </div>

                    <div data-error={!!errors.email}>
                      <label className="block font-bold text-sm mb-2 text-deepsea">
                        Email <span className="text-bubblegum">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email@contoh.com"
                        className={`w-full px-4 py-3 rounded-2xl border-2 bg-white outline-none transition-all ${
                          errors.email
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-mango/30 focus:border-bubblegum'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">⚠ {errors.email}</p>}
                    </div>
                  </div>

                  {/* Alamat */}
                  <div data-error={!!errors.alamat}>
                    <label className="block font-bold text-sm mb-2 text-deepsea">
                      Alamat Lengkap <span className="text-bubblegum">*</span>
                    </label>
                    <textarea
                      name="alamat"
                      value={form.alamat}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Jl. Contoh No. 123, RT 01/RW 02, Kel. ..."
                      className={`w-full px-4 py-3 rounded-2xl border-2 bg-white outline-none transition-all resize-none ${
                        errors.alamat
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-mango/30 focus:border-bubblegum'
                      }`}
                    ></textarea>
                    {errors.alamat && <p className="text-red-500 text-xs mt-1 font-bold">⚠ {errors.alamat}</p>}
                  </div>

                  {/* Kota & Kode Pos */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div data-error={!!errors.kota}>
                      <label className="block font-bold text-sm mb-2 text-deepsea">
                        Kota / Kabupaten <span className="text-bubblegum">*</span>
                      </label>
                      <input
                        type="text"
                        name="kota"
                        value={form.kota}
                        onChange={handleChange}
                        placeholder="Contoh: Sidoarjo"
                        className={`w-full px-4 py-3 rounded-2xl border-2 bg-white outline-none transition-all ${
                          errors.kota
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-mango/30 focus:border-bubblegum'
                        }`}
                      />
                      {errors.kota && <p className="text-red-500 text-xs mt-1 font-bold">⚠ {errors.kota}</p>}
                    </div>

                    <div data-error={!!errors.kodepos}>
                      <label className="block font-bold text-sm mb-2 text-deepsea">
                        Kode Pos <span className="text-bubblegum">*</span>
                      </label>
                      <input
                        type="text"
                        name="kodepos"
                        value={form.kodepos}
                        onChange={handleChange}
                        placeholder="61274"
                        className={`w-full px-4 py-3 rounded-2xl border-2 bg-white outline-none transition-all ${
                          errors.kodepos
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-mango/30 focus:border-bubblegum'
                        }`}
                      />
                      {errors.kodepos && <p className="text-red-500 text-xs mt-1 font-bold">⚠ {errors.kodepos}</p>}
                    </div>
                  </div>

                  {/* Jumlah */}
                  <div>
                    <label className="block font-bold text-sm mb-2 text-deepsea">Jumlah Unit</label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setForm(f => ({ ...f, jumlah: Math.max(1, f.jumlah - 1) }))}
                        className="w-12 h-12 bg-deepsea text-cream rounded-2xl font-extrabold text-xl hover:bg-bubblegum transition-all"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        name="jumlah"
                        min="1"
                        max="10"
                        value={form.jumlah}
                        onChange={handleChange}
                        className="flex-1 px-4 py-3 rounded-2xl border-2 border-mango/30 focus:border-bubblegum bg-white outline-none text-center font-extrabold text-lg"
                      />
                      <button
                        type="button"
                        onClick={() => setForm(f => ({ ...f, jumlah: Math.min(10, f.jumlah + 1) }))}
                        className="w-12 h-12 bg-deepsea text-cream rounded-2xl font-extrabold text-xl hover:bg-bubblegum transition-all"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Metode Bayar */}
                  <div>
                    <label className="block font-bold text-sm mb-2 text-deepsea">Metode Pembayaran</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {['Transfer Bank', 'COD', 'QRIS'].map(m => (
                        <label
                          key={m}
                          className={`cursor-pointer text-center px-4 py-3 rounded-2xl border-2 font-bold text-sm transition-all ${
                            form.metodeBayar === m
                              ? 'bg-deepsea text-cream border-deepsea'
                              : 'bg-white text-deepsea border-mango/30 hover:border-bubblegum'
                          }`}
                        >
                          <input
                            type="radio"
                            name="metodeBayar"
                            value={m}
                            checked={form.metodeBayar === m}
                            onChange={handleChange}
                            className="hidden"
                          />
                          {m === 'Transfer Bank' && '🏦 '}
                          {m === 'COD' && '🚚 '}
                          {m === 'QRIS' && '📱 '}
                          {m}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* ==== BANK SELECTION (muncul kalau Transfer Bank) ==== */}
                  {form.metodeBayar === 'Transfer Bank' && (
                    <div
                      data-error={!!errors.bank}
                      className="bg-gradient-to-br from-mango/10 to-bubblegum/10 border-2 border-dashed border-bubblegum/40 rounded-3xl p-5 animate-fadeIn"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">🏦</span>
                        <div>
                          <h3 className="font-extrabold text-deepsea">Pilih Bank Tujuan</h3>
                          <p className="text-xs text-deepsea/60">Pilih bank yang kamu gunakan untuk transfer</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {BANKS.map(bank => {
                          const isActive = form.bank === bank.id
                          return (
                            <button
                              type="button"
                              key={bank.id}
                              onClick={() => handleBankSelect(bank.id)}
                              className={`group relative bg-white rounded-2xl p-3 border-2 transition-all hover:-translate-y-1 shadow-sm hover:shadow-lg ${
                                isActive
                                  ? `${bank.border} ring-4 ring-offset-2 ring-bubblegum/30`
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              {/* Logo container */}
                              <div className={`h-12 mb-2 rounded-xl ${bank.bgLight} flex items-center justify-center px-2 overflow-hidden`}>
                                {bank.logo}
                              </div>
                              <div className={`text-xs font-extrabold ${bank.textColor}`}>
                                {bank.name}
                              </div>

                              {/* Checkmark */}
                              {isActive && (
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-bubblegum text-cream rounded-full flex items-center justify-center text-xs font-extrabold shadow-lg">
                                  ✓
                                </div>
                              )}
                            </button>
                          )
                        })}
                      </div>

                      {/* Info rekening */}
                      {selectedBank && selectedBank.id !== 'lain' && (
                        <div className={`mt-4 bg-white rounded-2xl p-4 border-l-4 ${selectedBank.border} shadow-sm animate-fadeIn`}>
                          <div className="text-xs text-deepsea/50 font-bold mb-1">REKENING TUJUAN</div>
                          <div className="flex items-center gap-3 flex-wrap">
                            <div className={`w-14 h-9 ${selectedBank.bgLight} rounded-lg flex items-center justify-center px-1 flex-shrink-0`}>
                              {selectedBank.logo}
                            </div>
                            <div>
                              <div className="font-extrabold text-lg text-deepsea tracking-wider">
                                {selectedBank.rekening}
                              </div>
                              <div className="text-xs text-deepsea/60">
                                a.n. {selectedBank.atasNama}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {selectedBank && selectedBank.id === 'lain' && (
                        <div className="mt-4 bg-white rounded-2xl p-4 border-l-4 border-gray-400 shadow-sm">
                          <div className="text-sm text-deepsea/70">
                            💬 Untuk bank lain, admin akan menghubungi kamu via WhatsApp untuk info rekening.
                          </div>
                        </div>
                      )}

                      {errors.bank && (
                        <p className="text-red-500 text-xs mt-3 font-bold">⚠ {errors.bank}</p>
                      )}
                    </div>
                  )}

                  {/* Catatan */}
                  <div>
                    <label className="block font-bold text-sm mb-2 text-deepsea">Catatan (Opsional)</label>
                    <textarea
                      name="catatan"
                      value={form.catatan}
                      onChange={handleChange}
                      rows="2"
                      placeholder="Contoh: Tolong dikemas bubble wrap"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-mango/30 focus:border-bubblegum bg-white outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
              </form>

              {/* RINGKASAN KANAN */}
              <div className="lg:col-span-2 space-y-5">
                <div className="bg-deepsea text-cream rounded-[2rem] p-6 md:p-8 shadow-2xl sticky top-28">
                  <h2 className="text-xl font-extrabold mb-5 flex items-center gap-2">
                    <span className="w-10 h-10 bg-mango text-deepsea rounded-full flex items-center justify-center text-xl">📦</span>
                    Ringkasan Pesanan
                  </h2>

                  {/* Produk */}
                  <div className="bg-cream/10 rounded-2xl p-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-mango to-bubblegum rounded-2xl flex items-center justify-center text-3xl">
                        🐱
                      </div>
                      <div className="flex-1">
                        <div className="font-extrabold">FeederKu Pro</div>
                        <div className="text-xs text-cream/60">{form.jumlah} × {formatRupiah(hargaSatuan)}</div>
                      </div>
                    </div>
                  </div>

                  {/* Rincian */}
                  <div className="space-y-3 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-cream/70">Subtotal Produk</span>
                      <span className="font-bold">{formatRupiah(form.jumlah * hargaSatuan)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Ongkos Kirim</span>
                      <span className="font-bold">{formatRupiah(ongkir)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-cream/70">Metode Bayar</span>
                      <span className="font-bold text-right">{form.metodeBayar}</span>
                    </div>

                    {/* Bank di ringkasan */}
                    {form.metodeBayar === 'Transfer Bank' && selectedBank && (
                      <div className="flex justify-between items-center pt-2 border-t border-cream/10">
                        <span className="text-cream/70">Bank</span>
                        <div className="flex items-center gap-2">
                          <div className={`w-10 h-6 bg-white rounded flex items-center justify-center px-1`}>
                            {selectedBank.logo}
                          </div>
                          <span className="font-bold">{selectedBank.name}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Total */}
                  <div className="border-t-2 border-dashed border-cream/20 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">TOTAL</span>
                      <span className="text-3xl font-extrabold font-display text-mango">
                        {formatRupiah(total)}
                      </span>
                    </div>
                  </div>

                  {/* Tombol Submit */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="group w-full bg-gradient-to-r from-mango to-bubblegum text-deepsea font-extrabold py-5 rounded-2xl hover:scale-[1.02] transition-all shadow-xl text-lg flex items-center justify-center gap-3"
                  >
                    <span className="text-2xl group-hover:animate-bounce">💬</span>
                    Pesan Sekarang
                  </button>

                  <p className="text-center text-xs text-cream/50 mt-3">
                    Pesanan akan dikirim ke WhatsApp admin
                  </p>

                  {/* Trust Badges */}
                  <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t-2 border-dashed border-cream/20">
                    {[
                      { i: '🚚', l: 'Gratis Ongkir' },
                      { i: '🔒', l: 'Aman' },
                      { i: '⭐', l: 'Garansi 1th' },
                    ].map((b, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl mb-1">{b.i}</div>
                        <div className="text-xs font-bold text-cream/70">{b.l}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bantuan */}
                <div className="bg-mango/20 backdrop-blur border-2 border-mango rounded-3xl p-5 text-cream">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">💡</span>
                    <div>
                      <div className="font-extrabold mb-1 text-deepsea">Butuh Bantuan?</div>
                      <p className="text-sm text-deepsea/70">
                        Chat admin kami di WhatsApp <b>+62 812-3456-7890</b> — kami siap bantu 24/7.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}