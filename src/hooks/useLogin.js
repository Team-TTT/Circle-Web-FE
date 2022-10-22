import { useNavigate } from "react-router-dom";

import { getUser } from "../api/authApi";
import { signInWithGoogle } from "../config/firebaseConfig";

export default function useLogin() {
  const navigate = useNavigate();

  return async (event) => {
    try {
      event.preventDefault();

      const authData = await signInWithGoogle();
      const token = await authData.user.getIdToken();

      const { email, displayName, photoURL } = authData.user;
      const userData = await getUser({ email, displayName, photoURL }, token);

      if (userData) {
        navigate("/console/projects", { replace: true });
      }
    } catch (error) {
      navigate("/error");
    }
  };
}