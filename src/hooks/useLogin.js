import { useNavigate } from "react-router-dom";

import { findOrCreateUser } from "../api/authApi";
import { signInWithGoogle } from "../config/firebaseConfig";

export default function useLogin() {
  const navigate = useNavigate();

  return async (event) => {
    event.preventDefault();

    try {
      const authData = await signInWithGoogle();
      const token = await authData.user.getIdToken();

      const { email, displayName, photoURL } = authData.user;
      const userData = await findOrCreateUser(
        { email, displayName, photoURL },
        token
      );

      if (userData) {
        localStorage.setItem("authToken", token);

        navigate("/console/projects", { replace: true });
      }
    } catch (error) {
      navigate("/error");
    }
  };
}
