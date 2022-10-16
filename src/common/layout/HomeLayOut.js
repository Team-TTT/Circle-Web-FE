import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomeLayOut() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
