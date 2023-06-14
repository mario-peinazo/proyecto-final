import styled from "styled-components";
import holaYoda from "../../assets/holaYoda.jpeg";
import { BtnMore } from "../ListaNaves/ListaNaves.styles";

export const BannerYoda = styled.div`
  background-image: url(${holaYoda});
  width: 100vw;
  height: 80vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CajaHola = styled.div`
  background-color: #1d1e1f;
  margin-right: 120px;
  padding: 40px;
  border-radius: 5px;
  font-size: 1.2rem;
`;

export const H1Hola = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0px;
`;

export const BtnNaves = styled(BtnMore)`
  width: 220px;
  font-size: 1rem;
`;
