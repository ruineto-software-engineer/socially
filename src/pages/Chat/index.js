import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useApi from "../../hooks/useApi";
import useAuth from "../../hooks/useAuth";
import chatbg from "../../assets/backdrops/chatbg.svg";
import buttonSend from "../../assets/icons/buttonSend.svg";
import buttonBack from "../../assets/icons/buttonBack.svg";
import profileDefaultPicture from "../../assets/backdrops/profileDefaultPicture.png";
import Message from "./Message";
import {
  ChatBackdropsContainer,
  ChatBackdrops,
  Chatbg,
  ChatbgDesktop,
  ButtonBack,
  RecipientContainer,
  RecipientProfileImageContainer,
  RecipientProfileImage,
  RecipientDetails,
  RecipientName,
  RecipientStatus,
  InputControlContainer,
  InputControl,
  ButtonSendContainer,
  ButtonSend,
  ButtonSendContent,
  ChatContainer,
  FeedBack,
} from "./style";
import { fireAlert } from "../../utils/alerts";

export default function Chat() {
  const { auth, logout } = useAuth();
  const api = useApi();
  const { recipientId } = useParams();
  const [status, setStatus] = useState(null);
  const [recipient, setRecipient] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(null);
  const messageScroll = useRef(null);
  const navigate = useNavigate();
  const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };

  useEffect(() => {
    handleStatus();
    handleRecipient();
    handleMessages();
  }, []);

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }

    if (event.key === "Escape") {
      setMessage("");
    }
  };

  async function handleMessages() {
    try {
      const { data } = await api.chat.getMessages(
        auth?.name,
        parseInt(recipientId),
        headers
      );

      setMessages(data);
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

  async function handleSendMessage() {
    const messageData = {
      senderId: auth?.userId,
      recipientId: parseInt(recipientId),
      message,
    };

    try {
      await api.chat.sendMessage(messageData, headers);

      setMessage("");

      messageScroll.current.scrollTo({
        top: messageScroll.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
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

  async function handleStatus() {
    try {
      const { data } = await api.chat.getStatusById(recipientId, headers);

      setStatus(data);
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

  async function handleRecipient() {
    try {
      const { data } = await api.user.getUserById(recipientId, headers);

      setRecipient(data);
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

  const messagesReader = messages?.map((message) => (
    <Message
      key={message.id}
      message={message.message}
      recipient={message.senderId !== auth?.userId}
    />
  ));

  if (!messages) return "Loading...";

  return (
    <div>
      <ChatBackdropsContainer>
        <ChatBackdrops>
          <Chatbg alt="chatbg.svg" src={chatbg} />
          <ChatbgDesktop />
        </ChatBackdrops>

        <ButtonBack
          onClick={() => navigate(`/chats/${auth?.userId}`)}
          alt="buttonBack.svg"
          src={buttonBack}
        />

        <RecipientContainer>
          <RecipientProfileImageContainer />
          <RecipientProfileImage
            alt="profileImage*"
            src={profileDefaultPicture}
          />

          <RecipientDetails>
            <RecipientName>{recipient?.name}</RecipientName>
            <RecipientStatus>{status ? "Online" : "Offline"}</RecipientStatus>
          </RecipientDetails>
        </RecipientContainer>
      </ChatBackdropsContainer>

      <ChatContainer ref={messageScroll}>
        {!messagesReader?.length ? (
          <FeedBack>Send a "Hello" to your contact!</FeedBack>
        ) : (
          messagesReader
        )}
      </ChatContainer>

      <InputControlContainer>
        <ButtonSendContent onClick={() => handleSendMessage()}>
          <ButtonSendContainer />
          <ButtonSend alt="buttonSend.svg" src={buttonSend} />
        </ButtonSendContent>

        <InputControl
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Write a message..."
        />
      </InputControlContainer>
    </div>
  );
}
