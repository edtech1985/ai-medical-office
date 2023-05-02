import React from "react";
import { HomeContainer, Slogan, Text, TextContainer } from "./Home";

const Home = () => {
  return (
    <HomeContainer>
      <TextContainer>
        <Slogan>
          Medicina Futurística: <span>O Futuro é Agora!</span>
        </Slogan>
        <Text>
          Bem-vindo ao nosso consultório médico do futuro, onde a inteligência
          artificial está transformando a forma como a medicina é praticada.
          Nossos robôs doutores altamente avançados usam a tecnologia mais
          recente para diagnosticar e tratar seus pacientes de forma precisa e
          eficiente. Deixe-nos ajudá-lo a cuidar da sua saúde.
        </Text>
      </TextContainer>
    </HomeContainer>
  );
};

export default Home;
