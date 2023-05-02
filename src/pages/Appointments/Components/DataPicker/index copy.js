import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerContainer, Label } from "../DataPicker/DataPicker";

const DatePickerComponent = ({ label, value, onChange }) => {
  return (
    <DatePickerContainer>
      <Label>{label}:</Label>
      <DatePicker
        required
        selected={value}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        filterDate={(date) => {
          const dayOfWeek = date.getDay();
          return dayOfWeek !== 0 && dayOfWeek !== 6; // desabilitar sábado e domingo
        }}
      />
    </DatePickerContainer>
  );
};

export default DatePickerComponent;
