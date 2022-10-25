import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AiOutlineBell } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import { PROJECT_GUIDE_INFO } from "../../config/constants";
import theme from "../../config/constants/theme";

export default function ProjectDetailPage({ currentProject }) {
  if (!currentProject?._id) {
    return <p>프로젝트 불러오는중...</p>;
  }

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
        <StyledInfo>{PROJECT_GUIDE_INFO}</StyledInfo>
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
  align-items: center;
  width: 324px;
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

const StyledInfo = styled.p`
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
  font-size: 30px;
`;

const LinkIcon = styled(FiExternalLink)`
  font-size: 30px;
`;

ProjectDetailPage.propTypes = {
  currentProject: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
