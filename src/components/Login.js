// src/components/Login.js
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() && password.trim()) {
      // Save authentication flag
      localStorage.setItem("isAuthenticated", "true");

      // Save username for personalized greeting
      localStorage.setItem("username", username);

      // Redirect to dashboard
      navigate("/dashboard");
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