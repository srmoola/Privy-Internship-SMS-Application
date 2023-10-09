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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Root() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img className="h-20 w-20" src="/favicon.png"></img>
          <Typography component="h1" variant="h5">
            Privy SMS Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
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
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs={12}>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
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
          src="/leftperson.json"
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
