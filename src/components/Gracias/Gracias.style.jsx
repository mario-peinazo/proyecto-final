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

  h1 {
    line-height: 55px;
    margin-bottom: 40px;
    text-align: center;
    margin-top: 10px;
    padding: 0px 60px;
  }

  p {
    text-align: center;
    padding: 0px 60px;
  }

  @media (max-width: 830px) {
    width: 90vw;
    height: 80vh;
    margin: 120px auto 10px auto;

    h1 {
      margin-bottom: 30px;
      padding: 0px 30px;
    }

    p {
      padding: 0px 30px;
    }
  }
`;
