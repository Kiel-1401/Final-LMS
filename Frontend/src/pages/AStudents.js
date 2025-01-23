import React, { useState } from "react";
import {
  Typography,
  Box,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  Subject,
  SupervisorAccount,
  Diversity1,
  Groups2,
  AccountCircle,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "../img/sicclogo.png"; // Import the logo
import Navbar from "../components/atoms/Navbar";
import Sidebar from "../components/atoms/Sidebar";

const Students = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [sidebarOpen, setSidebarOpen] = useState(!isSmallScreen); // Sidebar state

  const students = [
    {
      id: 1,
      name: "John Doe",
      course: "Computer Science",
    },
    {
      id: 2,
      name: "Jane Smith",
      course: "Business Administration",
    },
    {
      id: 3,
      name: "Emily Johnson",
      course: "Psychology",
    },
  ];

  const handleStudentClick = (student) => {
    alert(`Navigating to details for ${student.name}`);
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
          Meet Our Students:
        </Typography>
        <List>
          {students.map((student) => (
            <ListItem
              key={student.id}
              button
              onClick={() => handleStudentClick(student)}
              sx={{ borderBottom: "1px solid #ddd" }}
            >
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText
                primary={student.name}
                secondary={`Course: ${student.course}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Students;
