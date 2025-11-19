// NODE MODULES...
import { createBrowserRouter } from "react-router-dom";

// AUTH PAGES...
import LoginPage from "../page/auth/Login";
import SignUpPage from "../page/auth/SIgnUp";
import App from "../App";

// LAYOUTS...
import MainLayout from "../layout/MainLayout";

// USER PAGES...
import Quotation from "../page/user/Quotation";
import ClientList from "../page/user/ClientList";
import Templates from "../page/user/Templates";
import ViewHistory from "../page/user/ViewHistory";

// ADMIN PAGES...
import Dashbaord from "../page/admin/Dashbaord";
import UsersManagement from "../page/admin/USerManagement";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },

  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "quotation",
        element: <Quotation />,
        index: true,
      },
      {
        path: "client-list",
        element: <ClientList />,
      },
      {
        path: "templates",
        element: <Templates />,
      },
      {
        path: "view-history",
        element: <ViewHistory />,
      },
    ],
  },

  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "admin/create-quotation",
        element: <Quotation />,
      },
      {
        path: "admin/dashboard",
        element: <Dashbaord />,
      },
      {
        path: "admin/client-list",
        element: <ViewHistory />,
      },

      {
        path: "admin/user-management",
        element: <UsersManagement />,
      },
    ],
  },
]);

export default router;
