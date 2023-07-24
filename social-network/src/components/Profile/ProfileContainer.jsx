import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserProfile } from "../../redux/profileReducer";
import withRouter from "./withRouter";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
  componentDidMount () {
    let userId =this.props.router.params.id;
    if (!userId)  {
      userId = 2;
    }
    this.props.getUserProfile(userId)
  }
  render() {
    if (!this.props.isAuth)  return <Navigate to={'/login'} />
    return (
     <Profile {...this.props}/>
    );
  }
}


const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);


