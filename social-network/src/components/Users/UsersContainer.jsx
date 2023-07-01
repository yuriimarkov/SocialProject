import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "./../../redux/usersReducer";
import Users from "./Users";
import UsersC from "./UsersC";

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (usersData) => {
      dispatch(setUsersAC(usersData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersC);
