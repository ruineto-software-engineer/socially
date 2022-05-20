import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useApi from "../../hooks/useApi";
import { fireAlert } from "../../utils/alerts";
import useAuth from "../../hooks/useAuth";
import useReload from "../../hooks/useReload";
import Post from "../../components/Post";
import profilebg from "../../assets/backdrops/profilebg.svg";
import buttonBack from "../../assets/icons/buttonBack.svg";
import profileDefaultPicture from "../../assets/backdrops/profileDefaultPicture.png";
import userPosts from "../../assets/icons/userPosts.svg";
/* import buttonPhotos from "../../assets/icons/buttonPhotos.svg"; */
/* import buttonSaved from "../../assets/icons/buttonSaved.svg"; */
/* import profileSettings from "../../assets/icons/profileSettings.svg"; */
import {
  Container,
  Profilebg,
  ProfileBackdrops,
  ProfileImageContainer,
  ProfileImage,
  ProfileInfo,
  ProfileIdentifier,
  ProfileName,
  ProfileDetails,
  PostsDetails,
  FollowersDetails,
  FollowsDetails,
  ButtonBack,
  UserName,
  UserNickName,
  Title,
  Counter,
  ProfileOptions,
  SelectSession,
  ButtonUserPosts,
  /* ButtonPhotos, */
  /* ButtonSaved, */
  /* ButtonProfileSettings, */
  ButtonFollow,
  LoadedContent,
} from "./style";

export default function Profile() {
  const { userId } = useParams();
  const { auth, logout } = useAuth();
  const { reload } = useReload();
  const api = useApi();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const [metrics, setMetrics] = useState(null);
  const [follow, setFollow] = useState("Follow");
  const navigate = useNavigate();
  const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };

  useEffect(() => {
    handlePosts();
    handleMetrics();
    handleUser();
  }, [reload]);

  async function handleUser() {
    try {
      const { data } = await api.user.getUserById(userId, headers);

      setUser(data);
    } catch (error) {
      if (error.response.status === 401) {
        Swal.fire({
          title: "Oops...",
          text: "Your session has expired, please login again to access!",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            handleLogout(auth.userId);
          }
        });
      } else {
        if (!auth?.token)
          return fireAlert("You need to be logged in to access!");

        if (error.response.status === 404) {
          fireAlert(error.response.data);
          return navigate("/");
        }

        fireAlert(error.response.data);
      }
    }
  }

  async function handlePosts() {
    try {
      const { data } = await api.user.getPosts(auth?.userId, headers);

      setPosts(data);
    } catch (error) {
      if (error.response.status === 401) {
        Swal.fire({
          title: "Oops...",
          text: "Your session has expired, please login again to access!",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            handleLogout(auth.userId);
          }
        });
      } else {
        if (!auth?.token)
          return fireAlert("You need to be logged in to access!");

        fireAlert(error.response.data);
      }
    }
  }

  async function handleMetrics() {
    try {
      const { data } = await api.user.getMetrics(auth?.userId, headers);

      setMetrics(data);
    } catch (error) {
      if (error.response.status === 401) {
        Swal.fire({
          title: "Oops...",
          text: "Your session has expired, please login again to access!",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            handleLogout(auth.userId);
          }
        });
      } else {
        if (!auth?.token)
          return fireAlert("You need to be logged in to access!");

        fireAlert(error.response.data);
      }
    }
  }

  async function handleLogout(userId) {
    try {
      await api.auth.logout(userId);

      logout();
      navigate("/");
    } catch (error) {
      fireAlert(error.response.data);
      navigate("/");
    }
  }

  function handleFollow() {
    if (follow === "Follow") {
      setFollow("Unfollow");
    } else {
      setFollow("Follow");
    }
  }

  const postsReader = posts?.map((post) => (
    <Post
      key={post.id}
      description={post.description}
      url={post.url}
      name={post.user.name}
    />
  ));

  if (!posts || !metrics || !user) return "Loading...";

  return (
    <Container>
      <ProfileBackdrops>
        <Profilebg alt="profilebg.svg" src={profilebg} />
      </ProfileBackdrops>

      <ButtonBack
        onClick={() => navigate("/feed")}
        alt="buttonBack.svg"
        src={buttonBack}
      />

      <ProfileInfo>
        <ProfileIdentifier>
          <ProfileImageContainer />
          <ProfileImage
            style={{
              background: `no-repeat url(${profileDefaultPicture})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          />

          <ProfileName>
            <UserName>{user.name}</UserName>
            <UserNickName>@johndoe</UserNickName>
          </ProfileName>
        </ProfileIdentifier>

        <ProfileDetails>
          <PostsDetails>
            <Title>Posts</Title>
            <Counter>{metrics.posts}</Counter>
          </PostsDetails>

          <FollowersDetails>
            <Title>Followers</Title>
            <Counter>{metrics.followers}</Counter>
          </FollowersDetails>

          <FollowsDetails>
            <Title>Follows</Title>
            <Counter>{metrics.follows}</Counter>
          </FollowsDetails>
        </ProfileDetails>
      </ProfileInfo>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ButtonFollow onClick={() => handleFollow()}>{follow}</ButtonFollow>
      </div>

      <ProfileOptions>
        <SelectSession>
          <ButtonUserPosts alt="userPosts.png" src={userPosts} />
          {/* <ButtonPhotos alt="buttonPhotos.svg" src={buttonPhotos} /> */}
          {/* <ButtonSaved alt="buttonSaved.svg" src={buttonSaved} /> */}
          {/*           
              <ButtonProfileSettings
                alt="profileSettings.svg"
                src={profileSettings}
              /> 
            */}
        </SelectSession>

        <LoadedContent>
          {posts.length !== 0 ? postsReader : "No posts yet..."}
        </LoadedContent>
      </ProfileOptions>
    </Container>
  );
}
