import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";

const App = lazy(async () => await import("./App"));

createRoot(document.getElementById("root") as HTMLElement).render(
  <Suspense fallback="Loading...">
    <App />
  </Suspense>
);
