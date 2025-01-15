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
          {items.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={item.onClick}
              sx={{
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
                "&:focus": { backgroundColor: "rgba(0, 0, 0, 0.08)" }, // Focus styling
                borderRadius: 1, // Optional: Rounded corners for modern look
              }}
              aria-label={item.text} // Accessibility for screen readers
            >
              {item.icon && (
                <ListItemIcon
                  sx={{
                    minWidth: 40, // Adjust spacing for icons
                    color: "inherit", // Ensure icons inherit color
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              )}
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

Sidebar.defaultProps = {
  drawerWidth: 240, // Default drawer width
};

export default Sidebar;
