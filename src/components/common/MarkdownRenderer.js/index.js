/* eslint-disable react/no-children-prop */
import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export default function MarkdownRenderer() {
  const markdown = `
    # h1
    > 인용문
  `;
  return (
    <MarkDownStyle>
      <ReactMarkdown children={markdown} />
    </MarkDownStyle>
  );
}

const MarkDownStyle = styled.div`
  font-size: 16px;
`;
