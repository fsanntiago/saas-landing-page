import { SocialMediaList } from './social-media'

export function Footer() {
  return (
    <footer className="border-t border-white/20 bg-black py-5 text-white/60">
      <div className="container">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            <span>
              &copy; {new Date().getFullYear()} Copyright Your Company, Inc. All
              rights reserved
            </span>
          </div>
          <SocialMediaList />
        </div>
      </div>
    </footer>
  )
}
