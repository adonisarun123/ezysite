import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { BodySegment } from '@/lib/careServices/readCareMarkdown'
import CareCtaBlock from './CareCtaBlock'

const careComponents = {
  a: ({
    href,
    children,
  }: {
    href?: string
    children?: React.ReactNode
  }) => {
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className="font-medium text-primary-600 underline-offset-2 hover:text-primary-700 hover:underline">
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        className="font-medium text-primary-600 underline-offset-2 hover:text-primary-700 hover:underline"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  },
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="my-6 border-l-4 border-emerald-500 bg-emerald-50/70 py-4 pl-5 pr-4 text-gray-800 shadow-sm rounded-r-lg not-prose [&_p]:my-2 [&_p]:leading-relaxed">
      {children}
    </blockquote>
  ),
  table: ({ children }: { children?: React.ReactNode }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-gray-200 shadow-sm not-prose">
      <table className="min-w-full divide-y divide-gray-200 text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }: { children?: React.ReactNode }) => <thead className="bg-gray-50">{children}</thead>,
  th: ({ children }: { children?: React.ReactNode }) => (
    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">{children}</th>
  ),
  td: ({ children }: { children?: React.ReactNode }) => (
    <td className="border-t border-gray-100 px-4 py-3 align-top text-gray-700">{children}</td>
  ),
  tr: ({ children }: { children?: React.ReactNode }) => <tr className="odd:bg-white even:bg-gray-50/80">{children}</tr>,
  hr: () => <hr className="my-10 border-gray-200" />,
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="my-4 list-disc space-y-2 pl-6 text-gray-700">{children}</ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="my-4 list-decimal space-y-2 pl-6 text-gray-700">{children}</ol>
  ),
  h1: ({ children }: { children?: React.ReactNode }) => (
    <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">{children}</h1>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="font-display mt-10 scroll-mt-28 border-b border-emerald-100/90 pb-3.5 text-[clamp(1.2rem,2.8vw,1.65rem)] font-bold leading-snug text-gray-900 first:mt-0 sm:mt-12 sm:pb-4">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="font-display mt-7 text-[clamp(1.05rem,2.2vw,1.2rem)] font-semibold leading-snug text-gray-900 sm:mt-9">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="my-4 text-pretty leading-relaxed text-gray-700">{children}</p>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
}

export default function CareMarkdownSegments({ segments }: { segments: BodySegment[] }) {
  return (
    <>
      {segments.map((seg, i) =>
        seg.type === 'markdown' ? (
          <ReactMarkdown key={i} remarkPlugins={[remarkGfm]} components={careComponents}>
            {seg.md}
          </ReactMarkdown>
        ) : (
          <CareCtaBlock key={i} lines={seg.lines} />
        )
      )}
    </>
  )
}
