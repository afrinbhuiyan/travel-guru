import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Booking from "../Pages/Booking";
import Accommodations from "../Pages/accommodations";


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
        },
        {
          path: "/accommodations/:id",
          Component: Accommodations,
          loader: () => fetch("../destinations.json"),
          hydrateFallbackElement: <p>Loading...</p>,
        }
    ]
  },
]);

