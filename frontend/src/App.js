import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import StudentDetail from "./components/StudentDetail";

import LecturerList from "./components/LecturerList";
import AddLecturer from "./components/AddLecturer";
import EditLecturer from "./components/EditLecturer";
import LecturerDetail from "./components/LecturerDetail";

import CourseList from "./components/CourseList";
import AddCourse from "./components/AddCourse";

function App() {
  // Courses state (needed for dropdowns)
  const [courses, setCourses] = useState([
    { id: "CS101", name: "Computer Science" },
    { id: "ST101", name: "Statistics" },
    { id: "BS101", name: "Business" },
    { id: "IT101", name: "Information Technology" },
  ]);

  // Students and lecturers state (if you want to keep local state)
  const [students, setStudents] = useState([]);
  const [lecturers, setLecturers] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        {/* Student routes */}
        <Route path="/students" element={<ProtectedRoute><StudentList students={students} setStudents={setStudents} coursesList={courses} /></ProtectedRoute>} />
        <Route path="/students/add" element={<ProtectedRoute><AddStudent students={students} setStudents={setStudents} coursesList={courses} /></ProtectedRoute>} />
        <Route path="/students/edit/:id" element={<ProtectedRoute><EditStudent students={students} setStudents={setStudents} coursesList={courses} /></ProtectedRoute>} />
        <Route path="/students/:id" element={<ProtectedRoute><StudentDetail students={students} /></ProtectedRoute>} />

        {/* Lecturer routes */}
        <Route path="/lecturers" element={<ProtectedRoute><LecturerList lecturers={lecturers} setLecturers={setLecturers} /></ProtectedRoute>} />
        <Route path="/lecturers/add" element={<ProtectedRoute><AddLecturer coursesList={courses} /></ProtectedRoute>} />
        <Route path="/lecturers/edit/:id" element={<ProtectedRoute><EditLecturer lecturers={lecturers} setLecturers={setLecturers} coursesList={courses} /></ProtectedRoute>} />
        <Route path="/lecturers/:id" element={<ProtectedRoute><LecturerDetail lecturers={lecturers} /></ProtectedRoute>} />

        {/* Course routes */}
        <Route path="/courses" element={<ProtectedRoute><CourseList /></ProtectedRoute>} />
        <Route path="/courses/add" element={<ProtectedRoute><AddCourse courses={courses} setCourses={setCourses} /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
