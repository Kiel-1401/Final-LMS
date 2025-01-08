import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ACourse from "./pages/ACourse";
import ProgHead from "./pages/ProgHead";
import ASubject from "./pages/ASubject";
import AInstrctor from "./pages/AInstructor";
import Students from "./pages/AStudents";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ASubject" element={<ASubject />} />
      <Route path="/ACourse" element={<ACourse />} />
      <Route path="/AInstrctor" element={<AInstrctor />} />
      <Route path="/Students" element={<Students />} />
      <Route path="/ProgHead" element={<ProgHead />} />
    </Routes>
  );
}
