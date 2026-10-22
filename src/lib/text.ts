/**
 * Sentence case for display headings and button labels.
 *
 * Used where a heading string also feeds JSON-LD, so the stored data keeps
 * its original wording and only the visible text changes case.
 */

/** Words that keep their capitals: the brand, agencies, acronyms, and places. */
const KEEP = new Set([
  'I', 'Forge', 'FDD', 'FDDs', 'FTC', 'SBA', 'M&A', 'P&L', 'LLC', 'CPA', 'CPAs', 'SDE', 'EBITDA', 'IP', 'ROI', 'FAQ', 'FAQs', 'TREC', 'UFOC',
  'Texas', 'Dallas', 'Houston', 'Austin', 'San', 'Antonio', 'Fort', 'Worth', 'El', 'Paso', 'US', 'U.S.', 'America', 'American',
])

/** Names that keep their case as a unit. */
const KEEP_PHRASES = [
  'Forge Franchise Readiness Method',
  'Franchise Disclosure Document',
  'FTC Franchise Rule',
  'Small Business Administration',
  'SBA Franchise Directory',
]

const MARK = ''

export function sentenceCase(text: string, extraKeep: string[] = []): string {
  const keep = new Set([...KEEP, ...extraKeep])
  const phrases: string[] = []
  let rest = text
  for (const phrase of KEEP_PHRASES) {
    if (rest.includes(phrase)) {
      rest = rest.split(phrase).join(`${MARK}${phrases.length}${MARK}`)
      phrases.push(phrase)
    }
  }

  const words = rest.split(' ')
  const cased = words.map((word, i) => {
    if (word.includes(MARK)) return word
    const previous = words[i - 1] ?? ''
    const startsSentence = i === 0 || (/[.?!:]["')]*$/.test(previous) && !/^vs\.$/i.test(previous))
    // Hyphenated or dashed compounds are cased part by part.
    return word
      .split(/([-–—/])/)
      .map((part, j) => {
        const bare = part.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9.]+$/g, '')
        if (!bare) return part
        const isAcronym = /^[A-Z0-9]{2,}s?$/.test(bare)
        const isItemNumber = (bare === 'Item' || bare === 'Items') && /^\d/.test(words[i + 1] ?? '')
        if ((startsSentence && j === 0) || isAcronym || isItemNumber || keep.has(bare)) return part
        return part.toLowerCase()
      })
      .join('')
  })

  return cased.join(' ').replace(new RegExp(`${MARK}(\\d+)${MARK}`, 'g'), (_, n) => phrases[Number(n)])
}
