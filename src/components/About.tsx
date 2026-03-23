export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--card)] px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-[var(--foreground)]">What is FinOps Agent?</h2>
        <p className="mt-4 text-[var(--muted)] leading-relaxed">
          FinOps Agent is an <strong className="text-[var(--foreground)]">enterprise-grade, auditable multi-agent support assistant</strong> designed for financial operations teams.
          It answers policy and compliance questions by retrieving relevant documentation, synthesizing answers with citations, and generating actionable follow-up plans.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border)] p-6">
            <h3 className="font-semibold text-[var(--foreground)]">RAG-Powered</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Retrieval-Augmented Generation ensures answers are grounded in your actual policy documents, not hallucinated.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-6">
            <h3 className="font-semibold text-[var(--foreground)]">Full Audit Trail</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Every query, retrieval, and response is logged for compliance and accountability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
