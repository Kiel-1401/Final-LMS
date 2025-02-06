import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo512 from "../img/sicclogo.png";
import backgroundImage from "../img/BackgroundSicc.jpg";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Slide from "@mui/material/Slide";
import axiosInstance from "../services/axiosInstance";

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [loginError, setLoginError] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      // Use axiosInstance instead of axios
      const response = await axiosInstance.post("/login", { email, password });

      // Check if response and response.data.token exist
      if (response && response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        console.log("Login successful:", response.data.token);
        navigate("/dashboard");
      } else {
        console.error("Login failed: Unexpected response format", response);
        setLoginError(true);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setLoginError(true);
    }
  };

  React.useEffect(() => {
    // Clear the error after 3 seconds
    let timer;
    if (loginError) {
      timer = setTimeout(() => {
        setLoginError(false);
      }, 3000);
    }

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [loginError]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth={false}
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <CssBaseline />
        {loginError && (
          <Slide
            direction="down"
            in={loginError}
            mountOnEnter
            unmountOnExit
            timeout={300}
          >
            <Alert
              severity="error"
              sx={{
                mt: 2,
                position: "absolute",
                top: 16,
                left: 16,
                right: 16,
                zIndex: 10,
              }}
            >
              <AlertTitle>Error</AlertTitle>
              Invalid email or password.
            </Alert>
          </Slide>
        )}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: 2,
            borderRadius: 2,
            width: { xs: "90%", sm: "60%", md: "40%" },
            textAlign: "center",
          }}
        >
          <img
            src={logo512}
            alt="Logo"
            style={{ width: "80%", height: "auto", maxWidth: "200px" }}
          />
          <Typography
            component="h1"
            variant="h5"
            fontWeight="bold"
            color="primary.main"
          >
            SAMAL ISLAND CITY COLLEGE LMS
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, width: "100%" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ backgroundColor: "white" }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              sx={{ backgroundColor: "white" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
