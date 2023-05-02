import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonField = styled.button`
  background-color: #fff;
  border: 2px solid var(--verdeSecundario);
  border-radius: 20px;
  color: var(--verdeSecundario);
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--verdePrimario);
    color: #fff;
  }
`;
