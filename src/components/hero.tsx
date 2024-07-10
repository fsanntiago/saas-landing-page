import cursoImage from './../assets/images/cursor.svg'
import messageImage from './../assets/images/message.svg'
import { ArrowRight as IconArroRight } from './icons'

export function Hero() {
  return (
    <div className="gradient-secondary relative overflow-clip bg-gradient-to-b py-[72px] text-white sm:py-24">
      <div className="absolute left-1/2 top-[calc(100%-96px)] h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] border border-[#B48CDE] bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)] sm:top-[calc(100%-120px)] sm:h-[728px] sm:w-[1536px] lg:h-[700px] lg:w-[2380px]" />
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 rounded-lg border border-zinc-800 px-2 py-1"
          >
            <span className="text-white/50">Version 2.0 is here</span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <IconArroRight />
            </span>
          </a>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="relative inline-flex">
            <h1 className="inline-flex text-center text-7xl font-bold tracking-tighter sm:text-[150px]">
              One Task <br /> at a Time
            </h1>
            <img
              src={cursoImage}
              alt=""
              height={200}
              width={200}
              className="absolute right-[498px] top-[70px] hidden sm:inline"
            />
            <img
              src={messageImage}
              alt=""
              height={200}
              width={200}
              className="absolute left-[515px] top-[120px] hidden sm:inline"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="mt-8 max-w-md text-center text-xl">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="rounded-lg bg-white px-5 py-3 font-medium text-black">
            Get for free
          </button>
        </div>
      </div>
    </div>
  )
}
