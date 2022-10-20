import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const getCookie = (cookieName) => {
    const name = `${cookieName}=`;
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookies = decodedCookies.split("; ");

    let matchedCookie = "";

    cookies.forEach((value) => {
      if (value.indexOf(name) === 0) {
        matchedCookie = value.substring(name.length);
      }
    });

    return matchedCookie;
  };

  const isAuthUser = getCookie("session");

  if (!isAuthUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
