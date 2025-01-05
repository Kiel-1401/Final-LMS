import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import Sidebar from "../atoms/Sidebar";
import Navbar from "../atoms/Navbar";

const NavSide = ({ title, navItems, sidebarItems }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar title={title} navItems={navItems} />
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
        {/* Main content can be rendered here */}
      </Box>
    </Box>
  );
};

NavSide.propTypes = {
  title: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
  sidebarItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.node,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default NavSide;
