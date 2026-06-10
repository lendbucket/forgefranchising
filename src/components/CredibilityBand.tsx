'use client'

import { CountUp } from '@/components/CountUp'

export function CredibilityBand() {
  return (
    <div className="relative z-10 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-10 text-cream/40 text-sm text-center sm:text-left">
          <span>Franchising generates <strong className="text-cream/70"><CountUp end="$827B" /></strong> in annual US output</span>
          <span className="hidden sm:block w-px h-4 bg-cream/15" />
          <span><strong className="text-cream/70"><CountUp end="800,000+" /></strong> franchise locations nationwide</span>
          <span className="hidden sm:block w-px h-4 bg-cream/15" />
          <span><strong className="text-cream/70"><CountUp end="8.5 million" /></strong> jobs created every year</span>
        </div>
      </div>
    </div>
  )
}
