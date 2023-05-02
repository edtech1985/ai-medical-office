import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/index";
import GlobalStyle from "./styles/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRouter />
  </React.StrictMode>
);
