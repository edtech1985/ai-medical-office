import React from "react";
import {
  TimePickerContainer,
  Label,
  SelectContainer,
  SelectField,
} from "./TimePicker.js";
import timeOptions from "./timeOptions.json";

function TimePickerComponent({ name, label, value, onChange }) {
  return (
    <TimePickerContainer>
      <Label>{label}:</Label>
      <SelectContainer>
        <SelectField name={name} value={value} onChange={onChange}>
          <option value="">Select a time</option>
          {timeOptions.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </SelectField>
      </SelectContainer>
    </TimePickerContainer>
  );
}

export default TimePickerComponent;
