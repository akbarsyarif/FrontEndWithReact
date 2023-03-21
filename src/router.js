import React from "react";
import { createBrowserRouter } from "react-router-dom";

import ForgotPassword from "./pages/ForgotPassword";
import ProductCustomer from "./pages/ProductCustomer";
import ProductDetails from "./pages/ProductDetails";
// import App from "./pages/App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import History from "./pages/History";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/product-cust", element: <ProductCustomer /> },
  { path: "/product-details", element: <ProductDetails /> },
  { path: "/profile", element: <Profile /> },
  { path: "/history", element: <History /> },
]);
export default router;
