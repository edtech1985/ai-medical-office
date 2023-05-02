import styled from "styled-components";

export const Modal = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 5% auto;
  padding: 2%;
  height: 60vh;
  min-height: 300px;
  max-height: 500px;
  border: 1px solid #888;
  width: 80%;
  border: 5px solid var(--verdeSecundario);
  border-radius: 25px;
  box-shadow: 0px 15px 25px rgba(0, 50, 10, 0.75);
  box-sizing: border-box;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    width: 90vw;
    margin: 0;
    height: 75vh;
    border: none;
    margin-top: 25%;
    margin: 10% auto;
    box-sizing: border-box;
  }
`;
export const ModalHeader = styled.div`
  padding: 0 15px;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ModalFields = styled.p`
  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    line-break: auto;
  }
`;

export const ModalImage = styled.img`
  max-height: 200px;
  max-width: 300px;
  max-width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    box-sizing: border-box;
  }
`;

export const ModalButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;

export const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover {
    color: var(--vermelhoSecundario);
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3%;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ModalBodyLeft = styled.div`
  width: 70%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ModalBodyRight = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  box-sizing: border-box;
`;

export const ModalCancelButton = styled.button`
  background-color: #fff;
  border: 2px solid var(--vermelhoSecundario);
  border-radius: 20px;
  color: var(--vermelhoSecundario);
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--vermelhoPrimario);
    color: #fff;
  }
`;

export const ModalConfirmButton = styled.button`
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
