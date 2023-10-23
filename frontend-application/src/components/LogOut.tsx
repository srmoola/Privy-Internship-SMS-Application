import { Toolbar, IconButton, Typography, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

type Props = {
  toggleDrawer: () => void;
  drawerOpen: boolean;
};

const LogOut = ({ toggleDrawer, drawerOpen }: Props) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("USER_ID");
    navigate("/");
  };

  return (
    <Toolbar
      sx={{
        pr: "24px", // keep right padding when drawer closed
      }}
    >
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        sx={{
          marginRight: "36px",
          ...(drawerOpen && { display: "none" }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        Privy SMS Sender
      </Typography>
      <Tooltip title="Log Out">
        <IconButton color="inherit" onClick={logout}>
          <LogoutIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

export default LogOut;
