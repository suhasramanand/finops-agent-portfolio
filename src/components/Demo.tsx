"use client";

import { useState } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

interface Citation {
  source: string;
  page: number | null;
  excerpt: string;
}

interface Task {
  title: string;
  priority: string;
  description?: string;
}

interface QueryResponse {
  answer: string;
  citations: Citation[];
  action_plan: { tasks: Task[]; assignee: string | null; due_date: string | null };
  metadata: { confidence: number; latency_ms: number };
}

export function Demo() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<QueryResponse | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch(`${API_BASE}/v1/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: query.trim(), approval_mode: false }),
      });
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to reach API. Is the agent running?");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="demo" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--card)] px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-[var(--foreground)]">Live Demo</h2>
        <p className="mt-4 text-[var(--muted)]">
          Ask a policy question—try: &quot;What documentation is required for disputes over $5000?&quot; or &quot;How many days for standard dispute review?&quot;
        </p>
        <form onSubmit={handleSubmit} className="mt-6">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. What documentation is required for disputes over $5000?"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
            rows={3}
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-4 rounded-lg bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-white hover:bg-[var(--accent-dark)] disabled:opacity-50 transition-colors"
          >
            {loading ? "Thinking…" : "Submit Query"}
          </button>
        </form>
        {error && (
          <div className="mt-6 rounded-lg border border-amber-500/50 bg-amber-500/10 p-4 text-amber-700 dark:text-amber-400">
            {error}
          </div>
        )}
        {result && (
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">Answer</h3>
              <p className="mt-2 text-[var(--muted)]">{result.answer}</p>
            </div>
            {result.citations?.length > 0 && (
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">Citations</h3>
                <ul className="mt-2 space-y-2">
                  {result.citations.map((c, i) => (
                    <li key={i} className="rounded border border-[var(--border)] p-3 text-sm">
                      <span className="font-medium">{c.source}</span>
                      {c.page != null && ` (p.${c.page})`}
                      <p className="mt-1 text-[var(--muted)]">{c.excerpt}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {result.action_plan?.tasks?.length > 0 && (
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">Action Plan</h3>
                <ul className="mt-2 space-y-2">
                  {result.action_plan.tasks.map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className={`shrink-0 rounded px-2 py-0.5 text-xs font-medium ${
                          t.priority === "high" ? "bg-red-500/20 text-red-600" : "bg-[var(--accent)]/20 text-[var(--accent)]"
                        }`}
                      >
                        {t.priority}
                      </span>
                      <span className="text-sm text-[var(--foreground)]">{t.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <p className="text-xs text-[var(--muted)]">
              Confidence: {(result.metadata.confidence * 100).toFixed(0)}% · Latency: {result.metadata.latency_ms}ms
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
