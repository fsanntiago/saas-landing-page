import { motion } from 'framer-motion'

import { useMediaQuery } from '../hooks/use-media-query'
import { logosTickers } from '../utils/logos-tickers'

export function LogoTicker() {
  const { isMobile } = useMediaQuery()

  return (
    <div className="bg-black py-24 text-white">
      <div className="container">
        <h2 className="text-center text-xl text-white/50">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="relative mt-9 flex overflow-hidden before:left-0 before:top-0 before:z-10 before:h-full before:w-5 before:bg-[linear-gradient(to_right,#000,rgba(0,0,0,0))] after:right-0 after:top-0 after:h-full after:w-5 after:bg-[linear-gradient(to_left,#000,rgba(0,0,0,0))] sm:before:absolute sm:before:content-[''] sm:after:absolute sm:after:content-['']">
          {/* {isMobile? : } */}
          <motion.div
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
            }}
            className="grid grid-cols-2 items-start justify-items-center gap-x-4 gap-y-4 sm:flex sm:flex-none sm:justify-center sm:gap-16 sm:pr-16"
            initial={isMobile ? {} : { translateX: 0 }}
            animate={isMobile ? {} : { translateX: '-50%' }}
          >
            {Array.from({ length: 2 }).map(() =>
              logosTickers.map((logo) => (
                <img
                  key={logo.id}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto flex-none"
                />
              )),
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
