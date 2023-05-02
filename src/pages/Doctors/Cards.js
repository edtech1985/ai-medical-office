import styled from "styled-components";

import { slide as Menu } from "react-burger-menu";

export const StyledMenu = styled(Menu)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  font-size: 24px;
  text-align: center;
  color: var(--verdeSecundario);

  & .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;
  }

  & .bm-burger-bars {
    background-color: var(--verdeSecundario);
  }

  & .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  & .bm-menu {
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  & .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  & .bm-cross {
    background: var(--verdeSecundario);
  }

  & .bm-item {
    display: inline-block;
    margin-bottom: 10px;
    transition: color 0.2s;
    cursor: pointer;
    font-weight: bold;
  }

  & .bm-item:hover {
    color: #b8b7ad;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledBurgerMenu = styled(Menu)`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 100vw;
  background: linear-gradient(to bottom right, var(--verdePrimario), #ffffff);
`;

export const StyledTitleDiv = styled.div`
  text-align: center;
  background-color: #f2f2f2;
`;

export const CardContainer = styled.div`
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  margin: 20px;
  overflow: hidden;
  width: 300px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top;

  @media screen and (max-width: 480px) {
    top: 0;
    object-position: top;
  }
`;

export const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  padding: 10px 0;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  font-size: 14px;
  margin-bottom: 5px;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #fff;
  border: 2px solid var(--verdeSecundario);
  border-radius: 20px;
  color: var(--verdeSecundario);
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--verdePrimario);
    color: #fff;
  }
`;
