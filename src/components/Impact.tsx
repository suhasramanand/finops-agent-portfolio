export function Impact() {
  return (
    <section id="impact" className="scroll-mt-20 px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-zinc-100 sm:text-3xl">Impact</h2>
        <p className="mt-4 text-zinc-400 max-w-xl">
          How this system improves financial operations and compliance workflows.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="glass rounded-2xl p-8 transition-all hover:border-violet-500/20">
            <div className="text-3xl font-bold gradient-text">60%</div>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Reduction in time to answer policy questions by automating retrieval and synthesis.
            </p>
          </div>
          <div className="glass rounded-2xl p-8 transition-all hover:border-violet-500/20">
            <div className="text-3xl font-bold gradient-text">100%</div>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Audit coverage—every query and response is logged for compliance reviews.
            </p>
          </div>
          <div className="glass rounded-2xl p-8 transition-all hover:border-violet-500/20">
            <div className="text-3xl font-bold gradient-text">Cited</div>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Grounded answers with citations—no hallucination; every claim traceable to source docs.
            </p>
          </div>
        </div>
        <div className="mt-12 glass rounded-2xl p-8">
          <h3 className="font-semibold text-zinc-100">Tech Stack</h3>
          <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
            Python, LangGraph, FastAPI, Qdrant, PostgreSQL, Kafka, Prometheus, Grafana.
            Optional Go gRPC retrieval service. Groq/OpenAI for LLM.
          </p>
        </div>
      </div>
    </section>
  );
}
