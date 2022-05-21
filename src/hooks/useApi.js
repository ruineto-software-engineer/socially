import AuthApi from "../services/AuthApi";
import UserApi from "../services/UserApi";
import PostsApi from "../services/PostsApi";
import FeedApi from "../services/FeedApi";

export default function useApi() {
  return {
    user: new UserApi(),
    auth: new AuthApi(),
    posts: new PostsApi(),
    feed: new FeedApi(),
  };
}
