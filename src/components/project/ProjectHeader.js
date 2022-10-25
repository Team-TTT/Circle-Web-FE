import React, { useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MdAddCircle, MdOutlineEdit, MdOutlineDelete } from "react-icons/md";

import ProjectHeaderDropdown from "./ProjectHeaderDropdown";
import ProjectForm from "./ProjectForm";
import useModal from "../../hooks/useModal";
import { deleteProject } from "../../api/projectApi";
import { MESSAGE } from "../../config/constants";
import theme from "../../config/constants/theme";

export default function ProjectHeader({ currentProject, setCurrentProject }) {
  const [formType, setFormType] = useState("");

  const [projects, setProjects] = useOutletContext();
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [Modal, toggleModal] = useModal();

  const handleDeleteProject = async () => {
    try {
      const response = await deleteProject(projectId);

      if (response.result) {
        alert(MESSAGE.PROJECT_SUCCESS_DELETE);

        const filteredProjects = projects.filter((project) => {
          return project._id !== projectId;
        });

        if (!filteredProjects?.length) {
          navigate("/console/projects/new", { replace: true });
        } else {
          navigate(`/console/projects/${filteredProjects[0]._id}`, {
            replace: true,
          });
        }

        setProjects(filteredProjects);
      }
    } catch (error) {
      navigate("/error");
    }
  };

  const handleModalOpen = (event) => {
    event.preventDefault();

    setFormType(event.currentTarget.name);
    toggleModal();
  };

  return (
    <Container>
      <StyledButton type="button" name="create" onClick={handleModalOpen}>
        <AddIcon />
      </StyledButton>
      <ProjectHeaderDropdown currentProject={currentProject} />
      <StyledButton type="button" name="edit" onClick={handleModalOpen}>
        <EditIcon />
      </StyledButton>
      <StyledButton>
        <DeleteIcon onClick={handleDeleteProject} />
      </StyledButton>
      <Modal>
        <ProjectForm
          formType={formType}
          toggleModal={toggleModal}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        />
      </Modal>
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
  min-width: 400px;
  height: 60px;
  padding: 0px 8px;
`;

const StyledButton = styled.button`
  border: none;
  background: none;
`;

const AddIcon = styled(MdAddCircle)`
  flex: 1;
  margin-right: 0.7vw;
  font-size: 34px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.blue};
    color: ${theme.white};
    transition: all 1s ease;
  }
`;

const EditIcon = styled(MdOutlineEdit)`
  flex: 1;
  margin-right: 0.7vw;
  font-size: 34px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.blue};
    color: ${theme.white};
    transition: all 1s ease;
  }
`;

const DeleteIcon = styled(MdOutlineDelete)`
  flex: 1;
  margin-right: 0.7vw;
  font-size: 34px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.blue};
    color: ${theme.white};
    transition: all 1s ease;
  }
`;

ProjectHeader.propTypes = {
  currentProject: PropTypes.oneOfType([PropTypes.object]).isRequired,
  setCurrentProject: PropTypes.func.isRequired,
};
