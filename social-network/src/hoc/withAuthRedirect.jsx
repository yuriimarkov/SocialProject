import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
  })

export const withAuthRedirect = (Component) => {
  const redirectComponent = (props) => {
    if (!props.isAuth) return <Navigate to="/login" />;
    return <Component {...props} />;
  };

 const connectedAuthComponent = connect(mapStateToProps)(redirectComponent)

  return connectedAuthComponent;
};
