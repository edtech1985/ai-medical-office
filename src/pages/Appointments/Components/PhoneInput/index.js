import React from "react";
import {
  PhoneNumberInputContainer,
  PhoneNumberInputField,
  PhoneNumberLabel,
} from "./PhoneInput.js";

const PhoneInputComponent = ({ label, value, onChange }) => {
  return (
    <PhoneNumberInputContainer>
      <PhoneNumberLabel>{label}:</PhoneNumberLabel>
      <PhoneNumberInputField
        value={value}
        onChange={onChange}
        type="tel"
        pattern="[0-9]{11}"
        placeholder="(51) 99999-9999"
      />
    </PhoneNumberInputContainer>
  );
};

export default PhoneInputComponent;
