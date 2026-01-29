import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) setUsername(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Welcome Card */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          color: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>
          Welcome {username ? username : "to Student Management"}
        </h1>
        <p>Manage your students, lecturers, and courses efficiently.</p>
      </div>

      {/* Action Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <Link to="/students">
          <button style={buttonStyle("#667eea", "#5a67d8")}>View Students</button>
        </Link>

        <Link to="/students/add">
          <button style={buttonStyle("#764ba2", "#6b3fa0")}>Add Student</button>
        </Link>

        <Link to="/lecturers">
          <button style={buttonStyle("#38a169", "#2f855a")}>View Lecturers</button>
        </Link>

        <Link to="/lecturers/add">
          <button style={buttonStyle("#e53e3e", "#c53030")}>Add Lecturer</button>
        </Link>

        {/* Courses buttons */}
        <Link to="/courses">
          <button style={buttonStyle("#319795", "#2c7a7b")}>View Courses</button>
        </Link>

        <Link to="/courses/add">
          <button style={buttonStyle("#805ad5", "#6b46c1")}>Add Course</button>
        </Link>
      </div>

      {/* Logout Button */}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={handleLogout}
          style={{
            padding: "12px 24px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#e53e3e",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#c53030")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#e53e3e")}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

// Helper function for button styles
function buttonStyle(baseColor, hoverColor) {
  return {
    padding: "15px 25px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: baseColor,
    color: "white",
    cursor: "pointer",
    boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
  };
}

export default Dashboard;

