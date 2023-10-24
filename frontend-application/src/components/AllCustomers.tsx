import Dashboard from "./Dashboard";
import { Grid, Paper } from "@mui/material";
import Customers from "./Customers";

const AllCustomers = () => {
  return (
    <Dashboard>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Customers />
        </Paper>
      </Grid>
    </Dashboard>
  );
};

export default AllCustomers;
