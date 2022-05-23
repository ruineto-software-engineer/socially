import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { fireAlert } from "../../utils/alerts";
import useApi from "../../hooks/useApi";
import useAuth from "../../hooks/useAuth";
import ChatContactCard from "./ChatContactCard";
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

export default function Chats() {
  const { userId } = useParams();
  const { auth, logout } = useAuth();
  const api = useApi();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState(null);
  const [filteredContacts, setFilteredContacts] = useState(null);
  const [length, setLength] = useState(null);
  const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };

  useEffect(() => {
    handleContacts();
  }, []);

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      handleContactsFilter();
    }

    if (event.key === "Escape") {
      setFilteredContacts(null);
      setInputValue("");
      handleContacts();
    }
  };

  async function handleContacts() {
    try {
      const { data } = await api.chat.getAllContacts(userId, headers);

      setContacts(data);
      setLength(data.length);
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
          return fireAlert("User not found!");
        }

        fireAlert(error.response.data);
      }
    }
  }

  async function handleContactsFilter() {
    try {
      const { data } = await api.chat.getContactsByName(
        userId,
        inputValue.toLowerCase(),
        headers
      );

      setFilteredContacts(data);
      setLength(data.length);
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
          return fireAlert(
            "To search for a contact correctly you must fill in the search field!"
          );
        }

        if (error.response.status === 404) {
          return fireAlert("Contact not found!");
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

  const contactsReader = contacts?.map((contact) => (
    <ChatContactCard
      key={contact.id}
      userName={contact.name}
      recipientId={contact.id}
    />
  ));

  const filteredContactsReader = filteredContacts?.map((contact) => (
    <ChatContactCard
      key={contact.id}
      userName={contact.name}
      recipientId={contact.id}
    />
  ));

  if (!contacts) return "Loading...";

  return (
    <Container>
      <ProfileBackdrops>
        <Chatbg alt="feedbg.svg" src={feedbg} />
      </ProfileBackdrops>

      <Content contactsLength={length}>
        <ButtonBack
          onClick={() => navigate("/feed")}
          alt="buttonBack.svg"
          src={buttonBack}
        />

        <TitlePage>Messages</TitlePage>

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
          placeholder="Search for contacts"
        />

        <UsersContainer>
          {!contacts?.length
            ? "No contacts added yet, to be able to send messages follow another user!"
            : !filteredContacts?.length
            ? contactsReader
            : filteredContactsReader}
        </UsersContainer>
      </Content>
    </Container>
  );
}
