import { useEffect, useRef, useState } from "react"

export default function ScrollReveal({
    children,
    delay = 0,
    className = "",
    threshold = 0.18,
}) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return undefined

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (prefersReducedMotion) {
            setIsVisible(true)
            return undefined
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            {
                threshold,
                rootMargin: "0px 0px -12% 0px",
            }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [threshold])

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={[
                "transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isVisible
                    ? "opacity-100"
                    : "translate-y-10 scale-[0.985] opacity-0 blur-sm will-change-[opacity,transform,filter]",
                className,
            ].join(" ")}
        >
            {children}
        </div>
    )
}
