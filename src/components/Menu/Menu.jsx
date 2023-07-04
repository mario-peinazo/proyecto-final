import { FondoMenu, ImgLogo, BotonMenu, CajaBotones } from "./Menu.styles";
import logoGrandeHibride from "../../assets/imagenes/logoGrandeHibride.png";
import carrito from "../../assets/imagenes/carrito.png";
import usuarie from "../../assets/imagenes/usuario.png";
import sorpresa from "../../assets/imagenes/sorpresa.png"
import { useNavigate, Link } from "react-router-dom";
import Carrito from "../Carrito/Carrito";
import { estadoCarrito, gatitosSorpresa } from "../../redux/carritoSlide"
import {useSelector, useDispatch } from "react-redux";
import Gatetes from "../Gatetes/Gatetes";


const Menu = () => {

  const dispatch = useDispatch();
  const verGatitos = useSelector((state) => state.carrito.gatitos);
  const verCarrito = useSelector((state) => state.carrito.verCarrito);

  const navigate = useNavigate();
  const pulsadoUsu = () => {
    navigate("/espacio-personal");
  };

  return (
    <>
      <Carrito />
      <Gatetes/>

      <FondoMenu>
        <Link to="/" onClick={() => dispatch(estadoCarrito(false))}>
          <ImgLogo src={logoGrandeHibride} alt="logo HíBRIDE" />
        </Link>
        <CajaBotones>
        <BotonMenu onClick={() => dispatch(gatitosSorpresa(!verGatitos))}>
            <img src={sorpresa} alt="botón sorpresa" />
          </BotonMenu>
          <BotonMenu onClick={() => dispatch(estadoCarrito(!verCarrito))}>
            <img src={carrito} alt="botón carrito" />
          </BotonMenu>
          <BotonMenu onClick={() => {pulsadoUsu(); dispatch(estadoCarrito(false))}}>
            <img src={usuarie} alt="botón espacio personal" />
          </BotonMenu>
        </CajaBotones>
      </FondoMenu>
    </>
  );
};

export default Menu;
