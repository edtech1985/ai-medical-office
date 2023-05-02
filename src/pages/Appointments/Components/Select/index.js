import React from "react";
import { SelectContainer, SelectField } from "./Select";
import doctors from "../../../Doctors/doctorsdb.json";

function Select(props) {
  const { label, name, value, onChange } = props;

  return (
    <SelectContainer>
      <label>{label}:</label>
      <SelectField name={name} value={value} onChange={onChange}>
        <option value="">Select a doctor</option>
        {doctors.map((doctor) => (
          <option key={doctor.id} value={doctor.name}>
            {doctor.name}
          </option>
        ))}
      </SelectField>
    </SelectContainer>
  );
}

export default Select;
