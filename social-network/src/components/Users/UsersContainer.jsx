import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from "./../../redux/usersReducer";

import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers([...new Set(response.data.items)]);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers([...new Set(response.data.items)]);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        usersData={this.props.usersData}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
      />
    );
  }
}

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
      dispatch(setCurrentPageAC(pageNumber));
    },
    setUsersTotalCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
