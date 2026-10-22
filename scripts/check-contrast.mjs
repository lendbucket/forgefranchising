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
  ['Graphite text on Stone', p.graphite, 1, p.stone, 'normal'],
  ['Graphite text on Ash', p.graphite, 1, p.ash, 'normal'],
  ['Steel text on White', p.steel, 1, p.white, 'normal'],
  ['Steel text on Stone', p.steel, 1, p.stone, 'normal'],
  ['Ember text on White', p.emberText, 1, p.white, 'normal'],
  ['Ember text on Stone', p.emberText, 1, p.stone, 'normal'],
  ['White text on Graphite', p.white, 1, p.graphite, 'normal'],
  ['Mist text on Graphite (body on dark)', p.mist, 1, p.graphite, 'normal'],
  ['Fog text on Graphite (breadcrumbs, muted)', p.fog, 1, p.graphite, 'normal'],
  ['Input border grey text on Graphite (hero note)', p.inputBorder, 1, p.graphite, 'normal'],
  ['Ember hover text on Graphite', p.emberHover, 1, p.graphite, 'normal'],
  ['White text on Graphite raised (takeaways panel)', p.white, 1, p.graphiteRaised, 'normal'],
  ['Mist text on Graphite raised', p.mist, 1, p.graphiteRaised, 'normal'],
  ['Ember hover text on Graphite raised', p.emberHover, 1, p.graphiteRaised, 'normal'],
  ['White text on Graphite deep (footer)', p.white, 1, p.graphiteDeep, 'normal'],
  ['Fog text on Graphite deep (footer links)', p.fog, 1, p.graphiteDeep, 'normal'],
  ['Graphite text on Ember fill (buttons, ember sections)', p.graphite, 1, p.emberFill, 'normal'],
  ['Graphite text on Ember hover (button hover)', p.graphite, 1, p.emberHover, 'normal'],
  ['White text on Graphite button on Ember fill', p.white, 1, p.graphite, 'normal'],
  ['White text on Steel', p.white, 1, p.steel, 'normal'],
  ['Input border on White (form controls)', p.inputBorder, 1, p.white, 'ui'],
  ['Line on White (decorative hairline, not required)', p.line, 1, p.white, 'decorative'],
  ['Ember on White (focus ring, rules)', p.ember, 1, p.white, 'ui'],
  ['Ember on Stone (focus ring, rules)', p.ember, 1, p.stone, 'ui'],
  ['Ember on Graphite (focus ring, rules)', p.ember, 1, p.graphite, 'ui'],
  ['Graphite on Ember fill (focus ring on ember sections)', p.graphite, 1, p.emberFill, 'ui'],
  ['Ember on Graphite (large numerals)', p.ember, 1, p.graphite, 'large'],
  ['Ember on White (large numerals)', p.ember, 1, p.white, 'large'],
  ['Ember on Stone (large numerals)', p.ember, 1, p.stone, 'large'],
]

// Pairs the system deliberately avoids. Reported, never required.
const avoided = [
  ['Brand Ember text on White (body size)', p.ember, 1, p.white],
  ['White text on Ember fill', p.white, 1, p.emberFill],
  ['Brand Ember text on Graphite (body size)', p.ember, 1, p.graphite],
  ['Fog text on White', p.fog, 1, p.white],
]

const min = { normal: 4.5, large: 3, ui: 3, decorative: 1 }
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
