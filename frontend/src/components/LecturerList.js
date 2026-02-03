import { TeacherService } from "../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LecturerList() {
  const [lecturers, setLecturers] = useState([]);

  useEffect(() => {
    const fetchLecturers = async () => {
      try {
        const response = await TeacherService.getAll();
        setLecturers(response.data);
      } catch (error) {
        console.error("Error fetching lecturers:", error);
      }
    };
    fetchLecturers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await TeacherService.delete(id);
      fetchLecturers();
    } catch (error) {
      console.error("Error deleting lecturer:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lecturers</h2>

      <Link to="/lecturers/add">
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Add Lecturer
        </button>
      </Link>

      <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lecturers.map((lec) => (
            <tr key={lec.id}>
              <td>{lec.id}</td>
              <td>{lec.name}</td>
              <td>{lec.email}</td>
              <td>{lec.courses ? lec.courses.map(c => c.name).join(", ") : "-"}</td>
              <td>
                <Link to={`/lecturers/edit/${lec.id}`}>
                  <button
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "3px",
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(lec.id)}
                  style={{
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LecturerList;
