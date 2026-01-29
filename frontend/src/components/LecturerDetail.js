// src/components/LecturerDetail.js
import { useParams, Link } from "react-router-dom";

function LecturerDetail({ lecturers }) {
  const { id } = useParams();
  const lecturer = lecturers.find((l) => l.id === Number(id));

  if (!lecturer) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Lecturer not found</h2>
        <Link to="/lecturers">
          <button style={{ padding: "10px 20px", marginTop: "20px" }}>
            Back to Lecturer List
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", fontFamily: "'Segoe UI', sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Lecturer Details
      </h2>
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          background: "#f9f9f9",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <p><strong>ID:</strong> {lecturer.id}</p>
        <p><strong>Name:</strong> {lecturer.name}</p>
        <p><strong>Email:</strong> {lecturer.email}</p>
        <p><strong>Age:</strong> {lecturer.age}</p>
        <p><strong>Courses:</strong> {lecturer.courses?.join(", ") || "-"}</p>

        <Link to="/lecturers">
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#38a169",
              color: "white",
              cursor: "pointer",
            }}
          >
            Back to Lecturer List
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LecturerDetail;