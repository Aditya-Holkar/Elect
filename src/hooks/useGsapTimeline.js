import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function useGsapTimeline(config = {}) {
  const tl = useRef(null)

  useEffect(() => {
    tl.current = gsap.timeline({ defaults: { duration: 0.6, ease: 'power3.out' } })
    return () => { if (tl.current) tl.current.kill() }
  }, [])

  return tl.current
}
