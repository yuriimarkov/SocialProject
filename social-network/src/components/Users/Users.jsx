import React from "react";
import userPhoto from "../../assets/images/ava.png";
import styles from "./Users.module.css";
import axios from "axios";




const Users = ({ usersData, follow, unfollow, setUsers }) => {
  if (usersData.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
       setUsers([...new Set(response.data.items)]);
      });
  }

  return (
    <div className={styles.users}>
      {usersData.map((user) => (
        <div key={user.id}>
          <span>
            <div className={styles.image__holder}>
              <img
                src={user.photos.small != null ? user.photos.small : userPhoto}
                alt={user.name}
              />
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
