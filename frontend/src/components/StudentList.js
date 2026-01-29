// src/components/StudentList.js
import { Link } from "react-router-dom";

function StudentList({ students, setStudents }) {
  // Delete student function
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirmDelete) {
      setStudents(students.filter((student) => student.id !== id));
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "'Segoe UI', sans-serif" }}>
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Student List</h2>

      {/* Add Student Button */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <Link to="/students/add">
          <button
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#38a169",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            + Add Student
          </button>
        </Link>
      </div>

      {/* Student Table */}
      <div
        style={{
          overflowX: "auto",
          borderRadius: "12px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#667eea", color: "white" }}>
            <tr>
              <th style={{ padding: "12px" }}>ID</th>
              <th style={{ padding: "12px" }}>Name</th>
              <th style={{ padding: "12px" }}>Email</th>
              <th style={{ padding: "12px" }}>Age</th>
              <th style={{ padding: "12px" }}>Courses</th>
              <th style={{ padding: "12px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ padding: "20px", textAlign: "center" }}>
                  No students added yet.
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <tr
                  key={student.id}
                  style={{ textAlign: "center", borderBottom: "1px solid #ddd" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f1f1f1")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                >
                  <td style={{ padding: "12px" }}>{student.id}</td>
                  <td style={{ padding: "12px" }}>{student.name}</td>
                  <td style={{ padding: "12px" }}>{student.email}</td>
                  <td style={{ padding: "12px" }}>{student.age}</td>
                  <td style={{ padding: "12px" }}>
                    {student.courses ? student.courses.join(", ") : "-"}
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    {/* NEW View Button */}
                    <Link to={`/students/${student.id}`}>
                      <button
                        style={{
                          padding: "6px 12px",
                          borderRadius: "6px",
                          border: "none",
                          backgroundColor: "#3182ce", // blue for view
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        View
                      </button>
                    </Link>

                    <Link to={`/students/edit/${student.id}`}>
                      <button
                        style={{
                          padding: "6px 12px",
                          borderRadius: "6px",
                          border: "none",
                          backgroundColor: "#764ba2",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        Edit
                      </button>
                    </Link>

                    <button
                      style={{
                        padding: "6px 12px",
                        borderRadius: "6px",
                        border: "none",
                        backgroundColor: "#e53e3e",
                        color: "white",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
