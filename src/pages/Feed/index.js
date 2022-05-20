import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useApi from "../../hooks/useApi";
import useAuth from "../../hooks/useAuth";
import { fireAlert } from "../../utils/alerts";
import feedbg from "../../assets/backdrops/feedbg.svg";
import buttonLogout from "../../assets/icons/buttonLogout.svg";
import Post from "../../components/Post";
import {
  Container,
  ProfileBackdrops,
  Feedbg,
  Content,
  Header,
  BrandTitle,
  ButtonLogout,
  TitlePage,
  PostsContainer,
} from "./style";

export default function Feed() {
  const { auth, logout } = useAuth();
  const api = useApi();
  const navigate = useNavigate();
  const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };

  useEffect(() => {
    if (!auth?.token) {
      navigate("/");
    }

    handlePosts();
    // eslint-disable-next-line
  }, []);

  async function handlePosts() {
    try {
      await api.posts.getAll(headers);
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

  return (
    <Container>
      <ProfileBackdrops>
        <Feedbg alt="feedbg.svg" src={feedbg} />
      </ProfileBackdrops>

      <Content>
        <Header>
          <BrandTitle>Socially</BrandTitle>

          <ButtonLogout
            onClick={() => handleLogout(auth?.userId)}
            alt="buttonLogout.svg"
            src={buttonLogout}
          />
        </Header>

        <TitlePage>Feed</TitlePage>

        <PostsContainer>
          No activity here yet... Follow some users to interact!
        </PostsContainer>
      </Content>
    </Container>
  );
}
