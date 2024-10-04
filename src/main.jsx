import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainRouter from "./router/MainRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TitleProvider from "./context/TitleProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TitleProvider>
      <MainRouter></MainRouter>
    </TitleProvider>
  </StrictMode>
);
