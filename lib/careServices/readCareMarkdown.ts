import fs from 'node:fs'
import path from 'node:path'

export interface ParsedCarePage {
  url: string
  metaTitle: string
  metaDescription: string
  breadcrumbRaw: string
  schemaLine: string
  bodyMd: string
  breadcrumbParts: string[]
  /** Normalized path without trailing slash, e.g. /home-care-services-bangalore */
  pathname: string
}

const cache = new Map<string, ParsedCarePage>()

export function readCareMarkdownFile(filename: string): ParsedCarePage {
  if (cache.has(filename)) return cache.get(filename)!
  const full = path.join(process.cwd(), 'content/care-services', filename)
  const raw = fs.readFileSync(full, 'utf8')
  const parsed = parseCareMarkdown(raw)
  cache.set(filename, parsed)
  return parsed
}

export function parseCareMarkdown(raw: string): ParsedCarePage {
  const bodyStart = raw.search(/^\s*#\s/m)
  if (bodyStart === -1) {
    throw new Error('Care markdown must contain an H1 starting with #')
  }
  const headerRaw = raw.slice(0, bodyStart).trim()
  const bodyMd = raw.slice(bodyStart).trim()
  const header: Record<string, string> = {}
  for (const line of headerRaw.split('\n')) {
    const m = line.match(/^([A-Za-z ]+):\s*(.*)$/)
    if (m) header[m[1].trim()] = m[2].trim()
  }
  const breadcrumbParts = (header['Breadcrumb'] ?? '')
    .split('>')
    .map((s) => s.trim())
    .filter(Boolean)
  let url = header['URL'] ?? '/'
  if (!url.startsWith('/')) url = `/${url}`
  const pathname = url.replace(/\/+$/, '') || '/'
  return {
    url,
    metaTitle: header['Meta Title'] ?? '',
    metaDescription: header['Meta Description'] ?? '',
    breadcrumbRaw: header['Breadcrumb'] ?? '',
    schemaLine: header['Schema'] ?? '',
    bodyMd,
    breadcrumbParts,
    pathname,
  }
}

export type BodySegment =
  | { type: 'markdown'; md: string }
  | { type: 'cta'; lines: string[] }

const CTA_LINE = /^\*\*CTA:\s*(.+?)\*\*\s*$/

/** Split markdown so CTA placeholders can render as real buttons */
export function splitCareBody(bodyMd: string): BodySegment[] {
  const lines = bodyMd.split('\n')
  const segments: BodySegment[] = []
  const mdBuf: string[] = []
  let i = 0

  const flushMd = () => {
    if (mdBuf.length > 0) {
      segments.push({ type: 'markdown', md: mdBuf.join('\n') })
      mdBuf.length = 0
    }
  }

  while (i < lines.length) {
    const trimmed = lines[i].trim()
    const m = trimmed.match(CTA_LINE)
    if (m) {
      flushMd()
      const ctaLines: string[] = []
      while (i < lines.length) {
        const t = lines[i].trim()
        const mm = t.match(CTA_LINE)
        if (mm) {
          ctaLines.push(mm[1].trim())
          i++
        } else break
      }
      segments.push({ type: 'cta', lines: ctaLines })
      continue
    }
    mdBuf.push(lines[i])
    i++
  }
  flushMd()
  return segments
}

function stripMdForSchema(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** FAQ blocks use ### **Question** followed by answer paragraphs */
/** Remove duplicate H1 from hero — returns plain title (no **) */
export function extractH1AndRest(bodyMd: string): { h1Plain: string; rest: string } {
  const m = bodyMd.match(/^\s*#\s+(.+?)\s*\n/)
  if (!m) return { h1Plain: '', rest: bodyMd }
  const h1Plain = m[1].replace(/\*\*/g, '').trim()
  const rest = bodyMd.slice((m.index ?? 0) + m[0].length)
  return { h1Plain, rest }
}

/** Remove FAQ block so we can render FAQAccordion separately */
export function stripFaqSection(markdown: string): string {
  const stripped = markdown.replace(
    /\r?\n## \*\*Frequently Asked Questions\*\*\r?\n[\s\S]*?(?=\r?\n## \*\*|$)/,
    ''
  )
  return stripped.replace(/^\s*\n+/, '').trimEnd()
}

export function extractCareFaqs(markdownBody: string): { question: string; answer: string }[] {
  const marker = '## **Frequently Asked Questions**'
  const idx = markdownBody.indexOf(marker)
  if (idx === -1) return []
  let tail = markdownBody.slice(idx + marker.length)
  const nextH2 = tail.search(/\n## \*\*/m)
  if (nextH2 !== -1) tail = tail.slice(0, nextH2)
  const out: { question: string; answer: string }[] = []
  const re = /### \*\*([\s\S]*?)\*\*\s*\n+([\s\S]*?)(?=\n### |\n## |\s*$)/g
  let m: RegExpExecArray | null
  while ((m = re.exec(tail)) !== null) {
    const question = m[1].trim()
    const answer = stripMdForSchema(m[2].trim())
    if (question && answer) out.push({ question, answer })
  }
  return out
}
