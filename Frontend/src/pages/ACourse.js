import React from "react";
import { Typography, Box, Link } from "@mui/material";
import {
  Subject,
  SupervisorAccount,
  School,
  Diversity1,
  Groups2,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "../components/atoms/Navbar";
import Sidebar from "../components/atoms/Sidebar";

const ACourse = () => {
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  const handleMenuClick = () => {
    alert("Menu icon clicked!");
  };

  const handleLogout = () => {
    // Clear any stored data (e.g., JWT token, user info, etc.)
    localStorage.removeItem("authToken"); // If you're using localStorage to store tokens
    sessionStorage.removeItem("authToken"); // If you're using sessionStorage

    // Redirect the user to the login page
    navigate("/"); // Use navigate to go to the login page
  };

  const navItems = [
    { text: "Home", onClick: () => alert("Home clicked!") },
    { text: "Profile", onClick: () => alert("Profile clicked!") },
    { text: "Settings", onClick: () => alert("Settings clicked!") },
    { text: "Logout", onClick: handleLogout }, // Connect the logout button
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
      text: "Courses",
      icon: <School />,
      onClick: () => navigate("/ACourse"),
    },
    {
      text: "Instructor",
      icon: <Diversity1 />,
      onClick: () => navigate("/AInstrctor"),
    },
    {
      text: "Students",
      icon: <Groups2 />,
      onClick: () => navigate("/Students"),
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar
        title="My App"
        navItems={navItems}
        onMenuClick={handleMenuClick}
      />
      <Sidebar
        items={sidebarItems.map((item) => ({
          ...item,
          Link: item.Link ? (
            <Link
              component={RouterLink}
              to={item.Link}
              sx={{ display: "flex", alignItems: "center" }}
            >
              {item.icon}
              {item.text}
            </Link>
          ) : (
            <Box
              sx={{ display: "flex", alignItems: "center" }}
              onClick={item.onClick}
            >
              {item.icon}
              {item.text}
            </Box>
          ),
        }))}
        drawerWidth={240}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: "-160px", // Matches Sidebar width
          marginTop: "64px", // Matches Navbar height
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Welcome to the Course Dashboard
        </Typography>
      </Box>
    </Box>
  );
};

export default ACourse;
