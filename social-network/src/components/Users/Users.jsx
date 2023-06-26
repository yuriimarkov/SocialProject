import React from "react";

const Users = ({ usersData, follow, unfollow }) => {
  return (
    <div>
      {usersData.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img src="" alt="" />
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
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
