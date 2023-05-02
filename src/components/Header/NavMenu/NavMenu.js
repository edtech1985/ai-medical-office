import styled from "styled-components";

export const NavMenuContainer = styled.nav`
  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    top: 60px;
    box-sizing: border-box;
    right: 0;
    background-color: var(--verdePrimario);
    z-index: 999;
    transition: all 0.3s ease-in-out;
    box-shadow: 1px 15px 15px rgba(0, 50, 0, 0.8);
  }

  @media screen and (min-width: 769px) {
    display: flex;
    background-color: transparent;
    margin-right: 10px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 0px;
  padding-right: 0px;
  align-items: left;

  @media screen and (max-width: 768px) {
    display: block;
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width: 769px) {
    display: flex;
    margin-left: auto;
  }
`;

export const MenuItem = styled.li`
  margin: 0 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  background-color: var(--verdePrimario);

  a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    transition: 0.2s ease;
    padding: 3px;
    display: block;
  }
  a:hover {
    color: var(--verdeSecundario);
  }
  &.active a {
    color: var(--verdeSecundario);
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    width: auto;
    padding: 0 1.5rem 0 0.75rem;
  }
`;
