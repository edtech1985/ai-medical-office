import React, { useState } from "react";
import {
  AppointmentsContainer,
  FormContainer,
  StyledTitle,
  StyledTitleDiv,
} from "./Appointments";
import DatePickerComponent from "./Components/DataPicker/";
import SubmitButton from "./Components/Button";
import TimePickerComponent from "./Components/TimePicker";
import Select from "./Components/Select";
import PhoneInputComponent from "./Components/PhoneInput";
import AppointmentModal from "../Appointments/Components/AppointmentModal";
import { toast } from "react-toastify";

function Appointments() {
  const [formData, setFormData] = useState({
    doctor: "",
    date: new Date(),
    time: "",
    phone: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
        phone: name === "phone" ? value : formData.phone,
      });
    }
  };

  const handlePhoneInputChange = (e) => {
    setFormData({
      ...formData,
      phone: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("formdata", formData);
    e.preventDefault();
    if (formData.doctor && formData.date && formData.time && formData.phone) {
      setShowModal(true);
    } else {
      toast.error("Please, fill all fields.");
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(formData);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    setShowModal(false);
    toast.success("Appointment scheduled successfully!");
  };

  return (
    <>
      <StyledTitleDiv>
        <StyledTitle>Schedule your appointment in the form below</StyledTitle>
      </StyledTitleDiv>
      <AppointmentsContainer>
        <FormContainer onSubmit={handleSubmit}>
          <Select
            required
            label="Doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleFormChange}
          />
          <DatePickerComponent
            label="Date"
            name="date"
            value={formData.date}
            onChange={(date) =>
              handleFormChange({ target: { name: "date", value: date } })
            }
          />
          <TimePickerComponent
            label="Time"
            name="time"
            value={formData.time}
            onChange={handleFormChange}
          />
          <PhoneInputComponent
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneInputChange}
          />
          <SubmitButton label="Schedule an appointment" />
        </FormContainer>

        <AppointmentModal
          isOpen={showModal}
          onRequestClose={handleModalClose}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          doctorName={formData.doctor}
          date={formData.date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          time={formData.time}
          phone={formData.phone}
        ></AppointmentModal>
      </AppointmentsContainer>
    </>
  );
}

export default Appointments;
