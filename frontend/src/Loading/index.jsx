import { CircularProgress } from "@mui/material";
import { useStateContext } from "~/context/ApiContext";
import { useEffect } from "react";
import { CommerceRouter } from "~/Router/CommerceRoute";
import { AdminRouter } from "~/Router/AdminRouter";
import { axiosClient } from "~/axios/AxiosClient";
import { StaffRouter } from "~/Router/StaffRouter";

function Loading() {
  const { token, setRouter, user, setUser } = useStateContext();

  const getUser = () => {
    axiosClient.get("/user").then((data) => {
      setUser(data.data.data);
    });
  };

  useEffect(() => {
    getUser();
    if (!token) {
      setRouter(CommerceRouter);
    } else {
      if (user?.role === "Admin") {
        setRouter(AdminRouter);
      } else if (user?.role === "Client") {
        setRouter(CommerceRouter);
      } else if (user?.role === "Shipper") {
        setRouter(StaffRouter);
      }
    }
  }, [user]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <CircularProgress />
    </div>
  );
}

export default Loading;
