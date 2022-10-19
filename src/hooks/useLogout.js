import { useNavigate } from "react-router-dom";

import { fetchLogout } from "../api/authApi";

export default function useLogout() {
  const navigate = useNavigate();

  return async (event) => {
    event.preventDefault();

    try {
      await fetchLogout();

      localStorage.removeItem("authToken");

      navigate("/", { replace: true });
    } catch (error) {
      navigate("/error");
    }
  };
}
