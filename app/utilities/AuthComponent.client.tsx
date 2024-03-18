import { CorbadoAuth, useCorbado } from "@corbado/react";
import { useNavigate } from "@remix-run/react";


export default function AuthComponent() {
  const { isAuthenticated, loading } = useCorbado();
  const navigate = useNavigate();

  if (isAuthenticated && !loading) {
    navigate("/profile");
  }

  function onLoggedIn() {
    navigate("/profile");
  } 

  return <CorbadoAuth onLoggedIn={onLoggedIn} />;
}
