import React from "react";
import { Link } from "react-router-dom";
import doctors from "./doctorsdb.json";
import {
  Button,
  CardContainer,
  Container,
  Content,
  Image,
  List,
  ListItem,
  StyledTitleDiv,
  Text,
  Title,
} from "./Cards";

const Doctors = () => {
  return (
    <Container>
      <StyledTitleDiv>
        <Title>Our Robot Doctors</Title>
      </StyledTitleDiv>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {doctors.map((doctor) => (
          <CardContainer key={doctor.id}>
            <Image src={doctor.image} alt={doctor.name} />
            <Content>
              <Title>{doctor.name}</Title>
              <Text>{doctor.model}</Text>
              <List>
                <ListItem>Specialty: {doctor.specialty}</ListItem>
                <ListItem>Year of manufacture: {doctor.year}</ListItem>
                <ListItem>CRM-AI: {doctor.crm}</ListItem>
                <ListItem>Insurances accepted:</ListItem>
                {doctor.insurances.map((convenio) => (
                  <ListItem key={convenio}>{convenio}</ListItem>
                ))}
              </List>
              <Link to="/appointments">
                <Button>Schedule appointment</Button>
              </Link>
            </Content>
          </CardContainer>
        ))}
      </div>
    </Container>
  );
};

export default Doctors;
