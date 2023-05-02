import styled from "styled-components";

export const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  & .react-datepicker-wrapper {
    width: 100%;
  }

  & .react-datepicker__input-container input {
    width: 20vw;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ced4da;
    cursor: pointer;
    appearance: none;
    background-color: transparent;

    @media screen and (max-width: 480px) {
      width: 8rem;
    }
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;
