import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { CorbadoProvider } from "@corbado/react";


startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <CorbadoProvider projectId={import.meta.env.VITE_PUBLIC_CORBADO_PROJECT_ID} darkMode="off">
        <RemixBrowser />
      </CorbadoProvider>
    </StrictMode>
  );
});
