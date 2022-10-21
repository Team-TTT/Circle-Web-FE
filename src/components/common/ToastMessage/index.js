import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Portal from "../Portal";
import theme from "../../../config/constants/theme";

const DEFAULT_TIME_OUT = 4000;

export default function ToastMessage({
  message,
  color,
  sendToast,
  setSendToast,
}) {
  useEffect(() => {
    const removeToast = setTimeout(() => {
      setSendToast(false);
    }, DEFAULT_TIME_OUT);

    return () => clearTimeout(removeToast);
  }, [setSendToast]);

  if (!sendToast) {
    return null;
  }

  return (
    <Portal id="potal-toast">
      <Wrapper color={color}>
        <StyledToast>{message}</StyledToast>
      </Wrapper>
    </Portal>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 12px;
  right: 12px;
  width: 40vw;
  height: 5vh;
  max-width: 300px;
  min-height: 46px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  cursor: auto;

  animation-name: toast-in-right, fade-out;
  animation-delay: 0s, 3s;
  animation-duration: 0.7s, 1s;

  @keyframes toast-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const StyledToast = styled.div`
  align-content: center;
  margin-top: 0.2rem;
  font-weight: bold;
  letter-spacing: 0.29px;
  text-align: center;
`;

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string,
  sendToast: PropTypes.bool.isRequired,
  setSendToast: PropTypes.func.isRequired,
};

ToastMessage.defaultProps = {
  color: theme.gray,
};
