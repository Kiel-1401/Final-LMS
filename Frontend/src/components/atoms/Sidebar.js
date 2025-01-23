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

const Sidebar = ({ items = [], drawerWidth = 240 }) => {
  console.log("Sidebar items:", items); // Debug log

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
          {items.length > 0 ? (
            items.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={item.onClick}
                sx={{
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
                  "&:focus": { backgroundColor: "rgba(0, 0, 0, 0.08)" },
                  borderRadius: 1,
                }}
                aria-label={item.text}
              >
                {item.icon && (
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color: "inherit",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                )}
                <ListItemText primary={item.text} />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="No items available" />
            </ListItem>
          )}
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

Sidebar.defaultProps = {
  drawerWidth: 240, // Default drawer width
};

export default Sidebar;
