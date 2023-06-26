const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  usersData: [
    {
      id: 1,
      followed: false,
      fullName: "Serg K",
      status: "I'm boss",
      location: { city: "Slavuta", country: "Ukraine" },
    },
    {
      id: 2,
      followed: false,
      fullName: "Oleg K",
      status: "I'm boss",
      location: { city: "Rivne", country: "Ukraine" },
    },
    {
      id: 3,
      followed: true,
      fullName: "Act K",
      status: "I'm boss",
      location: { city: "Kiev", country: "Ukraine" },
    },
    {
      id: 4,
      followed: false,
      fullName: "Vados K",
      status: "I'm boss",
      location: { city: "Ternopil", country: "Ukraine" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      }
    case SET_USERS:
      return { ...state, usersData: [...state.usersData, ...action.usersData] };
    default:
      return state;
  }
};
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (usersData) => ({ type: SET_USERS, usersData });

export default usersReducer;
