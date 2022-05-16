import AuthApi from "../services/AuthApi";
import UserApi from "../services/UserApi";
import PostsApi from "../services/PostsApi";

export default function useApi() {
  return {
    user: new UserApi(),
    auth: new AuthApi(),
    posts: new PostsApi(),
  };
}
