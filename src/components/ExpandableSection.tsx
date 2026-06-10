'use client'

import { useState } from 'react'

/**
 * ExpandableSection: Progressive disclosure wrapper.
 *
 * Psychology: Progressive disclosure (Nielsen) prevents cognitive overload
 * by showing a summary first and letting the reader choose to expand.
 * This respects the visitor's attention budget. They get value from
 * the preview and can invest deeper only when ready. Reduces the
 * "wall of text" effect that causes immediate bounces.
 */

type ExpandableSectionProps = {
  title: string
  /** Short preview shown when collapsed */
  preview?: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function ExpandableSection({
  title,
  preview,
  children,
  defaultOpen = false,
}: ExpandableSectionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      className="border border-espresso/8 bg-white overflow-hidden"
      style={{ borderRadius: '4px' }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-4 w-full text-left px-6 py-5 hover:bg-cream/50 transition-colors min-h-[52px]"
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          <span className="font-semibold text-espresso block">{title}</span>
          {preview && !open && (
            <span className="text-sm text-muted-brown/70 mt-1 block truncate">
              {preview}
            </span>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-amber flex-shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-6 pt-0">
          <div className="border-t border-espresso/10 pt-4">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
