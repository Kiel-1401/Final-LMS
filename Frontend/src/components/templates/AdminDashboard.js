import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "../atoms/Navbar";
import Sidebar from "../atoms/Sidebar";
import logo from "../../img/sicclogo.png";

const AdminDashboard = ({ title, navItems, sidebarItems, children }) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [sidebarOpen, setSidebarOpen] = useState(!isSmallScreen);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
        title={title}
        navItems={navItems}
        onMenuClick={handleMenuClick}
        logo={logo}
      />

      {/* Sidebar without motion */}
      <Box
        sx={{
          position: "fixed",
          top: isSmallScreen ? "64px" : 0,
          left: sidebarOpen ? 0 : isSmallScreen ? "-100%" : "-240px",
          height: "100%",
          width: isSmallScreen ? "100%" : "240px",
          background: "white",
          zIndex: 1200,
          overflow: "hidden",
          transition: "left 0.3s ease-in-out",
        }}
      >
        <Sidebar
          items={sidebarItems}
          drawerWidth={isSmallScreen ? "100%" : 240}
        />
      </Box>

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
        {children}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
