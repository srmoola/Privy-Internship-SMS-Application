import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import Copyright from "../components/Copyright";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = String(data.get("email"))!;
    const phone = String(data.get("phone"))!;

    if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      alert("Invalid email!");
      return;
    }

    if (phone.length != 10) {
      alert("Invalid Phone Number!");
      return;
    }
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      firstName: data.get("firstname"),
      lastName: data.get("lastname"),
      phone: data.get("phone"),
    });

    const response = axios({
      method: "post",
      url: "http://localhost:3000/create-prod-user",
      data: {
        email: email,
        password: data.get("password"),
        firstName: data.get("firstname"),
        lastName: data.get("lastname"),
        phoneNumber: phone,
      },
    });

    response
      .then((res) => {
        if (res.data.Response === 400) {
          alert(res.data.Detail);
          return;
        }
        console.log(res.data);
        localStorage.setItem("USER_ID", res.data.USER_ID);
        navigate("/app");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: "15%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img className="h-20 w-20" src="/favicon.png"></img>
          <Typography component="h1" variant="h5">
            Privy SMS Sign Up
          </Typography>
          <Box
            component="form"
            id="myForm"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              id="firstname"
              label="First Name"
              name="firstname"
              autoComplete="given-name"
              autoFocus
            />
            <TextField
              sx={{ ml: 0.5 }}
              margin="normal"
              required
              id="lastname"
              label="Last Name"
              name="lastname"
              autoComplete="family-name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="tel-local"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs={12}>
                <Link href="/" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <Box
        sx={{
          zIndex: 10,
          position: "absolute",
          top: 0,
          left: 0,
          width: "35%",
          height: "100%",
          //   backgroundColor: "black",
        }}
      >
        <Player
          autoplay
          loop
          src="/leftpersonsignup.json"
          style={{ height: "100%", width: "100%", marginTop: "75%" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </Box>
      <Box
        sx={{
          zIndex: 10,
          position: "absolute",
          top: 0,
          right: 0,
          width: "35%",
          height: "100%",
          //   backgroundColor: "black",
        }}
      >
        <Player
          autoplay
          loop
          src="/cornerlottie.json"
          style={{ height: "100%", width: "100%", marginTop: "65%" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </Box>
    </ThemeProvider>
  );
}
