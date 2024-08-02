import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root/root";
import Contact from "./routes/contact/Contact";
import Portfolio from "./routes/portfolio/Portfolio";
import Services from "./routes/Services";
import About from "./routes/about/about";
import ErrorPage from "./error-page";
import Homepage from "./routes/Homepage/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/root",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Portfolio",
        element: <Portfolio />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Services",
        element: <Services />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
