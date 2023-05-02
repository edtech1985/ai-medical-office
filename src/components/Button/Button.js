import styled from "styled-components";

export const ProfileButton = styled.button`
  background: linear-gradient(45deg, #02c4ff 0%, #8ee67b 100%);
  color: white;
  font-weight: 700;
  font-size: 18px;
  padding: 0.5rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  align-content: center;
  align-items: center;
  height: 34px;
  width: 34px;

  &:hover {
    background: var(--default-blue);
    transition: 0.5s ease-in-out;
  }
`;
