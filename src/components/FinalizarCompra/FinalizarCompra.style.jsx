import styled from "styled-components";

export const FondoFin = styled.div`
  background-color: white;
  width: 90vw;
  height: 500px;
  margin: 140px auto;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  input {
    width: 100%;
    border: 3px solid black;
    padding: 10px;
  }

  h1 {
    line-height: 0px;
    margin-bottom: 40px;
    text-align: center;
    margin-top: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 830px) {

    width: 90vw;
    height: 110vh;
    margin: 110px auto 20px auto;

    h1 {
      line-height: 55px;
      margin-bottom: 30px;
    }
      form {
        margin: 10px 0px 20px -25px;
        width:75%;
      }
  
      button {
        width: 110%;
      }
  }
`;

export const CajaMenu = styled.div`
@media (max-width: 830px) {
  padding: 0px 30px;
}
  `

export const BtnForm = styled.button`
  font-size: 1.5rem;
  font-weight: 600;
  border: 4px solid black;
  background-color: rgb(255, 239, 95);
  padding: 10px 20px;
  border-radius: 40px;
  width: 103%;
  margin-top: 20px;
`;

export const Columnas = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;


export const EspacioForm = styled.div`
  display: flex;
  gap: 60px;
  width: 600px;

  @media (max-width: 830px) {
   gap: 0px;
   flex-direction: column;
   width: 100%;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
  margin-top: 10px;
  align-items: center;
  align-content: center;
  justify-content: center;
`;