import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { NavermapsProvider } from "react-naver-maps";

import App from "./App";

const queryClient = new QueryClient();
// const naverMapClientId = process.env.REACT_APP_NAVER_MAP_CLIENT_ID;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NavermapsProvider
        ncpClientId={process.env.REACT_APP_NAVER_MAP_CLIENT_ID!}
      >
        <App />
      </NavermapsProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
