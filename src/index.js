import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './i18n'; 
import App from "./App";
import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
    </BrowserRouter>
  </React.StrictMode>
);
