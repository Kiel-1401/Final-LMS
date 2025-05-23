import React from "react";
import { Typography, Container, Box } from "@mui/material";

const ProgHeadDashboard = () => {
  return (
    <Container>
      <Box sx={{ paddingY: 4 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Welcome to the ProgHead Dashboard!
        </Typography>
      </Box>
    </Container>
  );
};

export default ProgHeadDashboard;
