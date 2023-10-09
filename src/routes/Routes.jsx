import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/header/navbar/Contact";
import Gallery from "../components/header/navbar/Gallery";
import Login from "../components/header/navbar/auth/Login";
import Register from "../components/header/navbar/auth/Register";
import Home from "../components/home/Home";
import ServiceDetails from "../components/home/services/ServiceDetails";
import ErrorPage from "../errorPage/ErrorPage";
import Root from "../layout/Root";
import PrivateRoutes from "./PrivateRoutes";

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
        path: "/contact",
        element: (
          <PrivateRoutes>
            <Contact />
          </PrivateRoutes>
        ),
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails />
          </PrivateRoutes>
        ),
        loader: () => fetch("/servicesData.json"),
      },
      {
        path: "/gallery",
        element: (
          <PrivateRoutes>
            <Gallery />
          </PrivateRoutes>
        ),
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
