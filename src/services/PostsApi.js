import api from "./api";

export default class PostsApi {
  create(data, headers) {
    return api.post("/posts", data, headers);
  }
}
