import { FondoCarrito, BtnCarro, CajaProd, BtnCerrar, BtnFin } from "./Carrito.style";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {sumarCant, restarCant, borrarProd, estadoCarrito} from '../../redux/carritoSlide';
import { useEffect, useState } from "react";
import cerrar from "../../assets/imagenes/cerrar.png";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
  const carritoState = useSelector((state) => state.carrito.carrito);
  const precioState = useSelector((state) => state.carrito.precioTotal);
  const verCarrito = useSelector((state) => state.carrito.verCarrito);
  const dispatch = useDispatch();
  const [verBtn, setVerBtn] = useState(false);

  const navigate = useNavigate();

  const pulsado = () => {
     navigate('/inicio-sesion')
  }

  useEffect(() => {
    carritoState.length >= 1 ? setVerBtn(true) : setVerBtn(false);
  }, [carritoState]);

  return (
    <FondoCarrito visible={verCarrito}>
      <BtnCerrar onClick={() => dispatch(estadoCarrito(false))}><img src={cerrar}/></BtnCerrar>

        {carritoState.map((valor, index) => (
          <>
            <CajaProd>
              <div>  <b>{valor.color}:</b> {valor.cantidad}</div>
              <div>
              <BtnCarro onClick={() => dispatch(sumarCant(index))}>➕</BtnCarro>
              <BtnCarro onClick={() => dispatch(restarCant(index))}>➖</BtnCarro>
              <BtnCarro onClick={() => dispatch(borrarProd(index))}>✖️</BtnCarro>
              </div>
            </CajaProd>
          </>
        ))}

        {verBtn ? <p>Precio total: {precioState}€</p> : null}
        {verBtn ? <BtnFin onClick={() => {pulsado(); dispatch(estadoCarrito(false))}}>Finalizar compra</BtnFin> : <b>Carrito vacío</b>}
    </FondoCarrito>
  );
};

Carrito.propTypes = {
  visible: PropTypes.bool,
};

export default Carrito;
