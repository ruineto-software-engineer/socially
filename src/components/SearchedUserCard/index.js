import profileDefaultPicture from "../../assets/backdrops/profileDefaultPicture.png";
import {
  SearchedUserCardContainer,
  UserImageContainer,
  UserImage,
  UserName,
} from "./style";

export default function SearchedUserCard() {
  return (
    <SearchedUserCardContainer>
      <UserImageContainer />
      <UserImage alt="userImage*" src={profileDefaultPicture} />

      <UserName>Malena Tudi</UserName>
    </SearchedUserCardContainer>
  );
}
