import { PasskeyList, useCorbado, useCorbadoSession } from "@corbado/react";
import { useNavigate } from "@remix-run/react";

export default function Profile() {
  const navigate = useNavigate();
  const { loading, isAuthenticated, user, logout } = useCorbado();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    navigate("/");
  }

  return (
    <div style={{maxWidth: "600px", margin:"0 auto"}}>
      <h1>Profile</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <button onClick={logout}>Logout</button>
      <PasskeyList />
    </div>
  );
}
