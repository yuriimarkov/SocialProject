import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profileReducer";
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
    this.props.getStatus(userId)
  }
  render() {
    if (!this.props.isAuth)  return <Navigate to={'/login'} />
    return (
     <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    );
  }
}


const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);


