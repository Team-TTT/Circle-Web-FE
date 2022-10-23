import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

// import { getAuthUser } from "../../api/authApi";
import { createProject } from "../../api/projectApi";
import theme from "../../config/constants/theme";
// import StyledButton from "../common/StyledButton";

export default function ProjectForm({ handleModal }) {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  // const [authUserData, setAuthUserData] = useOutletContext();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = await createProject(title);

    if (data.id) {
      alert("생성 성공");

      navigate("/", { replace: true });
    } else {
      alert("생성 실패");
    }

    handleModal(false);
  };

  return (
    <Container>
      <h1>새로운 프로젝트 이름</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <InputContainer>
          <StyledInput
            type="text"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength="15"
          />
          <StyledText>(15자 이내)</StyledText>
        </InputContainer>

        <StyledButton type="submit">생성</StyledButton>
      </form>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  padding-top: 30px;
`;

const StyledText = styled.p`
  display: inline;
  text-align: right;
  padding-bottom: 40px;
`;

const StyledInput = styled.input`
  font-size: 18px;
  width: 300px;
  padding: 10px;
  margin: 10px;
  border: 1.5px solid ${theme.blue};
  border-radius: 5px;
  ::placeholder {
    color: palevioletred;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  background-color: ${theme.blue};
  width: 60px;
  height: 42px;
  top: 220px;
  left: 420px;
  border: none;
  border-radius: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-left: 60px;
  align-items: baseline;
`;

ProjectForm.propTypes = {
  handleModal: PropTypes.func.isRequired,
};
