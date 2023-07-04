import styled from "styled-components";

export const FondoCarrito = styled.div`
  height: 100vh;
  width: 40vw;
  margin-top: 90px;
  position: absolute;
  background-color: white;
  top: 0px;
  right: 0;
  z-index: 4;
  padding: 30px 40px;
  font-size: 2rem;
  font-weight: 500;
  flex-direction: column;
  display: ${(props) => (props.visible ? "flex" : "none")};

  p {
    font-size: 1.5rem;
  }

  @media (max-width: 830px) {
    width: 100vw;
    height: 100%;
    padding: 0px;
    font-size: 1.5rem;

    p {
      margin: 20px 30px 10px 30px;
      font-size: 1.2rem;
    }
  }
`;

export const BtnCarro = styled.button`
  border: 3px solid #2a2a2a;
  border-radius: 50px;
  background-color: rgb(255, 239, 95);
  font-size: 1.8rem;
  margin: 0px 5px;

  @media (max-width: 830px) {
    font-size: 1.4rem;
    padding: 2px 6px;
  }
`;

export const CajaProd = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (max-width: 830px) {
    margin: 10px 30px;
  }
`;

export const BtnCerrar = styled.button`
align-self: start;
  margin-bottom: 30px;
  padding: 0px;

  img {
    width: 40px;
    height: 40px
  }

  @media (max-width: 830px) {
    margin: 20px 0px 20px 30px;

    img {
      width: 30px;
      height: 30px
    }
  }
`;

export const BtnFin = styled.button`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 40px;
  align-self:center;
  border: 4px solid black;
  background-color: rgb(255, 239, 95);
  padding: 10px 30px;
  border-radius: 40px;
  width: 100%;

  @media (max-width: 830px) {
    width: 80%;
  }
`;
