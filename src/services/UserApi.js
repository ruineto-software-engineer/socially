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

  followUser(followData, headers) {
    return api.post("/follow", followData, headers);
  }

  unfollowUser(unfollowData, headers) {
    return api.post("/unfollow", unfollowData, headers);
  }

  getFollowsStatus(followData, headers) {
    return api.get(
      `/follow/status?find=${JSON.stringify(followData)}`,
      headers
    );
  }
}
