import React, { useState } from "react";
import { Typography, Box, useMediaQuery, Grid } from "@mui/material";
import {
  Subject,
  SupervisorAccount,
  Diversity1,
  Groups2,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "../img/sicclogo.png";
import Navbar from "../components/atoms/Navbar";
import Sidebar from "../components/atoms/Sidebar";
import CardBase from "../components/atoms/Card";

const ProgHead = () => {
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

  const programHeads = [
    { id: 1, name: "Dr. John Doe", department: "Computer Science" },
    { id: 2, name: "Ms. Jane Smith", department: "Mathematics" },
    { id: 3, name: "Mr. Alex Johnson", department: "Physics" },
    { id: 4, name: "Dr. Emily Davis", department: "Chemistry" },
  ];

  const handleCardClick = (id) => {
    alert(`Program Head ID: ${id}`);
    // Or navigate to a detailed page
    // navigate(`/program-heads/${id}`);
  };

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
          Program Heads:
        </Typography>

        <Grid container spacing={2}>
          {programHeads.map((head) => (
            <Grid item xs={12} sm={6} md={4} key={head.id}>
              <CardBase
                title={head.name}
                description={`Department: ${head.department}`}
                onClick={() => handleCardClick(head.id)}
                sx={{ backgroundColor: "#f5f5f5" }}
              >
                <Typography variant="body2" color="text.secondary">
                  Click to view more details about {head.name}.
                </Typography>
              </CardBase>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProgHead;
