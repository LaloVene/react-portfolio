import React from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App";
import "@mantine/core/styles.css";
import "./styles/global.css";
import "./theme/variables.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="light">
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
