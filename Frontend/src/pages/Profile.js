import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import useUser from "../components/hooks/useUser";
import AdminDashboard from "../components/templates/AdminDashboard";
import { Card, Typography } from "@mui/material";

// Function to get initials from the user's name
const getInitials = (name, limit = 2) => {
  if (!name) return "U"; // Default if name is missing
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .slice(0, limit);
};

const Profile = () => {
  const { subUser, loading, error } = useUser();
  const navigate = useNavigate(); // Use navigate instead of router

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!subUser) return <p>No user data available.</p>;

  const initials = getInitials(subUser.name || "User");

  return (
    <AdminDashboard>
      <Stack
        justifyContent="center"
        // alignItems="center"
        marginBottom={1}
        sx={{ height: "100vh", paddingBottom: 1 }} // Centers vertically
      >
        <Card
          sx={{
            width: 400, // Set card width
            height: 300, // Set card height
            // padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // boxShadow: 3,
            // borderRadius: 3,
          }}
        >
          <Avatar
            sx={{
              //   bgcolor: deepPurple[500],
              width: 100,
              height: 100,
              fontSize: 32,
            }}
          >
            {initials}
          </Avatar>
          <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
            {subUser.name}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 8, width: "70%" }}
            onClick={() => navigate("/change-password")}
          >
            Change Password
          </Button>
        </Card>
      </Stack>
    </AdminDashboard>
  );
};

export default Profile;
