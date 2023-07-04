import styled from "styled-components";

export const FondoEspacioPersonal = styled.div`
  background-color: white;
  width: 70vw;
  height: 500px;
  margin: 140px auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    width: 380px;
  }

  input {
    width: 100%;
    border: 3px solid black;
    padding: 10px;
  }

  h1 {
    line-height: 0px;
    margin-bottom: 70px;
    text-align: center;
    margin-top: 10px;
  }

  a {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 830px) {

    width: 90vw;
    height: 82vh;
    margin: 110px auto 10px auto;

    h1 {
      line-height: 55px;
      margin-bottom: 30px;
    }
      form {
        margin: 40px 0px 10px -25px;
        width:75%;
      }
  
      button {
        width: 110%;
      }
  }
  }
  
`;

export const BtnForm = styled.button`
  font-size: 1.3rem;
  font-weight: 600;
  border: 4px solid black;
  background-color: rgb(255, 239, 95);
  padding: 10px 20px;
  border-radius: 40px;
  width: 200px;
  margin-top: 20px;


  @media (max-width: 830px) {
    margin-right: -25px;
  }
`;

export const BtnCerrar = styled(BtnForm)`
  background-color: rgb(255 119 102);
`;

export const CajaEP = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;

  @media (max-width: 830px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
`;

export const CajaBtn = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 830px) {
    flex-direction: column;
    width: 100%;
    gap: 0px;
    margin-top: 0px;
    margin-bottom: 10px;
  }
`;

export const Medidas = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
`;

export const Datos = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
`;

export const Envio = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 830px) {
    flex-direction: row;
  }
`;
