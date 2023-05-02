import styled from "styled-components";

export const AppointmentButtonField = styled.button`
  background-color: var(--verdeSecundario);
  color: #fff;
  border: none;
  margin: 0 10px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: var(--verdeSecundario);
  }
`;

export const PhoneNumberInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    input {
      width: 8rem;
    }
  }
`;

export const PhoneNumberLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;

export const PhoneNumberInputField = styled.input`
  width: 20vw;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ced4da;
  cursor: pointer;
  appearance: none;
  background-color: transparent;
`;
