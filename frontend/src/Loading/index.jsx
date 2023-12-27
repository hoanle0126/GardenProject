/* eslint-disable react-hooks/exhaustive-deps */
import { CircularProgress } from "@mui/material";
import { useStateContext } from "~/context/ApiContext";
import { useEffect } from "react";
import { CommerceRouter } from "~/Router/CommerceRoute";
import { AdminRouter } from "~/Router/AdminRouter";
import { StaffRouter } from "~/Router/StaffRouter";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "~/store/Auth/action";

function Loading() {
  const { setRouter } = useStateContext();
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
    if (!localStorage.getItem("token")) {
      setRouter(CommerceRouter);
    } else {
      if (auth.user?.role === "Admin") {
        setRouter(AdminRouter);
      } else if (auth?.user?.role === "Client") {
        setRouter(CommerceRouter);
      } else if (auth?.user?.role === "Shipper") {
        setRouter(StaffRouter);
      }
    }
  }, [auth.user]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <CircularProgress />
    </div>
  );
}

export default Loading;
