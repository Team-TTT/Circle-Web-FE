import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import ProjectHeader from "../../components/project/ProjectHeader";
import ProjectDetailPage from "../ProjectDetailPage";
import { getProject } from "../../api/projectApi";
import theme from "../../config/constants/theme";

export default function ProjectsPage() {
  const [currentProject, setCurrentProject] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { projectId } = useParams();

  useEffect(() => {
    const fetchGetProject = async (id) => {
      const data = await getProject(id);

      if (data?._id) {
        setCurrentProject(data);
      }

      setIsLoading(false);
    };

    if (projectId === "new") {
      return;
    }

    fetchGetProject(projectId);
  }, [projectId]);

  return (
    <Container>
      <ProjectHeader
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
      />
      <ProjectMain>
        {!isLoading && projectId === "new" ? (
          <StyledHeading>생성된 프로젝트가 없습니다</StyledHeading>
        ) : (
          <ProjectDetailPage currentProject={currentProject} />
        )}
      </ProjectMain>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 40px;
  background-color: ${theme.skyBlue};
`;

const ProjectMain = styled.main`
  width: 1200px;
  height: 100%;
  max-height: 800px;
  margin-top: 100px;
  padding: 60px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  background-color: ${theme.gray};
  border: none;
`;

const StyledHeading = styled.h1`
  margin-top: 100px;
  text-align: center;
  vertical-align: middle;
  font-size: 50px;
`;
