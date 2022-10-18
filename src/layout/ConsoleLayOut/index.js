import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "./Sidebar";

export default function ConsoleLayOut() {
  return (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
