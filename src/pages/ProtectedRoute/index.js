import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

// import { getAuthUser } from "../../api/authApi";
import checkSessionCookie from "../../utils/checkSessionCookie";
// import { auth } from "../../config/firebaseConfig";

export default function ProtectedRoute() {
  const [authUserData, setAuthUserData] = useState({});
  // console.log(authUserData);

  // useEffect(() => {
  //   const fetchAuthUserData = async () => {
  //     const data = await getAuthUser();

  //     setAuthUserData(data);
  //   };

  //   fetchAuthUserData();
  // }, []);

  const isAuthUser = checkSessionCookie("session");

  if (!isAuthUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet context={[authUserData, setAuthUserData]} />;
}
