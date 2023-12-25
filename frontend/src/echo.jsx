import Echo from "laravel-echo";

import Pusher from "pusher-js";
window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: "pusher",
  key: "f193bf222ebaa26610fc",
  cluster: "ap1",
  forceTLS: true,
});
