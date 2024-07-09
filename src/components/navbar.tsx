import Logo from '../assets/images/Logo.svg'
import { navLinks } from '../utils/nav-links'
import * as Icons from './icons'

export function Navbar() {
  return (
    <div className="bg-black">
      <div className="container justify-between sm:flex">
        <div className="flex items-center justify-between py-4">
          <img className="h-12 w-12" alt="" src={Logo} />
          <Icons.Menu className="sm:hidden" />
        </div>
        <nav className="bg-bl hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-opacity-60 transition hover:text-opacity-100"
            >
              {link.title}
            </a>
          ))}
          <button className="rounded-lg bg-white px-4 py-2">
            Get for free
          </button>
        </nav>
      </div>
    </div>
  )
}
