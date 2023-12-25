import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "~/Layouts/AdminLayout";
import Error from "~/Loading/back";
import CalendarPage from "~/Pages/AdminPage/Calendar";
import ChatPage from "~/Pages/AdminPage/Chat";
import Dashboard from "~/Pages/AdminPage/Dashboard";
import CustomerPage from "~/Pages/AdminPage/Member/Customer";
import ViewCustomer from "~/Pages/AdminPage/Member/Customer/View";
import StaffPage from "~/Pages/AdminPage/Member/Staff";
import ViewStaff from "~/Pages/AdminPage/Member/Staff/View";
import CategoriesPage from "~/Pages/AdminPage/Product/Categories";
import NewCategory from "~/Pages/AdminPage/Product/Categories/Add";
import ViewCategory from "~/Pages/AdminPage/Product/Categories/View";
import OrderPage from "~/Pages/AdminPage/Product/Order";
import StockPage from "~/Pages/AdminPage/Product/Stock";
import AddProduct from "~/Pages/AdminPage/Product/Stock/Add";
import ViewProduct from "~/Pages/AdminPage/Product/Stock/View";
import AdminProfile from "~/Pages/AdminPage/Profile/AdminProfile/admin";

export const AdminRouter = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/stock",
        element: <StockPage />,
      },
      {
        path: "/stock/add",
        element: <AddProduct />,
      },
      {
        path: "/stock/view/:id",
        element: <ViewProduct />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
      {
        path: "/category",
        element: <CategoriesPage />,
      },
      {
        path: "/category/add",
        element: <NewCategory />,
      },
      {
        path: "/category/view/:id",
        element: <ViewCategory />,
      },
      {
        path: "/customer",
        element: <CustomerPage />,
      },
      {
        path: "/customer/:id",
        element: <ViewCustomer />,
      },
      {
        path: "/staff",
        element: <StaffPage />,
      },
      {
        path: "/staff/:id",
        element: <ViewStaff />,
      },
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
      {
        path: "/profile",
        element: <AdminProfile />,
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
]);
