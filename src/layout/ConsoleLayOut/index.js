import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { getAuthUser } from "../../api/authApi";

import Sidebar from "./Sidebar";

export default function ConsoleLayOut() {
  const [authUserData, setAuthUserData] = useState({});

  // 여기서 분기처리 해보기
  useEffect(() => {
    const fetchAuthUserData = async () => {
      const data = await getAuthUser();

      setAuthUserData(data);
    };

    fetchAuthUserData();
  }, [setAuthUserData]);

  if (!authUserData?.email) {
    return (
      <div>
        <h1>로딩중입니다...</h1>
      </div>
    );
  }

  return (
    <Container>
      <Sidebar authUserData={authUserData} setAuthUserData={setAuthUserData} />
      <Outlet context={[authUserData, setAuthUserData]} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
