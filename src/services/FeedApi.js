import api from "./api";

export default class FeedApi {
  getAll(userId, headers) {
    return api.get(`/feed/${userId}`, headers);
  }
}
