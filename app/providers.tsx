"use client"
import { useEffect, useState } from "react"
import Lenis from "lenis"

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [scrollStatus, setScrollStatus] = useState<string>("initializing")
  
  useEffect(() => {
    // Check URL params for debug mode or force native scroll
    const params = new URLSearchParams(window.location.search)
    const forceNative = params.get('nativescroll') === 'true'
    const debug = params.get('debug') === 'true'
    
    if (forceNative) {
      if (debug) console.log('[ScrollProvider] Forced native scroll via URL param')
      setScrollStatus("native-forced")
      return
    }
    
    // Check for reduced motion preference
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduce.matches) {
      if (debug) console.log('[ScrollProvider] Native scroll due to reduced motion preference')
      setScrollStatus("native-reduced-motion")
      return
    }
    
    try {
      // Initialize Lenis with error handling
      const lenis = new Lenis({ 
        lerp: 0.08, 
        syncTouch: true,
        smoothWheel: true,
        wheelMultiplier: 1,
      })
      
      // Test if Lenis is working by checking if it can scroll
      let rafId: number
      let testScrolled = false
      
      const raf = (time: number) => {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      
      // Start the animation loop
      rafId = requestAnimationFrame(raf)
      
      // Test scroll after a short delay
      const testTimeout = setTimeout(() => {
        const initialScroll = window.scrollY
        lenis.scrollTo(100, { immediate: true })
        
        setTimeout(() => {
          testScrolled = window.scrollY !== initialScroll
          if (!testScrolled) {
            // Lenis isn't working, clean up and use native scroll
            if (debug) console.log('[ScrollProvider] Lenis test failed, falling back to native scroll')
            cancelAnimationFrame(rafId)
            lenis.destroy()
            setScrollStatus("native-fallback")
          } else {
            // Lenis is working, scroll back to top
            lenis.scrollTo(0, { immediate: true })
            setScrollStatus("lenis-active")
            if (debug) console.log('[ScrollProvider] Lenis initialized successfully')
            
            // Set up GSAP ScrollTrigger update on Lenis scroll
            lenis.on('scroll', () => {
              if (typeof window !== 'undefined' && 'ScrollTrigger' in window) {
                const ScrollTrigger = (window as { ScrollTrigger?: { update: () => void } }).ScrollTrigger
                if (ScrollTrigger) {
                  ScrollTrigger.update()
                }
              }
            })
          }
        }, 100)
      }, 100)
      
      // Cleanup function
      return () => {
        clearTimeout(testTimeout)
        cancelAnimationFrame(rafId)
        lenis.destroy()
      }
    } catch (error) {
      // If Lenis fails to initialize, use native scroll
      console.error('[ScrollProvider] Lenis initialization error:', error)
      setScrollStatus("native-error")
    }
  }, [])
  
  // Add debug info to DOM if in debug mode
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('debug') === 'true') {
      console.log(`[ScrollProvider] Current status: ${scrollStatus}`)
    }
  }, [scrollStatus])
  
  return <>{children}</>
}
