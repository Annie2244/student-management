import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent({ students, setStudents, coursesList }) {
  const navigate = useNavigate();

  // Form state
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Handle checkbox changes
  const handleCourseChange = (e) => {
    const courseId = e.target.value;
    if (e.target.checked) {
      setSelectedCourses([...selectedCourses, courseId]); // Add
    } else {
      setSelectedCourses(selectedCourses.filter((id) => id !== courseId)); // Remove
    }
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !email) {
      alert("Please fill in all fields");
      return;
    }

    const newStudent = {
      id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
      name,
      age: Number(age),
      email,
      courses: selectedCourses.map(
        (cid) => coursesList.find((c) => c.id === cid)?.name || cid
      ),
      courseID: selectedCourses,
    };

    setStudents([...students, newStudent]);
    navigate("/students"); // go back to student list
  };

  return (
    <div style={{ padding: "40px", fontFamily: "'Segoe UI', sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Student</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Courses:</label>
          {coursesList.map((course) => (
            <label key={course.id} style={{ display: "block", marginBottom: "5px" }}>
              <input
                type="checkbox"
                value={course.id}
                checked={selectedCourses.includes(course.id)}
                onChange={handleCourseChange}
              />{" "}
              {course.name} ({course.id})
            </label>
          ))}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#38a169",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
