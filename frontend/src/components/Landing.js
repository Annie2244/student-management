import { Link } from "react-router-dom";
import "./Landing.css";
import backgroundImage from "../assets/Landing-background.jpg";

function Landing() {
  return (
    <div
      className="landing-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <h1>
          Hey! Welcome, keep yourself organized and make every class count.
          Let's get started!
        </h1>

        <p>
          Education is the key to unlocking potential, manage your students and
          help them shine!
        </p>

        <div className="button-group">
          <Link to="/signup">
            <button className="landing-btn">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="landing-btn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;

