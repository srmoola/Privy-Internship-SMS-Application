import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { Box } from "@mui/material";

const SignInLottie = () => {
  return (
    <>
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
    </>
  );
};

export default SignInLottie;
