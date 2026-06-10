'use client'

import { useEffect, useState } from 'react'

/**
 * ReadingProgress: Fixed progress bar at the top of the viewport.
 *
 * Psychology: A visible progress indicator makes long content feel
 * finite and navigable (goal gradient effect). Visitors who can see
 * how far they have come are more likely to finish. Also reduces
 * the "endless scroll" anxiety that causes premature exits.
 */

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(Math.min(scrollPercent, 100))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50 pointer-events-none">
      <div
        className="h-full bg-amber transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
