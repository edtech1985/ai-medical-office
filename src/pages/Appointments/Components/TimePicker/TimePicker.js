import styled from "styled-components";

export const TimePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    select {
      width: 150px;
    }
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;

export const SelectContainer = styled.div`
  position: relative;
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

  @media screen and (max-width: 480px) {
    select {
      width: 100vw;
    }
  }
`;
