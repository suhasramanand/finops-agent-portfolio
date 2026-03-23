export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-zinc-100 sm:text-3xl">What is FinOps Agent?</h2>
        <p className="mt-4 text-zinc-500 leading-relaxed max-w-2xl">
          An <strong className="text-zinc-300">enterprise-grade, auditable multi-agent support assistant</strong> for
          financial operations. It answers policy and compliance questions by retrieving documentation,
          synthesizing answers with citations, and generating actionable follow-up plans.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="glass rounded-xl p-8 transition-colors hover:border-zinc-700/50">
            <h3 className="font-semibold text-zinc-100">RAG-Powered</h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
              Retrieval-Augmented Generation grounds answers in your actual policy documents—no hallucination.
            </p>
          </div>
          <div className="glass rounded-xl p-8 transition-colors hover:border-zinc-700/50">
            <h3 className="font-semibold text-zinc-100">Full Audit Trail</h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
              Every query, retrieval, and response is logged for compliance and accountability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
