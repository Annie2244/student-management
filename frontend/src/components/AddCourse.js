import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCourse() {
  const [name, setName] = useState("");
  const [creditUnits, setCreditUnits] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // create new course object
    const newCourse = {
      id: Date.now(),
      name: name,
      creditUnits: creditUnits
    };

    // get existing courses from localStorage
    const existingCourses =
      JSON.parse(localStorage.getItem("courses")) || [];

    // add new course
    existingCourses.push(newCourse);

    // save back to localStorage
    localStorage.setItem("courses", JSON.stringify(existingCourses));

    // go back to courses page
    navigate("/courses");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Course</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Credit Units:</label>
          <br />
          <input
            type="number"
            value={creditUnits}
            onChange={(e) => setCreditUnits(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourse;



