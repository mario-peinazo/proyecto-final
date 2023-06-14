import styled from "styled-components";

export const FondoMenu = styled.div`
  max-width: 100vw;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px 100px;
  border-bottom: 0.2px solid white;
`;

export const MenuSuperior = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MenuInferior = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  gap: 60px;
  padding-left: 14px;
`;

export const BtnRRSS = styled.button`
  width: 234px;
  height: fit-content;
  padding: 0px;
  margin-top: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const BtnMenu = styled.button`
  width: 95px;
  height: fit-content;
  padding: 0px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const CajaSearchLog = styled.div`
  width: 210px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const BtnLogo = styled.button`
  width: 200px;
  height: fit-content;
  padding: 0px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
