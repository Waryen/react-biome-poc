import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// biome-ignore lint/style/noNonNullAssertion: This element will always be present in the DOM
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
