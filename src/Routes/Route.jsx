import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Booking from "../Pages/Booking";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home,
            loader: () => fetch("../destinations.json"),
            hydrateFallbackElement: <p>Loading...</p>,
        },
        {
          path: "/booking/:id",
          Component: Booking,
          loader: () => fetch("../destinations.json"),
          hydrateFallbackElement: <p>Loading...</p>,
        }
    ]
  },
]);

