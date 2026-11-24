# 🤖 AI Architecture Interview & Exam Quick Reference

### 📘 RAG • LLM Serving • Platform • Resilience • Security • Observability

---

# 1. GenAI Application Patterns

* **RAG**: retrieve relevant chunks → inject into the prompt → generate grounded answer (cheaper/fresher than retraining, citations possible). Pipeline: ingest → chunk → embed → index → retrieve (+rerank) → generate.
* **Vector Database**: stores embeddings for ANN search (HNSW/IVF); consider hybrid (BM25 + vector), metadata filters, index refresh.
* **LangGraph**: graph/state-machine orchestration for agents (nodes, edges, checkpoints, human-in-the-loop).
* **Guardrails**: input/output validation — PII redaction, topic/toxicity filters, schema validation, grounding checks.
* **Fine-tuning** changes behavior/style/format; **RAG** adds knowledge. Prefer prompt → RAG → fine-tune in cost order.
* **Prompt Injection**: untrusted text (user, documents, tool output) trying to override instructions → isolate untrusted content, least privilege tools, output filtering.
* **Token** = unit of cost/limit/latency; manage context size, caching, model tiering.

---

# 2. Serving & Platform

* **Model Serving**: managed endpoints vs self-hosted (vLLM/TGI); batching, streaming, autoscaling, quantization.
* **GPU**: scarce and costly → right-size, share (MIG), batch requests, scale to zero where possible.
* **LLMOps**: prompt/model versioning, eval suites, CI/CD, rollout gates, cost & quality monitoring, feedback loops.
* **Kubernetes**: orchestration; HPA/KEDA for scaling; **Karpenter** provisions right-sized nodes (incl. GPU) just-in-time and consolidates them.
* **Service Mesh** (Istio/Linkerd): mTLS, traffic shaping, retries, telemetry between services.

---

# 3. Resilience

* **Canary**: release to a small % first, auto-rollback on SLO breach (also for new model/prompt versions).
* **Multi-Region**: active-active/active-passive for availability & latency; plan data replication and failover (RTO/RPO).
* **Circuit Breaker**: stop calling a failing dependency (closed → open → half-open); pair with timeouts, retries with jitter, fallbacks (smaller model/cache).

---

# 4. Security & Governance

* **mTLS**: both sides authenticate with certificates (service-to-service).
* **Zero Trust**: never trust network location; authenticate, authorize and verify every request.
* **OIDC**: identity layer on OAuth 2.0 (ID tokens, SSO) for users and workloads.
* **Secrets Management**: vault/KMS, rotation, no secrets in prompts, images or git.
* **Data Residency**: keep data/inference in required jurisdictions (regional endpoints, region-pinned stores).
* **OWASP** Top 10 for LLM Apps: prompt injection, insecure output handling, data poisoning, model DoS, supply chain, sensitive information disclosure, excessive agency.

---

# 5. Observability & SLOs

* **Observability**: logs + metrics + traces (+ prompt/response sampling with PII controls, eval scores).
* **Latency**: time-to-first-token and total; track p50/p95/p99. **Throughput**: requests/sec, tokens/sec.
* **Distributed Tracing**: correlate gateway → retriever → model → tools with trace IDs (OpenTelemetry).

---

# 🚨 Problem → Fix

| Symptom | Fix |
| ------- | --- |
| Answers lack company knowledge | RAG |
| Hallucinated facts | Grounding + citations + guardrails |
| GPU cost spike | Batching, right-sizing, Karpenter, smaller model |
| Provider outage | Circuit breaker + fallback + multi-region |
| Bad new prompt in prod | Canary + eval gate + rollback |
| Doc contains "ignore instructions" | Isolate untrusted content, least privilege |
| Regulated data must stay in EU | Data residency controls |

> “I architect GenAI platforms with RAG on a vector store, guardrails and evals in an LLMOps pipeline, GPU-aware Kubernetes serving with canary releases and circuit breakers, zero-trust mTLS/OIDC security, and end-to-end tracing against latency and throughput SLOs.”
