export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-t border-[var(--border)] px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-[var(--foreground)]">How It Works</h2>
        <p className="mt-4 text-[var(--muted)]">
          The system uses a LangGraph-based pipeline with specialized agents.
        </p>
        <div className="mt-12 space-y-8">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">
              1
            </div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">Query & Retrieve</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                User submits a question. The retriever fetches relevant policy chunks from Qdrant using semantic search (embeddings).
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">
              2
            </div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">Policy Synthesis</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                The policy agent (LLM) synthesizes an answer from the chunks, citing sources and assigning a confidence score.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">
              3
            </div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">Action Plan</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                The action agent generates a structured task list (priorities, assignees, due dates) for follow-up.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">
              4
            </div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">Audit & Events</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Every step is logged to PostgreSQL and published to Kafka for downstream analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
