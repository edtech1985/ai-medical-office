import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--verdePrimario);
  padding: 1rem;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;

  svg {
    margin-right: 0.5rem;
  }
`;

export const BurgerMenuButton = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 999;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    span {
      display: block;
      width: 100%;
      height: 2px;
      margin-bottom: 6px;
      position: relative;
      background-color: #333;
      border-radius: 2px;
      transform-origin: center;
      transition: transform 0.3s ease-out, opacity 0.3s ease-out;

      &:focus {
        outline: none;
      }

      &:first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
