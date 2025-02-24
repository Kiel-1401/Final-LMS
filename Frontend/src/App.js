import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProgHead from "./pages/ProgHead";
import ASubject from "./pages/ASubject";
import AInstructor from "./pages/AInstructor";
import Students from "./pages/AStudents";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ASubject" element={<ASubject />} />
      <Route path="/AInstructor" element={<AInstructor />} />
      <Route path="/Students" element={<Students />} />
      <Route path="/ProgHead" element={<ProgHead />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
}
