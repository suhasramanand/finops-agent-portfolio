export function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-4 py-12">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600">
          FinOps Agent · Enterprise Policy & Compliance Assistant
        </p>
        <a
          href="https://github.com/suhasramanand/finops-agent-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-600 rounded"
        >
          View on GitHub →
        </a>
      </div>
    </footer>
  );
}
