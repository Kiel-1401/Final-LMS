import React from "react";
import { Typography, Container, Box } from "@mui/material";

const TeacherDashboard = () => {
  return (
    <Container>
      <Box sx={{ paddingY: 4 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Welcome to the Teacher Dashboard!
        </Typography>
      </Box>
    </Container>
  );
};

export default TeacherDashboard;
