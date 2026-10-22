// WCAG 2.x contrast check for every text and background pair the palette uses.
// Run with: npm run check:contrast
// Exits non-zero if any required pair fails.
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const p = JSON.parse(readFileSync(join(root, 'src/lib/palette.json'), 'utf8'))

const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16))
const channel = (c) => {
  c /= 255
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
}
const luminance = (c) => {
  const [r, g, b] = c.map(channel)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
// Composite a translucent foreground over an opaque background.
const over = (fg, alpha, bg) => rgb(fg).map((v, i) => v * alpha + rgb(bg)[i] * (1 - alpha))
const ratio = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

// [label, foreground hex, foreground alpha, background hex, requirement]
// normal = 4.5:1 body text, large = 3:1 large text, ui = 3:1 non-text UI.
const pairs = [
  ['Graphite text on White', p.graphite, 1, p.white, 'normal'],
  ['Graphite text on Ash tint', p.graphite, 1, p.ashTint, 'normal'],
  ['Graphite text on Ash', p.graphite, 1, p.ash, 'normal'],
  ['Steel text on White', p.steel, 1, p.white, 'normal'],
  ['Steel text on Ash tint', p.steel, 1, p.ashTint, 'normal'],
  ['Steel text on Ash', p.steel, 1, p.ash, 'normal'],
  ['Ember dark text on White', p.emberDark, 1, p.white, 'normal'],
  ['Ember dark text on Ash tint', p.emberDark, 1, p.ashTint, 'normal'],
  ['Ember light text on Graphite', p.emberHover, 1, p.graphite, 'normal'],
  ['White text on Graphite', p.white, 1, p.graphite, 'normal'],
  ['White 80% text on Graphite', p.white, 0.8, p.graphite, 'normal'],
  ['White 70% text on Graphite', p.white, 0.7, p.graphite, 'normal'],
  ['White 72% text on Graphite (dark hero body)', p.white, 0.72, p.graphite, 'normal'],
  ['White 65% text on Graphite (dark hero breadcrumbs)', p.white, 0.65, p.graphite, 'normal'],
  ['White 60% text on Graphite', p.white, 0.6, p.graphite, 'normal'],
  ['White text on Steel', p.white, 1, p.steel, 'normal'],
  ['Graphite text on Ember button', p.graphite, 1, p.emberButton, 'normal'],
  ['Graphite text on Ember hover', p.graphite, 1, p.emberHover, 'normal'],
  ['Ember on White (borders, focus ring)', p.ember, 1, p.white, 'ui'],
  ['Ember on Ash tint (borders, rules)', p.ember, 1, p.ashTint, 'ui'],
  ['Ember on Graphite (focus ring, rules)', p.ember, 1, p.graphite, 'ui'],
  ['Ember on Graphite (large display text)', p.ember, 1, p.graphite, 'large'],
]

// Pairs the system deliberately avoids. Reported, never required.
const avoided = [
  ['Brand Ember text on White', p.ember, 1, p.white],
  ['White text on brand Ember', p.white, 1, p.ember],
  ['Graphite text on brand Ember', p.graphite, 1, p.ember],
  ['Brand Ember text on Graphite (body size)', p.ember, 1, p.graphite],
]

const min = { normal: 4.5, large: 3, ui: 3 }
let failed = 0
const rows = pairs.map(([label, fg, a, bg, req]) => {
  const fgRgb = a === 1 ? rgb(fg) : over(fg, a, bg)
  const r = ratio(fgRgb, rgb(bg))
  const pass = r >= min[req]
  if (!pass) failed++
  return { pair: label, ratio: r.toFixed(2), requires: `${min[req]}:1 (${req})`, result: pass ? 'PASS' : 'FAIL' }
})
console.table(rows)
console.log('Avoided pairs (not used for text):')
console.table(avoided.map(([label, fg, , bg]) => ({ pair: label, ratio: ratio(rgb(fg), rgb(bg)).toFixed(2) })))

if (failed) {
  console.error(`${failed} pair(s) fail WCAG AA.`)
  process.exit(1)
}
console.log('All required pairs pass WCAG AA.')
