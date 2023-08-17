import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ClientContextProvider } from "./context/clientsContext";
import { ProjectContextProvider } from "./context/projectsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProjectContextProvider>
      <ClientContextProvider>
        <App />
      </ClientContextProvider>
    </ProjectContextProvider>
  </React.StrictMode>
);
