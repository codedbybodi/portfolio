import { useState, useEffect } from "react" 
import { motion } from "motion/react"
import projectData from '../data/projects.json'

function ArrowIcon({ className = "h-5 w-5" }){
    return(
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path 
                d="M5 12h14m-6-6 6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function CloseIcon({ className = "h-5 w-5"}) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path 
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    )
}

function getProjectImage(project) {
    return Array.isArray(project.images) ? project.images[0] : project.images
}

function ProjectModal({ project, onClose}) {
    useEffect(() => {
        if (!project) return undefined;

        const onKeyDown = (event) => {
            if (event.key === "Escape") onClose()
        }

        document.body.style.overflow = "hidden"
        window.addEventListener("keydown", onKeyDown)

        return () => {
            document.body.style.overflow = ""
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [project, onClose]) 

    if (!project) return null;
    const image = getProjectImage(project)

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-[#030504]/95 text-white backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
        >
            <div className="mx-auto flex min-h-min w-full max-w-6xl flex-col px-5 py-5 sm:px-8 lg:px-10">
                <header className="sticky top-0 z-10 -mx-5 flex items-center justify-between border-b border-white/10 bg-[#030504]/85 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                            {project.eyebrow}
                        </p>
                        <p className="mt-1 text-sm text-white/50">{project.year} / {project.role}</p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-white/80 transition hover:border-emerald-300/60 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                        aria-label="Close project details"
                    >
                        <CloseIcon />
                    </button>
                </header>   

                <article className="grid flex-1 gap-10 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:py-14">
                    <section>
                        <h2 id="project-modal-title" className="font-display text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
                            {project.title}
                        </h2>
                        <p className="mt-5 max-w-2xl text-xl leading-8 text-white/70">{project.summary}</p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {project.stack.map((item) => (
                                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/70">
                                    {item}
                                </span>
                            ))}
                        </div>

                        <motion.div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-glow" initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 24 }}>
                            <motion.img layoutId={`project-${project.id}`} className="h-auto max-h-[390px] w-full object-cover" src={image} alt={`${project.title} project preview`} />
                        </motion.div>
                    </section>

                    <aside className="lg:pt-24">
                        <div className="border-red-100 border-emerald-300/25 pl-6">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Project notes</p>
                            <div className="mt-6 space-y-5">
                                {project.details.map((detail) => (
                                    <p key={detail} className="text-lg leading-8 text-white/70">
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col">
                            <a href={project.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-bold text-[#031008] transition focus:ring-2 focus:ring-emerald-300 focus:ring-offset-[#030504]">
                                Open live Project <ArrowIcon className="h-4 w-4" />
                            </a>
                            <a href={project.links.repo} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white/80 transition hover:border-white/30 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#030504]">
                                View Repository
                            </a>
                        </div>
                    </aside>
                </article>
            </div>
        </motion.div>
    )
}


export default function FeaturedProjects({ projects = projectData }) {
    const [hoveredId, setHoveredId] = useState(null)
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        
        <section className="relative isolate overflow-hidden px-5 py-10 sm:px-8 lg:px-20 lg:py-24">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
            <div className="mx-auto max-w-8xl">
                <div className="mb-14">
                    <div className="flex items-center gap-4 text-emerald-300">
                        <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(84,238,164,0.95)]" />
                        <p className="text-xs font-semibold uppercase tracking-[0.2em]">featured work</p>
                    </div>
                    <h1 className="mt-5 font-display text-2xl font-semibold tracking-normal text-white sm:text-5xl lg:text-4xl">
                        Projects I've Built
                    </h1>
                </div>

                <div className="grid gap-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(420px,0.9fr)] lg:items-start">
                    <div className="relative">
                        <div className="absolute left-[0.85rem] top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-emerald-300/60 via-emerald-300/25 to-white/10 sm:block" />

                        <div className="space-y-6 sm:space-y-6">
                            {projects.map((project) => {
                                const isHovered = project.id ===  hoveredId
                                const image = getProjectImage(project)

                                return (
                                    <motion.article
                                        key={project.id}
                                        className="group grid gap-6 sm:grid-cols-[3.2rem_minmax(0,1fr)] sm:gap-9 cursor-pointer"
                                        onMouseEnter={() => setHoveredId(project.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                        onFocus={() => setHoveredId(project.id)}
                                        onBlur={(event) => {
                                            if (!event.currentTarget.contains(event.relatedTarget)) {
                                                setHoveredId(null)
                                            }
                                        }}
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <button
                                            type="button"
                                            onClick={(e) => { e.stopPropagation(); setHoveredId(project.id) }}
                                            className={[
                                                "relative z-10 mt-1 grid h-7 w-7 place-items-center rounded-full border transition duration-300 hover:scale-125 focus:scale-125 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-4 focus:ring-offset-[#020403] group-hover:scale-125",
                                                isHovered 
                                                    ? "scale-125 border-emerald-300/60 bg-emerald-300/10 shadow-[0_0_36px_rgba(84,238,164,0.24)]"
                                                    : "border-white/25 bg-[#020403] hover:border-emerald-300/50 hover:bg-emerald-300/10"
                                            ].join(" ")}
                                            aria-label={`Show ${project.title} preview`}
                                            data-cursor="accent"
                                        >
                                            <span className={[
                                                "h-2.5 w-2.5 rounded-full transition duration-300",
                                                isHovered ? "scale-125 bg-emerald-300" : "bg-emerald-300/85 group-hover:scale-125 group-hover:bg-emerald-300"
                                            ].join(" ")}
                                            />
                                        </button>

                                        <div className="relative max-w-xl pb-1 pt-3">
                                            {isHovered && (
                                                <span className="absolute left-full top-1/2 hidden h-px w-24 -translate-y-1/2 bg-gradient-to-r from-emerald-300/80 to-transparent lg:block">
                                                    <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(84,238,164,1)]" />
                                                </span>
                                            )}

                                            <motion.h2
                                                className="font-display text-3xl font-semibold tracking-normal text-white sm:text-2xl"
                                                animate={{ scale: isHovered ? 1.06 : 1 }}
                                                transition={{ type: 'spring', stiffness: 420, damping: 22 }}
                                                data-cursor="accent"
                                            >
                                                {project.title}
                                            </motion.h2>
                                            <p className="mt-2 max-w-xs text-lg leading-7 text-white/60"> 
                                                {project.category}
                                            </p>
                                            <button type="button" onClick={(e) => { e.stopPropagation(); setSelectedProject(project) }} className="mt-5 inline-flex items-center gap-4 text-lg font-medium text-emerald-300 transition hover:gap-5 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-4 focus:ring-offset-[#020403]">
                                                View details <ArrowIcon />
                                            </button>
                                            {isHovered && (
                                                <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 sm:hidden">
                                                    <motion.img layoutId={`project-${project.id}`} src={image} alt={`${project.title} project preview`} className="aspect-[16/10] w-full object-cover"/>
                                                </div>
                                            )}

                                            {isHovered && (
                                                <div className="pointer-events-none absolute left-[calc(100%+5rem)] top-1/2 z-30 hidden w-[min(42vw,560px)] -translate-y-1/2 overflow-hidden rounded-[1.35rem] border border-white/15 bg-white/[0.03] p-2 shadow-glow lg:block">
                                                    <img
                                                        src={image}
                                                        alt={`${project.title} project preview`}
                                                        className="h-auto max-h-[360px] w-full rounded-[1rem] object-contain"
                                                    />
                                                </div>
                                            )}
                                           
                                        </div>  
                                    </motion.article>
                                )
                            })}
                        </div>
                    </div>

                    <div className="hidden lg:block" aria-hidden="true" />
                </div>

                <div className="mt-[120px] flex items-center justify-center gap-5 pl-0 text-white/40 sm:pl-[5.7rem]">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/50">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14m0 0-5-5m5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>

                    <p className="text-lg">More Projects coming soon</p>
                </div>               
            </div>

            <ProjectModal 
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    )
}
