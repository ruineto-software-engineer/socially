import { useNavigate } from "react-router-dom";
import profileDefaultPicture from "../../../assets/backdrops/profileDefaultPicture.png";
import {
  SearchedUserCardContainer,
  UserImageContainer,
  UserImage,
  UserName,
} from "./style";

export default function SearchedUserCard({ userName, userId }) {
  const navigate = useNavigate();

  return (
    <SearchedUserCardContainer
      onClick={() => navigate(`/profile/${userId}/posts`)}
    >
      <UserImageContainer />
      <UserImage alt="userImage*" src={profileDefaultPicture} />

      <UserName>{userName}</UserName>
    </SearchedUserCardContainer>
  );
}
