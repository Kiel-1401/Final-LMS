import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Alert,
  Pagination,
} from "@mui/material";
import {
  Subject,
  SupervisorAccount,
  Diversity1,
  Groups2,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/atoms/Navbar";
import Sidebar from "../components/atoms/Sidebar";
import logo from "../img/sicclogo.png"; // Import the logo
import useSubjects from "../components/hooks/useSubject";

const ASubject = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(
    () => JSON.parse(localStorage.getItem("sidebarOpen")) || true
  );

  const [currentPage, setCurrentPage] = useState(1); // State for the current page
  const subjectsPerPage = 5; // Number of subjects per page

  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(sidebarOpen));
  }, [sidebarOpen]);

  const { subjects, loading, error } = useSubjects(); // Updated hook

  const handleSubjectClick = (subject) => {
    alert(`Navigating to details for ${subject.description}`);
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

  // Pagination logic
  const indexOfLastSubject = currentPage * subjectsPerPage;
  const indexOfFirstSubject = indexOfLastSubject - subjectsPerPage;
  const currentSubjects = subjects.slice(indexOfFirstSubject, indexOfLastSubject);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box
    sx={{
      display: "flex",
      height: "100vh",
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
          drawerWidth={240}
          onClose={() => setSidebarOpen(false)}
        />
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: "64px",
          marginLeft: sidebarOpen ? "40px" : 0,
          overflowY: "auto",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Available Subjects:
        </Typography>

        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            Error fetching subjects: {error}
          </Alert>
        )}

        {!loading && !error && (
          <>
            <List>
              {currentSubjects.map((subject) => (
                <ListItem
                  key={subject.id}
                  button
                  onClick={() => handleSubjectClick(subject)}
                  sx={{ borderBottom: "1px solid #ddd" }}
                >
                  <ListItemIcon>
                    <Subject />
                  </ListItemIcon>
                  <ListItemText
                    primary={subject.description}
                    secondary={`Code: ${subject.code}`}
                  />
                </ListItem>
              ))}
            </List>

            {/* Pagination */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Pagination
                count={Math.ceil(subjects.length / subjectsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ASubject;
