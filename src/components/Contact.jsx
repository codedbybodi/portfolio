import { motion } from "motion/react";
import { ArrowUpRight, Copy, Check,  } from "lucide-react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useState } from "react";



export default function Contact() {
    const email = "abdulrahmanm55@icloud.com"
    
    const [copied, setCopied] = useState(false)

    async function copyEmail() {
        await navigator.clipboard.writeText(email)

        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }
    
    return (
        <section id="contact" className="relative overflow-hidden py-40">
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[180px]" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                {/* label */}
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="uppercase tracking-[0.35em] text-zinc-500"
                >
                    Conact
                </motion.p>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="mt-6 max-w-4xl text-6xl font-semibold leading-none text-white"
                >
                    Let's Build
                    <br />
                    Somthing Great.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 max-w-2xl text-lg leading-9 text-zinc-400"
                >   
                    I'm currently looking for freelance work and exciting opportunities. if you have an idea or project, Let's make it happen
                </motion.p>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-20 h-px origin-left bg-gradient-to-r from-white via-zinc-700 to-transparent"
                />

                {/* Email */}
                <motion.button
                    onClick={copyEmail}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{
                        y: -4
                    }}
                    className="group mt-5 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-7 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/10"
                >   
                    <div className="text-left">
                        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Email</p>

                        <h3 className="mt-3 text-2xl font-semibold text-white">{email}</h3>
                    </div>
                    <div>
                        {copied ? (
                            <Check size={24} className="text-emerald-400"/>
                        ) : (
                            <Copy size={22} className="transition text-white group-hover:scale-110"/>
                        )}
                    </div>
                </motion.button>

                {/* Socials */}
                <div className="mt-[18px] grid gap-6 md:grid-cols-3 text-white">
                        {[
                            {
                                icon: FiGithub,
                                title: "Github",
                                href: "https://github.com/codedbybodi",
                            },
                            {
                                icon: FiLinkedin,
                                title: "Linked In",
                                href: "https://www.linkedin.com/in/abdulrahman-khodiary",
                            },
                            {
                                icon: FiMail,
                                title: "Mail",
                                href: "mailto:abdulrahmanm55@icloud.com",
                            },
                        ].map((item, index) =>
                            <motion.a
                                key={item.title}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/10"
                            >
                                <item.icon size={28} className="mb-8" />
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-medium">
                                        {item.title}
                                    </h3>

                                    <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/>
                                </div>
                            </motion.a>
                        )}
                </div>
            </div>
        </section>
    )

}