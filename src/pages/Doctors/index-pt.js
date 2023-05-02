import React from "react";
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
        <Title>Nossos robôs doutores</Title>
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
                <ListItem>Especialidade: {doctor.specialty}</ListItem>
                <ListItem>Ano de fabricação: {doctor.year}</ListItem>
                <ListItem>CRM-IA: {doctor.crm}</ListItem>
                <ListItem>Convênios que atende:</ListItem>
                {doctor.insurances.map((convenio) => (
                  <ListItem key={convenio}>{convenio}</ListItem>
                ))}
              </List>
              <Button>Agendar consulta</Button>
            </Content>
          </CardContainer>
        ))}
      </div>
    </Container>
  );
};

export default Doctors;
