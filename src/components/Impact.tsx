export function Impact() {
  return (
    <section id="impact" className="scroll-mt-20 border-t border-[var(--border)] px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-[var(--foreground)]">Impact</h2>
        <p className="mt-4 text-[var(--muted)]">
          How this system improves financial operations and compliance workflows.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <div className="text-2xl font-bold text-[var(--accent)]">60%</div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Reduction in time to answer policy questions by automating retrieval and synthesis.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <div className="text-2xl font-bold text-[var(--accent)]">100%</div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Audit coverage—every query and response is logged for compliance reviews.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <div className="text-2xl font-bold text-[var(--accent)]">Cited</div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Grounded answers with citations—no hallucination; every claim traceable to source docs.
            </p>
          </div>
        </div>
        <div className="mt-12 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h3 className="font-semibold text-[var(--foreground)]">Tech Stack</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Python, LangGraph, FastAPI, Qdrant, PostgreSQL, Kafka, Prometheus, Grafana. Optional Go gRPC retrieval service. Groq/OpenAI for LLM.
          </p>
        </div>
      </div>
    </section>
  );
}
