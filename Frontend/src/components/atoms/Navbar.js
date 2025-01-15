import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Navbar = ({ title, navItems, onMenuClick, logo }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Sidebar toggle button, logo, and title */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Sidebar Toggle Button */}
          <IconButton
            color="inherit"
            aria-label="Toggle sidebar"
            onClick={onMenuClick}
            edge="start"
            sx={{ marginRight: 2 }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* Logo */}
          {logo && (
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: 40,
                width: "auto",
                marginRight: 1,
              }}
            />
          )}

          {/* Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Navigation Menu */}
        {navItems && navItems.length > 0 && (
          <Box>
            <IconButton
              color="inherit"
              aria-label="Open navigation menu"
              aria-controls="nav-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
              id="nav-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                "aria-labelledby": "nav-menu-button",
              }}
            >
              {navItems.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleMenuClose();
                    item.onClick();
                  }}
                >
                  {item.text}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ),
  onMenuClick: PropTypes.func.isRequired,
  logo: PropTypes.string, // Optional logo prop
};

export default Navbar;
