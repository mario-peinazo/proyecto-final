import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const RutaProtegida = ({ children, user }) => {
  const carritoState = useSelector((state) => state.carrito.carrito);

  if (user.ruta == 2) {
    if (user.user) {
 return (
      carritoState.length >= 1 ? <Navigate to="/finalizar-compra" /> : <Navigate to="/espacio-personal" />)
    } else {
      return children;
    }
  } else {
    if (!user.user) {
      return <Navigate to="/inicio-sesion" />;
    } else {
      return children;
    }
  }
};

RutaProtegida.propTypes = {
  children: PropTypes.func,
  user: PropTypes.object,
};

export default RutaProtegida;
