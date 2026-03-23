export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-32 sm:pt-28 sm:pb-40">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-zinc-800/30 px-4 py-1.5 text-sm text-zinc-400">
          Multi-Agent AI · RAG-Powered
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
          Policy & Compliance,{" "}
          <span className="text-zinc-400">AI-Assisted</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-500 leading-relaxed">
          Enterprise-grade multi-agent system that answers financial policy questions
          with citations, structured action plans, and full audit trails.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#demo"
            className="rounded-lg bg-zinc-100 px-8 py-4 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition-colors"
          >
            Try Demo
          </a>
          <a
            href="#how-it-works"
            className="rounded-lg border border-zinc-700 px-8 py-4 text-sm font-medium text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800/30 transition-colors"
          >
            How it Works
          </a>
        </div>
      </div>
    </section>
  );
}
