import api from "./api";

export default class UserApi {
  register(data) {
    return api.post("/sign-up", data);
  }

  getUserById(userId, headers) {
    return api.get(`/users/${userId}`, headers);
  }

  getMetrics(userId, headers) {
    return api.get(`/metrics/${userId}`, headers);
  }

  getPosts(userId, headers) {
    return api.get(`/posts/${userId}`, headers);
  }

  getUsersByName(userName, headers) {
    return api.get(`/users/search/${userName}`, headers);
  }
}
