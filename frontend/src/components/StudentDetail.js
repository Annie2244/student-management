 // src/components/StudentDetail.js
import { useParams, Link } from "react-router-dom";

function StudentDetail({ students }) {
  const { id } = useParams();
  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Student not found</h2>
        <Link to="/students">
          <button style={{ padding: "10px 20px", marginTop: "20px" }}>
            Back to Student List
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", fontFamily: "'Segoe UI', sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Student Details
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
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Courses:</strong> {student.courses?.join(", ") || "-"}</p>

        <Link to="/students">
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#667eea",
              color: "white",
              cursor: "pointer",
            }}
          >
            Back to Student List
          </button>
        </Link>
      </div>
    </div>
  );
}

export default StudentDetail;