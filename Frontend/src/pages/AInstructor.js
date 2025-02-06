import React, { useState } from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Alert,
} from "@mui/material";
import {
  Subject,
  SupervisorAccount,
  Diversity1,
  Groups2,
  AccountCircle,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "../img/sicclogo.png";
import Navbar from "../components/atoms/Navbar";
import Sidebar from "../components/atoms/Sidebar";
import useLogin from "../components/hooks/useLogin";

const AInstructor = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { subLogin, loading, error } = useLogin(); // Fetch login data

  // Filter instructors with LoginID of 2
  const instructors = (subLogin || []).filter((user) => user.loginID === 2);

  const handleInstructorClick = (instructor) => {
    alert(`Navigating to details for ${instructor.full}`);
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
    <Box sx={{ display: "flex", height: "100vh", flexDirection: "row" }}>
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

        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : instructors.length === 0 ? (
          <Alert severity="info">No instructors found with LoginID 2.</Alert>
        ) : (
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
        )}
      </Box>
    </Box>
  );
};

export default AInstructor;
