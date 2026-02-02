import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TeacherService, CourseService } from "../services/api";

function AddLecturer() {
  const navigate = useNavigate();

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const response = await CourseService.getAll();
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }

    try {
      // Send POST request to backend
      const teacherData = {
        name,
        email,
        courses: selectedCourseId ? [{ id: Number(selectedCourseId) }] : [],
      };

      await TeacherService.create(teacherData);

      alert("Lecturer added successfully!");
      // Navigate back to lecturer list
      navigate("/lecturers");
    } catch (error) {
      console.error("Error adding lecturer:", error);
      alert("Failed to add lecturer. Check console for details.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Lecturer</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
        <label style={{ marginBottom: "5px" }}>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter lecturer name"
          style={{ marginBottom: "15px", padding: "8px" }}
        />

        <label style={{ marginBottom: "5px" }}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          style={{ marginBottom: "15px", padding: "8px" }}
        />

        <label style={{ marginBottom: "5px" }}>Course:</label>
        <select
          value={selectedCourseId}
          onChange={(e) => setSelectedCourseId(e.target.value)}
          style={{ marginBottom: "20px", padding: "8px" }}
        >
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#667eea",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Add Lecturer
        </button>
      </form>
    </div>
  );
}

export default AddLecturer;
