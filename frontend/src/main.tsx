import React from "react";
import ReactDOM from "react-dom/client";
import App from "./react/App";
import "./index.css";
import { socket } from "./sockets/sockets";

const clientsocket = socket;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
