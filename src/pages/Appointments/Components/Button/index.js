import React from "react";
import { ButtonContainer, ButtonField } from "./Button";

const SubmitButton = ({ label }) => {
  return (
    <ButtonContainer>
      <ButtonField type="submit">{label}</ButtonField>
    </ButtonContainer>
  );
};

export default SubmitButton;
