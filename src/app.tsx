import { Banner } from './components/banner'
import { Hero } from './components/hero'
import { Navbar } from './components/navbar'

export function App() {
  return (
    <div className="min-h-screen antialiased">
      <Banner />
      <Navbar />
      <Hero />
    </div>
  )
}
