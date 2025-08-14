"use client"
import { useEffect } from "react"
import Lenis from "lenis"

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, syncTouch: true })
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf) }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduce.matches) {
      lenis.stop()
    } else {
      requestAnimationFrame(raf)
    }
    return () => lenis.destroy()
  }, [])
  return <>{children}</>
}
