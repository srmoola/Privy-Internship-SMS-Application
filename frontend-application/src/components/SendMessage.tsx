import TextField from "@mui/material/TextField";
import Title from "./Title";
import { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Box, IconButton, Tooltip } from "@mui/material";
import axios from "axios";
import SendMessageDialog from "./SendMessageDIalog";

const SendMessage = () => {
  const [textMessage, settextMessage] = useState<string>("");
  const [userCustomers, setuserCustomers] = useState<any>(null);
  const [dialogOpen, setdialogOpen] = useState<boolean>(false);

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

  const sendClick = async () => {
    if (textMessage.length === 0) {
      return alert("Please Enter a Message!");
    }

    if (textMessage.length > 1600) {
      return alert("Please Make Message Shorter!");
    }

    setdialogOpen(true);
    userCustomers.map((customer: any) => {
      try {
        axios({
          method: "post",
          url: "http://localhost:3000/send-message",
          data: {
            phone: customer.phoneNumber,
            message: textMessage,
          },
        });
      } catch (err) {
        console.error(err);
      }
    });
  };

  const handleClose = () => {
    setdialogOpen(false);
  };

  return (
    <>
      <Title>Send Message To Customers</Title>
      <Box className="flex gap-2">
        <TextField
          sx={{ mt: 2 }}
          value={textMessage}
          onChange={(e) => settextMessage(e.target.value)}
          fullWidth
          placeholder="Type here to send message to customers..."
          id="fullWidth"
          multiline
        />
        <Tooltip title="Send" sx={{ mt: 2 }}>
          <IconButton onClick={sendClick}>
            <SendIcon sx={{ height: 32, width: 32 }}></SendIcon>
          </IconButton>
        </Tooltip>
      </Box>
      {dialogOpen && (
        <SendMessageDialog
          open={dialogOpen}
          handleClose={handleClose}
          message={textMessage}
        />
      )}
    </>
  );
};

export default SendMessage;
