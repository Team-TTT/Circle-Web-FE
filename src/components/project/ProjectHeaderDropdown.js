import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function ProjectHeaderDropdown({ currentProject }) {
  const [projects] = useOutletContext();
  const navigate = useNavigate();

  if (!projects?.length) {
    return <StyledSelect />;
  }

  return (
    <Container>
      <StyledSelect
        key={currentProject._id}
        defaultValue={currentProject._id}
        onChange={(event) => {
          navigate(`/console/projects/${event.target.value}`);
        }}
      >
        {projects.map((project) => {
          return (
            <option key={project._id} value={project._id}>
              {project.title}
            </option>
          );
        })}
      </StyledSelect>
    </Container>
  );
}

const Container = styled.div`
  flex: 6;
`;

const StyledSelect = styled.select`
  appearance: none;
  width: 220px;
  padding: 6px;
  border-radius: 5px;
  font-size: 22px;
`;

ProjectHeaderDropdown.propTypes = {
  currentProject: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
