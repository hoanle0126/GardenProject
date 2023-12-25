import { RouterProvider } from "react-router-dom";
import { useStateContext } from "~/context/ApiContext";
function MainRouter() {
  const { router } = useStateContext();

  return <RouterProvider router={router} />;
}

export default MainRouter;
