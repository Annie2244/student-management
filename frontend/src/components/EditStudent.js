import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { StudentService } from "../services/api";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [courseName, setCourseName] = useState(""); // Simplified for now

  useEffect(() => {
    loadStudent();
  }, [id]);

  const loadStudent = async () => {
    try {
      const response = await StudentService.get(id);
      const s = response.data;
      setName(s.name);
      setAge(s.age);
      setEmail(s.email);
      setCourseName(s.courseName || "");
    } catch (error) {
      console.error("Error loading student", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentData = {
      name,
      age: Number(age),
      email,
      // Course update handling is complex without course ID, skipping for now or treating as read-only
    };

    try {
      await StudentService.update(id, studentData);
      navigate("/students");
    } catch (error) {
      console.error("Error updating student:", error);
      alert("Failed to update");
    }
  };

  if (!name) return <p>Loading...</p>;

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "auto" }}>
      <h2>Edit Student</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input value={name} onChange={(e) => setName(e.target.value)} required />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          value={courseName}
          disabled
          placeholder="Course cannot be changed here yet"
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditStudent;
