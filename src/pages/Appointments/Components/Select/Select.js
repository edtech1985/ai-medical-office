import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
  }

  @media screen and (max-width: 480px) {
    select {
      width: 150px;
    }
  }
`;

export const SelectField = styled.select`
  width: 21.5vw;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ced4da;
  cursor: pointer;
  appearance: none;
  background-color: transparent;
`;
