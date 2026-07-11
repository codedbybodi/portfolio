import { motion } from "motion/react"

const education = {
    degree: "Bachelor of Computer Science",
    school: "Arab Open University",
    location: "CAI, EG",
    duration: "2024 - Present",
    description: "Passionate about building scalable full-stack applications and AI-powered products. My studies focus on software engineering principles while I continue learnign modren technologies through real-world projects",

    coursework: [
        "Data Structures",
        "Algorithms",
        "Operating Systems",
        "Object-Oriented Programming",
        "Python",
        "Java",
    ]
}

export default function Education() {
    return(
        <section id="education" className="relative overflow-hidden py-40">
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                {/* Heading */}

                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="uppercase tracking-[0.35em] text-zinc-500"
                >
                    My Journey
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-3 text-5xl font-bold text-white md:text-6xl"
                >   
                    Education
                </motion.h2>

                {/* Cards */}
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative mt-24 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:p-16"
                >
                    {/* Cards Glow */}
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/30 blur-[120px]" />

                    {/* Animated Timeline */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="origin-left h-px bg-gradient-to-t from-white via-white/30 to-transparent"
                    />

                    {/* Timeline Dot */}
                    <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                            delay: 0.3,
                            type: "spring",
                            stiffness: 250,
                        }}
                        viewport={{ once: true }}
                        className="mt-6 h-5 w-5 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,.9)]"
                    />

                    {/* Date */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-8 text-xs uppercase tracking-[0.35em] text-zinc-500"
                    >
                        {education.duration}
                    </motion.p>

                    {/* Degree */}
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        viewport={{ once: true }}
                        className="mt-5 text-4xl font-bold text-white md:text-5xl"
                    >       
                        {education.degree}
                    </motion.h3>

                    {/* School */}
                    <motion.h4
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 }}
                        viewport={{ once: true }}
                        className="mt-3 text-xl text-zinc-300"
                    >
                        {education.school}
                    </motion.h4>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.65 }}
                        viewport={{ once: true }}
                        className="mt-2 text-zinc-500"
                    >  
                        {education.location}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.75 }}
                        viewport={{ once: true }}
                        className="mt-10 max-w-3xl leading-8 text-zinc-400"
                    >
                        {education.description}
                    </motion.p>

                    {/* Coursework */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.07,
                                }
                            }
                        }}
                        className="mt-14 flex flex-wrap gap-4"
                    >
                        {education.coursework.map((course) => (
                            <motion.div
                                key={course}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    show: {
                                        opacity: 1,
                                        y: 0,
                                    },
                                }}
                                whileHover={{
                                    y: -6,
                                    scale: 1.05,
                                }}
                                transition={{
                                    duration: 0.3,
                                }}
                                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/10"
                            >
                                {course}
                            </motion.div>
                        ))}

                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}