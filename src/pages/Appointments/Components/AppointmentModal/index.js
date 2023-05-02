import React from "react";
import {
  CloseButton,
  Modal,
  ModalBody,
  ModalBodyLeft,
  ModalBodyRight,
  ModalCancelButton,
  ModalConfirmButton,
  ModalContent,
  ModalFields,
  ModalFooter,
  ModalHeader,
  ModalImage,
  ModalTitle,
} from "./AppointmentModal";
import doctors from "../../../Doctors/doctorsdb.json";

function AppointmentModal(props) {
  const { doctorName, date, time, phone } = props;
  const doctor = doctors.find((d) => d.name === doctorName);

  return (
    <Modal isOpen={props.isOpen}>
      <ModalContent>
        <ModalHeader>
          <CloseButton onClick={props.onRequestClose}>&times;</CloseButton>
          <ModalTitle>Confirm your appointment</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <ModalBodyLeft>
            <ModalFields>Doctor: {doctorName}</ModalFields>
            <ModalFields>Date: {date}</ModalFields>
            <ModalFields>Time: {time}</ModalFields>
            <ModalFields>Phone: {phone}</ModalFields>
          </ModalBodyLeft>
          <ModalBodyRight>
            {doctor ? (
              <ModalImage src={doctor.image} alt={doctorName} />
            ) : (
              <p>Image not available</p>
            )}
          </ModalBodyRight>
        </ModalBody>
      </ModalContent>

      <ModalFooter>
        <ModalConfirmButton onClick={props.onConfirm}>
          Confirm
        </ModalConfirmButton>
        <ModalCancelButton onClick={props.onCancel}>Cancel</ModalCancelButton>
      </ModalFooter>
    </Modal>
  );
}

export default AppointmentModal;
