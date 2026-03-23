"use client";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="text-lg font-semibold text-zinc-100 tracking-tight">
          FinOps Agent
        </a>
        <div className="flex gap-6 sm:gap-8">
          <a href="#about" className="text-sm text-zinc-400 hover:text-white transition-colors">
            About
          </a>
          <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-white transition-colors">
            How it Works
          </a>
          <a href="#demo" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Demo
          </a>
          <a href="#impact" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Impact
          </a>
        </div>
      </nav>
    </header>
  );
}
