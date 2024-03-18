import ProfileComponent from "~/utilities/ProfileComponent.client";

export function clientLoader() {
  return null;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}

export default function Profile() {
  return <ProfileComponent />;
}