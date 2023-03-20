import React from "react";
import { createBrowserRouter } from "react-router-dom";

import ForgotPassword from "./pages/ForgotPassword";
import ProductCustomer from "./pages/ProductCustomer";
import ProductDetails from "./pages/ProductDetails";
// import App from "./pages/App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/product-cust", element: <ProductCustomer /> },
  { path: "/product-details", element: <ProductDetails /> },
]);
export default router;
