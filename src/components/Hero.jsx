import React from "react"
import { motion } from "motion/react"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { FaXTwitter } from "react-icons/fa6"
import { FaArrowCircleRight } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="relative min-h-screen w-full px-12 pt-10 text-[#fff]">
            <header className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 pb-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='flex items-center gap-3'
                >
                    <motion.div
                        initial={{ scale: 0.95, y: -4 }}
                        whileInView={{ scale: 1, y: 0 }}
                        whileHover={{ scale: 1.04, rotate: 2 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                        className="relative flex h-10 w-10 items-center justify-center"
                    >
                        <span className="absolute inset-0 rounded-full bg-emerald-300/10 blur-xl animate-pulse" />
                        <span className="absolute inset-0 rounded-full border border-emerald-300/20" />
                        <img src="/ios-avatar1.png" className="relative w-10 h-10 rounded-full border border-white/15 bg-white/5" alt=""/>
                    </motion.div>
                    <p className="text-white">
                        Hey, I'm{' '}
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            whileHover={{ scale: 1.03, textShadow: '0 0 18px rgba(13,150,0,0.9)' }}
                            className="text-emerald-300"
                        >
                            Abdulrahman Mohamed
                        </motion.span>
                    </p>
                    <motion.a 
                        href="https://open.spotify.com/track/3I5azi0831uNpYQsfYsW7G?si=137022373af64e08" 
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
                        whileHover={{ paddingLeft: "20px", paddingRight: "20px" }}
                        >
                        <span className="text-[#0d9600]">♪</span>
                        <span className="text-zinc-200">Cola</span>
                        <span className="text-zinc-500">by Lana Del Rey</span>
                    </motion.a>

                </motion.div>

                <nav className="flex flex-wrap items-center gap-4 md:gap-6">
                    <a href="https://www.linkedin.com/in/abdulrahman-khodiary" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition">
                        <FiLinkedin size={16} /> LinkedIn
                    </a>
                    <a href="https://github.com/codedbybodi" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition">
                        <FiGithub size={16} /> GitHub
                    </a>
                    <a href="https://x.com/abdrhmanm1" className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition">
                        <FaXTwitter size={16} /> X
                    </a>
                    <motion.a
                        href="#contact"
                        className="relative inline-flex overflow-hidden rounded-full border border-white/15 bg-white/5 px-4 py-0.9 text-white"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        variants={{
                            rest: {
                                backgroundColor: 'rgba(255,255,255,0.06)',
                                borderColor: 'rgba(255,255,255,0.18)',
                                paddingLeft: 1,
                                paddingRight: 30,
                            },
                            hover: {
                                backgroundColor: 'rgba(16,185,129,0.18)',
                                borderColor: 'rgba(16,185,129,0.45)',
                                paddingLeft: 1,
                                paddingRight: 35,
                                transition: { type: 'spring', stiffness: 200, damping: 18 },
                            },
                        }}
                    >
                        <span className="relative z-10 inline-flex items-center gap-2">
                             <motion.span
                                variants={{
                                    rest: { x: -12, opacity: 0 },
                                    hover: { x: 0, opacity: 1, transition: { duration: 0.24, ease: 'easeOut' } },
                                }}
                                className="inline-flex items-center justify-center rounded-full py-0.5 text-black"
                            >
                                <FaArrowCircleRight className="text-emerald-300" size={30}/>
                            </motion.span>
                            Get in Touch
                           
                        </span>
                        <motion.span
                            className="absolute inset-0 rounded-full bg-emerald-300/10"
                            variants={{ rest: { opacity: 0 }, hover: { opacity: 1, transition: { duration: 0.24, ease: 'easeOut' } } }}
                        />
                    </motion.a>
                </nav>
            </header>

            <div className="mx-auto mt-20 max-w-6xl">
                <p className="text-white/40">Full-Stack developer & Product builder</p>
                <h2 className="text-[60px] font-semibold leading-[1.1]">
                    Building sharp digital <span className="relative inline-flex">products
                        <svg viewBox="0 0 286 73" fill="none" className="absolute -left-2 -right-2 -top-1 bottom-0 translate-y-1">
                            <motion.path
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.25, ease: "easeInOut" }}
                                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                                stroke="#6EE7B7"
                                strokeWidth="3"
                            />
                        </svg>
                    </span> with <span className="text-zinc-500">precision</span> and <span className="font-script italic text-[70px]">intent</span>
                </h2>
                <p className="mt-6 text-white/40 text-sm leading-7 max-w-xl">From writing my first line of code at 13 when I discovered Discord bots and wanted to create something special, to co-founding Softworks with my childhood friend. Started college at 16 and currently on track to graduate in the class of 2027 at age 20, turning my early passion for coding into a promising future in tech.</p>
                <p className="mt-8 text-zinc-500">3+ Years of Experience • Based in Cairo, Egypt</p>
            </div>
        </div>
    )
}

export default Hero
