import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditStudent({ students, setStudents }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find((s) => s.id === Number(id));

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [coursesInput, setCoursesInput] = useState("");

  useEffect(() => {
    if (student) {
      setName(student.name);
      setAge(student.age);
      setEmail(student.email);
      setCoursesInput(student.courses.join(", "));
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStudents = students.map((s) =>
      s.id === student.id
        ? {
            ...s,
            name,
            age: Number(age),
            email,
            courses: coursesInput
              .split(",")
              .map((c) => c.trim())
              .filter(Boolean),
          }
        : s
    );

    setStudents(updatedStudents);
    navigate("/students");
  };

  if (!student) return <p>Student not found</p>;

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
          value={coursesInput}
          onChange={(e) => setCoursesInput(e.target.value)}
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditStudent;
