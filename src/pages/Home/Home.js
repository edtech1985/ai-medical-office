import styled from "styled-components";
import RobotIMG from "../../assets/doutor-robo-2.jpg";
import SmRobotIMG from "../../assets/doutor-robo-2-sm.jpg";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${RobotIMG});
  background-repeat: no-repeat;

  @media only screen and (max-width: 480px) {
    background-image: url(${SmRobotIMG});
    background-position: left;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    background-image: url(${RobotIMG});
    background-position: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: rgba(183, 229, 192, 0.5);
  padding: 20px;
  border-radius: 20px;
  margin: 5%;

  @media only screen and (max-width: 480px) {
    margin-top: 15%;
    margin-right: 1%;
    margin-left: 1%;
    box-sizing: border-box;
  }
`;

export const Slogan = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;

  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;

    span {
      display: inline;
      white-space: nowrap;
    }
  }
`;

export const Text = styled.p`
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 40px;

  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;
