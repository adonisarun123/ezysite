/**
 * AEO "answer-first" block (server component).
 *
 * Renders a concise, factual answer near the top of the page in crawlable
 * HTML. Answer engines (Google AI Overviews, ChatGPT, Perplexity) prefer
 * citing short, self-contained answers phrased against a clear question.
 */
interface QuickAnswerProps {
  question: string
  answer: string
}

export default function QuickAnswer({ question, answer }: QuickAnswerProps) {
  return (
    <section aria-label="Quick answer" className="bg-primary-50/60 border-y border-primary-100">
      <div className="container-custom py-6 lg:py-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 mb-1">
            Quick answer
          </p>
          <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 font-display">
            {question}
          </h2>
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      </div>
    </section>
  )
}
