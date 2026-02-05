import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password
    };

    // save user in localStorage
    localStorage.setItem("user", JSON.stringify(newUser));

    // go to login
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sign Up</h2>

      <form onSubmit={handleSignup}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
