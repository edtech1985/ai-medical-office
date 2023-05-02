import React from "react";
import {
  ContactContainer,
  ContactList,
  ContactListItem,
  ContactTitle,
  TextContainer,
} from "./Contacts";

function Contacts() {
  return (
    <ContactContainer>
      <TextContainer>
        <ContactTitle>Here are our contacts:</ContactTitle>
        <ContactList>
          <ContactListItem>Phone: (51) 99200-2595</ContactListItem>
          <ContactListItem>Email: edtech1985@gmail.com</ContactListItem>
          <ContactListItem>
            Address: Av. Assis Brasil, 1234 - Porto Alegre, RS
          </ContactListItem>
        </ContactList>
      </TextContainer>
    </ContactContainer>
  );
}

export default Contacts;
