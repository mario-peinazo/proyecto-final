import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth === true
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
)

GuardedRoute.propTypes = {
    component: PropTypes.object,
    auth: PropTypes.bool
  };

export default GuardedRoute;

