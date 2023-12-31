import React from "react";
import { connect } from "react-redux";
import { getAuthUserData } from "./../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    id: state.auth.userId,
    isLoading: state.auth.isLoading,
  };
};

export default connect(mapStateToProps,  {getAuthUserData} )(HeaderContainer);
