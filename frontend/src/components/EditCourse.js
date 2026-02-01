// src/components/EditCourse.js
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditCourse() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [creditUnits, setCreditUnits] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/courses/${id}`);
      setName(response.data.name);
      setCreditUnits(response.data.creditUnits || "");
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/courses/${id}`, { name, creditUnits });
      navigate("/courses");
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Credit Units:</label>
          <input value={creditUnits} onChange={(e) => setCreditUnits(e.target.value)} required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditCourse;
