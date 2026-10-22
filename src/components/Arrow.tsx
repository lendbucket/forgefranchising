/** Right arrow used in buttons and linked rows. Slides 5px on hover (.arrow in globals.css). */
export function Arrow({ size = 16, className = '', stroke = 'currentColor' }: { size?: number; className?: string; stroke?: string }) {
  return (
    <svg
      className={`arrow flex-shrink-0 ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
