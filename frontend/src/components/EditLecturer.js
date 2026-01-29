// src/components/EditLecturer.js
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditLecturer({ lecturers, setLecturers, coursesList }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const lecId = Number(id);
  const lecturer = lecturers.find((l) => l.id === lecId);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    if (lecturer) {
      setName(lecturer.name);
      setAge(lecturer.age);
      setEmail(lecturer.email);
      setSelectedCourses(lecturer.courses);
    }
  }, [lecturer]);

  const handleCheckbox = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedLecturer = {
      ...lecturer,
      name,
      age: Number(age),
      email,
      courses: selectedCourses,
      courseID: selectedCourses.map(c => coursesList.find(course => course.name === c)?.id || ""),
    };
    setLecturers(lecturers.map((l) => (l.id === lecId ? updatedLecturer : l)));
    navigate("/lecturers");
  };

  if (!lecturer) return <p>Lecturer not found!</p>;

  return (
    <div style={{ padding: "40px", fontFamily: "'Segoe UI', sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Edit Lecturer</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
        
        <div style={{ marginBottom: "10px" }}>
          <p>Courses:</p>
          {coursesList.map((course) => (
            <label key={course.id} style={{ display: "block", marginBottom: "5px" }}>
              <input 
                type="checkbox" 
                value={course.name} 
                checked={selectedCourses.includes(course.name)}
                onChange={() => handleCheckbox(course.name)} 
              />
              {" "}{course.name}
            </label>
          ))}
        </div>

        <button type="submit" style={{ padding: "10px 20px", borderRadius: "8px", border: "none", backgroundColor: "#764ba2", color: "white", cursor: "pointer" }}>
          Update Lecturer
        </button>
      </form>
    </div>
  );
}

export default EditLecturer;
