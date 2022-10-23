import React, { useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";

import useModal from "../../hooks/useModal";
import ProjectForm from "../../components/project/ProjectForm";
import ProjectHeader from "../../components/project/ProjectHeader";
import ProjectDetailPage from "../ProjectDetailPage";
import theme from "../../config/constants/theme";

export default function ProjectsPage() {
  const [authUserData] = useOutletContext();
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { projects } = authUserData;

  const [Modal, toggleModal] = useModal(!projects?.length);

  useEffect(() => {
    if (projectId) {
      navigate(`/console/projects/${projectId}`, { replace: true });
    }

    // if (projects?.length > 0) {
    //   const projectId = projects[0]._id;

    //   navigate(`/console/projects/${projectId}`, { replace: true });
    // }
  }, [navigate, projectId]);

  return (
    <Container>
      <Modal>
        <ProjectForm handleModal={toggleModal} />
      </Modal>

      <ProjectHeader handleModal={toggleModal} />

      <ProjectMain>
        <ProjectDetailPage />
      </ProjectMain>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 40px 40px;
  background-color: ${theme.skyBlue};
`;

const ProjectMain = styled.main`
  width: 1000px;
  min-height: 700px;
  padding: 60px;
  margin-top: 100px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  background-color: ${theme.gray};
  border: none;
`;
