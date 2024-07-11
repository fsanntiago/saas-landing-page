import { Banner } from './components/banner'
import { Features } from './components/features'
import { Hero } from './components/hero'
import { LogoTicker } from './components/logo-ticker'
import { Navbar } from './components/navbar'

export function App() {
  return (
    <div className="min-h-screen antialiased">
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
    </div>
  )
}
