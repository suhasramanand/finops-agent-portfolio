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

const SAMPLE_RESPONSE: QueryResponse = {
  answer:
    "For disputes over $5,000, the required documentation includes: Form DIS-501 (Enhanced Dispute Documentation Form), proof of identity (government-issued ID), bank statements covering the transaction period, written affidavit if the dispute involves fraud, police report (if applicable for fraud cases), and any correspondence with the merchant.",
  citations: [
    {
      source: "sample_policy.txt",
      page: null,
      excerpt:
        "2.2 For disputes $5,000 and ABOVE: All of the above, PLUS: - Form DIS-501 (Enhanced Dispute Documentation Form) - Proof of identity (government-issued ID) - Bank statements covering the transaction period...",
    },
  ],
  action_plan: {
    tasks: [
      { title: "Gather Form DIS-501", priority: "medium", description: "Obtain and complete the Enhanced Dispute Documentation Form" },
      { title: "Collect proof of identity", priority: "medium", description: "Provide a government-issued ID" },
      { title: "Retrieve bank statements", priority: "medium", description: "Covering the transaction period" },
    ],
    assignee: null,
    due_date: null,
  },
  metadata: { confidence: 1.0, latency_ms: 0 },
};

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
      setError("API unavailable — showing sample response");
      setResult(SAMPLE_RESPONSE);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="demo" className="scroll-mt-20 px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-zinc-100 sm:text-3xl">Live Demo</h2>
        <p className="mt-4 text-zinc-400">
          Ask a policy question—try: &quot;What documentation is required for disputes over $5000?&quot; or &quot;How many days for standard dispute review?&quot;
        </p>
        <div className="mt-8 glass rounded-2xl border-white/5 p-6 sm:p-8">
          <form onSubmit={handleSubmit}>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. What documentation is required for disputes over $5000?"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-zinc-100 placeholder:text-zinc-500 focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
              rows={3}
              disabled={loading}
            />
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={loading}
                className="glow-button rounded-xl px-6 py-3 text-sm font-semibold text-white disabled:opacity-50 disabled:hover:transform-none"
              >
                {loading ? "Thinking…" : "Submit Query"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setError(null);
                  setResult(SAMPLE_RESPONSE);
                }}
                className="rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 hover:bg-white/5 transition-all"
              >
                View sample response
              </button>
            </div>
          </form>
          {error && (
            <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-amber-300 text-sm">
              {error}
            </div>
          )}
          {result && (
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-zinc-100">Answer</h3>
                <p className="mt-2 text-zinc-400 leading-relaxed">{result.answer}</p>
              </div>
              {result.citations?.length > 0 && (
                <div>
                  <h3 className="font-semibold text-zinc-100">Citations</h3>
                  <ul className="mt-3 space-y-3">
                    {result.citations.map((c, i) => (
                      <li key={i} className="rounded-xl border border-white/5 bg-white/5 p-4 text-sm">
                        <span className="font-medium text-violet-300">{c.source}</span>
                        {c.page != null && <span className="text-zinc-500"> (p.{c.page})</span>}
                        <p className="mt-2 text-zinc-400">{c.excerpt}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {result.action_plan?.tasks?.length > 0 && (
                <div>
                  <h3 className="font-semibold text-zinc-100">Action Plan</h3>
                  <ul className="mt-3 space-y-2">
                    {result.action_plan.tasks.map((t, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span
                          className={`shrink-0 rounded-lg px-2.5 py-1 text-xs font-medium ${
                            t.priority === "high"
                              ? "bg-rose-500/20 text-rose-400"
                              : "bg-violet-500/20 text-violet-400"
                          }`}
                        >
                          {t.priority}
                        </span>
                        <span className="text-sm text-zinc-300">{t.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="text-xs text-zinc-500">
                Confidence: {(result.metadata.confidence * 100).toFixed(0)}% · Latency: {result.metadata.latency_ms}ms
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
