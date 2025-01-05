import React from "react";
import { Typography, Box } from "@mui/material";
import Sidebar from "../atoms/Sidebar";
import {
  Subject,
  SupervisorAccount,
  School,
  Diversity1,
  Groups2,
} from "@mui/icons-material";
import Navbar from "../atoms/Navbar";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const AdminDashboard = () => {
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
      onClick: () => alert("Subject clicked"),
    },
    {
      text: "Program Head",
      icon: <SupervisorAccount />,
      onClick: () => alert("Program Head clicked"),
    },
    {
      text: "Courses",
      icon: <School />,
      onClick: () => alert("Courses clicked"),
    },
    {
      text: "Instructor",
      icon: <Diversity1 />,
      onClick: () => alert("Instructor clicked"),
    },
    {
      text: "Students",
      icon: <Groups2 />,
      onClick: () => alert("Students clicked"),
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar
        title="My App"
        navItems={navItems}
        onMenuClick={handleMenuClick}
      />
      <Sidebar items={sidebarItems} drawerWidth={240} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: "240px", // Matches Sidebar width
          marginTop: "64px", // Matches Navbar height
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Welcome to the Admin Dashboard!
        </Typography>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
