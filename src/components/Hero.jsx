import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Menu, X } from "lucide-react"
import { FiGithub, FiLinkedin } from "react-icons/fi"

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#stack" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

function NavLinks({ onNavigate, mobile = false }) {
  return (
    <nav aria-label={mobile ? "Mobile navigation" : "Primary navigation"} className={mobile ? "flex flex-col" : "flex items-center gap-5"}>
      {navItems.map((item) => (
        <a key={item.href} href={item.href} onClick={onNavigate} className={mobile ? "border-b border-white/10 py-4 text-xl font-medium text-white transition hover:text-emerald-300" : "text-sm text-white/70 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300"}>
          {item.label}
        </a>
      ))}
    </nav>
  )
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setMenuOpen(false)
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [])

  return (
    <section id="top" className="relative flex min-h-[calc(100svh-1px)] w-full items-start px-5 pb-16 pt-5 sm:px-8 sm:pt-8 lg:px-10 lg:pb-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <header className="relative flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <a href="#top" className="group flex min-w-0 items-center gap-3 focus:outline-none focus:ring-2 focus:ring-emerald-300">
            <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-emerald-300/25 bg-emerald-300/10">
              <img src="/ios-avatar1.webp" width="40" height="40" decoding="async" className="h-10 w-10 rounded-full border border-white/15 object-cover" alt="Abdulrahman Mohamed" />
            </span>
            <span className="min-w-0 text-sm font-medium text-white sm:text-base">Abdulrahman <span className="text-emerald-300">Mohamed</span></span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <NavLinks />
            <a href="https://www.linkedin.com/in/abdulrahman-khodiary" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-white/65 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300"><FiLinkedin size={18} /></a>
            <a href="https://github.com/codedbybodi" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-white/65 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300"><FiGithub size={18} /></a>
          </div>

          <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white transition hover:border-emerald-300/60 hover:bg-emerald-300/10 focus:outline-none focus:ring-2 focus:ring-emerald-300 md:hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={menuOpen ? "close" : "menu"} initial={{ opacity: 0, rotate: -90, scale: 0.7 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 90, scale: 0.7 }} transition={{ duration: 0.18 }}>
                {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              </motion.span>
            </AnimatePresence>
            <span className="sr-only">{menuOpen ? "Close navigation" : "Open navigation"}</span>
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.2 }} className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-full max-w-sm rounded-2xl border border-white/15 bg-[#07100c]/95 p-5 shadow-2xl backdrop-blur-xl md:hidden">
                <NavLinks mobile onNavigate={() => setMenuOpen(false)} />
                <div className="mt-5 flex gap-3">
                  <a href="https://www.linkedin.com/in/abdulrahman-khodiary" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/75"><FiLinkedin /> LinkedIn</a>
                  <a href="https://github.com/codedbybodi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/75"><FiGithub /> GitHub</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <div className="my-auto max-w-5xl pb-8 pt-20 sm:pt-28 lg:pt-32">
          <p className="text-sm font-medium tracking-[0.18em] text-emerald-300 sm:text-base">FULL-STACK DEVELOPER · CAIRO, EGYPT</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-7xl">
            I build practical digital{" "}
            <span className="relative">
                products
                <svg
                    viewBox="0 0 286 73"
                    fill="none"
                    className="absolute -left-2 -right-2 top-[5px] bottom-0 translate-y-1"
                >
                    <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{
                        duration: 1.25,
                        ease: "easeInOut",
                    }}
                    d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                    stroke="#A7F3D0"
                    strokeWidth="3"
                    />
                </svg>
            </span>
            {" "}with <span className="text-white/65">precision</span> and <span className="font-script text-[1.12em] font-normal italic text-emerald-200">intent.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">I create useful web products with React, FastAPI, PostgreSQL, and AI combining product thinking with full-stack execution.</p>
          <p className="mt-5 text-sm text-white/60">3+ years of experience · Available for full-time and freelance opportunities</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-[#031008] transition hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#020403]">View selected work</a>
            <a href="mailto:abdulrahmanm55@icloud.com" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-emerald-300/60 hover:bg-emerald-300/10 focus:outline-none focus:ring-2 focus:ring-emerald-300">Email me</a>
          </div>
        </div>
      </div>
    </section>
  )
}
