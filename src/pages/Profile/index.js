import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import profilebg from "../../assets/backdrops/profilebg.svg";
import buttonBack from "../../assets/icons/buttonBack.svg";
import buttonPhotos from "../../assets/icons/buttonPhotos.svg";
import buttonSaved from "../../assets/icons/buttonSaved.svg";
import profileSettings from "../../assets/icons/profileSettings.svg";
import userPosts from "../../assets/icons/userPosts.svg";
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
  ButtonPhotos,
  ButtonSaved,
  ButtonProfileSettings,
  ButtonFollow,
  LoadedContent,
} from "./style";

export default function Profile() {
  const { userId } = useParams();
  const { auth } = useAuth();
  const [follow, setFollow] = useState("Follow");
  const navigate = useNavigate();

  console.log("userId:", userId);

  function handleFollow() {
    if (follow === "Follow") {
      setFollow("Unfollow");
    } else {
      setFollow("Follow");
    }
  }

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
          <ProfileImage />

          <ProfileName>
            <UserName>{auth.name}</UserName>
            <UserNickName>@johndoe</UserNickName>
          </ProfileName>
        </ProfileIdentifier>

        <ProfileDetails>
          <PostsDetails>
            <Title>Posts</Title>
            <Counter>0</Counter>
          </PostsDetails>

          <FollowersDetails>
            <Title>Followers</Title>
            <Counter>0</Counter>
          </FollowersDetails>

          <FollowsDetails>
            <Title>Follows</Title>
            <Counter>0</Counter>
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

        <LoadedContent>No posts yet...</LoadedContent>
      </ProfileOptions>
    </Container>
  );
}
