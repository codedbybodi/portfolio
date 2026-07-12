import { motion } from "motion/react"
import { ArrowUpRight, Check, Copy } from "lucide-react"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { useState } from "react"
import Footer from "./Footer"

const email = "abdulrahmanm55@icloud.com"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  const socialLinks = [
    { icon: FiGithub, title: "GitHub", href: "https://github.com/codedbybodi", external: true },
    { icon: FiLinkedin, title: "LinkedIn", href: "https://www.linkedin.com/in/abdulrahman-khodiary", external: true },
    { icon: FiMail, title: "Email", href: `mailto:${email}` },
  ]

  return (
    <section id="contact" className="relative overflow-hidden pt-20 sm:pt-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[140px]" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10">
        <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-300">Contact</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} viewport={{ once: true }} className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] text-white sm:text-6xl">Let’s build<br />something great.</motion.h2>
        <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} viewport={{ once: true }} className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">I’m open to full-time roles, freelance work, and interesting product collaborations. If you have a project in mind, let’s talk.</motion.p>

        <div className="mt-12 h-px bg-gradient-to-r from-white via-zinc-700 to-transparent sm:mt-16" />

        <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
          <a href={`mailto:${email}`} className="group flex min-w-0 items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-6 transition hover:border-emerald-300/45 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-emerald-300 sm:px-8">
            <span className="min-w-0 text-left"><span className="block text-xs font-medium uppercase tracking-[0.22em] text-white/60">Email me</span><span className="mt-2 block break-all text-lg font-semibold text-white sm:text-2xl">{email}</span></span>
            <ArrowUpRight className="ml-4 shrink-0 text-emerald-300" size={23} />
          </a>
          <button type="button" onClick={copyEmail} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-4 text-sm font-medium text-white/80 transition hover:border-emerald-300/50 hover:bg-emerald-300/10 focus:outline-none focus:ring-2 focus:ring-emerald-300" aria-live="polite">
            {copied ? <><Check size={18} className="text-emerald-300" /> Copied</> : <><Copy size={18} /> Copy email</>}
          </button>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {socialLinks.map((item, index) => {
            const Icon = item.icon
            return <motion.a key={item.title} href={item.href} {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} viewport={{ once: true }} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-emerald-300">
              <Icon size={24} className="text-emerald-300" />
              <span className="mt-8 flex items-center justify-between text-lg font-medium">{item.title}<ArrowUpRight size={19} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
            </motion.a>
          })}
        </div>
      </div>
      <Footer />
    </section>
  )
}
