'use client'

import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  end: string
  className?: string
  duration?: number
}

function parseTarget(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([^0-9]*)([0-9,.]+)([^0-9]*)$/)
  if (!match) return { prefix: '', number: 0, suffix: value }
  return {
    prefix: match[1],
    number: parseFloat(match[2].replace(/,/g, '')),
    suffix: match[3],
  }
}

function formatNumber(n: number, hasDecimal: boolean): string {
  if (hasDecimal) {
    return n.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
  }
  return n.toLocaleString('en-US')
}

export function CountUp({ end, className = '', duration = 2000 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(end)
  const hasStarted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          const { prefix, number: target, suffix } = parseTarget(end)
          const hasDecimal = end.includes('.')
          const startTime = performance.now()

          function animate(now: number) {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = eased * target

            setDisplay(`${prefix}${formatNumber(current, hasDecimal)}${suffix}`)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setDisplay(end)
            }
          }

          setDisplay(`${parseTarget(end).prefix}0${parseTarget(end).suffix}`)
          requestAnimationFrame(animate)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
