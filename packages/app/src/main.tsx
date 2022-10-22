import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

const App = lazy(() => import("./App"));

createRoot(document.getElementById("root") as HTMLElement).render(
  <Suspense fallback="Loading...">
    <App />
  </Suspense>
);
