import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "./../../redux/usersReducer";
import Users from "./Users";
import UsersC from "./UsersC";

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setUsersTotalCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersC);
