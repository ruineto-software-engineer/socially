import api from "./api";

export default class PostsApi {
  getAll(headers) {
    return api.get("/posts", headers);
  }

  create(data, headers) {
    return api.post("/posts", data, headers);
  }
}
