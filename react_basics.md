# React.js Basics

## What is React?
- JavaScript library for building UIs
- Component-based architecture
- Virtual DOM for efficient updates
- Maintained by Meta

## Components
Functional components are preferred (modern React).
Class components still exist but less common.

## JSX
JavaScript XML - write HTML in JS files.
Gets compiled to React.createElement() calls.

## Props
Read-only data passed from parent to child.

## React Hooks

### useState
Adds state to functional components.
const [value, setValue] = useState(initialValue)

### useEffect
Side effects: data fetching, subscriptions, timers.
Runs after render. Return cleanup function.
Dependency array controls when it re-runs.

### useRef
Access DOM elements directly.
Persist value without re-render.

### useMemo / useCallback
Performance optimization.
Memoize expensive calculations or functions.

Rules of Hooks:
- Only call at top level (not inside loops/conditionals)
- Only call from React function components

## State Management

### Props Drilling Problem
Passing props through many intermediate components is messy.

### Context API
React.createContext() - creates context
Provider - wraps component tree, provides value
useContext() hook - consumes context value

### When to use Redux vs Context
Context: simple global state (theme, auth, language)
Redux: complex state, many actions, time-travel debugging

### React Query
Server state management
Caching, background refresh, loading/error states

## React Router v6

Single Page Application navigation without full page reload.
Install: npm install react-router-dom

Key components:
BrowserRouter: wraps entire app
Routes: container for Route elements
Route: maps path to component
Link / NavLink: navigation without reload

Hooks:
useNavigate: programmatic navigation
useParams: access URL parameters
useLocation: current location object
useSearchParams: query string params

Protected Routes:
Wrap protected routes with auth check component.
Redirect to login if not authenticated.
