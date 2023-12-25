import AvatarAdmin from "./avatar";
import Message from "./Message";
import { Notification } from "./Notification";

const RightAdmin = () => {
  return (
    <div className="gap-[20px] h-full flex items-center">
      <Message />
      <Notification />
      <AvatarAdmin />
    </div>
  );
};

export default RightAdmin;
