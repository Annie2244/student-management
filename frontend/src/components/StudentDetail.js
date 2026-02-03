// src/components/StudentDetail.js
import { useParams, Link } from "react-router-dom";

import { StudentService } from "../services/api";
import { useEffect, useState } from "react";

function StudentDetail() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const loadStudent = async () => {
      try {
        const response = await StudentService.get(id);
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };
    loadStudent();
  }, [id]);

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
        <p><strong>ID:</strong> {student.studentId}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Course:</strong> {student.courseName || "-"}</p>

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