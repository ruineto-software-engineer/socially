import api from "./api";

export default class AuthApi {
  login(data) {
    return api.post("/sign-in", data);
  }

  logout(userId) {
    return api.delete(`/logout/${userId}`);
  }
}
