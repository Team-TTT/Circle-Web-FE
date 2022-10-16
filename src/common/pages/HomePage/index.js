import React from "react";
import styled from "styled-components";
import { FaLongArrowAltDown } from "react-icons/fa";

import theme from "../../constants/theme";

export default function HomePage() {
  return (
    <Container>
      <StartGuideWrapper>
        <TitleWrapper>
          <Title>실시간 그룹콜</Title>
          <Title>지금 바로 시작하세요</Title>
        </TitleWrapper>
        <StartProjectButton>프로젝트 시작하기</StartProjectButton>
        <DownIcon />
      </StartGuideWrapper>
      <AppDescriptionWrapper>
        <p>앱 소개글</p>
      </AppDescriptionWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(200% - 60px);
  background-color: ${theme.skyBlue};
`;

const StartGuideWrapper = styled.div`
  height: calc(50% - 30px);
`;

const TitleWrapper = styled.div``;

const Title = styled.h1``;

const StartProjectButton = styled.button``;

const DownIcon = styled(FaLongArrowAltDown)``;

const AppDescriptionWrapper = styled.div`
  height: calc(50% - 30px);
`;
