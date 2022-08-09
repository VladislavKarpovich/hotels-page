import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { App } from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const theme = createTheme();
const queryClient = new QueryClient();

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
