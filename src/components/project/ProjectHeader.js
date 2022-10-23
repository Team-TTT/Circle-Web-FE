import React from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";
import { MdAddCircle, MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
import PropTypes from "prop-types";

import theme from "../../config/constants/theme";
import ProjectHeaderDropdown from "./ProjectHeaderDropdown";
import { deleteProject } from "../../api/projectApi";

export default function ProjectHeader({ handleModal }) {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [authUserData, setAuthUserData] = useOutletContext();

  const handleDeleteProject = async () => {
    const response = await deleteProject(projectId);

    if (response.result) {
      alert("삭제 성공");

      navigate("/", { replace: true });
    }
  };

  const handleEditProject = () => {
    console.log(authUserData);

    setAuthUserData({ ...authUserData, displayName: "바코" });
  };

  return (
    <Container>
      <AddIcon onClick={handleModal} />
      <ProjectHeaderDropdown />
      <EditIcon onClick={handleEditProject} />
      <DeleteIcon onClick={handleDeleteProject} />
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 32vw;
  min-width: 400px;
  height: 60px;
  padding: 0px 8px;
  font-weight: 400;
`;

const AddIcon = styled(MdAddCircle)`
  flex: 1;
  margin-right: 0.7vw;
  font-size: 34px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.blue};
    color: ${theme.white};
    @include transition(all 1s ease);
  }
`;

// const DropdownIcon = styled(MdOutlineArrowDropDownCircle)`
//   flex: 1;
//   margin-right: 0.7vw;
//   font-size: 34px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${theme.blue};
//     color: ${theme.white};
//     @include transition(all 1s ease);
//   }
// `;

const EditIcon = styled(MdOutlineEdit)`
  flex: 1;
  margin-right: 0.7vw;
  font-size: 34px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.blue};
    color: ${theme.white};
    @include transition(all 1s ease);
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
    @include transition(all 1s ease);
  }
`;

ProjectHeader.propTypes = {
  handleModal: PropTypes.func.isRequired,
};
