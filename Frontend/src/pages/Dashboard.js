import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import StudentDashboard from "../components/templates/StudentDashboard";
import TeacherDashboard from "../components/templates/TeacherDashboard";
import axiosInstance from "../services/axiosInstance";
import ProgHeadDashboard from "../components/templates/ProgHeadDashboard";
import ASubject from "./ASubject";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get("/user");
        console.log(response.data); // Check the exact structure of the response
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Check if user data is loaded before rendering
  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
      <div>
        {user.role.name === "Admin" ? (
          <ASubject />
        ) : user.role.name === "Department Head" ? (
          <ProgHeadDashboard />
        ) : user.role.name === "Instructor" ? (
          <TeacherDashboard />
        ) : (
          <StudentDashboard />
        )}
      </div>
  );
};

export default Dashboard;
