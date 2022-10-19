import config from "../config/config";

export const getAuthUser = async () => {
  const request = {
    method: "GET",
    credentials: "include",
  };

  try {
    const response = await fetch(
      `${config.REACT_APP_REQUEST_URL}/auth/users`,
      request
    );
    const data = response.json();

    return data;
  } catch (error) {
    return console.log(error);
  }
};

export const findOrCreateUser = async (userData, token) => {
  const request = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...userData }),
  };

  try {
    const response = await fetch(
      `${config.REACT_APP_REQUEST_URL}/auth/users`,
      request
    );
    const data = response.json();

    return data;
  } catch (error) {
    return console.log(error);
  }
};

export const fetchLogout = async () => {
  const request = {
    method: "POST",
    credentials: "include",
  };

  try {
    await fetch(`${config.REACT_APP_REQUEST_URL}/auth/logout`, request);
  } catch (error) {
    console.log(error);
  }
};
