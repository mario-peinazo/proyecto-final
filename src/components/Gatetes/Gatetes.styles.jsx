import styled from "styled-components";

export const CajaGatos = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  align-items: center;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  width: 500px;
  height: 500px;
  margin: 90px auto;
  border-radius: 20px;
  border: 10px solid white;
  position: absolute;
  z-index: 10;
  top: 0;
  background-size: cover;
  background: ${props => `url(${props.background}) center`};

  @media (max-width: 830px) {
    width: 90vw;
    height: 82vh;
    margin: 100px auto 10px auto;
  }
`;

export const Fondo = styled.div`
  width: 100vw;
  heigth: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnMas = styled.button`
  font-size: 1.5rem;
  font-weight: 600;
  border: 4px solid black;
  background-color: rgb(255, 239, 95);
  padding: 10px 30px;
  border-radius: 40px;
  margin-bottom: 20px;
  margin-left: 20px;

  @media (max-width: 830px) {
    font-size: 1.4rem;
    padding: 10px 20px;
  }
`;

export const CajaBtn = styled.div `
margin: 0px 20px;

@media (max-width: 830px) {
  margin: 0px
}
`