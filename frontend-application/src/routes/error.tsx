import { useRouteError } from "react-router-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const error: any = useRouteError();
  console.error(error);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div id="error-page">
      <Player
        autoplay
        loop
        src="https://lottie.host/18f277ea-db66-4d03-bd1f-c51f84f24896/v9rQn8X0R8.json"
        style={{ height: "75%", width: "75%" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
      <Button
        onClick={handleClick}
        className="h-16"
        component="label"
        variant="contained"
        sx={{
          borderRadius: 35,
          backgroundColor: "#8c8c8c",
          padding: "18px 36px",
          fontSize: "18px",
        }}
        fullWidth
      >
        Oops! Page not found! Go back to homepage!
      </Button>
    </div>
  );
};

export default Error;
