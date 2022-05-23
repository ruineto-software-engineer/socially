import { useNavigate } from "react-router-dom";
import profileDefaultPicture from "../../../assets/backdrops/profileDefaultPicture.png";
import {
  SearchedUserCardContainer,
  UserImageContainer,
  UserImage,
  UserName,
} from "./style";

export default function ChatContactCard({ userName, recipientId }) {
  const navigate = useNavigate();

  return (
    <SearchedUserCardContainer onClick={() => navigate(`/chat/${recipientId}`)}>
      <UserImageContainer />
      <UserImage alt="userImage*" src={profileDefaultPicture} />

      <UserName>{userName}</UserName>
    </SearchedUserCardContainer>
  );
}
