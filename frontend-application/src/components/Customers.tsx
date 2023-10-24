import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Customers() {
  const [userCustomers, setuserCustomers] = useState<any>(null);
  useEffect(() => {
    const getUserId = async () => {
      const useridtemp = await localStorage.getItem("USER_ID");
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3000/get-customer-list",
          data: {
            user_id: Number(useridtemp),
          },
        });
        if (response.data) {
          setuserCustomers(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    getUserId();
  }, []);

  console.log(userCustomers);

  return (
    <React.Fragment>
      <Title>Customers</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell></TableCell>
            <TableCell>Date Added</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userCustomers?.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>{String(row.createdAt).substring(0, 10)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
