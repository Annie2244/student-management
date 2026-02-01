// src/components/AddCourse.js
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddCourse() {
  const [name, setName] = useState("");
  const [creditUnits, setCreditUnits] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/courses", { name, creditUnits });
      navigate("/courses");
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Credit Units:</label>
          <input value={creditUnits} onChange={(e) => setCreditUnits(e.target.value)} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddCourse;


