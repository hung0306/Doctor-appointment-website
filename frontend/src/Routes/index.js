import UserLayout from "../Layouts/User/UserLayout";
import FindDoctor from "../Pages/User/FindDoctor";
import Home from "../Pages/User/Home";
import Login from "../Pages/User/Login";
import ProfileUser from "../Pages/User/ProfileUser";
import Register from "../Pages/User/Register";
import PrivateRouter from "./PrivateRouter";

export const routes = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "find-doctor",
        element: <FindDoctor />,
      },
      {
        element: <PrivateRouter />,
        children: [
          {
            path: "/ProfileUser",
            element: <ProfileUser />,
          },
        ],
      },

      //   {
      //     path: "register",
      //     element: <Register />,
      //   },
      //   {
      //     path: "logout",
      //     element: <Logout />,
      //   },
    ],
  },
];
