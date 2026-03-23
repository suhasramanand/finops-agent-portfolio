export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)] px-4 py-12">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">
          FinOps Agent · Enterprise Policy & Compliance Assistant
        </p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--accent)] hover:underline"
        >
          View on GitHub
        </a>
      </div>
    </footer>
  );
}
