import styled from "styled-components";

export const FondoInicio = styled.div`
  background-color: white;
  width: 70vw;
  height: 500px;
  margin: 140px auto;
  border-radius: 20px;


  @media (max-width: 830px) {
    width: 90vw;
    height: 82vh;
    margin: 110px auto 10px auto;
}
`;

export const CajaInicio = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  align-items: center;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    margin-top: 30px;
    width: 380px;
  }

  button {
    margin-top: 15px;
  }

  input {
    width: 100%;
    border: 3px solid black;
    padding: 10px;
  }

  a {
    text-decoration: underline;
    cursor: pointer;
  }

  h1 {
    line-height: 0px;  
  }

  @media (max-width: 830px) {
    form {
      margin: 40px 0px 10px -25px;
      width:75%;
    }

    button {
      width: 110%;
    }
}
`;

export const CajaRegistro = styled(CajaInicio)``

export const CajaSelec = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  padding: 0px 60px;

  h2 {
    margin-top: 20px;
  }
`;

export const BtnForm = styled.button`
  font-size: 1.5rem;
  font-weight: 600;
  border: 4px solid black;
  background-color: rgb(255, 239, 95);
  padding: 10px 30px;
  border-radius: 40px;
  width: 105%;
  margin-bottom: 20px;
`;

export const CajaBtn = styled.div `
display: flex;
    gap: 20px;
    width: 105%;

    @media (max-width: 830px) {
     flex-direction: column;
     gap: 0px;

     button {
      margin: 15px 0px 0px 0px;
     }
  }
`