import { createBrowserRouter } from "react-router-dom";
import StaffLayout from "~/Layouts/ShipperLayout";
import Error from "~/Loading/back";
import HomeStaff from "~/Pages/ShipperPage/Dashboard";

export const StaffRouter = createBrowserRouter([
  {
    path: "/",
    element: <StaffLayout />,
    children: [
      {
        path: "/",
        element: <HomeStaff />,
      },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
]);
