import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useNavigate } from "react-router-dom";

type Props = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  title: string;
  link: string;
};

const ListItem = ({ Icon, title, link }: Props) => {
  const navigate = useNavigate();
  return (
    <ListItemButton onClick={() => navigate("/" + link)}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  );
};

export default ListItem;
