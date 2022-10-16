import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaHeadphones } from "react-icons/fa";

import theme from "../../constants/theme";

export default function Navbar() {
  const handleOnLogin = () => {};

  return (
    <>
      <Container>
        <GoToHome to="/">
          <HomeIcon />
          <HomeTitle>Circle</HomeTitle>
        </GoToHome>
        <RightItems>
          <GoToGuide to="/docs">GUIDE</GoToGuide>
          <LoginButton onClick={handleOnLogin}>LOGIN</LoginButton>
        </RightItems>
      </Container>
      <NavHelper />
    </>
  );
}

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 0px 20px;
  background-color: ${theme.white};
  font-weight: 400;
`;

const NavHelper = styled.div`
  height: 60px;
`;

const HomeTitle = styled.span`
  font-size: 28px;
`;

const HomeIcon = styled(FaHeadphones)`
  margin-right: 5px;
  font-size: 26px;
`;

const GoToHome = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${theme.blue};
`;

const RightItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 160px;
`;

const LoginButton = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const GoToGuide = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 24px;
  color: ${theme.black};
`;
