import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
// import { MdOutlineArrowDropDownCircle } from "react-icons/md";

export default function ProjectHeaderDropdown() {
  const [authUserData] = useOutletContext();
  const navigate = useNavigate();

  const { projects } = authUserData;

  if (!projects?.length) {
    return <StyledSelect />;
  }

  return (
    <Container>
      <StyledSelect
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
