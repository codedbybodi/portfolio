import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      const target = e.target
      if (target && (target.closest('[data-cursor="accent"]') || target.dataset?.cursor === 'accent')) {
        setActive(true)
      } else {
        setActive(false)
      }
    }

    // Hide native cursor while component is mounted
    const previousCursor = document.body.style.cursor
    document.body.style.cursor = 'none'

    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.style.cursor = previousCursor
    }
  }, [])

  const size = active ? 64 : 26

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        width: size,
        height: size,
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        background: 'white',
        mixBlendMode: 'difference',
        transition: 'width 120ms ease, height 120ms ease, transform 120ms ease'
      }}
      aria-hidden
    />
  )
}
