import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;

// Em produção o HTML já chega pré-renderizado (scripts/prerender.mjs); nesse
// caso hidratamos o markup existente em vez de descartá-lo e remontar tudo.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
