import type { MetaFunction } from "@remix-run/node";
import AuthComponent from "~/utilities/AuthComponent.client";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// this is needed so ssr of the AuthComponent is prevented
export function clientLoader() {
  return null;
}

// Provide a fallback for ssr as trying to render Corbado Components on the server doesn't work
export function HydrateFallback() {
  return <p>Loading...</p>;
}

export default function Index() {
  return (
    <div>
        <AuthComponent />
    </div>
  );
}
