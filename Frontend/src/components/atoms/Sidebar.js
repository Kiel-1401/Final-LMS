import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";

const Sidebar = ({ items, drawerWidth = 240 }) => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          top: "64px", // Adjusts for the fixed Navbar height
        },
      }}
    >
      <Box sx={{ padding: 2 }}>
        <List>
          {items.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={item.onClick}
              sx={{
                "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
              }}
            >
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.node,
      onClick: PropTypes.func,
    })
  ).isRequired,
  drawerWidth: PropTypes.number,
};

export default Sidebar;
