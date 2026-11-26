# react — Exam Recall & Decision Guide

> Source-grounded revision aid built from this simulator question bank. Recall cards use representative questions and their supplied correct answers, explanations, and distractors; they are not an official exam blueprint.

## Consolidated mind map

```text
REACT
  ├─ Question domains
  │   ├─ scenarios
  │   ├─ hooks
  │   ├─ optimization
  │   ├─ state
  │   ├─ testing
  │   ├─ redux
  │   ├─ basics
  │   ├─ styling
  │   ├─ routing
  │   ├─ effect
  │   ├─ performance
  │   ├─ components
  │   ├─ typescript
  │   ├─ ecosystem
  │   └─ + 12 additional bank categories
  └─ Decision loop
      ├─ Trigger: identify the scenario constraint
      ├─ Answer: recall the source-backed technical choice
      ├─ Reason: connect choice to behavior or requirement
      └─ Trap: reject a plausible distractor and its mismatch

## Four-keyword recall cards

| Question trigger (max 4) | Answer recall (max 4) | Reason — why it works | Trap — what to reject |
|---|---|---|---|
| detect · component · mounted · updating | useRef · track · mount · status | While React 18 has improved this, checking mount status prevents 'can't perform a React state update on an unmounted component' warnings. | Trap: Use 'this.isMounted()' |
| sub-values · hook · handle · complex | useReducer | useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. | Trap: useMemo |
| Windowing · List · Virtualization · React | technique · renders · items · currently | Libraries like 'react-window' or 'react-virtualized' help render lists with thousands of rows by only keeping a small subset of DOM nodes active. | Trap: Opening multiple browser windows |
| State · Snapshotting · React · context | concept · state · constant · value | When state updates, React re-renders with a new 'snapshot' of state. Existing code inside the old render still sees the old value. | Trap: A way to save state to a file |
| User-Event · FireEvent · library | user-event · built · fireEvent · realistic | user-event simulates things like focus and keydown events that happen when a user actually types, whereas fireEvent just triggers the change event. | Trap: user-event is for servers only |
| Redux · Toolkit · createAsyncThunk · handle | automatically · dispatches · pending · fulfilled | AsyncThunk simplifies side-effect logic by providing standard action types for the start, success, and failure of promises. | Trap: It deletes the state on error |
| Virtual · DOM · React | React · DOM · blueprint · uses | React creates a lightweight copy of the DOM. When state changes, it compares the Virtual DOM with a snapshot taken before the update (diffing) and updates only the changed parts in the real DOM. | Trap: To directly manipulate the browser's DOM for speed |
| React · apply · inline · styles | style · color · red | Inline styles are passed as a JavaScript object. The outer braces indicate a JS expression, the inner ones define the object. | Trap: style='color: red' |

## How to use this map

1. Read the trigger and identify the requirement or failure mode in the scenario.
2. Recall the answer keywords before looking at the full explanation.
3. State the decision rule in your own words; the reason column gives the source explanation.
4. Eliminate the trap because it conflicts with the question constraint or the supplied explanation.

## Source coverage

- Question bank: `questionBank_react.js`
- Questions in source bank: **264**
- Consolidated recall cards: **8**
- Category labels represented in the mind-map hierarchy: **26**
- Distractors are drawn from the question options; explanations are drawn from the question bank.

---

# 🚀 React Interview & Frontend Prep README
<img width="1024" height="1536" alt="17856391050791465258704092431306" src="../assets/React.png" />

### 📘 Quick Reference (React + Vite + Ant Design + Enterprise UI)

Designed to help you **switch between coding problems, UI design, and system architecture** in interviews.

---

# 🧠 0. Mental Model (Frontend Flow)

```id="f1x2ab"
User Action → Component → State Change → Re-render (VDOM diff) → API Call → UI Update
                         ↓
                 Hooks / Context / Services / Guards
```

💡 **Interview Insight**

* Always mention:

  * **Re-render triggers**
  * **State vs props**
  * **Performance optimization (memoization)**

---

# ⚡ 1. React Core (Hooks Era)

## 🔑 State & Lifecycle

```jsx id="p8s3kl"
const [data, setData] = useState([]);
```

```jsx id="h2ks91"
useEffect(() => {
  fetchData();
}, []);
```

---

## 🎯 What to Say

* `useState` → local state
* `useEffect` → side effects (API calls)
* `useContext` → global state (lightweight alternative to Redux)
* `useReducer` → complex state logic

---

## 🧩 Re-render Rules (IMPORTANT)

```id="c2n9az"
State change → re-render
Props change → re-render
Parent re-render → child re-render
```

💡 Avoid unnecessary renders using memoization

---

# ⚡ 2. Performance Optimization (HIGH SIGNAL)

## 🔑 Hooks Comparison

| Hook          | Purpose          | Clue                    |
| ------------- | ---------------- | ----------------------- |
| `useMemo`     | Memoize value    | Expensive calc          |
| `useCallback` | Memoize function | Prevent child re-render |
| `useRef`      | Persist value    | No re-render            |
| `React.memo`  | Component memo   | Pure component          |

---

## 🔥 Example

```jsx id="9df3ka"
const memoValue = useMemo(() => heavyCalc(data), [data]);
```

---

## 🎯 What to Say

* Virtual DOM → diffing → efficient updates
* Avoid:

  * unnecessary re-renders
  * inline functions in props

---

# 🏗️ 3. Component Architecture

## 🔑 Patterns

* **Container vs Presentational**
* **Custom Hooks (RECOMMENDED)**
* HOC / Render Props (legacy but still asked)

---

## 🔥 Custom Hook Example

```jsx id="u8k1zs"
function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => { fetch(url).then(r => r.json()).then(setData); }, [url]);
  return data;
}
```

---

# 🌐 4. API Layer & Services (CRITICAL)

## 🔑 Axios Pattern

```js id="k4s9dj"
const api = axios.create({
  baseURL: "/api",
});
```

---

## 🔥 Interceptors (Auth Clue)

```js id="z7q2mw"
api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
```

---

## 🎯 What to Say

* Centralized API layer
* Handles:

  * Auth headers
  * Logging
  * Error handling

---

## 🧩 Service Pattern

```id="y1r8pm"
Component → Service → API → Response → Adapter → UI
```

💡 Mention:

* DTO mapping
* Adapter pattern (transform backend → UI)

---

# 🔐 5. Authentication & Guards

## 🔑 Flow

```id="t3n8kl"
Login → JWT → Store (localStorage) → Attach in Axios → Protected Route
```

---

## 🔥 Protected Route Clue

```jsx id="v6k2wd"
return isAuth ? <Dashboard /> : <Navigate to="/login" />;
```

---

## 🎯 What to Say

* JWT (Bearer token)
* Route Guards
* RBAC (role-based access)
* Refresh token strategy

---

# 🎨 6. Ant Design (UI System)

## 🔑 Layout

* `Row`, `Col`
* `Layout`, `Sider`
* `Space`

---

## 🔑 Forms

```jsx id="d4k9sj"
<Form form={form} onFinish={onSubmit}>
  <Form.Item name="email" rules={[{ required: true }]}>
    <Input />
  </Form.Item>
</Form>
```

---

## 🔑 Data Display

* `Table` → `dataSource`, `columns`
* `Pagination`

---

## 🔑 Feedback

* `message.success()`
* `notification.open()`
* `Modal.confirm()`
* `Spin` (loading)

---

# ⚡ 7. Async & Logic Patterns

## 🔑 Core

```js id="n2k8sj"
await Promise.all([api1(), api2()]);
```

---

## 🔥 High-Signal Concepts

| Problem            | Solution        |
| ------------------ | --------------- |
| Too many API calls | Debounce        |
| Rapid clicks       | Throttle        |
| Race condition     | AbortController |

---

# 🧩 8. Vite & Modern Tooling

## 🔑 Key Concepts

* HMR → instant reload
* ESBuild → fast compile
* Rollup → production bundling

---

## 🔥 Config Clue

```ts id="q3p8sk"
export default defineConfig({
  resolve: {
    alias: { "@": "/src" }
  }
});
```

---

## 🎯 What to Say

* Tree shaking → smaller bundles
* Code splitting → lazy loading

---

# ⚡ 9. Micro-Frontend & Scalability

## 🔑 Must-Say Keywords

* Module Federation
* Monorepo (Nx, Turborepo)
* SSR / SSG
* Hydration

---

## 🎯 Scenario Clues

**"Large app scaling?"**
→ Micro-frontends + module federation

**"SEO needed?"**
→ SSR (Next.js)

---

# 🚨 10. Error Handling (Frontend)

## 🔑 Error Boundary

```jsx id="b9w2sk"
class ErrorBoundary extends React.Component {
  componentDidCatch(error) {}
}
```

---

## 🎯 What to Say

* Prevent app crash
* Wrap critical components

---

# 🧠 11. High-Probability Scenarios

## 🧩 Scenario → Answer Pattern

**"Component re-rendering too much?"**
→ `useMemo`, `useCallback`, `React.memo`

---

**"Secure frontend?"**
→ JWT + interceptors + guards

---

**"API structure?"**
→ Service layer + DTO + adapter

---

**"Form validation?"**
→ AntD rules + controlled inputs

---

**"Slow UI?"**
→ Code splitting + lazy loading

---

# 📎 Appendix: Rapid Recall Cheat Sheet

## ⚡ React Core

```id="c8k2sl"
useState → state
useEffect → side effects
useContext → global state
useRef → no re-render
```

---

## ⚡ Performance

```id="p4k9sn"
useMemo → value
useCallback → function
React.memo → component
```

---

## ⚡ API

```id="x7l2dk"
Axios → HTTP
Interceptor → auth/logging
DTO → data contract
Adapter → transform data
```

---

## ⚡ Ant Design

```id="m3k8sl"
Form → validation
Table → data display
Modal → confirm
Spin → loading
```

---

## ⚡ Auth

```id="z2k9sl"
JWT → token
Guard → route protection
RBAC → roles
```

---

## ⚡ Vite

```id="k9s2pl"
HMR → fast reload
ESBuild → dev speed
Rollup → prod build
```

---

# 🎯 Final Interview One-Liner

> “I build React apps using hooks-based architecture, optimize performance with memoization, structure APIs via Axios service layers with interceptors, secure routes using JWT and guards, and scale using modular architecture with Vite and code splitting.”

---
