import * as Icon from './icons'

export function Banner() {
  return (
    <div className="gradient-primary bg-gradient-to-r py-3 text-center">
      <div className="container flex items-center justify-center">
        <p className="flex gap-2 font-medium">
          <span className="hidden sm:inline">
            This page is included in a free SaaS Website Kit.
          </span>
          <a
            href="#"
            className="flex items-center gap-1 underline underline-offset-4"
          >
            View the complete Kit
            <span>
              <Icon.ArrowRight />
            </span>
          </a>
        </p>
      </div>
    </div>
  )
}
