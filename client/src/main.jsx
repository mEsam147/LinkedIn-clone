import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);