import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import axios from "axios";
import { Grid, Link, Paper, TableCell, TableRow } from "@mui/material";
import Customers from "../components/Customers";
import Updates from "../components/Updates";

const MainPage = () => {
  const [userInfo, setuserInfo] = useState<any>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const user_id = localStorage.getItem("USER_ID");
    if (!user_id) {
      navigate("/error");
      return; // Early return to prevent further execution if there's no USER_ID
    }

    const fetchData = async () => {
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3000/check-user/get-user-info",
          data: {
            USER_ID: user_id,
          },
        });
        if (response.data) {
          setuserInfo(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  return (
    <Dashboard>
      {/* Chart */}
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Updates username={!userInfo ? "User" : userInfo.firstName} />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Customers />
          <TableRow>
            <TableCell>
              <Link href="/customers">Go to All Customers Page</Link>
            </TableCell>
          </TableRow>
        </Paper>
      </Grid>
    </Dashboard>
  );
};

export default MainPage;
