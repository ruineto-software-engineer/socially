import UserApi from "../services/UserApi";

export default function useApi() {
  return {
    user: new UserApi(),
  };
}
