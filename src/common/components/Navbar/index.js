import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <>
      <Container>
        <Link to="/">홈</Link>
      </Container>
      <NavHelper />
    </>
  );
}

const Container = styled.nav`
  position: fixed;
  height: 70px;
`;

const NavHelper = styled.div`
  height: 70px;
`;
