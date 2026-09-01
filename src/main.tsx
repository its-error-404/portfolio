import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/utilities.css";
import "./styles/components.css";
import "./styles/sections.css";

const container = document.getElementById("root");
if (!container) throw new Error("Root element #root not found");

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Hi.
if (!import.meta.env.DEV) {
  console.log(
    "%cKarthikeyan A%c — frontend engineer\nkarthi.vmpak@gmail.com",
    "font:600 13px/1.5 ui-sans-serif,system-ui;color:#6E7BFF",
    "font:400 12px/1.5 ui-monospace,monospace;color:#8a8a94",
  );
}
