import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import { getAuthUser } from "../../api/authApi";

export default function ConsoleLayOut() {
  const [authUserData, setAuthUserData] = useState({});
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthUserData = async () => {
      try {
        const data = await getAuthUser();

        setAuthUserData(data);
        setProjects(data.projects);
      } catch (error) {
        navigate("/error");
      }
    };

    fetchAuthUserData();
  }, [navigate]);

  if (!authUserData?.email) {
    return <StyledLoading>로딩중입니다...</StyledLoading>;
  }

  return (
    <Container>
      <Sidebar authUserData={authUserData} />
      <Outlet context={[projects, setProjects]} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const StyledLoading = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 60px;
  transform: translate(-50%, -50%);
`;
