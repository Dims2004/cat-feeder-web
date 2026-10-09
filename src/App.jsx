import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import AppShowcase from './components/AppShowcase'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Location from './components/Location'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Checkout from './pages/Checkout'

function App() {
  const [page, setPage] = useState('home')

  // Scroll to top tiap pindah halaman
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  // Support hash-based routing (#checkout) biar bisa di-bookmark
  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === '#checkout') setPage('checkout')
      else setPage('home')
    }
    window.addEventListener('hashchange', onHash)
    onHash()
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const goToCheckout = () => {
    window.location.hash = '#checkout'
    setPage('checkout')
  }

  const goToHome = () => {
    window.location.hash = ''
    setPage('home')
  }

  if (page === 'checkout') {
    return (
      <div className="relative min-h-screen">
        <Navbar onNavigate={setPage} isCheckout />
        <Checkout onBack={goToHome} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <Navbar onNavigate={setPage} />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AppShowcase />
        <Testimonials />
        <Pricing onCheckout={goToCheckout} />
        <Location />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App