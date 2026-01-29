// src/components/AddLecturer.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddLecturer({ lecturers, setLecturers, coursesList }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Checkbox handler for courses
  const handleCheckbox = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Incremental 3-digit ID logic
    const lastId = lecturers.length > 0 ? Math.max(...lecturers.map((l) => l.id)) : 99;
    const newId = lastId + 1; // Next 3-digit ID

    const newLecturer = {
      id: newId,
      name,
      age: Number(age),
      email,
      courses: selectedCourses,
      courseID: selectedCourses.map(
        (c) => coursesList.find((course) => course.name === c)?.id || ""
      ),
    };

    // Update lecturers state
    setLecturers([...lecturers, newLecturer]);

    // Navigate to lecturer list page
    navigate("/lecturers");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "'Segoe UI', sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Lecturer</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <div style={{ marginBottom: "10px" }}>
          <p>Courses:</p>
          {coursesList.map((course) => (
            <label key={course.id} style={{ display: "block", marginBottom: "5px" }}>
              <input
                type="checkbox"
                value={course.name}
                onChange={() => handleCheckbox(course.name)}
              />{" "}
              {course.name}
            </label>
          ))}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#38a169",
            color: "white",
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
