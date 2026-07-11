import {
    SiDocker,
    SiFastapi,
    SiGit,
    SiJavascript,
    SiJsonwebtokens,
    SiOpenapiinitiative,
    SiPandas,
    SiPostgresql,
    SiPython,
    SiReact,
    SiSocketdotio,
    SiSqlalchemy,
    SiTailwindcss,
    SiTypescript,
    SiStreamlit,
    SiFlask
} from "react-icons/si"
import { DatabaseZap, SearchCode } from "lucide-react"


const stackItems = [
    {
        name: "Python",
        label: "Programming Language",
        icon: SiPython,
        color: "text-yellow-300",
    },
    {
        name: "FastAPI",
        label: "Backend Framework",
        icon: SiFastapi,
        color: "text-emerald-400",
    },
    {
        name: "Flask",
        label: "Web Framework",
        icon: SiFlask,
        color: "text-emerald-400"
    },
    {
        name: "JavaScript",
        label: "Programming Language",
        icon: SiJavascript,
        color: "text-yellow-300",
    },
    {
        name: "TypeScript",
        label: "Language",
        icon: SiTypescript,
        color: "text-blue-400",
    },
    {
        name: "React",
        label: "Frontend Library",
        icon: SiReact,
        color: "text-cyan-300",
    },
    {
        name: "Tailwind CSS",
        label: "Styling Framework",
        icon: SiTailwindcss,
        color: "text-sky-300",
    },
    {
        name: "Streamlit",
        label: "Web App Framework",
        icon: SiStreamlit,
        color: "text-sky-300"
    },
    {
        name: "PostgreSQL",
        label: "SQL Database",
        icon: SiPostgresql,
        color: "text-sky-300",
    },
    {
        name: "SQLAlchemy",
        label: "Python ORM",
        icon: SiSqlalchemy,
        color: "text-red-400",
    },
    {
        name: "Alembic",
        label: "DB Migrations",
        icon: DatabaseZap,
        color: "text-emerald-300",
    },
    {
        name: "Docker",
        label: "Containerization",
        icon: SiDocker,
        color: "text-sky-400",
    },
    {
        name: "BeautifulSoup",
        label: "Web Scraping",
        icon: SearchCode,
        color: "text-emerald-300",
    },
    {
        name: "Pandas",
        label: "Data Analysis",
        icon: SiPandas,
        color: "text-indigo-300",
    },
    {
        name: "WebSockets",
        label: "Realtime Protocol",
        icon: SiSocketdotio,
        color: "text-zinc-200",
    },
    {
        name: "JWT Auth",
        label: "Authentication",
        icon: SiJsonwebtokens,
        color: "text-pink-400",
    },
    {
        name: "REST APIs",
        label: "API Design",
        icon: SiOpenapiinitiative,
        color: "text-lime-400",
    },
    {
        name: "Git",
        label: "Version Control",
        icon: SiGit,
        color: "text-red-500",
    },

]

export default function Stack() {
    return (
        <section className="px-5 py-10 text-white sm:px-8 lg:px-20 lg:py-14">
            <div className="mx-auto max-w-8xl">
                <h2 className="mb-7 text-3xl font-semibold tracking-normal text-white">
                    Stack
                </h2>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                    {stackItems.map((item) => {
                        const Icon = item.icon

                        return (
                            <article
                                key={item.name}
                                className="group flex min-h-40 flex-col items-center justify-center rounded-[1.15rem] border border-white/15 bg-white/[0.03] px-5 py-7 text-center transition duration-300 hover:-translate-y-1 hover:border-emerald-300/45 hover:bg-white/[0.055]"
                            >
                                <div className="grid h-16 w-16 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-3xl transition duration-300 group-hover:border-emerald-300/40 group-hover:bg-emerald-300/10">
                                    <Icon className={item.color} aria-hidden="true" />
                                </div>

                                <h3 className="mt-5 text-xl font-bold leading-tight text-white">
                                    {item.name}
                                </h3>

                                <p className="mt-1 text-base leading-6 text-white/65">
                                    {item.label}
                                </p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
