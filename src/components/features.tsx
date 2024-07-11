import { featuresList } from '../utils/features-list'
import * as Icons from './icons'

export function Features() {
  return (
    <div className="bg-black py-[72px] text-white sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          Everything you need
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-white/70">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          {featuresList.map(({ id, title, description }) => (
            <div
              key={id}
              className="flex-1 rounded-xl border border-white/30 px-5 py-10 text-center"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white text-black">
                <Icons.Ecosystem className="h-5 w-5 font-bold" weight="bold" />
              </div>
              <h3 className="mt-6 font-bold">{title}</h3>
              <p className="mt-2 text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
