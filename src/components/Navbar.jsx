import { useState, useEffect } from 'react'

export default function Navbar({ onNavigate, isCheckout }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { name: 'Fitur', href: '#fitur' },
    { name: 'Cara Kerja', href: '#cara-kerja' },
    { name: 'Aplikasi', href: '#aplikasi' },
    { name: 'Harga', href: '#harga' },
    { name: 'Lokasi', href: '#lokasi' },
  ]

  const handleNavClick = (href) => {
    setOpen(false)
    if (isCheckout) {
      // Kalau di halaman checkout, balik ke home dulu
      onNavigate?.('home')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cream/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => {
            if (isCheckout) onNavigate?.('home')
            else window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-11 h-11 bg-mango rounded-2xl flex items-center justify-center text-2xl shadow-md group-hover:rotate-12 transition-transform">
            🐱
          </div>
          <span className="font-display font-extrabold text-2xl text-deepsea">
            Feeder<span className="text-bubblegum">Ku</span>
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.name} href={isCheckout ? '#' : l.href}
              onClick={(e) => {
                if (isCheckout) {
                  e.preventDefault()
                  handleNavClick(l.href)
                }
              }}
              className="font-bold text-deepsea hover:text-bubblegum transition-colors relative group">
              {l.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bubblegum transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => {
            if (isCheckout) onNavigate?.('home')
            setTimeout(() => {
              document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' })
            }, 100)
          }}
          className="hidden md:inline-flex items-center gap-2 bg-deepsea text-cream font-bold px-6 py-3 rounded-full hover:bg-bubblegum transition-all hover:scale-105 shadow-md"
        >
          ⬇ Download App
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-11 h-11 bg-deepsea rounded-xl flex items-center justify-center text-cream text-2xl"
          aria-label="Menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] mt-3' : 'max-h-0'}`}>
        <div className="bg-cream/95 backdrop-blur-md mx-4 rounded-3xl shadow-xl p-5 flex flex-col gap-3">
          {links.map(l => (
            <a key={l.name} href={isCheckout ? '#' : l.href}
              onClick={(e) => {
                if (isCheckout) {
                  e.preventDefault()
                  handleNavClick(l.href)
                } else {
                  setOpen(false)
                }
              }}
              className="font-bold text-deepsea py-2 border-b border-mango/20 last:border-none">
              {l.name}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false)
              if (isCheckout) onNavigate?.('home')
              setTimeout(() => {
                document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' })
              }, 100)
            }}
            className="mt-2 text-center bg-deepsea text-cream font-bold px-6 py-3 rounded-full"
          >
            ⬇ Download App
          </button>
        </div>
      </div>
    </nav>
  )
}