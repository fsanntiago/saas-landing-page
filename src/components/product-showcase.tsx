import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import appScreen from '../assets/images/app-screen.png'
import { useMediaQuery } from '../hooks/use-media-query'

export function ProductShowcase() {
  const appImageRef = useRef<HTMLImageElement | null>(null)
  const { isMobile } = useMediaQuery()

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const { scrollYProgress } = useScroll({
    target: appImageRef,
    offset: ['start end', 'end end'],
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return (
    <div className="bg-black bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] text-white sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          Intuitive interface
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-white/70">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <motion.div
          style={{
            scale,
            opacity,
            rotateX,
            transformPerspective: '800px',
          }}
          className="mx-auto w-full max-w-5xl"
        >
          <img
            src={appScreen}
            alt="The product screenshot"
            className="mt-14"
            ref={appImageRef}
          />
        </motion.div>
      </div>
    </div>
  )
}
