// src/components/LecturerList.js
import { Link } from "react-router-dom";

function LecturerList({ lecturers, setLecturers }) {
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this lecturer?")) {
      setLecturers(lecturers.filter((lec) => lec.id !== id));
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Add Lecturer Button */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link to="/lecturers/add">
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
            + Add Lecturer
          </button>
        </Link>
      </div>

      {/* Lecturer Table */}
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
              <th style={{ padding: "12px" }}>Age</th>
              <th style={{ padding: "12px" }}>Email</th>
              <th style={{ padding: "12px" }}>Courses</th>
              <th style={{ padding: "12px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {lecturers.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ padding: "20px", textAlign: "center" }}>
                  No lecturers added yet.
                </td>
              </tr>
            ) : (
              lecturers.map((lec) => (
                <tr
                  key={lec.id}
                  style={{ textAlign: "center", borderBottom: "1px solid #ddd" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f1f1f1")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                >
                  <td style={{ padding: "12px" }}>{lec.id}</td>
                  <td style={{ padding: "12px" }}>{lec.name}</td>
                  <td style={{ padding: "12px" }}>{lec.age}</td>
                  <td style={{ padding: "12px" }}>{lec.email}</td>
                  <td style={{ padding: "12px" }}>
                    {lec.courses?.join(", ") || "-"}
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
                    <Link to={`/lecturers/${lec.id}`}>
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

                    <Link to={`/lecturers/edit/${lec.id}`}>
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
                      onClick={() => handleDelete(lec.id)}
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

export default LecturerList;

