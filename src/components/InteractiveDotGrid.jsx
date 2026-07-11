
import { motion, useAnimationFrame } from "motion/react"
import { useEffect, useMemo, useRef, useState } from "react"

const GAP = 28
const DOT_SIZE = 2

export default function InteractiveDotGrid() {
    const containerRef = useRef(null)

    const mouse = useRef ({
        x: -9999,
        y: -9999
    })

    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        const resize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", resize)

        return () => window.removeEventListener("resize", resize)
    }, [])

    useEffect(() => {
        const move = e => {
            if (!containerRef.current) return

            const rect = containerRef.current.getBoundingClientRect()

            mouse.current.x = e.clientX - rect.left
            mouse.current.y = e.clientY - rect.top
        }

        window.addEventListener("mousemove", move)

        return () => 
            window.removeEventListener("mousemove", move)
    }, [])

    const dots = useMemo(() => {
        const cols = Math.ceil(size.width / GAP)
        const rows = Math.ceil(size.height / GAP)

        return Array.from({ length: cols * rows }, (_, index) => {
            const col = index % cols
            const row = Math.floor(index / cols)

            return {
                x: col * GAP,
                y: row * GAP
            }
        })
    }, [size])

    return (
        <div ref={containerRef} className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
            {dots.map((dot, i) => (
                <Dot 
                    key={i}
                    mouse={mouse}
                    x={dot.x}
                    y={dot.y}
                />
            ))}
        </div>
    )
}

function Dot({ x, y, mouse}) {
    const ref = useRef(null)

    useAnimationFrame(() => {
        if (!ref.current) return

        const dx = mouse.current.x - x
        const dy = mouse.current.y - y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const radius = 100

        const strength = Math.max(
            0, 
            1 - distance / radius
        )

        const moveX = dx * strength * 0.12;
        const moveY = dy * strength * 0.12;

        const scale = 1 + strength * 2
        const opacity = 0.2 + strength * 0.8

        ref.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`
        ref.current.style.opacity = opacity
    })

    return (
        <motion.div 
            ref={ref}
            className="absolute rounded-full bg-white"
            style={{
                left: x,
                top: y,
                width: DOT_SIZE,
                height: DOT_SIZE
            }}
        />
    )
}