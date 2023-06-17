import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const RutaProtegida = ({children, user}) => {

    if (!user.email) {
        return <Navigate to="/inicio-sesion"/>
    }

    return children
}

RutaProtegida.propTypes = {
    children: PropTypes.func,
    user: PropTypes.object
  };

export default RutaProtegida