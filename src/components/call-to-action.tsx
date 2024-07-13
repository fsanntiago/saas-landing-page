import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import emojiStarImage from '../assets/images/emojistar.svg'
import helixImage from '../assets/images/helix2.svg'

export function CallToAction() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <div
      className="bg-black py-[72px] text-center text-white sm:py-24"
      ref={containerRef}
    >
      <div className="container relative max-w-lg">
        <motion.div style={{ translateY }}>
          <img
            src={helixImage}
            alt=""
            className="absolute left-[calc(100%+36px)] top-6"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <img
            src={emojiStarImage}
            alt=""
            className="absolute -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>
        <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl">
          Get instant access
        </h2>
        <p className="mt-5 text-xl text-white/70">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mx-auto mt-10 flex max-w-sm flex-col gap-2.5 sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 rounded-lg bg-white/20 px-5 placeholder:text-white/30 sm:flex-1"
          />
          <button
            className="h-12 rounded-lg bg-white px-5 font-medium text-black"
            type="submit"
          >
            Get access
          </button>
        </form>
      </div>
    </div>
  )
}
