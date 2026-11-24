# 🟢 Node.js Interview & Exam Quick Reference

### 📘 Event Loop • Async • Streams • Scaling • Express • Security

---

# 1. Runtime Internals

* **V8** compiles JavaScript; **libuv** provides the event loop, thread pool (default 4 threads: fs, dns.lookup, crypto, zlib) and async I/O.
* **Event Loop phases:** timers → pending callbacks → idle/prepare → **poll** (I/O) → **check** (`setImmediate`) → close callbacks.
* **Microtask** queue (Promise `.then`, `queueMicrotask`) drains after each callback; **`process.nextTick`** runs even before promise microtasks. Starving the loop with endless `nextTick`/microtasks blocks I/O.
* Never block the loop with CPU-heavy sync work (big JSON parse, crypto sync, regex backtracking) → offload.
* **Garbage Collection**: generational (young/old, Scavenge + Mark-Sweep/Compact). **Memory Leak** causes: unbounded caches/maps, forgotten listeners/timers, closures holding large objects, global state. Diagnose with `--inspect`, heap snapshots, `process.memoryUsage()`. **Profiling**: `--prof`, `clinic`, Chrome DevTools flame graphs.

```js
setTimeout(() => console.log('timeout'));
setImmediate(() => console.log('immediate'));
process.nextTick(() => console.log('nextTick'));
Promise.resolve().then(() => console.log('promise'));
// nextTick, promise, then timeout/immediate (order of the last two depends on context)
```

---

# 2. Async Patterns

* **Callback** (error-first `(err, data)`) → **Promise** → **async/await** (sugar over promises). Always `try/catch` awaited calls; handle `unhandledRejection`.
* `Promise.all` (fail fast), `allSettled` (collect all outcomes), `race`, `any`.
* **EventEmitter**: `on/once/emit`; an unhandled `'error'` event throws; watch listener leaks (`MaxListenersExceededWarning`).
* **Streams** (Readable, Writable, Duplex, Transform): process data in chunks. **Backpressure**: `write()` returns `false` → pause until `'drain'`; `pipe()`/`pipeline()` handles it and propagates errors.
* **Buffer**: fixed-size raw binary memory; `Buffer.from`, `alloc`, encodings.

---

# 3. Scaling & Concurrency

| Tool | Use |
| ---- | --- |
| **Worker Threads** | CPU-bound JS in parallel threads (shared memory possible) |
| **Cluster** | Multiple processes sharing a port to use all cores |
| **Child Process** | Spawn other programs/scripts (`spawn`, `exec`, `fork`) |
| Load balancer / containers | Horizontal scaling across machines |

**Graceful Shutdown:** on `SIGTERM` stop accepting connections (`server.close()`), finish in-flight requests, close DB pools, then `process.exit`.

---

# 4. Web Layer

* **Express** routing + **Middleware** chain `(req, res, next)`; order matters; error middleware has 4 args `(err, req, res, next)`.
* **REST**: resources + verbs, proper status codes, idempotent PUT/DELETE, pagination, versioning.
* **WebSocket**: persistent bidirectional channel (chat, live feeds).
* **CORS**: browser-enforced cross-origin policy; configure allowed origins/methods/headers (don't use `*` with credentials).
* **Rate Limiting**: protect against abuse/brute force (token bucket, `express-rate-limit`, Redis-backed in clusters).
* **JWT**: signed (not encrypted) token — validate signature, `exp`, `aud/iss`; short-lived access + refresh tokens; never store secrets in payload.
* **Helmet**: sets secure HTTP headers (CSP, HSTS, X-Content-Type-Options).
* **npm**: `package-lock.json` for reproducible installs, `npm ci` in CI, `npm audit` for vulnerabilities, semver ranges (`^`, `~`).

---

# 🚨 Problem → Fix

| Symptom | Fix |
| ------- | --- |
| API freezes under CPU task | Worker Threads / offload |
| Memory grows until OOM | Heap snapshot; remove leaks (listeners, caches) |
| Large file upload crashes memory | Streams + backpressure |
| Only 1 core used | Cluster / multiple instances |
| Browser blocks API call | Configure CORS |
| Deploy drops requests | Graceful shutdown on SIGTERM |

> “Node is single-threaded for JS but non-blocking via libuv; I keep the event loop free, use streams with backpressure, scale with cluster or workers, and harden Express with Helmet, CORS, rate limiting and short-lived JWTs.”
