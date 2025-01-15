import React, { useState } from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import {
  Subject,
  SupervisorAccount,
  Diversity1,
  Groups2,
  Book,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ListComponent from "../atoms/List";
import logo from "../../img/sicclogo.png"; // Import the logo
import Navbar from "../atoms/Navbar";
import Sidebar from "../atoms/Sidebar";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [sidebarOpen, setSidebarOpen] = useState(!isSmallScreen); // Sidebar state

  const courses = [
    {
      id: 1,
      text: "Life and Works of Rizal",
      teacher: "Dr. Jose Santos",
      icon: <Book />,
    },
    {
      id: 2,
      text: "Understanding the Self",
      teacher: "Ms. Anna Cruz",
      icon: <Book />,
    },
    {
      id: 3,
      text: "Mathematics in the Modern World",
      teacher: "Prof. Mark Reyes",
      icon: <Book />,
    },
  ];

  const handleCourseClick = (course) => {
    alert(`Navigating to ${course.text}`);
  };

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen); // Toggle sidebar visibility
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    navigate("/");
  };

  const navItems = [
    { text: "Home", onClick: () => alert("Home clicked!") },
    { text: "Profile", onClick: () => alert("Profile clicked!") },
    { text: "Settings", onClick: () => alert("Settings clicked!") },
    { text: "Logout", onClick: handleLogout },
  ];

  const sidebarItems = [
    {
      text: "Subject",
      icon: <Subject />,
      onClick: () => navigate("/dashboard"),
    },
    {
      text: "Program Head",
      icon: <SupervisorAccount />,
      onClick: () => navigate("/ProgHead"),
    },

    {
      text: "Instructor",
      icon: <Diversity1 />,
      onClick: () => navigate("/AInstructor"),
    },
    {
      text: "Students",
      icon: <Groups2 />,
      onClick: () => navigate("/Students"),
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        flexDirection: isSmallScreen ? "column" : "row",
      }}
    >
      <Navbar
        title="SICC Learning Management System"
        navItems={navItems}
        onMenuClick={handleMenuClick}
        logo={logo}
      />

      {sidebarOpen && (
        <Sidebar
          items={sidebarItems}
          drawerWidth={isSmallScreen ? "100%" : 240}
          onClose={() => setSidebarOpen(false)}
        />
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: isSmallScreen || !sidebarOpen ? 0 : "240px",
          marginTop: isSmallScreen ? "64px" : "50px",
          overflowY: "auto",
          overflowX: "auto",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Available Courses:
        </Typography>
        <ListComponent items={courses} onItemClick={handleCourseClick} />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
