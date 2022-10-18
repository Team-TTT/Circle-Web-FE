import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineTrackChanges, MdOutlineChat } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";

import theme from "../../config/constants/theme";
import logo from "../../assets/images/app1.png";

export default function Sidebar() {
  const handleOnLogout = () => {};

  return (
    <Container>
      <UserWrapper>
        <UserImage alt="profile-img" src={logo} />
        <UserEmail>email</UserEmail>
      </UserWrapper>
      <List>
        <SideWrapper>
          <ListWrapper>
            <ProjectLink to="/console/projects/:projectId">
              <SettingIcon />
              버튼 설치 및 설정
            </ProjectLink>
          </ListWrapper>
          <ListWrapper>
            <ChannelLink to="/console/projects/:projectId/channels">
              <ChannelIcon />
              채널 관리
            </ChannelLink>
          </ListWrapper>
        </SideWrapper>
        <LogoutButton onClick={handleOnLogout}>
          <LogoutIcon />
          Logout
        </LogoutButton>
      </List>
    </Container>
  );
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-width: 230px;
  width: 15vw;
  background-color: ${theme.gray};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease;
  z-index: 9;
`;

const UserWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 16px;
  margin-top: 1vh;
  margin-left: 2vw;
`;

const UserImage = styled.img`
  width: 60px;
  height: 60px;
`;

const UserEmail = styled.span`
  padding-left: 2vw;
  font-size: 30px;
`;

const SideWrapper = styled.ul`
  display: block;
  padding: 0;
  margin-top: 2vh;
  list-style: none;
`;

const ListWrapper = styled.li`
  display: inline-block;
  width: 90%;
  margin: 15px;
  padding-left: 0;
  border-radius: 20px;
`;

const ProjectLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.5vmin;
  font-size: 18px;
  color: ${theme.black};
  text-decoration: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    color: ${theme.white};
    background-color: ${theme.blue};
    @include transition(all 0.5s ease);
  }
`;

const SettingIcon = styled(MdOutlineTrackChanges)`
  margin-right: 0.7vw;
  font-size: 28px;
  cursor: pointer;
`;

const ChannelLink = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  min-width: 7vw;
  padding: 1.5vmin;
  font-size: 18px;
  color: ${theme.black};
  text-decoration: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    color: ${theme.white};
    background-color: ${theme.blue};
    @include transition(all 0.5s ease);
  }
`;

const ChannelIcon = styled(MdOutlineChat)`
  margin-right: 0.7vw;
  font-size: 28px;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-self: end;
  width: 90%;
  margin: 1vmin;
  padding: 1.5vmin;
  font-size: 18px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    color: ${theme.white};
    background-color: ${theme.blue};
    @include transition(all 0.5s ease);
  }
`;
const LogoutIcon = styled(RiLogoutBoxLine)`
  margin-right: 0.7vw;
  font-size: 28px;
  cursor: pointer;
`;
