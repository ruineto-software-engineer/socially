import api from "./api";

export default class UserApi {
  register(data) {
    return api.post("/sign-up", data);
  }
}
