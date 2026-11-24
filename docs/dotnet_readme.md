# 🟣 .NET / C# / ASP.NET Core Interview & Exam Quick Reference

### 📘 C# Language • Runtime • ASP.NET Core • Data • Architecture

---

# 1. C# Language

* **LINQ**: declarative queries over `IEnumerable`/`IQueryable`; **deferred execution** (runs on enumeration, e.g., `ToList()`); `IQueryable` translates to SQL (EF) — don't call `.ToList()` before filtering.
* **Delegate**: type-safe function pointer (`Func`, `Action`, `Predicate`); events build on delegates.
* **Generics**: type-safe reusable code with constraints (`where T : class, new()`).
* **Record**: reference type (or `record struct`) with value-based equality, `with` expressions, immutability by default.
* **Span<T>**: stack-only view over contiguous memory, zero-allocation slicing (can't be used across `await`).
* **Nullable** reference types (`string?`) give compile-time null-safety warnings; `Nullable<T>` (`int?`) for value types.
* **Async / Task**: `async/await` frees threads during I/O; return `Task`/`Task<T>`/`ValueTask`; avoid `async void` (except event handlers) and avoid `.Result`/`.Wait()` (deadlocks); pass `CancellationToken`.
* **IDisposable**: deterministic release of unmanaged resources — `using` statements/declarations; `IAsyncDisposable` for async.

---

# 2. Runtime

* **CLR** executes IL; **JIT** compiles IL to native at runtime (tiered compilation, ReadyToRun/AOT options).
* **Garbage Collection**: generational (Gen 0/1/2 + Large Object Heap), compacting, non-deterministic; finalizers are costly — implement the dispose pattern.

---

# 3. ASP.NET Core

* **Kestrel**: cross-platform web server (usually behind a reverse proxy).
* **Middleware** pipeline: ordered `app.Use...`; each component may short-circuit (auth → routing → endpoints; exception handling first).
* **Dependency Injection** built in: lifetimes **Transient** (per resolve), **Scoped** (per request), **Singleton** (app lifetime). Never inject Scoped into Singleton (captive dependency).
* **Minimal API**: `app.MapGet("/x", () => ...)` low-ceremony endpoints vs controllers.
* **Blazor** (C# UI: Server/WebAssembly), **Razor** (pages/views), **SignalR** (real-time over WebSockets/SSE/long polling), **gRPC** (HTTP/2 + protobuf, fast service-to-service).
* **Health Checks**: `/health` liveness/readiness for orchestrators.
* **Docker**: multi-stage builds (SDK → runtime image), non-root user, small images.
* **JWT** bearer auth + **Identity** (users, roles, password hashing, claims) → authN vs authZ policies.

```csharp
var app = WebApplication.CreateBuilder(args).Build();
app.UseAuthentication(); app.UseAuthorization();
app.MapGet("/orders/{id}", async (int id, IOrderService s) => await s.GetAsync(id));
app.Run();
```

---

# 4. Data & Architecture

* **Entity Framework (Core)**: ORM with change tracking; `AsNoTracking()` for read-only; avoid N+1 (`Include`); **Migration**s version the schema; `DbContext` is Scoped.
* **Dapper**: micro-ORM, raw SQL → fastest mapping, more manual.
* **Transaction**: `SaveChanges` is transactional; `BeginTransaction` for multi-step units; `TransactionScope` for ambient.
* **Microservices**: independent deployable services; **Polly** adds retry, circuit breaker, timeout, bulkhead, fallback for resilient HTTP calls.
* **SOLID**: SRP, OCP, LSP, ISP, DIP. **CQRS**: separate command (write) and query (read) models. **Clean Architecture**: dependencies point inward (Domain ← Application ← Infrastructure/UI).

---

# 🚨 Problem → Fix

| Symptom | Fix |
| ------- | --- |
| Deadlock calling `.Result` | `await` all the way |
| Slow list endpoint with many queries | Fix N+1 with `Include`/projection |
| Flaky downstream API | Polly retry + circuit breaker |
| Stale singleton data | Lifetime mismatch → correct DI scope |
| High allocations parsing text | `Span<T>` / pooling |

> “I build ASP.NET Core services on Kestrel with a deliberate middleware pipeline and DI lifetimes, use async end-to-end, EF Core with Dapper for hot paths, Polly for resilience, and keep boundaries clean with SOLID, CQRS and Clean Architecture.”
