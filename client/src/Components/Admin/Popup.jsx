import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: black;
  background-opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

const Content = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 91.666667%; /* w-11/12 in Tailwind */
  max-width: 28rem; /* max-w-md in Tailwind */
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1.5rem; /* text-2xl */
  font-weight: 700; /* font-bold */
  margin-bottom: 1rem; /* mb-4 */
`;

const Description = styled.p`
  color: #718096;
  margin-bottom: 1rem;
  flex-grow: 1;
  overflow: auto;
  max-height: 200px;
  padding-right: 0.5rem;
`;

const CloseButton = styled.button`
  background-color: #f56565; /* bg-red-500 */
  color: white;
  padding: 0.5rem 1rem; /* px-4 py-2 */
  border-radius: 0.25rem; /* rounded */
  cursor: pointer;

  &:hover {
    background-color: #e53e3e; /* hover:bg-red-600 */
  }
`;

export default function Popup({ blog, onClose }) {
  return (
    <Overlay>
      <Content>
        <Title>{blog.title}</Title>
        <Description>{blog.content}...</Description>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </Content>
    </Overlay>
  );
}