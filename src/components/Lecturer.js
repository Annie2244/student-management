// src/components/Lecturers.js
import { useState } from "react";
import LecturerList from "./LecturerList";

function Lecturers() {
  // Dummy data for now
  const [lecturers, setLecturers] = useState([
    { id: 1, name: "James Bill", age: 40, email: "jbill@unih", courses: ["Math", "CS"] },
    { id: 2, name: "Juniour Matt", age: 35, email: "jmatt@unim", courses: ["Physics"] },
  ]);

  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "'Segoe UI', sans-serif", margin: "20px 0" }}>
        Lecturers Management
      </h1>
      <LecturerList lecturers={lecturers} setLecturers={setLecturers} />
    </div>
  );
}

export default Lecturers;
