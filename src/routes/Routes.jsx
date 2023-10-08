import { createBrowserRouter } from "react-router-dom";
import Gallery from "../components/header/navbar/Gallery";
import Login from "../components/header/navbar/auth/Login";
import Register from "../components/header/navbar/auth/Register";
import Home from "../components/home/Home";
import ServiceDetails from "../components/home/services/ServiceDetails";
import ErrorPage from "../errorPage/ErrorPage";
import Root from "../layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails />,
        loader: () => fetch("/servicesData.json"),
      },
      {
        path: "/gallery",
        element: <Gallery />,
        loader: () => fetch("/servicesData.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
    ],
  },
]);

export default router;
