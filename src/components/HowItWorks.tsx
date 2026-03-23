export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Query & Retrieve",
      desc: "User submits a question. The retriever fetches relevant policy chunks from Qdrant using semantic search.",
      color: "from-violet-500 to-purple-600",
    },
    {
      num: "02",
      title: "Policy Synthesis",
      desc: "The policy agent (LLM) synthesizes an answer from the chunks, citing sources and assigning confidence.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      num: "03",
      title: "Action Plan",
      desc: "The action agent generates a structured task list with priorities, assignees, and due dates.",
      color: "from-pink-500 to-rose-600",
    },
    {
      num: "04",
      title: "Audit & Events",
      desc: "Every step is logged to PostgreSQL and published to Kafka for downstream analytics.",
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section id="how-it-works" className="scroll-mt-20 px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-zinc-100 sm:text-3xl">How It Works</h2>
        <p className="mt-4 text-zinc-400 max-w-xl">
          A LangGraph-based pipeline with specialized agents.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2" role="list">
          {steps.map((step) => (
            <div
              key={step.num}
              className="glass rounded-2xl p-8 transition-all hover:border-white/15"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-sm font-bold text-white`}
              >
                {step.num}
              </div>
              <h3 className="font-semibold text-zinc-100">{step.title}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
