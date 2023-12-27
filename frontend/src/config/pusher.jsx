import { setPusherClient } from "react-pusher";
import Pusher from "pusher-js";

const pusherClient = new Pusher({
  broadcaster: "pusher",
  key: "f193bf222ebaa26610fc",
  cluster: "ap1",
  forceTLS: true,
  secret: "4d7fa7a7ef70b0336507",
});

setPusherClient(pusherClient);
