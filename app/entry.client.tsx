/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

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
