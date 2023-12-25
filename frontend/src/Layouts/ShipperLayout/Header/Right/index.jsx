import { IconButton, alpha } from "@mui/material";
import MessageIcon from "~/assets/icons/message";
import { primary } from "~/context/ColorContext";
import NotificationIcon from "~/assets/icons/notification";
import AvatarAdmin from "./avatar";

const RightAdmin = () => {
  return (
    <div className="gap-[20px] h-full flex items-center">
      <IconButton>
        <MessageIcon
          size={30}
          primary={alpha(primary, 0.5)}
          secondary={alpha(primary, 0.7)}
        />
      </IconButton>
      <IconButton>
        <NotificationIcon
          size={30}
          primary={alpha(primary, 0.5)}
          secondary={alpha(primary, 0.7)}
        />
      </IconButton>
      <AvatarAdmin />
    </div>
  );
};

export default RightAdmin;
