# 🟨 JavaScript Interview & Exam Quick Reference

### 📘 Language Core • Async • Functional Patterns • Browser & API Concepts

---

# 1. Language Core

* **Closure**: a function remembering its lexical scope after the outer function returns (private state, factories, callbacks).
* **Hoisting**: declarations are processed before execution. `var` hoists as `undefined`; function declarations hoist fully. **Temporal Dead Zone**: `let`/`const` exist but are inaccessible before their declaration (ReferenceError).
* **`this`** is decided by *how* a function is called: method call → object; plain call → `undefined` (strict) / global; `new` → new object; `call/apply/bind` → explicit; **arrow functions** inherit `this` lexically.
* **Prototype** chain: objects delegate property lookup to their prototype; `class` is syntax over prototypes.
* **Strict Mode** (`'use strict'`, automatic in modules/classes): no implicit globals, errors on silent failures.
* **Proxy** intercepts operations (get/set/has) — validation, reactivity. **Generator** (`function*`, `yield`) pauses/resumes; basis of lazy iterators.
* **Destructuring** & **Spread**: `const {a, ...rest} = obj`, `[...arr]`, `{...obj}` (shallow).
* **ES6** & **Module**s: `let/const`, arrow functions, template literals, classes, `import/export` (static, live bindings).
* **Map / Set**: keyed collection with any key type / unique values; O(1) average lookups.

```js
for (var i = 0; i < 3; i++) setTimeout(() => console.log(i)); // 3 3 3
for (let i = 0; i < 3; i++) setTimeout(() => console.log(i)); // 0 1 2
```

---

# 2. Async

* **Event Loop**: call stack → Web APIs → task (macrotask) queue; **microtasks** (Promise reactions) run before the next macrotask.
* **Callback** → **Promise** (pending/fulfilled/rejected) → **async/await**. `await` in a loop is sequential; use `Promise.all` for parallel.
* **Fetch**: returns a promise that **rejects only on network failure** — check `response.ok` for 4xx/5xx; `response.json()` is itself async.

---

# 3. Functional & Performance Patterns

* **Currying**: `f(a, b, c)` → `f(a)(b)(c)`; partial application.
* **Memoization**: cache results by arguments for pure functions.
* **Debounce**: run after calls stop for N ms (search-as-you-type). **Throttle**: run at most once per N ms (scroll/resize).
* **Shallow Copy** (`{...o}`, `Object.assign`) copies top level only; deep copy → `structuredClone`. **Immutable** updates (`map`, spread, `Object.freeze` is shallow) make change detection and debugging simpler.
* **Event Delegation**: one listener on a parent using bubbling and `event.target`; works for dynamic children.
* **LocalStorage**: synchronous, string-only, ~5MB, per-origin, no expiry; never store secrets/tokens susceptible to XSS (vs `sessionStorage`, cookies `HttpOnly`).

---

# 4. API Concepts

* **REST**: stateless, resource URLs, verbs, status codes. **Versioning** (`/v1`, header) so clients don't break.
* **CORS**: server opt-in via `Access-Control-Allow-*`; preflight `OPTIONS` for non-simple requests.

---

# 🚨 Quick Traps

| Trap | Answer |
| ---- | ------ |
| `typeof null` | `"object"` |
| `0.1 + 0.2 === 0.3` | `false` (floating point) |
| `[] + {}` / `==` coercion | Use `===` |
| `var` in loop with timeout | Closure over shared variable → use `let` |
| `async` function return | Always a Promise |
| `fetch` 404 | Does not reject |

> “I reason about JavaScript through scope, `this` binding and the event loop; I use closures, immutability and Promise.all deliberately, and control event frequency with debounce and throttle.”
