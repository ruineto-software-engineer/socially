import api from "./api";

export default class ChatApi {
  getAllContacts(userId, headers) {
    return api.get(`/chats/${userId}`, headers);
  }

  getContactsByName(userId, userName, headers) {
    return api.get(`/chats/search/${userId}?userName=${userName}`, headers);
  }

  getStatusById(userId, headers) {
    return api.get(`/chat/status/${userId}`, headers);
  }

  sendMessage(messageData, headers) {
    return api.post("/chat/send", messageData, headers);
  }

  getMessages(senderName, recipientId, headers) {
    return api.get(
      `/chat/messages/${recipientId}?senderName=${senderName}`,
      headers
    );
  }
}
