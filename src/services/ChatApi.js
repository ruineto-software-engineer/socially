import api from "./api";

export default class ChatApi {
  getAllContacts(userId, headers) {
    return api.get(`/chat/${userId}`, headers);
  }

  getContactsByName(userId, userName, headers) {
    return api.get(`/chat/search/${userId}?userName=${userName}`, headers);
  }
}
