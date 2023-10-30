import { TableRow, TableCell, TextField, Box, Button } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonAddDisabledIcon from "@mui/icons-material/PersonAddDisabled";
import { useState } from "react";
import axios from "axios";

type Props = {
  handleCancel: () => void;
  userID: number;
  userCustomers: any;
  setUserCustomers: React.Dispatch<any>;
};

const AddCustomer = ({
  handleCancel,
  userID,
  setUserCustomers,
  userCustomers,
}: Props) => {
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [phone, setphone] = useState<string>("");

  const customerClick = () => {
    try {
      const response = axios({
        method: "post",
        url: "http://localhost:3000/create-customer",
        data: {
          user_id: userID,
          name: name,
          email: email,
          phoneNumber: phone,
        },
      });

      response.then((data) => {
        if (data.data.Response != 200) {
          return alert(data.data.Detail);
        }

        setUserCustomers([
          ...userCustomers,
          { name: name, email: email, phoneNumber: phone, createdAt: "Reload" },
        ]);
        // setUserCustomers({...userCustomers, {name: name, email: email, phoneNumber: phone}})
        handleCancel();
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TableRow>
      <TableCell>
        <TextField
          fullWidth
          id="standard-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => setname(e.target.value)}
        />
      </TableCell>
      <TableCell>
        <TextField
          fullWidth
          id="standard-basic"
          label="Email"
          variant="outlined"
          onChange={(e) => setemail(e.target.value)}
        />
      </TableCell>
      <TableCell>
        <TextField
          fullWidth
          id="standard-basic"
          label="Phone Number"
          variant="outlined"
          onChange={(e) => setphone(e.target.value)}
        />
      </TableCell>
      <TableCell>
        <Box>
          <Button
            onClick={handleCancel}
            color="error"
            variant="outlined"
            startIcon={<PersonAddDisabledIcon />}
          >
            Cancel Customer
          </Button>
        </Box>
      </TableCell>
      <TableCell>
        <Button
          onClick={customerClick}
          variant="outlined"
          startIcon={<PersonAddIcon />}
        >
          Add Customer
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default AddCustomer;
