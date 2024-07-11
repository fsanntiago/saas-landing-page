import appScreen from '../assets/images/app-screen.png'

export function ProductShowcase() {
  return (
    <div className="bg-black bg-gradient-to-b from-black to-[#5D2CA8] py-24 text-white">
      <div className="container flex flex-col justify-center">
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
        <img src={appScreen} alt="The product screenshot" className="mt-14" />
      </div>
    </div>
  )
}
