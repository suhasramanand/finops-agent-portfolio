export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-32 sm:pt-28 sm:pb-40">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500"></span>
          </span>
          Multi-Agent AI · RAG-Powered
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
          Policy & Compliance,{" "}
          <span className="gradient-text">AI-Assisted</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
          Enterprise-grade multi-agent system that answers financial policy questions
          with citations, structured action plans, and full audit trails.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#demo"
            className="glow-button rounded-xl px-8 py-4 text-sm font-semibold text-white"
          >
            Try Demo
          </a>
          <a
            href="#how-it-works"
            className="rounded-xl border border-white/10 px-8 py-4 text-sm font-medium text-zinc-200 hover:bg-white/5 hover:border-white/20 transition-all"
          >
            How it Works
          </a>
        </div>
      </div>
    </section>
  );
}
