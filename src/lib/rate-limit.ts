/**
 * In-memory, per-IP rate limit for form routes.
 *
 * Each serverless instance keeps its own counts, and counts reset when an
 * instance is recycled, so this slows down casual abuse rather than
 * guaranteeing a hard cap. A durable limit needs shared storage.
 */

type Window = { count: number; resetAt: number }

const buckets = new Map<string, Map<string, Window>>()

export function rateLimit(
  bucket: string,
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number }
): { ok: boolean; retryAfterSeconds: number } {
  const now = Date.now()
  let windows = buckets.get(bucket)
  if (!windows) {
    windows = new Map()
    buckets.set(bucket, windows)
  }
  // Drop expired entries so the map does not grow without bound.
  if (windows.size > 5000) {
    for (const [k, w] of windows) if (w.resetAt <= now) windows.delete(k)
  }
  const current = windows.get(key)
  if (!current || current.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true, retryAfterSeconds: 0 }
  }
  current.count += 1
  if (current.count > limit) {
    return { ok: false, retryAfterSeconds: Math.ceil((current.resetAt - now) / 1000) }
  }
  return { ok: true, retryAfterSeconds: 0 }
}

/** Client IP from the proxy headers Vercel sets. */
export function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip') ?? 'unknown'
}
