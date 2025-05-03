import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Booking from "../Pages/Booking";
import Accommodations from "../Pages/accommodations";
import NewsPage from "../Pages/NewsPage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Contact from "../Pages/Contact";

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
      },
      {
        path: "/news",
        Component: NewsPage,
        loader: () => fetch("../newsArticles.json"),
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/contact",
        Component: Contact,
      }
    ],
  },
]);
