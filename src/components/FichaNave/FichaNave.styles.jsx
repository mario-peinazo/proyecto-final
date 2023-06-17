import styled from "styled-components";

export const ComponenteNave = styled.div`
margin: 60px 120px 100px 120px;
`;

export const MasInfo = styled.div`
display:flex;
gap: 60px;
`;

export const FichaSuperior = styled.div`
  display: flex;
  background-color: #1d1e1f;
  border-radius: 5px;
`;

export const DatosPrincipal = styled.div`
  padding: 40px 30px;
  color: #b5b7b7;
  flex-shrink: 1;
  min-width:380px;
`;

export const ImgNave = styled.div`
background-image: url(${props => props.img});
background-size: cover;
background-position: center;
width: 1200px;
height: 450px;
`;

export const FichaInferior = styled.div`
display: flex;
gap: 100px;
margin: 60px 0px;
`;

export const BordeL = styled.div`
border-left: 0.2px solid white;
padding-left: 20px;
`