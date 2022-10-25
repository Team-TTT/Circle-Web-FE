import React, { useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { BsCheckLg } from "react-icons/bs";

import { createProject, editProject } from "../../api/projectApi";
import { DEFAULT_VALUES, MESSAGE } from "../../config/constants";
import theme from "../../config/constants/theme";

export default function ProjectForm({ formType, toggleModal, currentProject }) {
  const [titleInput, setTitleInput] = useState(
    formType === "edit" ? currentProject.title : ""
  );

  const [projects, setProjects] = useOutletContext();
  const { projectId } = useParams();
  const navigate = useNavigate();

  const handleCreateProject = async () => {
    try {
      const data = await createProject(titleInput);

      if (data.id) {
        alert(MESSAGE.PROJECT_SUCCESS_CREATE);
        navigate(`/console/projects/${data.id}`);
      } else {
        alert(MESSAGE.PROJECT_FAIL);
      }
    } catch (error) {
      navigate("/error");
    }
  };

  const handleEditProject = async () => {
    try {
      const data = await editProject(titleInput, projectId);

      if (data.result) {
        alert(MESSAGE.PROJECT_SUCCESS_EDIT);

        const modifiedProjects = projects.map((project) => {
          if (project._id === projectId) {
            return { ...project, title: titleInput };
          }

          return project;
        });

        setProjects(modifiedProjects);
      } else {
        alert(MESSAGE.PROJECT_FAIL);
      }
    } catch (error) {
      navigate("/error");
    }
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    if (formType === "edit") {
      await handleEditProject();
    } else {
      await handleCreateProject();
    }

    toggleModal(false);
  };

  return (
    <Container>
      <h1>
        {formType === "edit" ? "프로젝트 이름 수정" : "새로운 프로젝트 이름"}
      </h1>
      <form onSubmit={handleSubmitForm}>
        <InputContainer>
          <StyledInput
            type="text"
            name="title"
            value={titleInput}
            onChange={(event) => setTitleInput(event.target.value)}
            maxLength={DEFAULT_VALUES.PROJECT_TITLE_MAX_LENGTH}
          />
          <StyledText>15자 이내</StyledText>
        </InputContainer>
        <StyledButton type="submit">
          <SubmitIcon />
        </StyledButton>
      </form>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 3vh;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: 68px;
`;

export const StyledInput = styled.input`
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1.5px solid ${theme.blue};
  border-radius: 5px;
  font-size: 18px;
  ::placeholder {
    color: palevioletred;
  }
`;

const StyledText = styled.p`
  display: inline;
  padding-bottom: 40px;
  text-align: right;
`;

const StyledButton = styled.button`
  display: inline;
  width: 60px;
  height: 42px;
  margin-top: 22px;
  margin-left: 350px;
  border: none;
  border-radius: 5px;
  background-color: ${theme.blue};
`;

const SubmitIcon = styled(BsCheckLg)`
  font-size: 26px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.blue};
    color: ${theme.white};
    @include transition(all 1s ease);
  }
`;

ProjectForm.propTypes = {
  formType: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  currentProject: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
