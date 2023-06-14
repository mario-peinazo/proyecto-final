import styled from "styled-components";

export const CajaLista = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 120px;
`;

export const CajaNave = styled.div`
padding: 30px 20px;
background-color: #1d1e1f;
margin-bottom: 20px;
border-radius: 5px;
`;

export const BtnMore = styled.button `
cursor:pointer;
width: 120px;
    align-self: center;
    color: white;
    border: 1px solid yellow;
    background-color: transparent;
    padding: 8px 10px;
    border-radius: 50px;
    &:hover {
      border: 1px solid white;
    }
` 
