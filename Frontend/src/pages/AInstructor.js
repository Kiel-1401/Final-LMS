import React, { useState } from "react";
import {
  Typography,
  Box,
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

const AInstructor = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar state

  const instructors = [
    {
      id: 1,
      name: "Dr. Jose Santos",
      department: "History",
    },
    {
      id: 2,
      name: "Ms. Anna Cruz",
      department: "Psychology",
    },
    {
      id: 3,
      name: "Prof. Mark Reyes",
      department: "Mathematics",
    },
  ];

  const handleInstructorClick = (instructor) => {
    alert(`Navigating to details for ${instructor.name}`);
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
        flexDirection: "row",
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
          drawerWidth={240}
          onClose={() => setSidebarOpen(false)}
        />
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: sidebarOpen ? "240px" : 0,
          marginTop: "50px",
          overflowY: "auto",
          overflowX: "auto",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Meet Our Instructors:
        </Typography>
        <List>
          {instructors.map((instructor) => (
            <ListItem
              key={instructor.id}
              button
              onClick={() => handleInstructorClick(instructor)}
              sx={{ borderBottom: "1px solid #ddd" }}
            >
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText
                primary={instructor.name}
                secondary={`Department: ${instructor.department}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default AInstructor;
