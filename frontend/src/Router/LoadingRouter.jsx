import { createBrowserRouter } from "react-router-dom";
import Loading from "~/Loading";

export const LoadingRouter = createBrowserRouter([
  {
    path: "/*",
    element: <Loading />,
  },
]);
