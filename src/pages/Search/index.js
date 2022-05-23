import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fireAlert } from "../../utils/alerts";
import useApi from "../../hooks/useApi";
import useAuth from "../../hooks/useAuth";
import SearchedUserCard from "./SearchedUserCard";
import feedbg from "../../assets/backdrops/feedbg.svg";
import buttonBack from "../../assets/icons/buttonBack.svg";
import search from "../../assets/icons/search.svg";
import {
  Container,
  ProfileBackdrops,
  Chatbg,
  Content,
  ButtonBack,
  TitlePage,
  InputFilterControl,
  UsersContainer,
} from "./style";

export default function Search() {
  const { auth, logout } = useAuth();
  const api = useApi();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState(null);
  const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      handleUsers();
    }

    if (event.key === "Escape") {
      setUsers(null);
      setInputValue("");
    }
  };

  async function handleUsers() {
    try {
      const { data } = await api.user.getUsersByName(inputValue, headers);

      setUsers(data);
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

        if (error.response.status === 400) {
          setUsers(null);
          setInputValue("");
          return fireAlert(
            "To search for a user correctly you must fill in the search field!"
          );
        }

        if (error.response.status === 404) {
          setUsers(null);
          setInputValue("");
          return fireAlert("User not found!");
        }

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
        <Chatbg alt="feedbg.svg" src={feedbg} />
      </ProfileBackdrops>

      <Content usersLength={users?.length}>
        <ButtonBack
          onClick={() => navigate("/feed")}
          alt="buttonBack.svg"
          src={buttonBack}
        />

        <TitlePage>Search</TitlePage>

        <InputFilterControl
          style={{
            backgroundImage: `url(${search})`,
            backgroundPosition: "17px 14px",
            backgroundRepeat: "no-repeat",
            backgroundColor: "white",
          }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for users"
        />

        <UsersContainer>
          {!users?.length
            ? "Search for other users by typing their name in the search field above!"
            : users?.map((user) => (
                <SearchedUserCard
                  key={user.id}
                  userName={user.name}
                  userId={user.id}
                />
              ))}
        </UsersContainer>
      </Content>
    </Container>
  );
}
