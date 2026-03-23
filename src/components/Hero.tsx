export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl leading-tight">
          Enterprise Policy & Compliance,{" "}
          <span className="text-[var(--accent)]">AI-Assisted</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted)]">
          A multi-agent AI system that answers financial policy questions with citations,
          structured action plans, and full audit trails.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#demo"
            className="rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--accent-dark)] transition-colors"
          >
            Try Demo
          </a>
          <a
            href="#how-it-works"
            className="rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--card)] transition-colors"
          >
            See How it Works
          </a>
        </div>
      </div>
    </section>
  );
}
