import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Root from "./layouts/Root";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AuthProviders from "./providers/AuthProviders";
import EstateDetails from "./pages/Shared/EstateDetails/EstateDetails";
import PrivateRoute from "./routes/PrivateRoute";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AllProperties from "./pages/AllProperties/AllProperties";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/estates.json"),
      },
      {
        path: "all-properties",
        element: (
          <PrivateRoute>
            <AllProperties></AllProperties>
          </PrivateRoute>
        ),
        loader: () => fetch("/allestates.json"),
      },
      {
        path: "/estate/:id",
        element: (
          <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/allestates.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <RouterProvider router={router}></RouterProvider>
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>
);
