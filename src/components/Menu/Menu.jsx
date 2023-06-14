import logoSW from "../../assets/logoSW.png";
import rrss from "../../assets/rrss.png";
import search from "../../assets/search.png";
import signIn from "../../assets/signIn.png";
import {
  FondoMenu,
  BtnMenu,
  Img,
  BtnRRSS,
  BtnLogo,
  CajaSearchLog,
  MenuSuperior,
  MenuInferior,
} from "./Menu.styles";
import { NavLink } from "react-router-dom";
import InicioSesion from "../InicioSesion/InicioSesion";
import { useState } from "react";

const Menu = () => {

  const [verPopUp, setVerPopUp] = useState(false)

  const changePadre = param => setVerPopUp(param);

  return (
    <>
    <InicioSesion visiblePopUp={verPopUp} onSomeEvent={changePadre}/>  

    <FondoMenu>
      <MenuSuperior>
        <BtnRRSS>
          <Img src={rrss} alt="botones redes sociales" />
        </BtnRRSS>

        <BtnLogo>
          <Img src={logoSW} alt="logo Star Wars" />
        </BtnLogo>

        <CajaSearchLog>
          <BtnMenu>
            <Img src={search} alt="botón search" />
          </BtnMenu>
          <BtnMenu onClick={() => setVerPopUp(true)}>
            <Img src={signIn} alt="botón sign in" />
          </BtnMenu>
        </CajaSearchLog>
      </MenuSuperior>

      <MenuInferior>
        <NavLink to="/">BIENVENIDA</NavLink>
        <NavLink to="/lista-naves">LISTA NAVES</NavLink>
      </MenuInferior>
    </FondoMenu>
    </>
  );
};

export default Menu;
