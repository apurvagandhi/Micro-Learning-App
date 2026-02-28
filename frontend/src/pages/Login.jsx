import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { role } = useParams();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    login("demo@email.com", role);

    if (role === "user") navigate("/dashboard/user");
    if (role === "contributor") navigate("/dashboard/contributor");
    if (role === "admin") navigate("/dashboard/admin");
  };

  return (
    <div className="login-container">
      <h2>{role.toUpperCase()} Login</h2>

      <form onSubmit={handleLogin}>
          <h2>
            Email
          </h2>
        <input type="email" placeholder="Email" required />
        <input type="password" required />
        <button type="submit">Login</button>
      </form>

      {/* Only show Create Account for user + contributor */}
      {role !== "admin" && (
        <p className="create-account">Create an account</p>
      )}
    </div>
  );
}