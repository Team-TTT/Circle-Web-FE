import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const checkSessionCookie = (cookieName) => {
    const name = `${cookieName}=`;
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookies = decodedCookies.split("; ");

    let isCookieMatched = false;

    cookies.forEach((value) => {
      if (value.indexOf(name) === 0) {
        isCookieMatched = true;
      }
    });

    return isCookieMatched;
  };

  const isAuthUser = checkSessionCookie("session");

  if (!isAuthUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
