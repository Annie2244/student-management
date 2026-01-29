import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCourse({ courses, setCourses }) {
  const navigate = useNavigate();

  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [creditUnits, setCreditUnits] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCourse = {
      id: courseCode,
      name: courseName,
      creditUnits,
    };

    setCourses([...courses, newCourse]); // update state
    navigate("/courses"); // redirect to list
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Course</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}
      >
        <input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Course Code"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Credit Units"
          value={creditUnits}
          onChange={(e) => setCreditUnits(e.target.value)}
          required
        />
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourse;
