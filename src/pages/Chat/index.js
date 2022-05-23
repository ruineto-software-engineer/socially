import { useNavigate, useParams } from "react-router-dom";
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
} from "./style";

export default function Chat() {
  const { auth, logout } = useAuth();
  const { recipientId } = useParams();
  const navigate = useNavigate();

  console.log("recipientId: ", recipientId);

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
            <RecipientName>Charlie Kelly</RecipientName>
            <RecipientStatus>Online</RecipientStatus>
          </RecipientDetails>
        </RecipientContainer>
      </ChatBackdropsContainer>

      <ChatContainer>
        <Message recipient message="Oi" />
        <Message recipient message="Lorem" />
        <Message
          recipient={false}
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque purus ut ex dictum pharetra. Integer eget eleifend lacus. Aliquam erat volutpat. Integer dignissim massa leo. Nunc dignissim feugiat molestie. Duis ipsum orci, suscipit eget ullamcorper sit amet, elementum ac massa. Donec sed consectetur nisl. Pellentesque in quam mi. Duis porta facilisis est, eu suscipit nunc laoreet ac. Nulla cursus odio turpis, eget posuere nisi euismod eget. Aliquam erat volutpat."
        />
        <Message
          recipient={false}
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque purus ut ex dictum pharetra. Integer eget eleifend lacus. Aliquam erat volutpat. Integer dignissim massa leo. Nunc dignissim feugiat molestie. Duis ipsum orci, suscipit eget ullamcorper sit amet, elementum ac massa. Donec sed consectetur nisl. Pellentesque in quam mi. Duis porta facilisis est, eu suscipit nunc laoreet ac. Nulla cursus odio turpis, eget posuere nisi euismod eget. Aliquam erat volutpat."
        />
        <Message
          recipient={false}
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque purus ut ex dictum pharetra. Integer eget eleifend lacus. Aliquam erat volutpat. Integer dignissim massa leo. Nunc dignissim feugiat molestie. Duis ipsum orci, suscipit eget ullamcorper sit amet, elementum ac massa. Donec sed consectetur nisl. Pellentesque in quam mi. Duis porta facilisis est, eu suscipit nunc laoreet ac. Nulla cursus odio turpis, eget posuere nisi euismod eget. Aliquam erat volutpat."
        />
        <Message
          recipient
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque purus ut ex dictum pharetra. Integer eget eleifend lacus. Aliquam erat volutpat. Integer dignissim massa leo. Nunc dignissim feugiat molestie. Duis ipsum orci, suscipit eget ullamcorper sit amet, elementum ac massa. Donec sed consectetur nisl. Pellentesque in quam mi. Duis porta facilisis est, eu suscipit nunc laoreet ac. Nulla cursus odio turpis, eget posuere nisi euismod eget. Aliquam erat volutpat."
        />
        <Message
          recipient
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque purus ut ex dictum pharetra. Integer eget eleifend lacus. Aliquam erat volutpat. Integer dignissim massa leo. Nunc dignissim feugiat molestie. Duis ipsum orci, suscipit eget ullamcorper sit amet, elementum ac massa. Donec sed consectetur nisl. Pellentesque in quam mi. Duis porta facilisis est, eu suscipit nunc laoreet ac. Nulla cursus odio turpis, eget posuere nisi euismod eget. Aliquam erat volutpat."
        />
      </ChatContainer>

      <InputControlContainer>
        <ButtonSendContent>
          <ButtonSendContainer />
          <ButtonSend alt="buttonSend.svg" src={buttonSend} />
        </ButtonSendContent>

        <InputControl placeholder="Write a message..." />
      </InputControlContainer>
    </div>
  );
}
