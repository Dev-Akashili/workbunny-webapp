import React from "react";
import ReactDOM from "react-dom/client";
import { CSSReset, ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./pages/error/ErrorFallback";
import { AuthProvider } from "./context/Auth";
import { SidebarProvider } from "./context/Sidebar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <CSSReset />
          <ErrorBoundary fallback={<ErrorFallback />}>
            <AuthProvider>
              <SidebarProvider>
                <Root />
              </SidebarProvider>
            </AuthProvider>
          </ErrorBoundary>
        </ColorModeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
