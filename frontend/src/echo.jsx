/* eslint-disable no-unused-vars */
import Echo from "laravel-echo";
import Pusher from "pusher-js";
window.Pusher = Pusher;

const options = {
  broadcaster: "pusher",
  key: "f193bf222ebaa26610fc",
  cluster: "ap1",
  forceTLS: true,
  secret: "4d7fa7a7ef70b0336507",
};

window.Echo = new Echo(options);
