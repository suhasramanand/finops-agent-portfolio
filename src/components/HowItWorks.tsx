export function HowItWorks() {
  const steps = [
    { num: "01", title: "Query & Retrieve", desc: "User submits a question. The retriever fetches relevant policy chunks from Qdrant using semantic search." },
    { num: "02", title: "Policy Synthesis", desc: "The policy agent (LLM) synthesizes an answer from the chunks, citing sources and assigning confidence." },
    { num: "03", title: "Action Plan", desc: "The action agent generates a structured task list with priorities, assignees, and due dates." },
    { num: "04", title: "Audit & Events", desc: "Every step is logged to PostgreSQL and published to Kafka for downstream analytics." },
  ];

  return (
    <section id="how-it-works" className="scroll-mt-20 px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-zinc-100 sm:text-3xl">How It Works</h2>
        <p className="mt-4 text-zinc-500 max-w-xl">
          A LangGraph-based pipeline with specialized agents.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2" role="list">
          {steps.map((step) => (
            <div
              key={step.num}
              className="glass rounded-xl p-8 transition-colors hover:border-zinc-700/50"
            >
              <span className="text-xs font-medium text-zinc-500">{step.num}</span>
              <h3 className="mt-2 font-semibold text-zinc-100">{step.title}</h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
