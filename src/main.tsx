import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // <-- import this
import App from "./App.tsx";
import "./index.css";

// Use /AnjaSvr for production (GitHub Pages), / for local preview
const isProduction = import.meta.env.PROD;

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={isProduction ? "/homepage" : "/"}>
    <App />
  </BrowserRouter>
);