/* ======================================================
   REACT CERTIFICATION QUESTION BANK 
   ====================================================== */

const questionBank = [
  {
    "id": 1,
    "difficulty": "easy",
    "category": "basics",
    "question": "What is the primary purpose of the Virtual DOM in React?",
    "options": [
      "To store data in the browser's local storage",
      "To directly manipulate the browser's DOM for speed",
      "To handle server-side routing",
      "To provide a blueprint that React uses to update the real DOM efficiently"
    ],
    "answer": 3,
    "explanation": "React creates a lightweight copy of the DOM. When state changes, it compares the Virtual DOM with a snapshot taken before the update (diffing) and updates only the changed parts in the real DOM.",
    "hint": "Think of it as a 'draft' before the final version."
  },
  {
    "id": 2,
    "difficulty": "medium",
    "category": "jsx",
    "question": "In JSX, how must you express JavaScript expressions?",
    "options": [
      "Inside square brackets []",
      "Inside parenthetical tags ()",
      "Inside curly braces {}",
      "Inside double quotes"
    ],
    "answer": 2,
    "explanation": "Curly braces are used in JSX to evaluate JavaScript expressions, including variables, functions, and inline math.",
    "hint": "The same syntax used for objects in JS."
  },
  {
    "id": 3,
    "difficulty": "easy",
    "category": "components",
    "question": "Which of the following is a requirement for a React component name?",
    "options": [
      "It must contain at least one number",
      "It must be wrapped in a string",
      "It must start with an uppercase letter",
      "It must be camelCase"
    ],
    "answer": 2,
    "explanation": "React treats components starting with lowercase letters as DOM tags (like <div>). Custom components must be PascalCase (e.g., <MyComponent />).",
    "hint": "PascalCase is key."
  },
  {
    "id": 4,
    "difficulty": "medium",
    "category": "props",
    "question": "How are 'props' passed to a component?",
    "options": [
      "As arguments to the component function or class",
      "Through the state object",
      "By defining them in the CSS file",
      "Using the 'setProps' method"
    ],
    "answer": 0,
    "explanation": "Props are read-only inputs passed from a parent component to a child component, similar to function arguments.",
    "hint": "Inbound data."
  },
  {
    "id": 5,
    "difficulty": "hard",
    "category": "state",
    "question": "What happens when you call 'setState' in a class component?",
    "options": [
      "The Virtual DOM is deleted",
      "The component's props are updated",
      "The browser window reloads",
      "The component and its children are scheduled for re-rendering"
    ],
    "answer": 3,
    "explanation": "Updating state triggers React's reconciliation process, which eventually updates the UI to reflect the new state.",
    "hint": "Triggers a UI refresh."
  },
  {
    "id": 6,
    "difficulty": "medium",
    "category": "hooks",
    "question": "Which hook is used to add state to a functional component?",
    "options": [
      "useState",
      "useEffect",
      "useContext",
      "useReducer"
    ],
    "answer": 0,
    "explanation": "useState returns a stateful value and a function to update it.",
    "hint": "The most basic state hook."
  },
  {
    "id": 7,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "A component is rendering a list of items using '.map()'. Why is the 'key' prop necessary?",
    "options": [
      "To help React identify which items have changed, been added, or removed",
      "To style each item individually",
      "To enable event listeners on the list",
      "To set the index of the item in the array"
    ],
    "answer": 0,
    "explanation": "Keys provide a stable identity for elements in a list, allowing React to optimize re-renders by not recreating the entire list.",
    "hint": "Performance and identity."
  },
  {
    "id": 8,
    "difficulty": "medium",
    "category": "jsx",
    "question": "Which attribute is used in JSX instead of the standard HTML 'class' attribute?",
    "options": [
      "styleClass",
      "className",
      "elementClass",
      "class"
    ],
    "answer": 1,
    "explanation": "Because 'class' is a reserved keyword in JavaScript, React uses 'className' for DOM elements.",
    "hint": "CamelCase version of class."
  },
  {
    "id": 9,
    "difficulty": "easy",
    "category": "basics",
    "question": "What is the name of the tool used to compile JSX into standard JavaScript?",
    "options": [
      "NPM",
      "Redux",
      "Babel",
      "Webpack"
    ],
    "answer": 2,
    "explanation": "Babel is the transpiler that converts modern JS and JSX into a version of JavaScript that all browsers can understand.",
    "hint": "Transpilation."
  },
  {
    "id": 10,
    "difficulty": "hard",
    "category": "hooks",
    "question": "When using 'useEffect', how do you ensure the effect only runs once after the initial render?",
    "options": [
      "Return a cleanup function",
      "Omit the dependency array",
      "Pass an empty array [] as the second argument",
      "Use the 'useOnce' hook instead"
    ],
    "answer": 2,
    "explanation": "An empty dependency array tells React that the effect doesn't depend on any values from props or state, so it never needs to re-run.",
    "hint": "Empty dependency."
  },
  {
    "id": 11,
    "difficulty": "medium",
    "category": "events",
    "question": "How do you prevent the default behavior of a form submission in a React event handler?",
    "options": [
      "return false",
      "form.stop()",
      "e.preventDefault()",
      "e.stopPropagation()"
    ],
    "answer": 2,
    "explanation": "In React, you cannot return false to prevent default behavior; you must explicitly call preventDefault() on the event object.",
    "hint": "Standard JS event method."
  },
  {
    "id": 12,
    "difficulty": "hard",
    "category": "state",
    "question": "In functional components, is 'useState' update synchronous or asynchronous?",
    "options": [
      "Synchronous",
      "Asynchronous",
      "It depends on the browser",
      "Synchronous only in strict mode"
    ],
    "answer": 1,
    "explanation": "State updates are asynchronous. React batches multiple updates together for performance reasons.",
    "hint": "It doesn't happen instantly in the next line of code."
  },
  {
    "id": 13,
    "difficulty": "medium",
    "category": "components",
    "question": "What are 'Higher-Order Components' (HOC)?",
    "options": [
      "Components with more than 100 lines of code",
      "The parent component of all elements",
      "Components that render at the top of the DOM tree",
      "A function that takes a component and returns a new component"
    ],
    "answer": 3,
    "explanation": "HOCs are a pattern used for reusing component logic. They are not part of the React API, but a pattern that emerges from React's compositional nature.",
    "hint": "Component transformation."
  },
  {
    "id": 14,
    "difficulty": "easy",
    "category": "basics",
    "question": "Which of the following describes 'Props' correctly?",
    "options": [
      "They are immutable (read-only) to the receiving component",
      "They are mutable within the component",
      "They are used to store private data",
      "They are defined using the 'useState' hook"
    ],
    "answer": 0,
    "explanation": "Props should never be modified by the child component. They are passed down by the parent.",
    "hint": "Data flow is one-way."
  },
  {
    "id": 15,
    "difficulty": "hard",
    "category": "hooks",
    "question": "What is the purpose of the cleanup function in 'useEffect'?",
    "options": [
      "To delete the component's state",
      "To reset the CSS styles",
      "To force a garbage collection in the browser",
      "To perform tasks like unsubscribing from services or clearing timers before the component unmounts"
    ],
    "answer": 3,
    "explanation": "The function returned by useEffect is the 'cleanup' phase, preventing memory leaks.",
    "hint": "Unsubscribe or clear."
  },
  {
    "id": 16,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "You need to update a state variable based on its previous value. What is the recommended way to do this?",
    "options": [
      "setCount(count + 1)",
      "setCount(prevCount => prevCount + 1)",
      "this.state.count++",
      "count = count + 1"
    ],
    "answer": 1,
    "explanation": "Using the functional update form ensures you are working with the most current state, especially when updates are batched.",
    "hint": "Use a callback function."
  },
  {
    "id": 17,
    "difficulty": "easy",
    "category": "jsx",
    "question": "How do you write a comment in JSX?",
    "options": [
      "/* comment */",
      "// comment",
      "{/* comment */}",
      "<!-- comment -->"
    ],
    "answer": 2,
    "explanation": "Inside the return statement of a component, you must wrap a block comment in curly braces.",
    "hint": "JS comment inside an expression."
  },
  {
    "id": 18,
    "difficulty": "hard",
    "category": "components",
    "question": "What is a 'PureComponent' in React class components?",
    "options": [
      "A component used for data fetching only",
      "A component that implements 'shouldComponentUpdate' with a shallow prop and state comparison",
      "A component that has no state",
      "A component that only renders HTML"
    ],
    "answer": 1,
    "explanation": "PureComponent optimizes performance by preventing unnecessary re-renders if props and state haven't changed.",
    "hint": "Shallow comparison."
  },
  {
    "id": 19,
    "difficulty": "medium",
    "category": "state",
    "question": "Can you use Hooks inside a class component?",
    "options": [
      "No",
      "Only if the class is exported",
      "Yes",
      "Only in the constructor"
    ],
    "answer": 0,
    "explanation": "Hooks are designed specifically for functional components. Class components use lifecycle methods instead.",
    "hint": "Functional components only."
  },
  {
    "id": 20,
    "difficulty": "easy",
    "category": "basics",
    "question": "React follows which type of data flow?",
    "options": [
      "Bottom-up",
      "Random",
      "Unidirectional (Top-down)",
      "Bi-directional"
    ],
    "answer": 2,
    "explanation": "Data in React flows from parent to child via props.",
    "hint": "One-way street."
  },
  {
    "id": 21,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "Which hook would you use to store a mutable value that does NOT trigger a re-render when it changes?",
    "options": [
      "useRef",
      "useState",
      "useCallback",
      "useMemo"
    ],
    "answer": 0,
    "explanation": "useRef returns a mutable ref object whose .current property can hold any value, and changing it won't cause a render.",
    "hint": "Think of a 'box' for variables."
  },
  {
    "id": 22,
    "difficulty": "hard",
    "category": "lifecycle",
    "question": "In class components, which lifecycle method is called immediately after a component is inserted into the DOM?",
    "options": [
      "componentDidMount",
      "render",
      "componentWillMount",
      "componentDidUpdate"
    ],
    "answer": 0,
    "explanation": "componentDidMount is the ideal place for network requests or DOM manipulations.",
    "hint": "After the first mount."
  },
  {
    "id": 23,
    "difficulty": "medium",
    "category": "jsx",
    "question": "What is a React Fragment used for?",
    "options": [
      "To manage global state",
      "To create a portal to another DOM node",
      "To break the code into smaller files",
      "To group a list of children without adding extra nodes to the DOM"
    ],
    "answer": 3,
    "explanation": "Fragments (<> or <React.Fragment>) let you return multiple elements without wrapping them in a <div>.",
    "hint": "Avoid unnecessary wrappers."
  },
  {
    "id": 24,
    "difficulty": "hard",
    "category": "hooks",
    "question": "What does 'useMemo' do?",
    "options": [
      "It saves the component to the browser cache",
      "It memoizes the result of a calculation to prevent expensive re-computations on every render",
      "It memoizes a function to prevent it from being recreated",
      "It executes a function only on the first render"
    ],
    "answer": 1,
    "explanation": "useMemo caches a value based on dependencies, improving performance for heavy calculations.",
    "hint": "Memoize a 'value'."
  },
  {
    "id": 25,
    "difficulty": "easy",
    "category": "props",
    "question": "What is 'props.children'?",
    "options": [
      "The internal CSS of a component",
      "An array of the component's state variables",
      "A list of all child components in the app",
      "A special prop that displays whatever is included between the opening and closing tags of a component"
    ],
    "answer": 3,
    "explanation": "props.children allow components to be used as containers for other elements or components.",
    "hint": "Content between tags."
  },
  {
    "id": 26,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is the 'Reconciliation' process in React?",
    "options": [
      "Connecting React to a database",
      "The process of converting JSX to JS",
      "The process of compiling CSS",
      "The algorithm React uses to diff one tree with another to determine which parts need to be changed"
    ],
    "answer": 3,
    "explanation": "Reconciliation is the heart of React's efficiency, updating only the necessary parts of the DOM.",
    "hint": "The diffing algorithm."
  },
  {
    "id": 27,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You want to pass data through the component tree without having to pass props down manually at every level. What should you use?",
    "options": [
      "React Router",
      "Context API",
      "Higher-Order Components",
      "Redux"
    ],
    "answer": 1,
    "explanation": "Context provides a way to share values between components without 'prop drilling'.",
    "hint": "Broadcasting data."
  },
  {
    "id": 28,
    "difficulty": "medium",
    "category": "hooks",
    "question": "What is the first argument passed to the 'useState' hook?",
    "options": [
      "An array of dependencies",
      "The initial state value",
      "The component name",
      "The update function"
    ],
    "answer": 1,
    "explanation": "useState(initialValue) sets the starting value for that piece of state.",
    "hint": "The beginning value."
  },
  {
    "id": 29,
    "difficulty": "easy",
    "category": "components",
    "question": "Which of these is a valid way to create a functional component?",
    "options": [
      "class Welcome extends Component { ... }",
      "const Welcome = () => { <h1>Hello</h1>; }",
      "Welcome() => <h1>Hello</h1>",
      "function Welcome() { return <h1>Hello</h1>; }"
    ],
    "answer": 3,
    "explanation": "Option 0 is a standard JS function returning JSX. Option 1 is missing the 'return' keyword or implicit return parens.",
    "hint": "Standard function syntax."
  },
  {
    "id": 30,
    "difficulty": "hard",
    "category": "events",
    "question": "In class components, why is it often necessary to 'bind' event handlers in the constructor?",
    "options": [
      "To speed up the execution",
      "To ensure the 'this' keyword refers to the component instance in the handler",
      "To make the code look cleaner",
      "To register the event with the browser"
    ],
    "answer": 1,
    "explanation": "JavaScript's 'this' binding is tricky; without binding, 'this' is undefined when the handler is called by the event system.",
    "hint": "Binding 'this'."
  },
  {
    "id": 31,
    "difficulty": "medium",
    "category": "lifecycle",
    "question": "Which lifecycle method is equivalent to the cleanup function in 'useEffect'?",
    "options": [
      "componentDidMount",
      "componentDidUpdate",
      "componentWillUnmount",
      "render"
    ],
    "answer": 2,
    "explanation": "componentWillUnmount is called just before the component is removed from the DOM.",
    "hint": "Before destruction."
  },
  {
    "id": 32,
    "difficulty": "easy",
    "category": "basics",
    "question": "Who developed and maintains React?",
    "options": [
      "Google",
      "Microsoft",
      "Twitter",
      "Meta (Facebook)"
    ],
    "answer": 3,
    "explanation": "React was created by Jordan Walke at Facebook and is now maintained by Meta and a community of contributors.",
    "hint": "Social media giant."
  },
  {
    "id": 33,
    "difficulty": "hard",
    "category": "hooks",
    "question": "Which hook is used to handle complex state logic that involves multiple sub-values?",
    "options": [
      "useMemo",
      "useReducer",
      "useRef",
      "useState"
    ],
    "answer": 1,
    "explanation": "useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.",
    "hint": "Redux-like hook."
  },
  {
    "id": 34,
    "difficulty": "medium",
    "category": "props",
    "question": "How do you define default values for props in a component?",
    "options": [
      "Using the 'default' keyword in JSX",
      "Using ComponentName.defaultProps = { ... }",
      "Inside the useState hook",
      "By setting them in the constructor"
    ],
    "answer": 1,
    "explanation": "defaultProps is a property on the component class/function to set default values.",
    "hint": "Prop defaults."
  },
  {
    "id": 35,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "Why should you avoid using the array 'index' as a key when the list can change?",
    "options": [
      "React doesn't allow numbers as keys",
      "It causes a syntax error",
      "It can lead to UI bugs and performance issues because the key doesn't uniquely identify the data if items move",
      "It makes the array read-only"
    ],
    "answer": 2,
    "explanation": "If the list reorders, React might reuse the state of the component at index 0 for a different data item that moved to index 0.",
    "hint": "Unstable identities."
  },
  {
    "id": 36,
    "difficulty": "easy",
    "category": "jsx",
    "question": "Can JSX return multiple root elements?",
    "options": [
      "Yes",
      "Only if they are strings",
      "No",
      "Only in class components"
    ],
    "answer": 2,
    "explanation": "JSX must have one single root element. You must wrap multiple elements in a Fragment or a div.",
    "hint": "Single parent rule."
  },
  {
    "id": 37,
    "difficulty": "medium",
    "category": "components",
    "question": "What is the difference between a controlled and uncontrolled component in React forms?",
    "options": [
      "Controlled uses props; Uncontrolled uses state",
      "Controlled is managed by React state; Uncontrolled is managed by the DOM (refs)",
      "Uncontrolled is only for class components",
      "Controlled is faster"
    ],
    "answer": 1,
    "explanation": "Controlled components have their value driven by state, making them the 'single source of truth'.",
    "hint": "Who controls the value?"
  },
  {
    "id": 38,
    "difficulty": "hard",
    "category": "hooks",
    "question": "When does 'useLayoutEffect' fire?",
    "options": [
      "Only on server-side rendering",
      "Asynchronously after the paint",
      "Before the DOM is updated",
      "Synchronously after all DOM mutations but before the browser paints"
    ],
    "answer": 3,
    "explanation": "useLayoutEffect is useful for measuring layout before the user sees the changes, avoiding flickers.",
    "hint": "Before paint."
  },
  {
    "id": 39,
    "difficulty": "medium",
    "category": "basics",
    "question": "What are 'Keys' in React primarily used for?",
    "options": [
      "Managing API keys",
      "Handling keyboard events",
      "Uniquely identifying elements in a collection to help React optimize updates",
      "Encrypting data"
    ],
    "answer": 2,
    "explanation": "Keys help React identify which items have changed, been added, or been removed.",
    "hint": "Identifier in lists."
  },
  {
    "id": 40,
    "difficulty": "easy",
    "category": "props",
    "question": "Which prop is automatically passed to all components by React Router?",
    "options": [
      "navigator",
      "route",
      "state",
      "history/location/match"
    ],
    "answer": 3,
    "explanation": "Components rendered by a <Route> receive these three props (in older versions) or via hooks in v6.",
    "hint": "Navigation context."
  },
  {
    "id": 41,
    "difficulty": "hard",
    "category": "hooks",
    "question": "What is 'useCallback' used for?",
    "options": [
      "To memoize a function instance to prevent unnecessary re-renders of child components that depend on it",
      "To call a function after render",
      "To handle form submissions",
      "To fetch data from an API"
    ],
    "answer": 0,
    "explanation": "useCallback caches the function definition itself between renders.",
    "hint": "Memoize a 'function'."
  },
  {
    "id": 42,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "You want to conditionally render a component only if 'isLoggedIn' is true. What is the most concise way?",
    "options": [
      "{isLoggedIn ? <Component /> : null}",
      "{isLoggedIn && <Component />}",
      "if (isLoggedIn) { <Component /> }",
      "Both 0 and 1 are commonly used"
    ],
    "answer": 3,
    "explanation": "Both the ternary operator and the short-circuit && are valid and common in JSX.",
    "hint": "Short-circuiting."
  },
  {
    "id": 43,
    "difficulty": "hard",
    "category": "state",
    "question": "In React, what is 'Lifting State Up'?",
    "options": [
      "Passing state from child to parent via props",
      "Moving state to a global Redux store",
      "Creating a state variable in a child component",
      "Moving state to the closest common ancestor of components that need it"
    ],
    "answer": 3,
    "explanation": "When two children need to share the same data, you move that data into their common parent.",
    "hint": "Common ancestor."
  },
  {
    "id": 44,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is 'Strict Mode' in React?",
    "options": [
      "A mode that makes the app run faster",
      "A security feature to prevent XSS",
      "A way to enforce TypeScript usage",
      "A tool for highlighting potential problems in an application (renders components twice in dev)"
    ],
    "answer": 3,
    "explanation": "StrictMode checks for unsafe lifecycles, legacy API usage, and other warnings during development.",
    "hint": "Development check."
  },
  {
    "id": 45,
    "difficulty": "easy",
    "category": "components",
    "question": "What is the entry point for a React application's DOM rendering?",
    "options": [
      "ReactDOM.render()",
      "React.start()",
      "Browser.render()",
      "App.init()"
    ],
    "answer": 0,
    "explanation": "In React 17 and below, ReactDOM.render is the main entry. In React 18, it is createRoot.",
    "hint": "DOM rendering method."
  },
  {
    "id": 46,
    "difficulty": "hard",
    "category": "hooks",
    "question": "What are the two rules of Hooks?",
    "options": [
      "No rules apply to hooks",
      "Hooks must be inside classes; Use only one hook per component",
      "Don't call hooks in loops/conditions; Only call hooks from React functions",
      "Always use 'use' prefix; Hooks must be async"
    ],
    "answer": 2,
    "explanation": "Hooks must be called at the top level and only in functional components/custom hooks.",
    "hint": "Top-level and Functional only."
  },
  {
    "id": 47,
    "difficulty": "medium",
    "category": "lifecycle",
    "question": "Which lifecycle method is called just before the component's output is 'flushed' to the DOM?",
    "options": [
      "componentDidUpdate",
      "render",
      "getSnapshotBeforeUpdate",
      "shouldComponentUpdate"
    ],
    "answer": 2,
    "explanation": "It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed.",
    "hint": "Capture DOM info before change."
  },
  {
    "id": 48,
    "difficulty": "easy",
    "category": "jsx",
    "question": "Is JSX a valid JavaScript extension?",
    "options": [
      "It is a CSS extension",
      "Only in Chrome",
      "Yes",
      "No, it's a syntax extension for JS"
    ],
    "answer": 3,
    "explanation": "JSX is a syntax extension that looks like HTML but is actually transformed into React.createElement calls.",
    "hint": "Syntax extension."
  },
  {
    "id": 49,
    "difficulty": "hard",
    "category": "performance",
    "question": "What does 'React.memo' do?",
    "options": [
      "Memoizes the entire application",
      "It clears the browser memory",
      "It creates a new state variable",
      "It is a higher-order component that prevents re-rendering a functional component if its props haven't changed"
    ],
    "answer": 3,
    "explanation": "React.memo is to functional components what PureComponent is to class components.",
    "hint": "Shallow prop check for functions."
  },
  {
    "id": 50,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you render a list of numbers from an array [1, 2, 3] as list items?",
    "options": [
      "numbers.forEach(n => <li>{n}</li>)",
      "{numbers.map(n => <li key={n}>{n}</li>)}",
      "<ul>numbers</ul>",
      "<List data={numbers} />"
    ],
    "answer": 1,
    "explanation": "The .map() method is the standard way to transform arrays into JSX elements.",
    "hint": "Map the array."
  },
  {
    "id": 51,
    "difficulty": "medium",
    "category": "routing",
    "question": "Which component in React Router v6 is used to define the area where child routes should be rendered?",
    "options": [
      "<Outlet />",
      "<Switch />",
      "<Route />",
      "<Child />"
    ],
    "answer": 0,
    "explanation": "The <Outlet> component is used in parent route elements to render their child route elements.",
    "hint": "Think of an 'exit' or 'opening' for nested content."
  },
  {
    "id": 52,
    "difficulty": "hard",
    "category": "hooks",
    "question": "What is the correct way to initialize a useReducer hook?",
    "options": [
      "const [state, setState] = useReducer(initialState, reducer)",
      "const state = useReducer(reducer)",
      "const {state, dispatch} = useReducer(reducer, initialState)",
      "const [state, dispatch] = useReducer(reducer, initialState)"
    ],
    "answer": 3,
    "explanation": "useReducer takes the reducer function and the initial state as arguments, returning the current state and a dispatch function.",
    "hint": "Reducer first, state second."
  },
  {
    "id": 53,
    "difficulty": "medium",
    "category": "context",
    "question": "What are the two main parts of the Context API?",
    "options": [
      "Parent and Child",
      "Sender and Receiver",
      "Input and Output",
      "Provider and Consumer"
    ],
    "answer": 3,
    "explanation": "The Provider wraps the component tree and holds the value, while the Consumer (or useContext hook) retrieves the value.",
    "hint": "One gives, one takes."
  },
  {
    "id": 54,
    "difficulty": "hard",
    "category": "error_boundaries",
    "question": "Which lifecycle method must a class component implement to become an Error Boundary?",
    "options": [
      "componentDidCatch",
      "static getDerivedStateFromError",
      "Both 0 and 1",
      "componentWillUnmount"
    ],
    "answer": 2,
    "explanation": "Error boundaries are class components that use either or both of these methods to catch JavaScript errors in their child component tree.",
    "hint": "Catching errors at the boundary."
  },
  {
    "id": 55,
    "difficulty": "medium",
    "category": "portals",
    "question": "What is 'ReactDOM.createPortal' used for?",
    "options": [
      "To render a child component into a DOM node that exists outside the hierarchy of the parent component",
      "To speed up the Virtual DOM",
      "To create a secure login gate",
      "To migrate React to a different browser tab"
    ],
    "answer": 0,
    "explanation": "Portals are commonly used for modals, tooltips, and floating menus that need to break out of a container's 'overflow: hidden' or z-index.",
    "hint": "Rendering outside the parent."
  },
  {
    "id": 56,
    "difficulty": "hard",
    "category": "hooks",
    "question": "What is the difference between 'useMemo' and 'useCallback'?",
    "options": [
      "useMemo is for classes; useCallback is for functions",
      "useMemo returns a memoized value; useCallback returns a memoized function",
      "useMemo triggers a re-render; useCallback does not",
      "There is no difference"
    ],
    "answer": 1,
    "explanation": "useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).",
    "hint": "Value vs Function."
  },
  {
    "id": 57,
    "difficulty": "medium",
    "category": "routing",
    "question": "In React Router v6, which hook is used to programmatically navigate the user?",
    "options": [
      "useHistory",
      "useRouting",
      "useNavigate",
      "useLocation"
    ],
    "answer": 2,
    "explanation": "useNavigate replaced useHistory in version 6 for a more streamlined API.",
    "hint": "The verb for 'moving' the user."
  },
  {
    "id": 58,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "A component is re-rendering too often because a context value changes, but this component only needs a small part of that value. How can you optimize this?",
    "options": [
      "Split the context into smaller, more specific contexts",
      "Use React.memo on the component",
      "Use useMemo to memoize the component's return value",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "Context optimizations often require splitting state or using memoization techniques to prevent unnecessary downstream renders.",
    "hint": "Granular context or memoization."
  },
  {
    "id": 59,
    "difficulty": "medium",
    "category": "hooks",
    "question": "Which hook provides access to the current location object, representing the URL?",
    "options": [
      "useHistory",
      "useLocation",
      "useUrl",
      "useParams"
    ],
    "answer": 1,
    "explanation": "useLocation returns the location object that represents the current URL, useful for tracking page views.",
    "hint": "Where are we now?"
  },
  {
    "id": 60,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'Code Splitting' in React?",
    "options": [
      "Breaking a component into multiple functions",
      "Writing CSS in a separate file",
      "Splitting the database into shards",
      "The process of lazy loading parts of the application to reduce the initial bundle size"
    ],
    "answer": 3,
    "explanation": "React.lazy and dynamic imports allow you to load components only when they are needed.",
    "hint": "Lazy loading."
  },
  {
    "id": 61,
    "difficulty": "medium",
    "category": "components",
    "question": "What are 'Render Props'?",
    "options": [
      "Props used to style the component",
      "The default props of a component",
      "Props that are rendered as HTML attributes",
      "A technique for sharing code between components using a prop whose value is a function"
    ],
    "answer": 3,
    "explanation": "A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.",
    "hint": "Passing a function as a prop."
  },
  {
    "id": 62,
    "difficulty": "hard",
    "category": "hooks",
    "question": "What does 'useImperativeHandle' do?",
    "options": [
      "It makes the component faster",
      "It forces the component to render",
      "It customizes the instance value that is exposed to parent components when using 'ref'",
      "It handles API errors"
    ],
    "answer": 2,
    "explanation": "It is used with forwardRef to limit what a parent can do with a child's ref.",
    "hint": "Customizing ref exposure."
  },
  {
    "id": 63,
    "difficulty": "easy",
    "category": "routing",
    "question": "Which component is used to create links that allow users to navigate to different routes?",
    "options": [
      "<Link>",
      "<Navigate>",
      "<a>",
      "<Route>"
    ],
    "answer": 0,
    "explanation": "<Link> prevents a full page reload, unlike a standard <a> tag.",
    "hint": "The React Router alternative to <a>."
  },
  {
    "id": 64,
    "difficulty": "hard",
    "category": "lifecycle",
    "question": "Which method is called if 'shouldComponentUpdate' returns false?",
    "options": [
      "componentWillUpdate()",
      "componentDidUpdate()",
      "None of these",
      "render()"
    ],
    "answer": 2,
    "explanation": "If shouldComponentUpdate returns false, the render and subsequent lifecycle methods are skipped.",
    "hint": "Nothing happens."
  },
  {
    "id": 65,
    "difficulty": "medium",
    "category": "context",
    "question": "What is the value of a Context if no Provider is found in the parent tree?",
    "options": [
      "null",
      "An error is thrown",
      "The default value passed to 'createContext()'",
      "undefined"
    ],
    "answer": 2,
    "explanation": "createContext(defaultValue) establishes the fallback value.",
    "hint": "The initial fallback."
  },
  {
    "id": 66,
    "difficulty": "hard",
    "category": "hooks",
    "question": "Can 'useEffect' return a Promise (i.e., be an async function)?",
    "options": [
      "Only in React 18+",
      "Only if it's the only hook in the component",
      "No, it must return a cleanup function or nothing",
      "Yes"
    ],
    "answer": 2,
    "explanation": "useEffect cannot be async because the return value is reserved for the cleanup function. You should define the async function inside the effect.",
    "hint": "Return value is for cleanup."
  },
  {
    "id": 67,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you capture URL parameters like ':id' in a route?",
    "options": [
      "useId",
      "useParams",
      "useRoute",
      "useLocation"
    ],
    "answer": 1,
    "explanation": "useParams returns an object of key/value pairs of URL parameters.",
    "hint": "Parameters hook."
  },
  {
    "id": 68,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is the benefit of 'React.Suspense'?",
    "options": [
      "It manages global state",
      "It improves the speed of CSS",
      "It allows you to display a fallback UI (like a loader) while waiting for lazy-loaded components",
      "It pauses the application when an error occurs"
    ],
    "answer": 2,
    "explanation": "Suspense coordinates the 'loading' states of components further down the tree.",
    "hint": "Fallback while waiting."
  },
  {
    "id": 69,
    "difficulty": "medium",
    "category": "forms",
    "question": "What is a 'Ref' in React?",
    "options": [
      "A way to refer to other components",
      "The reference manual for React",
      "A way to directly access a DOM element or an instance of a component",
      "A type of state"
    ],
    "answer": 2,
    "explanation": "Refs are used when you need to trigger an animation, focus an input, or integrate with third-party DOM libraries.",
    "hint": "Direct DOM access."
  },
  {
    "id": 70,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You want to render a component at the end of the <body> tag regardless of where it is called. What do you use?",
    "options": [
      "React.lazy",
      "React.Fragment",
      "useContext",
      "ReactDOM.createPortal"
    ],
    "answer": 3,
    "explanation": "Portals allow you to render children into a different part of the DOM tree.",
    "hint": "The 'teleport' tool."
  },
  {
    "id": 71,
    "difficulty": "medium",
    "category": "routing",
    "question": "Which component acts as a container for all <Route> definitions in v6?",
    "options": [
      "<Map>",
      "<Router>",
      "<Routes>",
      "<Switch>"
    ],
    "answer": 2,
    "explanation": "<Routes> replaced <Switch> in React Router v6.",
    "hint": "Plural of Route."
  },
  {
    "id": 72,
    "difficulty": "hard",
    "category": "hooks",
    "question": "What happens if you omit the dependency array in 'useEffect'? ",
    "options": [
      "The effect never runs",
      "The effect runs on every single render",
      "It causes a syntax error",
      "The effect runs only once"
    ],
    "answer": 1,
    "explanation": "Without an array, React has no way to know when to skip the effect, so it runs it after every render.",
    "hint": "No filter."
  },
  {
    "id": 73,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is the 'Prop Drilling' problem?",
    "options": [
      "Passing props to a child component",
      "An error caused by too many props",
      "A method to optimize props",
      "The process of passing data through many levels of components that don't need it"
    ],
    "answer": 3,
    "explanation": "Prop drilling makes code harder to maintain and refactor; Context or State Management solves this.",
    "hint": "Passing through middlemen."
  },
  {
    "id": 74,
    "difficulty": "hard",
    "category": "performance",
    "question": "When using 'React.lazy', what is the requirement for the component being imported?",
    "options": [
      "It must have a 'lazy' prefix",
      "It must be exported as a default export",
      "It must be a class component",
      "It must be inside the 'src' folder"
    ],
    "answer": 1,
    "explanation": "React.lazy currently only supports default exports.",
    "hint": "Default export."
  },
  {
    "id": 75,
    "difficulty": "medium",
    "category": "hooks",
    "question": "How can you access the context value in a functional component?",
    "options": [
      "context.value",
      "this.context",
      "Consumer(MyContext)",
      "useContext(MyContext)"
    ],
    "answer": 3,
    "explanation": "useContext is the standard hook for consuming context values.",
    "hint": "Context hook."
  },
  {
    "id": 76,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "How do you pass a ref to a child functional component?",
    "options": [
      "As a standard prop named 'ref'",
      "Using the 'forwardRef' higher-order component",
      "It is not possible",
      "Using 'useContext'"
    ],
    "answer": 1,
    "explanation": "Functional components don't have instances, so they need forwardRef to pass the ref through to a DOM element.",
    "hint": "Moving the ref forward."
  },
  {
    "id": 77,
    "difficulty": "medium",
    "category": "routing",
    "question": "In v6, how do you specify a catch-all route (404 page)?",
    "options": [
      "<Route path='404' element={<NotFound />} />",
      "<Route default element={<NotFound />} />",
      "<Route path='*' element={<NotFound />} />",
      "<Route path='/' element={<NotFound />} />"
    ],
    "answer": 2,
    "explanation": "The '*' wildcard matches any URL that hasn't been matched by previous routes.",
    "hint": "Wildcard path."
  },
  {
    "id": 78,
    "difficulty": "hard",
    "category": "hooks",
    "question": "In 'useReducer', what is the purpose of the 'dispatch' function?",
    "options": [
      "To update the state directly",
      "To delete the state",
      "To log errors",
      "To send an action object to the reducer to trigger a state update"
    ],
    "answer": 3,
    "explanation": "Dispatch 'dispatches' an action (e.g., { type: 'increment' }) which the reducer then processes.",
    "hint": "Sending the action."
  },
  {
    "id": 79,
    "difficulty": "medium",
    "category": "error_boundaries",
    "question": "Do Error Boundaries catch errors inside event handlers?",
    "options": [
      "No",
      "Yes",
      "Only if specifically configured",
      "Only in development"
    ],
    "answer": 0,
    "explanation": "Error boundaries do not catch errors in event handlers, asynchronous code, or server-side rendering.",
    "hint": "Rendering phase only."
  },
  {
    "id": 80,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You need to perform a side effect that depends on a value from props. Where should you put it in a functional component?",
    "options": [
      "In a 'useMemo' hook",
      "Inside the render body",
      "In the constructor",
      "In a 'useEffect' hook with the prop in the dependency array"
    ],
    "answer": 3,
    "explanation": "Putting the prop in the dependency array ensures the effect re-runs whenever that specific prop changes.",
    "hint": "Reactive effect."
  },
  {
    "id": 81,
    "difficulty": "medium",
    "category": "performance",
    "question": "Which React 18 feature allows you to mark certain updates as non-urgent?",
    "options": [
      "useNonUrgent",
      "useTransition",
      "useDeferredValue",
      "Suspense"
    ],
    "answer": 1,
    "explanation": "useTransition allows you to keep the UI responsive during heavy updates by prioritizing urgent tasks (like typing).",
    "hint": "Transitioning state."
  },
  {
    "id": 82,
    "difficulty": "hard",
    "category": "routing",
    "question": "How do you protect a route (Private Route) in React Router v6?",
    "options": [
      "Using a 'private' attribute on <Route>",
      "By creating a wrapper component that checks authentication and returns the <Outlet /> or <Navigate />",
      "Using a password on the route",
      "React Router does not support this"
    ],
    "answer": 1,
    "explanation": "You wrap protected routes in a component that performs a conditional check on the user's auth status.",
    "hint": "Wrapper component check."
  },
  {
    "id": 83,
    "difficulty": "medium",
    "category": "hooks",
    "question": "What is 'useDebugValue' used for?",
    "options": [
      "To display a label for custom hooks in React DevTools",
      "To debug performance issues",
      "To print logs to the console",
      "To check for memory leaks"
    ],
    "answer": 0,
    "explanation": "It is strictly for a better debugging experience in the DevTools browser extension.",
    "hint": "DevTools label."
  },
  {
    "id": 84,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You have a list that updates frequently. You want to delay the update of a non-critical UI element to keep the main input snappy. Which React 18 hook helps?",
    "options": [
      "useCallback",
      "useMemo",
      "useDeferredValue",
      "useId"
    ],
    "answer": 2,
    "explanation": "useDeferredValue allows you to 'defer' re-rendering a part of the tree until the main thread is less busy.",
    "hint": "Deferred update."
  },
  {
    "id": 85,
    "difficulty": "medium",
    "category": "components",
    "question": "What is 'Forwarding Refs'?",
    "options": [
      "An opt-in feature that lets some components take a ref they receive, and pass it further down to a child",
      "A way to speed up the app",
      "Automatically sending refs to all children",
      "Sending refs to an API"
    ],
    "answer": 0,
    "explanation": "It uses React.forwardRef to allow a component to expose a DOM node of a child to the parent.",
    "hint": "Passing the ref down."
  },
  {
    "id": 86,
    "difficulty": "hard",
    "category": "hooks",
    "question": "When using 'useReducer', what is the 'init' function (the 3rd argument)?",
    "options": [
      "A function to call after every update",
      "A function to calculate the initial state lazily",
      "A function to log errors",
      "A function to fetch data"
    ],
    "answer": 1,
    "explanation": "If you provide a 3rd argument, the initial state is set to init(initialArg).",
    "hint": "Lazy initialization."
  },
  {
    "id": 87,
    "difficulty": "medium",
    "category": "routing",
    "question": "Which component is used to navigate the user to a different route on mount (redirect)?",
    "options": [
      "<Redirect>",
      "<Link>",
      "<GoTo>",
      "<Navigate>"
    ],
    "answer": 3,
    "explanation": "In React Router v6, <Navigate> is used for declarative redirects.",
    "hint": "Replacement for <Redirect>."
  },
  {
    "id": 88,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "In a class component, if you need to perform a side effect after the state is updated and the component re-rendered, where should you do it?",
    "options": [
      "In componentWillUpdate",
      "Inside the render method",
      "In the second argument (callback) of this.setState()",
      "In the constructor"
    ],
    "answer": 2,
    "explanation": "setState takes an optional callback that runs after the update is committed.",
    "hint": "setState callback."
  },
  {
    "id": 89,
    "difficulty": "medium",
    "category": "hooks",
    "question": "What does 'useId' (React 18) provide?",
    "options": [
      "The ID of the component instance",
      "A unique database ID",
      "A unique ID for accessibility attributes, stable across server and client",
      "A random number"
    ],
    "answer": 2,
    "explanation": "It generates unique IDs that are safe for use in aria-attributes, avoiding collisions.",
    "hint": "Unique accessibility IDs."
  },
  {
    "id": 90,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'Hydration' in React?",
    "options": [
      "Cleaning the memory",
      "The process of attaching event listeners to the HTML rendered by the server",
      "Loading images",
      "Updating the state from a database"
    ],
    "answer": 1,
    "explanation": "In SSR, the browser receives the HTML and 'hydrates' it to make it interactive with React.",
    "hint": "Making HTML interactive."
  },
  {
    "id": 91,
    "difficulty": "medium",
    "category": "routing",
    "question": "How do you create a nested route in React Router v6?",
    "options": [
      "By using a comma-separated list in 'path'",
      "By placing <Route> components inside other <Route> components",
      "Nested routes are not supported",
      "Using the <Nested> tag"
    ],
    "answer": 1,
    "explanation": "Routes can be nested to match segments of the URL and share layouts.",
    "hint": "Routes within Routes."
  },
  {
    "id": 92,
    "difficulty": "hard",
    "category": "hooks",
    "question": "What happens if a custom hook doesn't start with 'use'?",
    "options": [
      "It won't work",
      "React will not be able to automatically check for violations of rules of hooks",
      "It will be faster",
      "It will only work in classes"
    ],
    "answer": 1,
    "explanation": "The 'use' prefix is a convention that allows linting tools to identify and enforce hook rules.",
    "hint": "Linter requirement."
  },
  {
    "id": 93,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "A user submits a form and you want to redirect them to a 'success' page. Which is the best approach?",
    "options": [
      "Use <Link> inside the submit handler",
      "Call navigate('/success') from 'useNavigate' inside the submit handler",
      "Manually change window.location.href",
      "Refresh the page"
    ],
    "answer": 1,
    "explanation": "Programmatic navigation using useNavigate is the standard way to redirect after an action.",
    "hint": "Programmatic navigate."
  },
  {
    "id": 94,
    "difficulty": "hard",
    "category": "performance",
    "question": "How does 'Concurrent Rendering' (React 18) improve user experience?",
    "options": [
      "By rendering everything at once",
      "By allowing React to interrupt a long-running render to handle a high-priority event (like a click)",
      "By removing the Virtual DOM",
      "By making the app run on multiple threads"
    ],
    "answer": 1,
    "explanation": "React can now prepare multiple versions of the UI in the background without blocking the main thread.",
    "hint": "Interruptible rendering."
  },
  {
    "id": 95,
    "difficulty": "medium",
    "category": "forms",
    "question": "What is the recommended way to handle multiple input fields in a controlled form?",
    "options": [
      "Create a separate useState for every input",
      "Use a single state object and the 'name' attribute of the inputs to update the correct key",
      "Use only refs",
      "Forms should always be uncontrolled"
    ],
    "answer": 1,
    "explanation": "By using [event.target.name]: event.target.value, you can handle any number of inputs with one function.",
    "hint": "Computed property names."
  },
  {
    "id": 96,
    "difficulty": "hard",
    "category": "hooks",
    "question": "When should you use 'useSyncExternalStore'?",
    "options": [
      "To sync data between two components",
      "To subscribe to an external data store (like Redux or a browser API) while maintaining concurrency safety",
      "To fetch data from a REST API",
      "To save data to local storage"
    ],
    "answer": 1,
    "explanation": "It is a specialized hook for library authors to ensure state consistency during concurrent rendering.",
    "hint": "External store synchronization."
  },
  {
    "id": 97,
    "difficulty": "medium",
    "category": "context",
    "question": "Can a component subscribe to multiple contexts?",
    "options": [
      "Yes",
      "Only using Redux",
      "Only in class components",
      "No"
    ],
    "answer": 0,
    "explanation": "You can call useContext multiple times or nest multiple Consumers.",
    "hint": "Multiple useContext calls."
  },
  {
    "id": 98,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'Tree Shaking'?",
    "options": [
      "Removing old components from the DOM",
      "The reconciliation algorithm",
      "A build-step optimization that removes unused code from the final bundle",
      "Refreshing the dev server"
    ],
    "answer": 2,
    "explanation": "Modern bundlers like Webpack/Vite use tree shaking to keep the bundle size small.",
    "hint": "Dead code elimination."
  },
  {
    "id": 99,
    "difficulty": "medium",
    "category": "routing",
    "question": "How do you define a route that matches '/user/settings' using nesting?",
    "options": [
      "<Route path='user'><Route path='settings' /></Route>",
      "<Route path='user/settings' />",
      "Both are valid, but the first allows for shared layouts",
      "Neither is valid"
    ],
    "answer": 2,
    "explanation": "Nesting is preferred when the 'user' segment has a layout (like a sidebar) shared by 'settings' and other sub-pages.",
    "hint": "Nested vs flat paths."
  },
  {
    "id": 100,
    "difficulty": "hard",
    "category": "basics",
    "question": "What is 'Shadow DOM' and is it the same as 'Virtual DOM'?",
    "options": [
      "Yes, they are the same",
      "No; Shadow DOM is a browser technology for scoping styles/markup; Virtual DOM is a React concept for performance",
      "Virtual DOM is obsolete",
      "Shadow DOM is React's version of Virtual DOM"
    ],
    "answer": 1,
    "explanation": "Virtual DOM is a pattern; Shadow DOM is a specific Web Component standard.",
    "hint": "Browser tech vs React pattern."
  },
  {
    "id": 101,
    "difficulty": "medium",
    "category": "testing",
    "question": "Which library is the most commonly recommended by the React team for testing component behavior?",
    "options": [
      "Mocha",
      "Enzyme",
      "Jasmine",
      "React Testing Library"
    ],
    "answer": 3,
    "explanation": "React Testing Library (RTL) encourages testing components based on how a user interacts with them rather than internal implementation details.",
    "hint": "RTL."
  },
  {
    "id": 102,
    "difficulty": "easy",
    "category": "redux",
    "question": "What is the 'Store' in Redux?",
    "options": [
      "A database in the cloud",
      "A single source of truth that holds the entire state tree of your application",
      "The place where you buy React components",
      "A local storage file"
    ],
    "answer": 1,
    "explanation": "Redux uses a single store to manage the state for the entire application, making it easier to track changes.",
    "hint": "Single source of truth."
  },
  {
    "id": 103,
    "difficulty": "hard",
    "category": "styling",
    "question": "What is a primary advantage of using Styled Components (CSS-in-JS)?",
    "options": [
      "It allows you to scope styles to specific components, avoiding global namespace collisions",
      "It makes CSS run faster in the browser",
      "It automatically generates responsive design without media queries",
      "It removes the need for a web server"
    ],
    "answer": 0,
    "explanation": "Styled Components generate unique class names for your styles, ensuring no style leakage between components.",
    "hint": "Scoped styling."
  },
  {
    "id": 104,
    "difficulty": "medium",
    "category": "testing",
    "question": "What does the 'render' function from React Testing Library return?",
    "options": [
      "The HTML string of the component",
      "The Virtual DOM tree",
      "A boolean indicating if the test passed",
      "An object containing utility functions like 'getByText' and 'queryByRole'"
    ],
    "answer": 3,
    "explanation": "The render result provides queries to find elements in the rendered output for assertions.",
    "hint": "Query utilities."
  },
  {
    "id": 105,
    "difficulty": "hard",
    "category": "redux",
    "question": "In Redux Toolkit, what is a 'Slice'?",
    "options": [
      "A way to divide the CSS files",
      "A collection of Redux reducer logic and actions for a single feature",
      "A piece of the Virtual DOM",
      "A specific type of React Hook"
    ],
    "answer": 1,
    "explanation": "createSlice simplifies Redux by auto-generating action creators and action types based on the reducers you provide.",
    "hint": "Feature-based logic bundle."
  },
  {
    "id": 106,
    "difficulty": "medium",
    "category": "styling",
    "question": "How do you apply inline styles in React?",
    "options": [
      "css={color: red}",
      "style='color: red'",
      "className='red-text'",
      "style={{ color: 'red' }}"
    ],
    "answer": 3,
    "explanation": "Inline styles are passed as a JavaScript object. The outer braces indicate a JS expression, the inner ones define the object.",
    "hint": "Object inside braces."
  },
  {
    "id": 107,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You want to test if a button click calls a specific function. Which tool should you use to create a 'fake' function?",
    "options": [
      "jest.fn()",
      "jest.mock()",
      "jest.spy()",
      "jest.fake()"
    ],
    "answer": 0,
    "explanation": "jest.fn() creates a mock function that tracks calls, arguments, and return values.",
    "hint": "Mock function creator."
  },
  {
    "id": 108,
    "difficulty": "medium",
    "category": "redux",
    "question": "Which hook is used to extract data from the Redux store state?",
    "options": [
      "useSelector",
      "useDispatch",
      "useState",
      "useStore"
    ],
    "answer": 0,
    "explanation": "useSelector takes a selector function to grab specific slices of state from the store.",
    "hint": "Selecting state."
  },
  {
    "id": 109,
    "difficulty": "hard",
    "category": "testing",
    "question": "What is the difference between 'getBy...' and 'queryBy...' in React Testing Library?",
    "options": [
      "getBy throws an error if the element is not found; queryBy returns null",
      "getBy is for classes only",
      "queryBy is faster",
      "There is no difference"
    ],
    "answer": 0,
    "explanation": "Use queryBy when you want to assert that an element is NOT in the document.",
    "hint": "Error vs Null."
  },
  {
    "id": 110,
    "difficulty": "medium",
    "category": "styling",
    "question": "What are CSS Modules in React?",
    "options": [
      "A way to write CSS in JS files",
      "A type of React Component",
      "A plugin for Chrome",
      "CSS files where class names are scoped locally to the component by default"
    ],
    "answer": 3,
    "explanation": "CSS Modules allow you to use the same class names in different files without conflicts.",
    "hint": "Locally scoped CSS files."
  },
  {
    "id": 111,
    "difficulty": "hard",
    "category": "redux",
    "question": "How does Redux Toolkit's 'createAsyncThunk' handle lifecycle actions?",
    "options": [
      "It automatically dispatches 'pending', 'fulfilled', and 'rejected' actions",
      "It deletes the state on error",
      "It doesn't handle them",
      "It only works with fetch()"
    ],
    "answer": 0,
    "explanation": "AsyncThunk simplifies side-effect logic by providing standard action types for the start, success, and failure of promises.",
    "hint": "Promise lifecycle actions."
  },
  {
    "id": 112,
    "difficulty": "medium",
    "category": "testing",
    "question": "What is 'Snapshot Testing' in Jest?",
    "options": [
      "Comparing the rendered component output to a previously saved 'snapshot' file",
      "Testing the speed of the app",
      "Testing the database",
      "Taking a screenshot of the app"
    ],
    "answer": 0,
    "explanation": "Snapshots help detect unexpected UI changes by alerting you when the rendered markup shifts.",
    "hint": "Comparing UI 'photos'."
  },
  {
    "id": 113,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "In Redux, what is the 'Reducer's' primary rule?",
    "options": [
      "It must be a pure function (no side effects, returns new state instead of mutating)",
      "It must use 'this.setState'",
      "It must be inside a React component",
      "It must be an asynchronous function"
    ],
    "answer": 0,
    "explanation": "Reducers must not mutate the existing state. They should return a copy with the updates applied.",
    "hint": "Pure function."
  },
  {
    "id": 114,
    "difficulty": "medium",
    "category": "styling",
    "question": "In Tailwind CSS, how do you apply styles to a React component?",
    "options": [
      "Using a 'tailwind' attribute",
      "Writing CSS in the JS file",
      "Using standard CSS utility classes in the 'className' prop",
      "Using the 'style' prop"
    ],
    "answer": 2,
    "explanation": "Tailwind uses utility classes like 'flex', 'pt-4', and 'text-center' directly in the JSX markup.",
    "hint": "Utility classes."
  },
  {
    "id": 115,
    "difficulty": "hard",
    "category": "testing",
    "question": "Which query should you prefer in React Testing Library to follow accessibility best practices?",
    "options": [
      "getByTestId",
      "getByClassName",
      "getByRole",
      "getById"
    ],
    "answer": 2,
    "explanation": "getByRole mimics how assistive technology (like screen readers) perceives the page.",
    "hint": "Accessibility-first query."
  },
  {
    "id": 116,
    "difficulty": "easy",
    "category": "redux",
    "question": "What is an 'Action' in Redux?",
    "options": [
      "A mouse click",
      "A function that changes the DOM",
      "A plain JavaScript object that describes 'what happened'",
      "A type of CSS animation"
    ],
    "answer": 2,
    "explanation": "Actions must have a 'type' property and can optionally carry a 'payload'.",
    "hint": "Event description object."
  },
  {
    "id": 117,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "Your Redux state is updating, but the UI is not re-rendering. What is the most likely cause?",
    "options": [
      "The browser is outdated",
      "You are mutating the state directly in the reducer instead of returning a new object",
      "The store is too large",
      "You forgot to use 'useMemo'"
    ],
    "answer": 1,
    "explanation": "React-Redux checks for reference changes. If you mutate state, the reference remains the same, and React thinks nothing changed.",
    "hint": "Reference equality check."
  },
  {
    "id": 118,
    "difficulty": "medium",
    "category": "testing",
    "question": "What is the purpose of 'fireEvent' or 'userEvent' in tests?",
    "options": [
      "To restart the test runner",
      "To style the test report",
      "To simulate user interactions like clicking, typing, or hovering",
      "To clear the cache"
    ],
    "answer": 2,
    "explanation": "These utilities allow you to trigger DOM events to see how the component reacts.",
    "hint": "Simulating interaction."
  },
  {
    "id": 119,
    "difficulty": "hard",
    "category": "redux",
    "question": "What does 'Middleware' (like Redux Thunk) allow you to do in Redux?",
    "options": [
      "Write action creators that return a function instead of an action object (for async logic)",
      "Speed up the Reducer",
      "Encrypt the store",
      "Connect Redux to CSS"
    ],
    "answer": 0,
    "explanation": "Thunk middleware allows you to perform asynchronous tasks (like API calls) before dispatching a real action.",
    "hint": "Async actions support."
  },
  {
    "id": 120,
    "difficulty": "medium",
    "category": "styling",
    "question": "How do you pass a prop to a Styled Component to change its color dynamically?",
    "options": [
      "By rewriting the CSS file",
      "Using a template literal function: ${props => props.color}",
      "By using the 'style' prop on the Styled Component",
      "It is not possible"
    ],
    "answer": 1,
    "explanation": "Styled Components can access props within their template literals to apply conditional logic.",
    "hint": "Template literal interpolation."
  },
  {
    "id": 121,
    "difficulty": "hard",
    "category": "testing",
    "question": "What is 'Mocking' an API call in testing?",
    "options": [
      "Ignoring the API entirely",
      "Deleting the network tab",
      "Calling the real API every time",
      "Replacing the real API call with a controlled 'fake' response to ensure test stability and speed"
    ],
    "answer": 3,
    "explanation": "Mocking prevents tests from failing due to external network issues and allows you to test edge cases (like 500 errors).",
    "hint": "Fake network response."
  },
  {
    "id": 122,
    "difficulty": "medium",
    "category": "redux",
    "question": "Which Redux Toolkit function is used to create the store?",
    "options": [
      "setupStore",
      "createStore",
      "initStore",
      "configureStore"
    ],
    "answer": 3,
    "explanation": "configureStore is the modern replacement for createStore; it automatically sets up DevTools and Thunk.",
    "hint": "RTK store setup."
  },
  {
    "id": 123,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You need to test a component that uses 'useContext'. How do you provide the context value in a test?",
    "options": [
      "Wrap the component in the Context Provider within the 'render' function of your test",
      "Modify the component's source code",
      "You cannot test it",
      "Use 'jest.mockContext()'"
    ],
    "answer": 0,
    "explanation": "Just like in the app, the component needs to be a child of a Provider to access context values.",
    "hint": "Wrap in Provider."
  },
  {
    "id": 124,
    "difficulty": "medium",
    "category": "styling",
    "question": "What is 'SASS' or 'SCSS' and can it be used with React?",
    "options": [
      "An alternative to JavaScript; no",
      "A database; no",
      "A CSS preprocessor; yes, via loaders or built-in support in tools like Vite/CRA",
      "A type of React hook; yes"
    ],
    "answer": 2,
    "explanation": "SASS adds features like variables and nesting to CSS, which are compiled into standard CSS for React.",
    "hint": "CSS Preprocessor."
  },
  {
    "id": 125,
    "difficulty": "hard",
    "category": "redux",
    "question": "What is 'Immer' and how does Redux Toolkit use it?",
    "options": [
      "A library that allows you to write 'mutative' code that is actually turned into immutable updates; used internally by createSlice",
      "A testing library; it doesn't",
      "A routing tool; handles URLs",
      "A styling tool; used for themes"
    ],
    "answer": 0,
    "explanation": "Immer lets you write 'state.value = 1' instead of '{...state, value: 1}', making code cleaner without breaking Redux rules.",
    "hint": "Writing 'mutable' logic safely."
  },
  {
    "id": 126,
    "difficulty": "easy",
    "category": "testing",
    "question": "What does the 'expect()' function do in Jest?",
    "options": [
      "It closes the browser",
      "It defines an assertion (the expected outcome)",
      "It starts the test",
      "It logs a message"
    ],
    "answer": 1,
    "explanation": "Expect is the starting point for testing if a value meets certain conditions (matchers).",
    "hint": "Assertions."
  },
  {
    "id": 127,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you handle a Redux action that needs to update state in multiple slices?",
    "options": [
      "Using 'extraReducers' in each slice to listen for that specific action type",
      "By creating a global reducer",
      "By calling dispatch twice",
      "You can't; actions are slice-specific"
    ],
    "answer": 0,
    "explanation": "ExtraReducers allow a slice to respond to actions defined in other slices or elsewhere in the app.",
    "hint": "Listen to external actions."
  },
  {
    "id": 128,
    "difficulty": "hard",
    "category": "testing",
    "question": "In React Testing Library, what is 'waitFor' used for?",
    "options": [
      "To pause the test indefinitely",
      "To wait for an asynchronous change in the DOM before proceeding with assertions",
      "To slow down the test execution",
      "To wait for the user to click"
    ],
    "answer": 1,
    "explanation": "waitFor retries the assertion until it passes or times out, perfect for testing API data loads.",
    "hint": "Async polling utility."
  },
  {
    "id": 129,
    "difficulty": "medium",
    "category": "redux",
    "question": "What are 'Redux DevTools' used for?",
    "options": [
      "To host the app",
      "To write code faster",
      "To inspect state changes, 'time-travel' through actions, and debug store logic in the browser",
      "To compress images"
    ],
    "answer": 2,
    "explanation": "It provides a visual timeline of every action dispatched and how it affected the state.",
    "hint": "Time-travel debugging."
  },
  {
    "id": 130,
    "difficulty": "hard",
    "category": "styling",
    "question": "What is the 'CSS-in-JS' approach?",
    "options": [
      "Using inline styles for everything",
      "Putting CSS files in a 'js' folder",
      "Writing CSS styles using JavaScript, often within the component files themselves",
      "A way to convert JS to CSS"
    ],
    "answer": 2,
    "explanation": "Libraries like Styled Components and Emotion fall under this category.",
    "hint": "Styles inside JS."
  },
  {
    "id": 131,
    "difficulty": "medium",
    "category": "testing",
    "question": "Which Jest matcher is used to check if an array contains a specific item?",
    "options": [
      "toBe()",
      "toEqual()",
      "toHaveProperty()",
      "toContain()"
    ],
    "answer": 3,
    "explanation": "toContain checks for the presence of an item in a collection.",
    "hint": "Contains."
  },
  {
    "id": 132,
    "difficulty": "hard",
    "category": "redux",
    "question": "What is a 'Selector' in Redux?",
    "options": [
      "A dropdown menu in the UI",
      "An action creator",
      "A CSS selector",
      "A function that accepts the state and returns a specific piece or derived version of it"
    ],
    "answer": 3,
    "explanation": "Selectors help keep the component decoupled from the exact structure of the state tree.",
    "hint": "State extraction function."
  },
  {
    "id": 133,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you test a component that uses React Router hooks like 'useNavigate'?",
    "options": [
      "Use window.location",
      "You cannot test it",
      "Mock the entire 'react-router-dom' library",
      "Wrap the component in a 'MemoryRouter' in your test"
    ],
    "answer": 3,
    "explanation": "MemoryRouter is a wrapper that simulates routing history in memory for testing environments.",
    "hint": "In-memory router."
  },
  {
    "id": 134,
    "difficulty": "hard",
    "category": "redux",
    "question": "What is 'Serialization' in Redux and why is it important?",
    "options": [
      "Making actions happen in order",
      "A security feature",
      "A type of routing",
      "Converting state to a string-like format; it's important for DevTools and persistence"
    ],
    "answer": 3,
    "explanation": "Redux recommends only putting serializable data (no functions, promises, or class instances) in the store.",
    "hint": "Plain data only."
  },
  {
    "id": 135,
    "difficulty": "medium",
    "category": "testing",
    "question": "What does 'cleanup' do in React Testing Library?",
    "options": [
      "Clears the console",
      "Unmounts React trees that were mounted with render to prevent memory leaks and test cross-talk",
      "Deletes the code",
      "Resets the state"
    ],
    "answer": 1,
    "explanation": "RTL usually does this automatically after each test.",
    "hint": "Post-test unmounting."
  },
  {
    "id": 136,
    "difficulty": "hard",
    "category": "styling",
    "question": "How do you create a global style with Styled Components?",
    "options": [
      "Apply styles to the 'body' tag in a component",
      "It's not possible",
      "Write it in index.css",
      "Use the 'createGlobalStyle' utility"
    ],
    "answer": 3,
    "explanation": "createGlobalStyle creates a special component that, when rendered, injects global styles into the document.",
    "hint": "Global style utility."
  },
  {
    "id": 137,
    "difficulty": "medium",
    "category": "redux",
    "question": "What is the 'Payload' in a Redux action?",
    "options": [
      "The name of the action",
      "The weight of the application",
      "The additional data sent along with the action type to update the state",
      "The return value of the reducer"
    ],
    "answer": 2,
    "explanation": "If you want to 'Add User', the payload would be the actual user object.",
    "hint": "Data packet."
  },
  {
    "id": 138,
    "difficulty": "hard",
    "category": "testing",
    "question": "What is the purpose of 'act()' in React tests?",
    "options": [
      "To make the test run faster",
      "To simulate a user action",
      "To define the test name",
      "To ensure that all updates (state, effects) have been processed and applied to the DOM before making assertions"
    ],
    "answer": 3,
    "explanation": "RTL wraps most calls in act() automatically, but you may need it for custom async logic.",
    "hint": "Update processing wrapper."
  },
  {
    "id": 139,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "In Redux Toolkit, how do you handle multiple async thunks in a single slice?",
    "options": [
      "Use the 'combineThunks' utility",
      "Combine them into one big function",
      "Add them all as entries in the 'extraReducers' object",
      "You can only have one thunk per slice"
    ],
    "answer": 2,
    "explanation": "extraReducers can handle as many thunks and action types as needed.",
    "hint": "Multi-entry extraReducers."
  },
  {
    "id": 140,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "How can you debug a failing test in a visual way?",
    "options": [
      "Wait for the error message",
      "console.log('here')",
      "Use the 'screen.debug()' method to print the current DOM state to the console",
      "Check the browser"
    ],
    "answer": 2,
    "explanation": "screen.debug() prints a formatted version of the current DOM, helping you see what RTL 'sees'.",
    "hint": "Print DOM to terminal."
  },
  {
    "id": 141,
    "difficulty": "medium",
    "category": "styling",
    "question": "What is 'Object-Oriented CSS' (OOCSS) and is it relevant to React?",
    "options": [
      "No",
      "It's an outdated database",
      "Yes, it's a methodology of separating structure from skin, which aligns well with component-based design",
      "It's a type of JS object"
    ],
    "answer": 2,
    "explanation": "Components naturally encourage the OOCSS approach of reusable styles.",
    "hint": "Structure vs Skin separation."
  },
  {
    "id": 142,
    "difficulty": "hard",
    "category": "testing",
    "question": "What is 'User-Event' library vs 'FireEvent'?",
    "options": [
      "They are the same",
      "user-event is for servers only",
      "user-event is built on top of fireEvent but provides a more realistic simulation of browser interactions",
      "fireEvent is for mobile only"
    ],
    "answer": 2,
    "explanation": "user-event simulates things like focus and keydown events that happen when a user actually types, whereas fireEvent just triggers the change event.",
    "hint": "More realistic simulation."
  },
  {
    "id": 143,
    "difficulty": "medium",
    "category": "redux",
    "question": "Can you dispatch an action from inside a Reducer?",
    "options": [
      "No, reducers must be pure and only calculate the next state",
      "Only if it's an async action",
      "Yes",
      "Only in development"
    ],
    "answer": 0,
    "explanation": "A reducer should only be a calculation. Side effects like dispatching further actions belong in middleware or components.",
    "hint": "Reducers are passive calculations."
  },
  {
    "id": 144,
    "difficulty": "hard",
    "category": "styling",
    "question": "What is the 'styled-system' library used for?",
    "options": [
      "To create animations",
      "To speed up CSS loading",
      "To build design systems by providing style props (like 'color', 'space') that map to a theme object",
      "To manage Redux state"
    ],
    "answer": 2,
    "explanation": "It allows you to write <Box m={2} color='primary' /> directly in your JSX.",
    "hint": "Theme-based style props."
  },
  {
    "id": 145,
    "difficulty": "medium",
    "category": "testing",
    "question": "What does 'toBeInTheDocument()' assert?",
    "options": [
      "That the test is running",
      "That a specific element exists in the DOM at that moment",
      "That the file is saved",
      "That the app is hosted online"
    ],
    "answer": 1,
    "explanation": "This is a custom matcher from jest-dom used to check for element presence.",
    "hint": "Presence assertion."
  },
  {
    "id": 146,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "How do you 'reset' the Redux store to its initial state (e.g., on logout)?",
    "options": [
      "Use the 'resetStore()' function",
      "Dispatch a special 'RESET' action and handle it in a root reducer that returns undefined",
      "Reload the page",
      "Delete the store variable"
    ],
    "answer": 1,
    "explanation": "Returning undefined from a root reducer causes all child reducers to return their initial state.",
    "hint": "Root reducer reset pattern."
  },
  {
    "id": 147,
    "difficulty": "medium",
    "category": "testing",
    "question": "How do you test a component that uses a timer (like setTimeout)?",
    "options": [
      "Mock the Date object",
      "Wait for the timer to finish naturally",
      "Timers cannot be tested",
      "Use 'jest.useFakeTimers()' and 'jest.runAllTimers()'"
    ],
    "answer": 3,
    "explanation": "Fake timers allow you to 'fast-forward' time instantly in your tests.",
    "hint": "Time travel in tests."
  },
  {
    "id": 148,
    "difficulty": "hard",
    "category": "styling",
    "question": "Which hook does the 'framer-motion' library provide for animating components based on their lifecycle?",
    "options": [
      "useLifecycle",
      "AnimatePresence",
      "useAnimate",
      "useMotion"
    ],
    "answer": 1,
    "explanation": "AnimatePresence allows components to animate out when they are removed from the React tree.",
    "hint": "Exit animations."
  },
  {
    "id": 149,
    "difficulty": "medium",
    "category": "redux",
    "question": "What is 'State Normalization' in Redux?",
    "options": [
      "Formatting the code",
      "Organizing state like a database (using IDs) to avoid deeply nested objects and data duplication",
      "Making sure the state is a string",
      "Deleting empty keys"
    ],
    "answer": 1,
    "explanation": "Normalized state makes it easier to update single items without traversing deep trees.",
    "hint": "Database-like structure."
  },
  {
    "id": 150,
    "difficulty": "hard",
    "category": "testing",
    "question": "What is the 'MSW' (Mock Service Worker) library used for?",
    "options": [
      "To manage worker threads",
      "To style the UI",
      "To mock network requests at the network level, providing a more robust alternative to mocking 'fetch' or 'axios' globally",
      "To run tests in multiple threads"
    ],
    "answer": 2,
    "explanation": "MSW intercepts requests in the browser or Node, allowing you to use real-looking API logic in your tests.",
    "hint": "Network-level mocking."
  },
  {
    "id": 151,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is 'Windowing' or 'List Virtualization' in React?",
    "options": [
      "A technique that renders only the items currently visible in the viewport to improve performance of large lists",
      "Opening multiple browser windows",
      "Using the 'window' object for global state",
      "A way to animate transitions between pages"
    ],
    "answer": 0,
    "explanation": "Libraries like 'react-window' or 'react-virtualized' help render lists with thousands of rows by only keeping a small subset of DOM nodes active.",
    "hint": "Only render what you see."
  },
  {
    "id": 152,
    "difficulty": "hard",
    "category": "memoization",
    "question": "When should you NOT use 'useMemo' or 'useCallback'?",
    "options": [
      "When passing functions to optimized child components",
      "When the calculation is extremely complex",
      "For every single variable or function, as the overhead of the hook itself can outweigh the benefits for simple values",
      "When the dependency array is empty"
    ],
    "answer": 2,
    "explanation": "Over-memoization can actually hurt performance due to the memory cost of storing dependencies and the CPU cost of constant comparison.",
    "hint": "Premature optimization."
  },
  {
    "id": 153,
    "difficulty": "medium",
    "category": "typescript",
    "question": "What is the correct way to type a functional component in TypeScript?",
    "options": [
      "const MyComponent: React.FC<Props> = (props) => { ... }",
      "const MyComponent = (props: Props): JSX.Element => { ... }",
      "Both 0 and 1 are valid",
      "function MyComponent(props: any) { ... }"
    ],
    "answer": 2,
    "explanation": "React.FC provides built-in typing for children (in older versions) and the return type, but explicitly typing parameters and return values is also standard.",
    "hint": "Functional Component types."
  },
  {
    "id": 154,
    "difficulty": "hard",
    "category": "effect",
    "question": "What is a 'Race Condition' in 'useEffect' and how is it solved?",
    "options": [
      "Two effects running at once; solved by merging them",
      "When an async request finishes after a component has unmounted or state has changed; solved using a cleanup boolean/AbortController",
      "A bug in the React core",
      "When the CPU is too slow; solved by useMemo"
    ],
    "answer": 1,
    "explanation": "If a user clicks 'User A' then 'User B' quickly, User A's data might arrive last and overwrite User B. A cleanup variable can ignore the stale result.",
    "hint": "Stale async results."
  },
  {
    "id": 155,
    "difficulty": "medium",
    "category": "state",
    "question": "What is 'Batching' in React 18?",
    "options": [
      "Storing state in a batch file",
      "A way to download multiple components at once",
      "Grouping multiple state updates into a single re-render for better performance",
      "Processing data in chunks of 10"
    ],
    "answer": 2,
    "explanation": "In React 18, automatic batching occurs even inside promises, setTimeouts, and native event handlers.",
    "hint": "Multiple sets, one render."
  },
  {
    "id": 156,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "A component uses 'useSelector' to get a large object. The component re-renders when ANY property of that object changes. How do you fix this?",
    "options": [
      "Convert the component to a class",
      "Use 'useMemo' inside the component",
      "Use multiple 'useSelector' calls for specific properties or provide a custom equality function (like 'shallowEqual')",
      "Move the state to a local variable"
    ],
    "answer": 2,
    "explanation": "Redux's useSelector uses strict '===' equality by default. If the object reference changes, it triggers a render unless told otherwise.",
    "hint": "Shallow comparison in selectors."
  },
  {
    "id": 157,
    "difficulty": "medium",
    "category": "optimization",
    "question": "What does the 'Profiler' API do?",
    "options": [
      "It tracks user login data",
      "It checks for security vulnerabilities",
      "It measures how often a React application renders and the 'cost' of rendering",
      "It creates user avatars"
    ],
    "answer": 2,
    "explanation": "The Profiler measures the 'actual duration' of a render to find bottlenecks.",
    "hint": "Performance measurement tool."
  },
  {
    "id": 158,
    "difficulty": "hard",
    "category": "typescript",
    "question": "How do you type a 'ref' to an HTML input element in TypeScript?",
    "options": [
      "useRef(input)",
      "useRef<Input>(null)",
      "useRef<HTMLInputElement>(null)",
      "useRef<Element>(null)"
    ],
    "answer": 2,
    "explanation": "Generic types are used with useRef to tell TypeScript which DOM element it will point to.",
    "hint": "Generic HTML types."
  },
  {
    "id": 159,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "You have a search input that triggers an API call. How do you prevent calling the API on every single keystroke?",
    "options": [
      "Using 'useMemo'",
      "Using 'useReducer'",
      "It's not possible to prevent this",
      "Implementing a 'debounce' function inside a 'useEffect' or event handler"
    ],
    "answer": 3,
    "explanation": "Debouncing ensures the function only runs after the user has stopped typing for a specified duration.",
    "hint": "Waiting for a pause in typing."
  },
  {
    "id": 160,
    "difficulty": "hard",
    "category": "effect",
    "question": "What is the danger of using an object or array directly in a 'useEffect' dependency array?",
    "options": [
      "It may cause an infinite loop because objects/arrays are compared by reference, and a new reference might be created on every render",
      "It will cause a syntax error",
      "It makes the effect run slower",
      "It prevents the cleanup function from running"
    ],
    "answer": 0,
    "explanation": "Since {} !== {}, if you define an object in the render body, the effect sees a 'new' dependency every time.",
    "hint": "Referential stability."
  },
  {
    "id": 161,
    "difficulty": "medium",
    "category": "memoization",
    "question": "What is the second argument of 'React.memo'?",
    "options": [
      "A dependency array",
      "A callback for when the component unmounts",
      "The initial state",
      "An optional comparison function to manually determine if props are equal"
    ],
    "answer": 3,
    "explanation": "You can pass (prevProps, nextProps) => boolean to customize the re-render logic.",
    "hint": "Manual prop comparison."
  },
  {
    "id": 162,
    "difficulty": "hard",
    "category": "optimization",
    "question": "Which hook is used to 'read' the layout from the DOM and synchronously re-render?",
    "options": [
      "useMemo",
      "useInsertionEffect",
      "useEffect",
      "useLayoutEffect"
    ],
    "answer": 3,
    "explanation": "useLayoutEffect fires synchronously after all DOM mutations. Use it to prevent visual flickers when measuring elements.",
    "hint": "Synchronous DOM measurement."
  },
  {
    "id": 163,
    "difficulty": "medium",
    "category": "state",
    "question": "When using 'useReducer', where should the business logic ideally reside?",
    "options": [
      "In the CSS",
      "Inside the reducer function",
      "In the 'useEffect' hook",
      "Inside the component"
    ],
    "answer": 1,
    "explanation": "Reducers are meant to centralize state transition logic, keeping components lean and focused on UI.",
    "hint": "Logic in the reducer."
  },
  {
    "id": 164,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You want to synchronize a state variable with LocalStorage. What is the best pattern?",
    "options": [
      "Update LocalStorage directly in the event handler",
      "Use a 'useMemo' hook",
      "Storage is not compatible with React",
      "Use a 'useEffect' that listens to the state variable and updates LocalStorage when it changes"
    ],
    "answer": 3,
    "explanation": "The 'side effect' of updating external storage should be handled in useEffect to keep the render function pure.",
    "hint": "Side effect synchronization."
  },
  {
    "id": 165,
    "difficulty": "medium",
    "category": "typescript",
    "question": "How do you type an event handler for a button click in React/TS?",
    "options": [
      "(e: React.MouseEvent<HTMLButtonElement>) => void",
      "(e: ClickEvent) => void",
      "(e: MouseEvent)",
      "(e: any) => any"
    ],
    "answer": 0,
    "explanation": "React provides synthetic event types that are generic to the element they are attached to.",
    "hint": "React MouseEvent."
  },
  {
    "id": 166,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is 'Partial Hydration'?",
    "options": [
      "Loading CSS before JS",
      "A technique where only specific, interactive parts of a server-rendered page are hydrated with JS",
      "Only hydrating the top half of the page",
      "Drinking water while coding"
    ],
    "answer": 1,
    "explanation": "Common in frameworks like Astro or Next.js, it reduces the amount of JavaScript the browser needs to execute.",
    "hint": "Interactive islands."
  },
  {
    "id": 167,
    "difficulty": "medium",
    "category": "effect",
    "question": "What happens if you return a value that is NOT a function from 'useEffect'?",
    "options": [
      "React will throw a warning/error because it expects a cleanup function or nothing",
      "The component re-renders",
      "It becomes the new state",
      "Nothing, it is ignored"
    ],
    "answer": 0,
    "explanation": "The return type must be a function (the cleanup) or undefined. Returning a string or object is a common mistake.",
    "hint": "Cleanup function only."
  },
  {
    "id": 168,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "A child component is wrapped in 'React.memo', but it still re-renders every time the parent re-renders. The parent passes an inline arrow function as a prop. What is the cause?",
    "options": [
      "React.memo is broken",
      "Inline functions create a new reference on every render, failing the shallow prop check",
      "The parent is not a PureComponent",
      "The child has too many props"
    ],
    "answer": 1,
    "explanation": "To fix this, the parent must wrap the function in 'useCallback' to preserve the reference.",
    "hint": "Stable function references."
  },
  {
    "id": 169,
    "difficulty": "medium",
    "category": "state",
    "question": "Can multiple 'useEffect' hooks be used in a single component?",
    "options": [
      "Yes, but they run in random order",
      "No, only one",
      "Only if they have different dependencies",
      "Yes, and they will run in the order they are defined"
    ],
    "answer": 3,
    "explanation": "Splitting logic into multiple effects based on concerns is a best practice.",
    "hint": "Separation of concerns."
  },
  {
    "id": 170,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is the 'Double Render' in React 18 Strict Mode development?",
    "options": [
      "An intentional feature to help developers find impure components and side-effect bugs",
      "A bug in the browser",
      "Only happens on mobile",
      "A way to make the app look smoother"
    ],
    "answer": 0,
    "explanation": "React mounts, unmounts, and re-mounts your component to ensure your effects handle cleanup correctly.",
    "hint": "Dev-only stress test."
  },
  {
    "id": 171,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you access the previous value of a prop or state variable?",
    "options": [
      "React doesn't allow this",
      "Using a 'useRef' to store the value and updating it in a 'useEffect' after each render",
      "It is stored in 'this.previous'",
      "Using the 'usePrevious' hook (built-in)"
    ],
    "answer": 1,
    "explanation": "React doesn't provide a built-in hook, but storing it in a ref is the standard pattern to 'remember' the past.",
    "hint": "Ref as memory."
  },
  {
    "id": 172,
    "difficulty": "hard",
    "category": "typescript",
    "question": "What is the type for children in a React component in modern TypeScript?",
    "options": [
      "string",
      "HTMLElement",
      "JSX.Element",
      "React.ReactNode"
    ],
    "answer": 3,
    "explanation": "ReactNode is the most permissive type, covering strings, numbers, elements, and arrays of elements.",
    "hint": "The most inclusive React type."
  },
  {
    "id": 173,
    "difficulty": "medium",
    "category": "memoization",
    "question": "What is the result of 'useMemo(() => () => console.log('Hi'), [])'?",
    "options": [
      "It returns undefined",
      "It returns a memoized function (equivalent to useCallback)",
      "It causes an error",
      "It prints 'Hi' to the console"
    ],
    "answer": 1,
    "explanation": "Since useMemo returns the result of the function, and the result is another function, it behaves like useCallback.",
    "hint": "Returning a function."
  },
  {
    "id": 174,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is 'Asset Optimization' in a React build?",
    "options": [
      "Writing shorter variable names",
      "Using more CSS files",
      "Buying more RAM",
      "Minification, compression, and image optimization performed by the bundler"
    ],
    "answer": 3,
    "explanation": "Tools like Vite or Webpack handle this to ensure the smallest possible production bundle.",
    "hint": "Build-time shrinking."
  },
  {
    "id": 175,
    "difficulty": "medium",
    "category": "state",
    "question": "Does 'useState' merge objects automatically like 'this.setState' did in classes?",
    "options": [
      "Yes",
      "Only if the object is shallow",
      "No, you must manually spread the old state: setState(prev => ({...prev, newProp: 1}))",
      "Only in strict mode"
    ],
    "answer": 2,
    "explanation": "Functional state updates replace the value entirely, so manual merging is required.",
    "hint": "Manual merging."
  },
  {
    "id": 176,
    "difficulty": "hard",
    "category": "effect",
    "question": "What happens if you use 'window.addEventListener' in an effect without a cleanup?",
    "options": [
      "The event won't fire",
      "It works fine",
      "It leads to memory leaks and multiple listeners being attached every time the component re-renders",
      "The browser will crash immediately"
    ],
    "answer": 2,
    "explanation": "Always remove global listeners in the cleanup function to keep the application stable.",
    "hint": "Clean up your listeners."
  },
  {
    "id": 177,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "You want to render a large list but search through it. Which hook is best for the search calculation?",
    "options": [
      "useRef",
      "useEffect",
      "useCallback",
      "useMemo"
    ],
    "answer": 3,
    "explanation": "useMemo ensures the filtering logic only runs when the list or the search query changes, not on every render.",
    "hint": "Memoized filtering."
  },
  {
    "id": 178,
    "difficulty": "hard",
    "category": "typescript",
    "question": "Which utility type is used to extract the props type from a React component?",
    "options": [
      "PropsOf<MyComponent>",
      "ExtractProps<MyComponent>",
      "React.ComponentProps<typeof MyComponent>",
      "MyComponent['props']"
    ],
    "answer": 2,
    "explanation": "ComponentProps is a powerful helper for wrapping or extending existing components.",
    "hint": "Prop extraction utility."
  },
  {
    "id": 179,
    "difficulty": "medium",
    "category": "optimization",
    "question": "What is 'Lazy Initialization' in 'useState'?",
    "options": [
      "Updating state later",
      "Using a slow database",
      "Setting state to null",
      "Passing a function to 'useState' to only calculate the initial value on the first render"
    ],
    "answer": 3,
    "explanation": "useState(() => someExpensiveCalculation()) prevents the calculation from running on every re-render.",
    "hint": "Functional initial state."
  },
  {
    "id": 180,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "A component re-renders because its parent re-renders. It has no props. How do you prevent this re-render?",
    "options": [
      "Move it outside the parent",
      "Use 'useMemo' on the component call",
      "Wrap it in 'React.memo'",
      "You can't"
    ],
    "answer": 2,
    "explanation": "React.memo prevents re-renders if the props (or lack thereof) remain the same.",
    "hint": "The 'memo' wrapper."
  },
  {
    "id": 181,
    "difficulty": "medium",
    "category": "effect",
    "question": "What is the 'Exhaustive Deps' lint rule?",
    "options": [
      "A rule that deletes unused code",
      "A rule that forces you to use more effects",
      "A rule for naming variables",
      "A rule that ensures all variables used inside an effect are included in the dependency array"
    ],
    "answer": 3,
    "explanation": "This rule prevents stale closures by making sure the effect has access to the latest values.",
    "hint": "Include all dependencies."
  },
  {
    "id": 182,
    "difficulty": "hard",
    "category": "optimization",
    "question": "How does 'Transitions' (startTransition) differ from 'Debouncing'?",
    "options": [
      "They are the same",
      "Transitions are slower",
      "Debouncing delays the action; Transitions let React work on the update in the background without blocking the UI",
      "Debouncing is only for inputs"
    ],
    "answer": 2,
    "explanation": "Transitions are built into React's rendering engine, allowing for a smoother UI than simple timers.",
    "hint": "Engine-level prioritization."
  },
  {
    "id": 183,
    "difficulty": "medium",
    "category": "typescript",
    "question": "What is 'React.CSSProperties' used for?",
    "options": [
      "To manage CSS modules",
      "To check if a browser supports a style",
      "To type the 'style' prop in a React component",
      "To write CSS in a .css file"
    ],
    "answer": 2,
    "explanation": "It provides autocomplete and type checking for inline styles.",
    "hint": "Style prop typing."
  },
  {
    "id": 184,
    "difficulty": "hard",
    "category": "state",
    "question": "When should you use 'useSyncExternalStore' instead of 'useEffect' to sync with an external store?",
    "options": [
      "Only when using Redux",
      "When the external store is outside of React and you need to avoid 'tearing' in concurrent rendering",
      "When the store is in LocalStorage",
      "Always"
    ],
    "answer": 1,
    "explanation": "Tearing happens when different components see different values for the same state during a single render.",
    "hint": "Avoiding 'tearing'."
  },
  {
    "id": 185,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you focus an input field as soon as a component mounts?",
    "options": [
      "Use 'useRef' to target the input and 'useEffect' with an empty array to call '.focus()'",
      "input.focus()",
      "Use 'useLayoutEffect' only",
      "Set 'autofocus' in HTML"
    ],
    "answer": 0,
    "explanation": "While HTML 'autofocus' exists, the React ref/effect pattern is more reliable for dynamic components.",
    "hint": "Ref + Effect."
  },
  {
    "id": 186,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is 'Server Components' (RSC) primary goal?",
    "options": [
      "To reduce the amount of JavaScript sent to the client by rendering components on the server",
      "To replace the server",
      "To speed up CSS",
      "To make the app run in the cloud only"
    ],
    "answer": 0,
    "explanation": "Server components never hydrate on the client, saving significant bundle size.",
    "hint": "Zero-bundle size components."
  },
  {
    "id": 187,
    "difficulty": "medium",
    "category": "memoization",
    "question": "If a component is wrapped in 'React.memo', but it uses 'useContext', will it re-render when the context changes?",
    "options": [
      "Yes, context changes bypass 'React.memo'",
      "Only in development",
      "Only if the props also change",
      "No, memo prevents it"
    ],
    "answer": 0,
    "explanation": "React.memo only checks props. Changes to state or context will still trigger a re-render.",
    "hint": "Context bypasses memo."
  },
  {
    "id": 188,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is the 'Ref Forwarding' pattern used for in component libraries?",
    "options": [
      "To allow users of the library to access the underlying DOM node of a highly encapsulated component",
      "To pass data back to the parent",
      "To speed up the library",
      "To hide the DOM"
    ],
    "answer": 0,
    "explanation": "Library authors use forwardRef so that consumers can focus or measure elements inside the library's components.",
    "hint": "Library DOM access."
  },
  {
    "id": 189,
    "difficulty": "medium",
    "category": "effect",
    "question": "Is 'useEffect' triggered during Server Side Rendering (SSR)?",
    "options": [
      "No, it only runs on the client",
      "Yes",
      "Only if specifically configured",
      "Only in Next.js"
    ],
    "answer": 0,
    "explanation": "SSR only runs the render logic; side effects are deferred until the JS loads in the browser.",
    "hint": "Client-only hook."
  },
  {
    "id": 190,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is the 'Three-Dot' (...) spread operator actually doing when passing props?",
    "options": [
      "Deleting extra props",
      "Iterating through an array",
      "Merging CSS files",
      "Shallow copying the properties of an object into the component's props"
    ],
    "answer": 3,
    "explanation": "<Comp {...props} /> is shorthand for mapping every key in the object to a prop.",
    "hint": "Shallow copy."
  },
  {
    "id": 191,
    "difficulty": "medium",
    "category": "state",
    "question": "What happens if you call a state setter with the exact same value as the current state?",
    "options": [
      "It throws an error",
      "It deletes the state",
      "React will bail out and not re-render the component or fire effects",
      "The component re-renders anyway"
    ],
    "answer": 2,
    "explanation": "React uses 'Object.is' to compare state; if identical, it skips the update for performance.",
    "hint": "State bailout."
  },
  {
    "id": 192,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "How do you handle 'stale closures' in 'useCallback'?",
    "options": [
      "By using 'useRef' for everything",
      "By ensuring all variables used in the function are listed in the dependency array",
      "You can't",
      "By using 'useReducer'"
    ],
    "answer": 1,
    "explanation": "If you omit a dependency, the memoized function will 'remember' the value from the render when it was created.",
    "hint": "Update your deps."
  },
  {
    "id": 193,
    "difficulty": "medium",
    "category": "typescript",
    "question": "How do you type a component that accepts a generic type (e.g., a List component)?",
    "options": [
      "const List: React.FC<any>",
      "const List = <T>(props: ListProps<T>) => { ... }",
      "Generic components aren't possible",
      "const List = (props: T)"
    ],
    "answer": 1,
    "explanation": "TypeScript allows components to be generic, which is perfect for reusable UI components.",
    "hint": "Generic component syntax."
  },
  {
    "id": 194,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is 'Pre-rendering' vs 'SSR'?",
    "options": [
      "They are the same",
      "Pre-rendering is only for images",
      "Pre-rendering is done at build time (Static Generation); SSR is done at request time",
      "SSR is faster"
    ],
    "answer": 2,
    "explanation": "Static Generation (SSG) is generally faster as the page is served as a static file from a CDN.",
    "hint": "Build-time vs Request-time."
  },
  {
    "id": 195,
    "difficulty": "medium",
    "category": "effect",
    "question": "Can you use 'useEffect' to set state?",
    "options": [
      "No, never",
      "Only for logging",
      "Yes, but it should be done carefully to avoid infinite loops",
      "Only in class components"
    ],
    "answer": 2,
    "explanation": "Setting state in an effect is common (e.g., after an API call), but if the state you set is also a dependency, you'll loop.",
    "hint": "Safe state setting."
  },
  {
    "id": 196,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You want to implement a 'Global Modal' system without Redux. What is the best React-only approach?",
    "options": [
      "Portals are not useful here",
      "Use Context API to manage the 'isModalOpen' state and the modal content at the top level",
      "Create a Modal component in every file",
      "Use 'window.alert'"
    ],
    "answer": 1,
    "explanation": "Context + Portals provide a powerful way to manage UI overlays globally.",
    "hint": "Context + Portal."
  },
  {
    "id": 197,
    "difficulty": "medium",
    "category": "memoization",
    "question": "Is 'useMemo' guaranteed to keep the value in memory forever?",
    "options": [
      "No, React may choose to discard the memoized value to free up memory",
      "Only if the dependency array is empty",
      "Yes",
      "Only in production"
    ],
    "answer": 0,
    "explanation": "React treats useMemo as a performance hint, not a semantic guarantee.",
    "hint": "Memory-based eviction."
  },
  {
    "id": 198,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is 'Code Splitting' at the Route level?",
    "options": [
      "Using different CSS files for each route",
      "Wrapping route components in 'React.lazy' and 'Suspense' so the browser only loads the code for the current page",
      "A way to share state between routes",
      "Splitting the URL with slashes"
    ],
    "answer": 1,
    "explanation": "This is one of the most effective ways to reduce initial load time in a SPA.",
    "hint": "Lazy-loading routes."
  },
  {
    "id": 199,
    "difficulty": "medium",
    "category": "state",
    "question": "What is 'Derived State'?",
    "options": [
      "State that is stored in a database",
      "State that comes from a child",
      "State that is copied from props",
      "State that is calculated from existing props or state during render (and doesn't need its own useState)"
    ],
    "answer": 3,
    "explanation": "If you can calculate it during render, don't put it in state—this prevents 'out-of-sync' bugs.",
    "hint": "Calculated values."
  },
  {
    "id": 200,
    "difficulty": "hard",
    "category": "basics",
    "question": "What is 'Imperative' vs 'Declarative' programming in the context of React?",
    "options": [
      "Declarative is only for styles",
      "They are the same",
      "React is declarative (what the UI should look like for a given state); Vanilla DOM is imperative (step-by-step instructions)",
      "React is imperative (how to do it); Vanilla JS is declarative (what to do)"
    ],
    "answer": 2,
    "explanation": "In React, you describe the end state, and React handles the 'how' of updating the DOM.",
    "hint": "What vs How."
  },
  {
    "id": 201,
    "difficulty": "hard",
    "category": "patterns",
    "question": "What is the 'Compound Components' pattern?",
    "options": [
      "A pattern where components work together to form a unit, sharing implicit state (e.g., <Select> and <Option>)",
      "A way to write CSS and JS in the same file",
      "Using multiple Redux stores",
      "Combining two different libraries together"
    ],
    "answer": 0,
    "explanation": "Compound components allow for a more expressive API where the parent manages the state and children consume it, often using Context.",
    "hint": "Think of HTML <select> and <option> tags."
  },
  {
    "id": 202,
    "difficulty": "medium",
    "category": "ecosystem",
    "question": "Which library is commonly used for managing server-state, caching, and synchronization in React?",
    "options": [
      "Zustand",
      "TanStack Query (React Query)",
      "Redux",
      "Axios"
    ],
    "answer": 1,
    "explanation": "React Query excels at handling asynchronous server data, providing built-in caching and background updates.",
    "hint": "Fetching and caching specialist."
  },
  {
    "id": 203,
    "difficulty": "hard",
    "category": "accessibility",
    "question": "How can you ensure a React application is accessible to screen readers?",
    "options": [
      "By using semantic HTML and providing 'aria-' attributes where necessary",
      "By using only <div> tags",
      "By making the text larger",
      "By disabling JavaScript"
    ],
    "answer": 0,
    "explanation": "Semantic HTML (like <button>, <nav>, <main>) provides the foundation for accessibility that screen readers rely on.",
    "hint": "Use the right tags for the job."
  },
  {
    "id": 204,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "You want to perform a deep equality check in 'useEffect' dependencies. What is the best way?",
    "options": [
      "Use a custom hook like 'useDeepCompareEffect' or manually compare values",
      "It is not possible",
      "Stringify the object: JSON.stringify(obj)",
      "React does this automatically"
    ],
    "answer": 0,
    "explanation": "React uses shallow comparison. For deep comparison, you often need to memoize the object or use a specialized hook.",
    "hint": "Custom comparison logic."
  },
  {
    "id": 205,
    "difficulty": "hard",
    "category": "patterns",
    "question": "What is a 'Controlled Component' in the context of a form?",
    "options": [
      "A component managed by the browser's DOM",
      "A component that cannot be edited",
      "A component that requires a password",
      "A component where the form data is handled by the React component state"
    ],
    "answer": 3,
    "explanation": "The value of the input is set by state, and changes are handled by an onChange function.",
    "hint": "State is the source of truth."
  },
  {
    "id": 206,
    "difficulty": "medium",
    "category": "ecosystem",
    "question": "What is 'Zustand'?",
    "options": [
      "A routing library",
      "A testing tool",
      "A CSS framework",
      "A small, fast, and scalable bear-themed state management library"
    ],
    "answer": 3,
    "explanation": "Zustand is a popular alternative to Redux for global state management due to its simplicity and low boilerplate.",
    "hint": "Simple state management."
  },
  {
    "id": 207,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is the benefit of 'Atomic Design' in a React project?",
    "options": [
      "It reduces the number of files",
      "It makes the app run faster",
      "It organizes components into hierarchical levels: atoms, molecules, organisms, templates, and pages",
      "It uses nuclear energy"
    ],
    "answer": 2,
    "explanation": "Atomic Design helps create a clear structure for reusable UI components.",
    "hint": "Smallest to largest parts."
  },
  {
    "id": 208,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "You need to measure the width of a div after it renders to position a tooltip. Which hook is safest to avoid flickering?",
    "options": [
      "useEffect",
      "useMemo",
      "useRef",
      "useLayoutEffect"
    ],
    "answer": 3,
    "explanation": "useLayoutEffect runs synchronously before the browser paints, preventing the user from seeing the 'jump' during positioning.",
    "hint": "Synchronous measurement."
  },
  {
    "id": 209,
    "difficulty": "hard",
    "category": "optimization",
    "question": "How do you implement 'infinite scrolling' in a performant way?",
    "options": [
      "Use the 'Intersection Observer API' to detect when the user reaches the bottom and fetch more data",
      "Refresh the page every 10 seconds",
      "Use a very long scrollbar",
      "Load the entire database at once"
    ],
    "answer": 0,
    "explanation": "Intersection Observer allows you to efficiently watch for elements entering the viewport without heavy scroll event listeners.",
    "hint": "Detecting element visibility."
  },
  {
    "id": 210,
    "difficulty": "medium",
    "category": "accessibility",
    "question": "In React, what is the 'alt' attribute used for on <img> tags?",
    "options": [
      "To provide a tooltip",
      "To change the image size",
      "To provide a text description for users with visual impairments and for SEO",
      "To link to another page"
    ],
    "answer": 2,
    "explanation": "The alt attribute is essential for accessibility; screen readers read it when the image is encountered.",
    "hint": "Alternative text."
  },
  {
    "id": 211,
    "difficulty": "hard",
    "category": "patterns",
    "question": "What are 'HOCs' (Higher Order Components) mainly replaced by in modern React?",
    "options": [
      "Custom Hooks",
      "Context API",
      "Redux",
      "Class components"
    ],
    "answer": 0,
    "explanation": "Hooks provide a cleaner and more composable way to share logic compared to the wrapper-hell often caused by HOCs.",
    "hint": "Logic reuse in functions."
  },
  {
    "id": 212,
    "difficulty": "medium",
    "category": "ecosystem",
    "question": "Which tool is the modern successor to Create React App (CRA) for fast development and building?",
    "options": [
      "Gulp",
      "Grunt",
      "Vite",
      "Webpack"
    ],
    "answer": 2,
    "explanation": "Vite uses native ES modules in development for lightning-fast start times and hot module replacement (HMR).",
    "hint": "French for 'Quick'."
  },
  {
    "id": 213,
    "difficulty": "hard",
    "category": "state",
    "question": "What is 'State Snapshotting' in the context of React's render cycle?",
    "options": [
      "Using Redux DevTools only",
      "The concept that 'state' is a constant value during a specific render and does not change until the next render",
      "Taking a picture of the screen",
      "A way to save state to a file"
    ],
    "answer": 1,
    "explanation": "When state updates, React re-renders with a new 'snapshot' of state. Existing code inside the old render still sees the old value.",
    "hint": "State is constant for one render."
  },
  {
    "id": 214,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you handle a scenario where a child needs to update a parent's state?",
    "options": [
      "Pass a callback function from the parent to the child as a prop",
      "The child cannot update parent state",
      "Use a global variable",
      "Use 'this.parent.setState'"
    ],
    "answer": 0,
    "explanation": "This is the standard pattern for data flowing back 'up' the tree.",
    "hint": "Pass a function down."
  },
  {
    "id": 215,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Container vs Presentational' component pattern?",
    "options": [
      "Mobile vs Desktop components",
      "Logic/Data fetching (Container) vs UI/Markup (Presentational)",
      "Styling vs Logic separation",
      "Frontend vs Backend components"
    ],
    "answer": 1,
    "explanation": "Though less common since Hooks, it’s a pattern for separating how things work from how they look.",
    "hint": "Logic vs View."
  },
  {
    "id": 216,
    "difficulty": "medium",
    "category": "memoization",
    "question": "What is the primary risk of using 'index' as a key in a list that can be filtered or sorted?",
    "options": [
      "It makes the app crash",
      "It can cause the wrong state to be associated with the wrong item after sorting",
      "It is too slow",
      "It is not allowed by React"
    ],
    "answer": 1,
    "explanation": "If the order changes, the index 0 might represent a different data item, but React will reuse the state from the previous index 0.",
    "hint": "State mismatch in lists."
  },
  {
    "id": 217,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is 'Priority Crashing' in React 18?",
    "options": [
      "Not a real term; the correct term is 'Tearing' or 'Interruption'",
      "When a low priority update is interrupted by a high priority one",
      "A feature for gaming",
      "A bug where the app freezes"
    ],
    "answer": 0,
    "explanation": "Concurrent React allows interruptions, but 'Tearing' is the actual risk where UI shows inconsistent data.",
    "hint": "Concurrent consistency."
  },
  {
    "id": 218,
    "difficulty": "medium",
    "category": "accessibility",
    "question": "How do you implement a 'Skip Link' in React?",
    "options": [
      "A link that skips an ad",
      "It is not possible in React",
      "A link that closes the app",
      "An invisible link at the top of the page that allows keyboard users to jump straight to the main content"
    ],
    "answer": 3,
    "explanation": "Skip links are vital for keyboard and screen reader users to bypass repetitive navigation.",
    "hint": "Bypass navigation."
  },
  {
    "id": 219,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You have an effect that sets up a WebSocket connection. What must you do in the cleanup function?",
    "options": [
      "Alert the user",
      "Nothing",
      "Close the WebSocket connection to prevent memory leaks and multiple connections",
      "Delete the data"
    ],
    "answer": 2,
    "explanation": "Cleanup ensures that when the component unmounts or re-renders, the old socket is properly closed.",
    "hint": "Closing connections."
  },
  {
    "id": 220,
    "difficulty": "medium",
    "category": "ecosystem",
    "question": "What is 'React Native'?",
    "options": [
      "A way to run React in the terminal",
      "A database for React",
      "A framework for building native mobile apps using React",
      "A React library for CSS"
    ],
    "answer": 2,
    "explanation": "React Native uses native UI components instead of web components, allowing for 'real' mobile apps.",
    "hint": "Mobile React."
  },
  {
    "id": 221,
    "difficulty": "hard",
    "category": "patterns",
    "question": "What is the 'Render Props' pattern?",
    "options": [
      "A technique where a component's prop is a function used to determine what to render",
      "Rendering props in a list",
      "Using props to style a component",
      "A prop that is a string"
    ],
    "answer": 0,
    "explanation": "It allows for sharing stateful logic (like mouse position) while letting the consumer decide the UI.",
    "hint": "Prop as a function."
  },
  {
    "id": 222,
    "difficulty": "medium",
    "category": "state",
    "question": "Why should you use an initializer function in 'useReducer' for heavy objects?",
    "options": [
      "To avoid re-creating the initial state object on every single render",
      "To make the code shorter",
      "To speed up the browser",
      "Because React requires it"
    ],
    "answer": 0,
    "explanation": "Like useState's lazy initialization, the 3rd argument to useReducer only runs once.",
    "hint": "Lazy init."
  },
  {
    "id": 223,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You have a component that needs to update state based on a prop change. What is the recommended modern approach?",
    "options": [
      "Use 'componentWillReceiveProps'",
      "Use 'useEffect' for everything",
      "Update state during render (if necessary) or better, derive the value directly without state",
      "Use 'getDerivedStateFromProps'"
    ],
    "answer": 2,
    "explanation": "If you can calculate it from props, don't put it in state. If you must, update it during render to avoid extra renders.",
    "hint": "Prefer derivation over state."
  },
  {
    "id": 224,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What is 'Feature-Sliced Design' (FSD)?",
    "options": [
      "An architectural methodology for frontend projects based on separation of concerns and business logic",
      "A way to cut images",
      "A Redux middleware",
      "A type of CSS grid"
    ],
    "answer": 0,
    "explanation": "FSD divides the app into layers (features, entities, shared) to make it more maintainable.",
    "hint": "Architectural layers."
  },
  {
    "id": 225,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is the difference between 'React.memo' and 'useMemo'?",
    "options": [
      "React.memo is for components; useMemo is for values inside a component",
      "There is no difference",
      "React.memo is only for class components",
      "useMemo is faster"
    ],
    "answer": 0,
    "explanation": "React.memo is a HOC that wraps a component; useMemo is a hook that caches a calculated value.",
    "hint": "HOC vs Hook."
  },
  {
    "id": 226,
    "difficulty": "medium",
    "category": "accessibility",
    "question": "What does the 'aria-live' attribute do?",
    "options": [
      "It speeds up the app",
      "It tells screen readers to announce dynamic content updates automatically",
      "It makes the text blink",
      "It starts a video"
    ],
    "answer": 1,
    "explanation": "Useful for error messages or status updates that happen without a page reload.",
    "hint": "Announcing updates."
  },
  {
    "id": 227,
    "difficulty": "hard",
    "category": "state",
    "question": "In Redux, what is the 'Root Reducer'?",
    "options": [
      "The reducer that handles errors",
      "The first reducer ever written",
      "A reducer in the root folder",
      "The combination of all individual slice reducers into one single function for the store"
    ],
    "answer": 3,
    "explanation": "Using 'combineReducers', you merge different parts of state into one tree.",
    "hint": "Combined reducers."
  },
  {
    "id": 228,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "You want to 'throttle' a resize event. What does this mean compared to 'debouncing'?",
    "options": [
      "Throttling ensures the function runs at most once every X milliseconds during the event",
      "Throttling is only for mobile",
      "Throttling waits for a pause; debouncing runs at intervals",
      "They are identical"
    ],
    "answer": 0,
    "explanation": "Throttling is better for continuous events like scrolling or resizing where you still want updates while it happens.",
    "hint": "Constant interval execution."
  },
  {
    "id": 229,
    "difficulty": "hard",
    "category": "ecosystem",
    "question": "What is 'Next.js'?",
    "options": [
      "A CSS library",
      "The next version of React",
      "A React framework that provides SSR, Static Site Generation, and Routing out of the box",
      "A testing framework"
    ],
    "answer": 2,
    "explanation": "Next.js is the most popular framework for building production-ready React applications.",
    "hint": "The 'Fullstack' React framework."
  },
  {
    "id": 230,
    "difficulty": "medium",
    "category": "effect",
    "question": "What is the default behavior of 'useEffect' if you return nothing?",
    "options": [
      "It re-renders the component",
      "It simply finishes and does no cleanup",
      "It throws an error",
      "It clears the state"
    ],
    "answer": 1,
    "explanation": "Cleanup functions are optional. If you don't return one, React assumes no cleanup is needed.",
    "hint": "Optional cleanup."
  },
  {
    "id": 231,
    "difficulty": "hard",
    "category": "patterns",
    "question": "What is 'Props Proxy' in the context of HOCs?",
    "options": [
      "A Redux tool",
      "The HOC receives props, modifies them, and passes them down to the wrapped component",
      "A security feature",
      "A way to hide props"
    ],
    "answer": 1,
    "explanation": "It allows a HOC to 'inject' additional data or functionality into a component.",
    "hint": "Intercepting props."
  },
  {
    "id": 232,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What is 'Monolith' vs 'Micro-frontend' architecture?",
    "options": [
      "One big codebase vs multiple independent frontend apps combined into one",
      "Using one vs many CSS files",
      "React vs Angular",
      "Mobile vs Web"
    ],
    "answer": 0,
    "explanation": "Micro-frontends allow different teams to work on different parts of a large app using different technologies if needed.",
    "hint": "Single vs Distributed apps."
  },
  {
    "id": 233,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "How do you handle 'Error: Too many re-renders' in React?",
    "options": [
      "Use more state",
      "Delete the component",
      "Buy a faster computer",
      "Check if you are calling a state-setting function directly in the render body instead of an event handler or effect"
    ],
    "answer": 3,
    "explanation": "Calling setState in render triggers a re-render, which calls setState, creating an infinite loop.",
    "hint": "Infinite loop detection."
  },
  {
    "id": 234,
    "difficulty": "medium",
    "category": "optimization",
    "question": "What is 'Tree Shaking' primarily dependent on?",
    "options": [
      "Using 'require()' instead of 'import'",
      "Using ES Modules (import/export) syntax",
      "Using class components",
      "Writing long functions"
    ],
    "answer": 1,
    "explanation": "Static 'import' statements allow bundlers to analyze which parts of the code are actually used.",
    "hint": "Static analysis."
  },
  {
    "id": 235,
    "difficulty": "hard",
    "category": "state",
    "question": "What is the 'Flux' architecture?",
    "options": [
      "A type of React hook",
      "A CSS library",
      "The pattern of unidirectional data flow (Action -> Dispatcher -> Store -> View) that inspired Redux",
      "A database"
    ],
    "answer": 2,
    "explanation": "Flux was the original architectural pattern proposed by Facebook for React apps.",
    "hint": "One-way data flow pattern."
  },
  {
    "id": 236,
    "difficulty": "medium",
    "category": "accessibility",
    "question": "What is the purpose of 'aria-hidden=\"true\"'?",
    "options": [
      "To make an element non-clickable",
      "To hide an element from the screen visually",
      "To delete an element",
      "To hide an element from screen readers while keeping it visible on the screen"
    ],
    "answer": 3,
    "explanation": "Useful for decorative icons or redundant text that doesn't add value for screen reader users.",
    "hint": "Hide from assistive tech."
  },
  {
    "id": 237,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You want to persist Redux state after a page refresh. What is the standard tool?",
    "options": [
      "Redux Thunk",
      "Redux Saga",
      "Redux Logger",
      "Redux Persist"
    ],
    "answer": 3,
    "explanation": "Redux Persist saves the store to LocalStorage or SessionStorage and 'rehydrates' it on load.",
    "hint": "Saving state to disk."
  },
  {
    "id": 238,
    "difficulty": "medium",
    "category": "ecosystem",
    "question": "What is 'Storybook' used for?",
    "options": [
      "Managing databases",
      "Hosting the app",
      "Writing documentation",
      "Developing UI components in isolation, making it easier to document and test different states"
    ],
    "answer": 3,
    "explanation": "Storybook is a 'workshop' for components, helping designers and devs collaborate.",
    "hint": "Isolated component development."
  },
  {
    "id": 239,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is 'Critical CSS'?",
    "options": [
      "CSS that has bugs",
      "CSS used in every file",
      "The minimum amount of CSS needed to render the 'Above the Fold' content, inlined for speed",
      "CSS that is very important for the look"
    ],
    "answer": 2,
    "explanation": "By inlining critical CSS, you can show the user a styled page before the full CSS file finishes downloading.",
    "hint": "Above the fold speed."
  },
  {
    "id": 240,
    "difficulty": "medium",
    "category": "effect",
    "question": "Can 'useEffect' be used to replace 'componentDidUpdate'?",
    "options": [
      "No",
      "Yes, by using it without the empty array, it runs after every render",
      "Only for state changes",
      "Only if you use a ref"
    ],
    "answer": 1,
    "explanation": "By default, effects run after every completed render, but you can target specific updates with the dependency array.",
    "hint": "Runs after render."
  },
  {
    "id": 241,
    "difficulty": "hard",
    "category": "patterns",
    "question": "What is 'Inversion of Control' in React components?",
    "options": [
      "The child controls the parent",
      "Allowing the consumer of a component to control the rendering of its internal parts (e.g., via render props or children)",
      "Using only global state",
      "An error in state management"
    ],
    "answer": 1,
    "explanation": "Instead of a component having 20 props for different styles, it provides a 'slot' for the user to pass their own component.",
    "hint": "Giving control to the user."
  },
  {
    "id": 242,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you detect if a component is still 'mounted' before updating state in an async callback?",
    "options": [
      "It is not necessary",
      "React handles this automatically",
      "Use 'this.isMounted()'",
      "Use a 'useRef' to track mount status and check it before calling setState"
    ],
    "answer": 3,
    "explanation": "While React 18 has improved this, checking mount status prevents 'can't perform a React state update on an unmounted component' warnings.",
    "hint": "Manual mount tracking."
  },
  {
    "id": 243,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Hydration Mismatch'?",
    "options": [
      "A database connection issue",
      "The app runs out of memory",
      "When the server-rendered HTML differs from the first client-side render, causing UI jumps or errors",
      "A CSS error"
    ],
    "answer": 2,
    "explanation": "This often happens if you use 'window' or 'new Date()' directly in the render, as they differ between server and client.",
    "hint": "Server/Client UI difference."
  },
  {
    "id": 244,
    "difficulty": "medium",
    "category": "optimization",
    "question": "What does 'React.startTransition' do?",
    "options": [
      "Moves to a new route",
      "Marks a state update as a 'transition', allowing React to keep the UI responsive by prioritizing more urgent updates",
      "Starts a CSS animation",
      "Starts the application"
    ],
    "answer": 1,
    "explanation": "Non-urgent updates (like filtering a long list) are marked as transitions so they don't block typing or clicking.",
    "hint": "Low-priority updates."
  },
  {
    "id": 245,
    "difficulty": "hard",
    "category": "state",
    "question": "What is 'Lifting State Up'?",
    "options": [
      "Moving state to the closest common parent of components that need it",
      "Moving state to Redux",
      "Passing state to a child",
      "Deleting state"
    ],
    "answer": 0,
    "explanation": "Sharing state is achieved by moving it to the parent and passing it back down as props.",
    "hint": "Common ancestor."
  },
  {
    "id": 246,
    "difficulty": "medium",
    "category": "accessibility",
    "question": "Which hook should you use for generating unique IDs for aria-attributes?",
    "options": [
      "useId",
      "useRef",
      "useMemo",
      "useState"
    ],
    "answer": 0,
    "explanation": "useId generates stable, unique IDs that work correctly with Server Side Rendering.",
    "hint": "Unique ID hook."
  },
  {
    "id": 247,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "How do you test a component that depends on 'Redux'?",
    "options": [
      "Wrap the component in a '<Provider>' with a real or mocked store in the test render",
      "You can't test it",
      "Mock the 'useSelector' hook",
      "Test only the reducer"
    ],
    "answer": 0,
    "explanation": "Providing a store ensures the component has the data and dispatch capability it needs to function.",
    "hint": "Wrap in Provider."
  },
  {
    "id": 248,
    "difficulty": "medium",
    "category": "ecosystem",
    "question": "What is 'Emotion'?",
    "options": [
      "A way to handle user feedback",
      "A testing tool",
      "A state management library",
      "A popular CSS-in-JS library, similar to Styled Components"
    ],
    "answer": 3,
    "explanation": "Emotion provides flexible styling via the 'css' prop or styled components.",
    "hint": "CSS-in-JS library."
  },
  {
    "id": 249,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is 'Memoization' in JavaScript?",
    "options": [
      "Deleting variables",
      "Writing code from memory",
      "Using more memory",
      "Caching the result of an expensive function call and returning the cached result when the same inputs occur again"
    ],
    "answer": 3,
    "explanation": "Memoization is the core principle behind useMemo and React.memo.",
    "hint": "Caching results."
  },
  {
    "id": 250,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is the 'Single Source of Truth' principle?",
    "options": [
      "The lead developer's opinion",
      "The practice of having one place where data lives (like state or a store), ensuring consistency across the app",
      "Using only one database",
      "Only having one JS file"
    ],
    "answer": 1,
    "explanation": "By centralizing state, you avoid bugs where different parts of the UI show different data for the same item.",
    "hint": "Centralized data."
  },
  {
    "id": 251,
    "difficulty": "medium",
    "category": "state",
    "question": "What problem does the Context API solve?",
    "options": [
      "Bundling modules",
      "CSS scoping",
      "Server rendering",
      "Passing data through the component tree without prop drilling at every level"
    ],
    "answer": 3,
    "explanation": "Context API: createContext, Provider and useContext. Frequent updates can rerender consumers, so split contexts."
  },
  {
    "id": 252,
    "difficulty": "hard",
    "category": "state",
    "question": "Why can a single large Context API value hurt performance?",
    "options": [
      "All consumers rerender when the value changes, so split contexts or memoize the value",
      "It disables hooks",
      "It blocks the network",
      "It forces SSR"
    ],
    "answer": 0,
    "explanation": "Context API consumers re-render on value change; use memoized values or selector libraries."
  },
  {
    "id": 253,
    "difficulty": "easy",
    "category": "styling",
    "question": "How does a responsive layout adapt to screen sizes?",
    "options": [
      "Using relative units, flexible grids and media or container queries",
      "Fixed pixel widths only",
      "Separate sites per device only",
      "Disabling zoom"
    ],
    "answer": 0,
    "explanation": "A responsive design uses CSS techniques such as flexbox, grid and breakpoints."
  },
  {
    "id": 254,
    "difficulty": "medium",
    "category": "hooks",
    "question": "What are Custom Hooks?",
    "options": [
      "Class components",
      "Redux reducers",
      "Webpack loaders",
      "Functions starting with use that compose built-in hooks to reuse stateful logic"
    ],
    "answer": 3,
    "explanation": "Custom Hooks: share logic, not state, across components; they must follow the rules of hooks."
  },
  {
    "id": 255,
    "difficulty": "hard",
    "category": "hooks",
    "question": "Do two components calling the same Custom Hooks function share state?",
    "options": [
      "Only with Redux",
      "Yes, state is global",
      "Only in class components",
      "No, each call gets its own isolated state"
    ],
    "answer": 3,
    "explanation": "Custom Hooks reuse logic; each invocation has independent state unless it reads shared context or stores."
  },
  {
    "id": 256,
    "difficulty": "medium",
    "category": "optimization",
    "question": "Which React rendering choices reduce cost on large lists?",
    "options": [
      "Disabling keys",
      "Virtualization, stable keys and memoization to cut cost of unnecessary renders",
      "Using index keys always",
      "Rendering all rows"
    ],
    "answer": 1,
    "explanation": "Reducing render cost involves windowing, React.memo and avoiding new object props each render."
  },
  {
    "id": 257,
    "difficulty": "hard",
    "category": "optimization",
    "question": "How can a team reduce cost of client JavaScript in a data-heavy page?",
    "options": [
      "Disable code splitting",
      "Inline all assets",
      "Use Server Components to render on the server and ship less client code",
      "Add more client libraries"
    ],
    "answer": 2,
    "explanation": "Server Components: run on the server, can access data directly, and add no client bundle cost."
  },
  {
    "id": 258,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is a limitation of Server Components?",
    "options": [
      "They require class components",
      "They cannot fetch data",
      "They cannot use state, effects or browser-only APIs; interactivity needs Client Components",
      "They cannot render HTML"
    ],
    "answer": 2,
    "explanation": "Server Components render ahead of time; mark interactive parts with 'use client'."
  },
  {
    "id": 259,
    "difficulty": "medium",
    "category": "optimization",
    "question": "What does Suspense provide?",
    "options": [
      "A declarative fallback UI while children wait on lazy components or data",
      "Immediate error recovery",
      "State persistence",
      "Routing"
    ],
    "answer": 0,
    "explanation": "Suspense: shows fallback until content is ready; pairs with lazy and data frameworks."
  },
  {
    "id": 260,
    "difficulty": "hard",
    "category": "optimization",
    "question": "How can Suspense improve streaming SSR?",
    "options": [
      "It blocks the whole page",
      "It disables hydration",
      "Slow sections stream later while the rest of the page is shown immediately behind fallbacks",
      "It removes the server"
    ],
    "answer": 2,
    "explanation": "Suspense boundaries let the server send HTML progressively."
  },
  {
    "id": 261,
    "difficulty": "medium",
    "category": "state",
    "question": "Which library manages server state with caching, refetching and deduplication?",
    "options": [
      "React Query (TanStack Query)",
      "Prettier",
      "Redux Toolkit only",
      "Axios only"
    ],
    "answer": 0,
    "explanation": "React Query: handles stale-while-revalidate, retries and background refetching."
  },
  {
    "id": 262,
    "difficulty": "hard",
    "category": "state",
    "question": "Why use React Query instead of storing fetched data in Redux?",
    "options": [
      "It replaces JSX",
      "It speeds up CSS",
      "It bundles code",
      "It handles caching, invalidation and refetching of server state automatically"
    ],
    "answer": 3,
    "explanation": "React Query treats server data separately from UI state."
  },
  {
    "id": 263,
    "difficulty": "medium",
    "category": "state",
    "question": "What is Zustand?",
    "options": [
      "A test runner",
      "A bundler",
      "A small hook-based global state library with minimal boilerplate",
      "A CSS framework"
    ],
    "answer": 2,
    "explanation": "Zustand: create a store and select slices with hooks to avoid unnecessary renders."
  },
  {
    "id": 264,
    "difficulty": "hard",
    "category": "state",
    "question": "How does Zustand limit rerenders?",
    "options": [
      "Components subscribe to selected slices, so unrelated changes do not rerender them",
      "It needs Providers",
      "It uses class state",
      "It rerenders everything"
    ],
    "answer": 0,
    "explanation": "Zustand selectors give fine-grained subscriptions."
  }
];

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
// Covering: Virtual DOM, Hooks Deep Dive, Performance, Architecture, and Testing.
const hotsQuestions = [
    // 1. Core Concepts & Rendering (Virtual DOM, JSX, Props) - 15 indices
    0, 1, 2, 3, 5, 8, 12, 15, 20, 25, 
    30, 42, 45, 120, 250,

    // 2. Hooks Deep Dive (Effect, Memo, Callback, Ref) - 20 indices
    4, 6, 7, 9, 10, 11, 13, 14, 50, 55, 
    60, 65, 70, 75, 80, 85, 90, 110, 115, 133,

    // 3. Performance Optimization (Memoization, Lazy, Suspense) - 20 indices
    16, 17, 18, 19, 21, 22, 23, 24, 100, 105, 
    130, 135, 140, 145, 160, 170, 180, 240, 248, 249,

    // 4. Advanced Patterns & State Management (Context, Redux, RTK) - 15 indices
    26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 
    150, 155, 165, 200, 210,

    // 5. Ecosystem & Styling (Router, Styled Components, Emotion) - 15 indices
    37, 38, 39, 40, 41, 43, 44, 46, 47, 48, 
    220, 230, 245, 246, 247,

    // 6. Testing, Security & Troubleshooting - 15 indices
    49, 51, 52, 53, 54, 56, 57, 58, 59, 61, 
    185, 190, 195, 215, 225,

    // Top-up: replaced stale ids with hardest unlisted questions
    62
];
