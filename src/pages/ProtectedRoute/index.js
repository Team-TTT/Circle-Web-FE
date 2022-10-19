import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isAuthUser = localStorage.getItem("authToken");

  if (!isAuthUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
