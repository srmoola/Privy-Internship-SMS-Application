import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

type Props = {
  username: string;
};

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};

const today = new Date();

export default function Deposits({ username }: Props) {
  return (
    <React.Fragment>
      <Title>Updates</Title>
      <Typography component="p" variant="h5">
        Hi {username}, long time no see! It's time to send some messages!
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on {formatDate(today)}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Send Messages
        </Link>
      </div>
    </React.Fragment>
  );
}
