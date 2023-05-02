import React from "react";
import { HomeContainer, Slogan, Text, TextContainer } from "./Home";

const Home = () => {
  return (
    <HomeContainer>
      <TextContainer>
        <Slogan>
          Futuristic Medicine: <span>The Future is Now!</span>
        </Slogan>
        <Text>
          Welcome to our futuristic medical office, where artificial
          intelligence is transforming the way medicine is practiced. Our highly
          advanced robotic doctors use the latest technology to diagnose and
          treat their patients accurately and efficiently. Let us help you take
          care of your health.
        </Text>
      </TextContainer>
    </HomeContainer>
  );
};

export default Home;
