import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "../atoms/Navbar";
import Sidebar from "../atoms/Sidebar";
import logo from "../../img/sicclogo.png";
import {
  Diversity1,
  Groups2,
  Subject,
  SupervisorAccount,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AdminDashboard = ({ children }) => {
  // Accept children
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [sidebarOpen, setSidebarOpen] = useState(!isSmallScreen);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    navigate("/");
  };

  const navItems = [
    { text: "Home", onClick: () => navigate("/home") },
    { text: "Profile", onClick: () => navigate("/profile") },
    { text: "Settings", onClick: () => navigate("/settings") },
    { text: "Logout", onClick: handleLogout },
  ];

  const sidebarItems = [
    {
      text: "Subject",
      icon: <Subject />,
      onClick: () => navigate("/ASubject"),
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
      {/* Navbar */}
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

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: isSmallScreen || !sidebarOpen ? 0 : "240px",
          marginTop: isSmallScreen ? "64px" : "50px",
          overflow: "auto",
        }}
      >
        {children} {/* Render Profile content here */}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
