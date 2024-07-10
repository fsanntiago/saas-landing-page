import { logosTickers } from '../utils/logos-tickers'

export function LogoTicker() {
  return (
    <div className="bg-black py-24 text-white">
      <div className="container">
        <h2 className="text-center text-xl text-white/50">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="relative mt-9 overflow-hidden before:left-0 before:top-0 before:h-full before:w-5 before:bg-[linear-gradient(to_right,#000,rgba(0,0,0,0))] after:right-0 after:top-0 after:h-full after:w-5 after:bg-[linear-gradient(to_left,#000,rgba(0,0,0,0))] sm:before:absolute sm:before:content-[''] sm:after:absolute sm:after:content-['']">
          <div className="grid grid-cols-2 items-start justify-items-center gap-x-4 gap-y-4 sm:flex sm:justify-center sm:gap-16">
            {logosTickers.map((logo) => (
              <img
                key={logo.id}
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto flex-none"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
