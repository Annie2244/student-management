import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent"; 
import EditStudent from "./components/EditStudent";
import StudentDetail from "./components/StudentDetail";

import LecturerList from "./components/LecturerList";
import AddLecturer from "./components/AddLecturer";
import EditLecturer from "./components/EditLecturer";
import LecturerDetail from "./components/LecturerDetail";

import AddCourse from "./components/AddCourse";
import CourseList from "./components/CourseList";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // Lecturers state
  const [lecturers, setLecturers] = useState([
    {
      id: 125,
      name: "Dr. Alice",
      age: 45,
      email: "alice@uni.com",
      courses: ["Computer Science"],
      courseID: ["CS101"],
    },
    {
      id: 245,
      name: "Prof. Bob",
      age: 50,
      email: "bob@uni.com",
      courses: ["Business", "IT"],
      courseID: ["BS101", "IT101"],
    },
  ]);

  // Students state
  const [students, setStudents] = useState([ 
    { 
      id: 1, 
      name: "John Doe", 
      age: 20, 
      email: "jon@doe.com",
      courses: ["Computer Science", "Statistics"],
      courseID: ["CS101", "ST101"],
    },
    { 
      id: 2, 
      name: "Jane Smith", 
      age: 19, 
      email: "jane@smith.com",
      courses: ["Business", "IT"],
      courseID: ["BS101", "IT101"],
    },
  ]);

  // Courses state
  const [courses, setCourses] = useState([
    { id: "CS101", name: "Computer Science" },
    { id: "ST101", name: "Statistics" },
    { id: "BS101", name: "Business" },
    { id: "IT101", name: "Information Technology" },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        {/* General routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />

        {/* Student routes */}
        <Route 
          path="/students" 
          element={
            <ProtectedRoute>
              <StudentList 
                students={students} 
                setStudents={setStudents} 
                coursesList={courses} 
              />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/students/add" 
          element={
            <ProtectedRoute>
              <AddStudent 
                students={students} 
                setStudents={setStudents} 
                coursesList={courses} 
              />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/students/edit/:id" 
          element={
            <ProtectedRoute>
              <EditStudent 
                students={students} 
                setStudents={setStudents} 
                coursesList={courses} 
              />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/students/:id" 
          element={
            <ProtectedRoute>
              <StudentDetail students={students} />
            </ProtectedRoute>
          } 
        />

        {/* Lecturer routes */}
        <Route 
          path="/lecturers" 
          element={
            <ProtectedRoute>
              <LecturerList 
                lecturers={lecturers} 
                setLecturers={setLecturers} 
              />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lecturers/add" 
          element={
            <ProtectedRoute>
              <AddLecturer 
                lecturers={lecturers} 
                setLecturers={setLecturers} 
                coursesList={courses} 
              />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lecturers/edit/:id" 
          element={
            <ProtectedRoute>
              <EditLecturer 
                lecturers={lecturers} 
                setLecturers={setLecturers} 
                coursesList={courses} 
              />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lecturers/:id" 
          element={
            <ProtectedRoute>
              <LecturerDetail lecturers={lecturers} />
            </ProtectedRoute>
          } 
        />

        {/* Course routes */}
        <Route 
          path="/courses" 
          element={
            <ProtectedRoute>
              <CourseList courses={courses} />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/courses/add" 
          element={
            <ProtectedRoute>
              <AddCourse courses={courses} setCourses={setCourses} />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

