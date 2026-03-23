"use client";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="text-lg font-semibold text-[var(--foreground)]">
          FinOps Agent
        </a>
        <div className="flex gap-6">
          <a href="#about" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
            About
          </a>
          <a href="#how-it-works" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
            How it Works
          </a>
          <a href="#demo" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
            Demo
          </a>
          <a href="#impact" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
            Impact
          </a>
        </div>
      </nav>
    </header>
  );
}
