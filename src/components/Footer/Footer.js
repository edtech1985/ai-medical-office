import styled from "styled-components";

export const verdePrimario = "#006633";
export const verdeSecundario = "#4D9B44";

export const StyledFooter = styled.footer`
  background-color: var(--verdePrimario);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

export const StyledIconList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 0.5rem;
`;

export const StyledIconItem = styled.li`
  margin: 0 1rem;
  a {
    color: #fff;
    font-size: 1.5rem;
    :hover {
      color: var(--verdeSecundario);
    }
  }
`;

export const StyledRightsReserved = styled.p`
  font-size: 0.8rem;
  margin: 0.5rem 0;
`;

export const StyledDevelopedBy = styled.p`
  font-size: 0.8rem;
  margin: 0;

  :hover {
    color: var(--verdeSecundario);
  }
`;
