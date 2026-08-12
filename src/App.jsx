import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Teachers from "./pages/Teachers";

import { initialStudents } from "./data/studentsData";

function App() {
  const [students, setStudents] = useState(initialStudents);

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={<Dashboard students={students} />}
      />

      <Route
        path="/students"
        element={
          <Students
            students={students}
            setStudents={setStudents}
          />
        }
      />

      <Route
        path="/courses"
        element={<Courses />}
      />

      <Route
        path="/teachers"
        element={<Teachers />}
      />
    </Routes>
  );
}
export default App;