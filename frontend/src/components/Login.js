import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthService } from "../services/api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.trim() && password.trim()) {
      try {
        const response = await AuthService.login({
          username: username.trim(),
          password: password.trim(),
        });

        if (response.status === 200) {
          // Save authentication flag and user info
          localStorage.setItem("isAuthenticated", "true");
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
          }
          if (response.data.username) {
            localStorage.setItem("username", response.data.username);
          }

          // Redirect to dashboard
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Login failed", error);
        if (error.response?.status === 401) {
          alert("Invalid username or password.");
        } else if (error.response?.status === 404) {
          alert("User not found.");
        } else {
          alert(error.response?.data?.message || "Login failed. Please try again.");
        }
      }
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div className="container" style={{ padding: "40px", textAlign: "center" }}>
      <h2>Login</h2>
      <form className="vertical-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;