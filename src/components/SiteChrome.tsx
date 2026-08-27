'use client'

import { usePathname } from 'next/navigation'

/**
 * Renders the site header and footer around page content.
 *
 * Confidential proposal pages under /proposal/ are standalone documents that
 * ship their own header and footer, so they opt out of site chrome entirely.
 * Header and footer arrive as props so they stay server rendered.
 */
export function SiteChrome({
  header,
  footer,
  children,
}: {
  header: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}) {
  const pathname = usePathname()

  if (pathname?.startsWith('/proposal/')) {
    return <>{children}</>
  }

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  )
}
