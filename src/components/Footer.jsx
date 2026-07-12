import { FiArrowUp, FiGithub, FiLinkedin } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Abdulrahman Mohamed. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/codedbybodi" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="transition hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"><FiGithub size={18} /></a>
          <a href="https://www.linkedin.com/in/abdulrahman-khodiary" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="transition hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"><FiLinkedin size={18} /></a>
          <a href="#top" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 transition hover:border-emerald-300/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300">Back to top <FiArrowUp size={15} /></a>
        </div>
      </div>
    </footer>
  )
}
