import { Banner } from './components/banner'
import { Faqs } from './components/faqs'
import { Features } from './components/features'
import { Hero } from './components/hero'
import { LogoTicker } from './components/logo-ticker'
import { Navbar } from './components/navbar'
import { ProductShowcase } from './components/product-showcase'

export function App() {
  return (
    <div className="min-h-screen antialiased">
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <Faqs />
    </div>
  )
}
