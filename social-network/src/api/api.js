import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "9767cff7-0c3d-467d-a903-7bf0c78b73c5",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const userApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, {});
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const profileApi = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};

export const authApi = {
  me() {
    return instance.get(`auth/me`);
  },
};
