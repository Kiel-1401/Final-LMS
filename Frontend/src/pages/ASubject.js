import React, { useState, useEffect } from "react";
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
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/atoms/Navbar";
import Sidebar from "../components/atoms/Sidebar";
import logo from "../img/sicclogo.png"; // Import the logo

const ASubject = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [sidebarOpen, setSidebarOpen] = useState(
    () => JSON.parse(localStorage.getItem("sidebarOpen")) || !isSmallScreen
  );

  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(sidebarOpen));
  }, [sidebarOpen]);

  const subjects = [
    {
      id: 1,
      name: "Mathematics 101",
      description: "Basic concepts of mathematics.",
    },
    {
      id: 2,
      name: "History 101",
      description: "Introduction to world history.",
    },
    {
      id: 3,
      name: "Psychology 101",
      description: "Foundations of psychology.",
    },
  ];

  const handleSubjectClick = (subject) => {
    alert(`Navigating to details for ${subject.name}`);
  };

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
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

      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: isSmallScreen || !sidebarOpen ? 0 : "240px",
          marginTop: isSmallScreen ? "64px" : "50px",
          overflowY: "auto",
          overflowX: "auto",
        }}
      > */}
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Available Subjects:
        </Typography>
        <List>
          {subjects.map((subject) => (
            <ListItem
              key={subject.id}
              button
              onClick={() => handleSubjectClick(subject)}
              sx={{ borderBottom: "1px solid #ddd" }}
            >
              <ListItemIcon>
                <Subject />
              </ListItemIcon>
              <ListItemText
                primary={subject.name}
                secondary={subject.description}
              />
            </ListItem>
          ))}
        </List>
      {/* </Box> */}
    </Box>
  );
};

export default ASubject;
