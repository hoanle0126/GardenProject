import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "~/Layouts/AuthLayout";
import CommerceLayout from "~/Layouts/ClientLayout";
import Error from "~/Loading/back";
import DetailInfomation from "~/Pages/AuthPage/DetailInfomation";
import ForgotPassword from "~/Pages/AuthPage/Forgot";
import LoginPage from "~/Pages/AuthPage/Login";
import SignupPage from "~/Pages/AuthPage/Signup";
import SubmitEmail from "~/Pages/AuthPage/SubmitEmail";
import BlogCommercePage from "~/Pages/ClientPage/Blog";
import CartPage from "~/Pages/ClientPage/Cart";
import ContactCommercePage from "~/Pages/ClientPage/Contact";
import LandingPage from "~/Pages/ClientPage/Landing";
import OrderCommerce from "~/Pages/ClientPage/Order";
import PaymentCommerce from "~/Pages/ClientPage/Payment";
import ProfileCommercePage from "~/Pages/ClientPage/Profile";
import ShopPage from "~/Pages/ClientPage/Shop";
import ShopItemPage from "~/Pages/ClientPage/Shop/item";

export const CommerceRouter = createBrowserRouter([
  {
    path: "/",
    element: <CommerceLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:id",
        element: <ShopItemPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/payment",
        element: <PaymentCommerce />,
      },
      {
        path: "/order",
        element: <OrderCommerce />,
      },
      {
        path: "/profile",
        element: <ProfileCommercePage />,
      },
      {
        path: "/blog",
        element: <BlogCommercePage />,
      },
      {
        path: "/contact",
        element: <ContactCommercePage />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/forgot",
        element: <ForgotPassword />,
      },
      {
        path: "/submit",
        element: <SubmitEmail />,
      },
      {
        path: "/detail",
        element: <DetailInfomation />,
      },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
]);
