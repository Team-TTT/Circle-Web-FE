import React from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineBell } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import theme from "../../config/constants/theme";

export default function ProjectDetailPage() {
  const [authUserData] = useOutletContext();
  const { projectId } = useParams();

  const text =
    "      자세한 사용 방법은 우측의 '사용 가이드 문서' 링크를 통해 확인하실 수 있습니다.\n\n아래의 스크립트에 프로젝트 ID와 secret-key를 입력한 후, 스크립트 전체를 복사하여 사용하시는 html의 <body> Tag 내부 최하단에 붙혀 넣어주세요.";

  if (!projectId) {
    return <StyledHeading>생성된 프로젝트가 없습니다</StyledHeading>;
  }

  const { projects } = authUserData;
  const currentProject = projects.find((project) => {
    return project._id === projectId;
  });

  return (
    <>
      <ConfigContainer>
        <KeyContainer>
          <p>프로젝트 ID</p>
          <KeyWrapper>{currentProject._id}</KeyWrapper>
        </KeyContainer>
        <KeyContainer>
          <p>Secret-key</p>
          <KeyWrapper>{currentProject.secretKey}</KeyWrapper>
        </KeyContainer>
        <GuideLink to="/guide">
          <LinkIcon />
          사용 가이드 문서
        </GuideLink>
      </ConfigContainer>
      <InfoContainer>
        <BellIcon />
        <StyledInfo>{text}</StyledInfo>
      </InfoContainer>
      <InfoContainer>
        <StyledCode>코드 스니펫</StyledCode>
      </InfoContainer>
    </>
  );
}

const ConfigContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
`;

const KeyContainer = styled.div`
  border: none;
`;

const KeyWrapper = styled.div`
  display: flex;
  background-color: ${theme.lightGray};
  border-radius: 5px;
  width: 324px;
  padding: 12px;
  align-items: center;
  font-size: 18px;
`;

const GuideLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 46px;
  padding: 2vmin;
  border-radius: 5px;
  font-size: 18px;
  color: ${theme.black};
  background-color: ${theme.lightGray};
  text-decoration: none;
  cursor: pointer;
`;

const StyledHeading = styled.h1`
  margin-top: 100px;
  text-align: center;
  vertical-align: middle;
  font-size: 50px;
`;

const InfoContainer = styled.div`
  border: 1px solid black;
  margin-bottom: 30px;
`;

const StyledInfo = styled.p`
  font-size: 18px;
  white-space: pre-wrap;
  padding: 18px;
`;

const StyledCode = styled.p`
  font-size: 18px;
  white-space: pre-wrap;
  padding: 18px;
`;

const BellIcon = styled(AiOutlineBell)`
  position: absolute;
  margin: 12px 12px;
  font-size: 30px;
`;

const LinkIcon = styled(FiExternalLink)`
  font-size: 30px;
`;
