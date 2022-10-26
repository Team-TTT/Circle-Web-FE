import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AiOutlineBell } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import { PROJECT_INFO } from "../../config/constants";
import theme from "../../config/constants/theme";

export default function ProjectDetailPage({ currentProject }) {
  const [, , , , isProjectLoaded] = useOutletContext();

  const projectInfo = isProjectLoaded
    ? { id: currentProject._id, key: currentProject.secretKey }
    : { id: "가져오는 중...", key: "생성중..." };

  return (
    <>
      <ConfigContainer>
        <KeyContainer>
          <p>프로젝트 ID</p>
          <KeyWrapper>{projectInfo.id}</KeyWrapper>
        </KeyContainer>
        <KeyContainer>
          <p>Secret-key</p>
          <KeyWrapper>{projectInfo.key}</KeyWrapper>
        </KeyContainer>
        <GuideLink to="/guide">
          <LinkIcon />
          사용 가이드 문서
        </GuideLink>
      </ConfigContainer>
      <InfoContainer>
        <BellIcon />
        <StyledGuide>{PROJECT_INFO.LINK_TO_GUIDE}</StyledGuide>
        <StyledDescription>{PROJECT_INFO.DESCRIPTION}</StyledDescription>
      </InfoContainer>
      <InfoContainer>
        <StyledCode>{PROJECT_INFO.CODE_SNIPPET}</StyledCode>
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

const KeyContainer = styled.div``;

const KeyWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 360px;
  padding: 12px;
  border-radius: 5px;
  background-color: ${theme.lightGray};
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
  background-color: ${theme.lightGray};
  text-decoration: none;
  font-size: 18px;
  color: ${theme.black};
  cursor: pointer;
`;

const InfoContainer = styled.div`
  margin-bottom: 30px;
  border: 1px solid black;
`;

const StyledGuide = styled.p`
  padding: 19px 50px 5px;
  font-size: 20px;
  font-weight: bold;
  white-space: pre-wrap;
`;

const StyledDescription = styled.p`
  padding: 18px;
  font-size: 18px;
  white-space: pre-wrap;
`;

const StyledCode = styled.p`
  padding: 18px;
  font-size: 18px;
  white-space: pre-wrap;
`;

const BellIcon = styled(AiOutlineBell)`
  position: absolute;
  margin: 12px 12px;
  font-size: 34px;
`;

const LinkIcon = styled(FiExternalLink)`
  font-size: 30px;
`;

ProjectDetailPage.propTypes = {
  currentProject: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
