export function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-12">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          FinOps Agent · Enterprise Policy & Compliance Assistant
        </p>
        <a
          href="https://github.com/suhasramanand/finops-agent-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-violet-400 hover:text-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500/50 rounded"
        >
          View on GitHub →
        </a>
      </div>
    </footer>
  );
}
