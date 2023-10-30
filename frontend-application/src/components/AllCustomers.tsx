import Dashboard from "./Dashboard";
import { Grid, Paper } from "@mui/material";
import Customers from "./Customers";
import SendMessage from "./SendMessage";

const AllCustomers = () => {
  return (
    <Dashboard>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Customers />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <SendMessage />
        </Paper>
      </Grid>
    </Dashboard>
  );
};

export default AllCustomers;
