import styled from "styled-components";


export const FondoMenu = styled.div`
  height: 90px;
  position: absolute;
  width: 100vw;
  background-color: #ffef5f;
  border-bottom: 10px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  margin: auto;

  @media (max-width: 830px) {
    height: 80px;
  }
`;

export const ImgLogo = styled.img`
  height: 60px;
  margin-left: 20px;

  @media (max-width: 830px) {
    height: 40px;
    margin-left: 10px;
  }
`;

export const BotonMenu = styled.button`
  padding: 0px 15px;

  img {
    height: 40px;
  }

  @media (max-width: 830px) {
    padding: 0px 10px;
    img {
      height: 30px;
    }
  }
`;

export const CajaBotones = styled.div`
  margin-right: 20px;

  @media (max-width: 830px) {
    margin-right: 10px;
  }
`;
