# FinOps Agent

A multi-agent AI system that answers financial policy and compliance questions. Ask it something like "what docs do I need for a dispute over $5k?" and it pulls from your policy docs, cites sources, and spits out a concrete action plan. Built for teams that need answers fast without digging through PDFs.

## Use case

Financial ops and compliance teams get a lot of "what’s the policy on X?" questions. Instead of manually searching docs or escalating to experts, they can query FinOps Agent. It uses RAG to search your ingested policies, summarizes the answer with citations, and suggests next steps (forms to fill, who to contact, deadlines). Everything is logged for audits.

## Impact & ROI

- **~60% faster** answers to policy questions by automating lookup and synthesis
- **100% audit trail** — every query and response is logged for compliance
- **Cited answers** — every claim links back to source docs, no guessing

## Tech stack

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![LangGraph](https://img.shields.io/badge/LangGraph-000000?style=flat-square)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Qdrant](https://img.shields.io/badge/Qdrant-7C3AED?style=flat-square)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Kafka](https://img.shields.io/badge/Kafka-231F20?style=flat-square&logo=apache-kafka&logoColor=white)
![Groq](https://img.shields.io/badge/Groq-000000?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)

Backend: Python, LangGraph, FastAPI, Qdrant, PostgreSQL, Kafka, Prometheus, Grafana. Optional Go gRPC retrieval service. LLM: Groq or OpenAI. Frontend: Next.js.

## Run locally

```bash
npm install
npm run dev
```

The demo calls the FinOps Agent API. Point `NEXT_PUBLIC_API_URL` at your API (e.g. `http://localhost:8000`) or use "View sample response" to see it without a backend.

## Deploy

```bash
npx vercel
```
