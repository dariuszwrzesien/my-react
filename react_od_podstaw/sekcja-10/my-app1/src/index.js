import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeList } from "./config";
import NotFound from "./pages/NotFound";
import App from "./App";

const router = createBrowserRouter([
  {
    path: routeList[0].path,
    element: <App />,
    children: [
      {
        path: routeList[1].path,
        element: routeList[1].component,
      },
      {
        path: routeList[2].path,
        element: routeList[2].component,
      },
      {
        path: routeList[3].path,
        element: routeList[3].component,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
