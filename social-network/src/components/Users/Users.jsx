import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/ava.png";
import styles from "./Users.module.css";

const Users = ({
  usersData,
  follow,
  unfollow,
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize) / 100;
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.users}>
      <div className={styles.users__pagination}>
        {pages.map((page) => {
          return (
            <span
              key={page}
              className={
                currentPage === page
                  ? styles.selectedPage
                  : styles.pagination__item
              }
              onClick={() => {
                onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {usersData.map((user) => (
        <div key={user.id}>
          <span>
            <div className={styles.image__holder}>
              <NavLink to={`/profile/${user.id }`}>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  alt={user.name}
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    unfollow(user.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    follow(user.id);
                  }}
                >
                  unFollow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
