import styled from "styled-components";
import RobotIMG from "../../assets/doutor-robo-2.jpg";
import SmRobotIMG from "../../assets/doutor-robo-2-sm.jpg";

export const AppointmentsContainer = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom right, var(--verdePrimario), #ffffff);

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledTitleDiv = styled.div`
  text-align: center;
  margin: 2.5% 2.5%;

  @media only screen and (max-width: 480px) {
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    align-items: center;
    justify-content: center;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  word-break: keep-all;

  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;

    span {
      display: inline;
      white-space: nowrap;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  width: 60vw;
  margin: 5% auto;
  background-image: url(${RobotIMG});
  background-repeat: no-repeat;

  @media only screen and (max-width: 480px) {
    margin: 5% auto;
    width: 80vw;
    background-image: url(${SmRobotIMG});
    background-position: top;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    background-image: url(${RobotIMG});
    background-position: top;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
