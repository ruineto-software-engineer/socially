import styled from "styled-components";

const Container = styled.div`
  @media screen and (min-width: 700px) {
    background: radial-gradient(
      89.56% 89.56% at 67.09% 9.5%,
      #ffe1e0 0%,
      #e1f6f4 100%
    );
  }
`;

const ProfileBackdrops = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  position: absolute;

  width: 100%;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const Profilebg = styled.img`
  width: 100%;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const ProfileIdentifier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 300px;
`;

const ProfileName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserName = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;

  color: #000000;
`;

const UserNickName = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #4e4e4e;

  /* visibility: hidden; */
`;

const ProfileDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  gap: 60px;

  margin-top: 70px;

  @media screen and (max-width: 650px) {
    margin-top: 78px;
  }
`;

const PostsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 650px) {
    margin-left: 15px;
  }

  @media screen and (min-width: 700px) {
    width: 90px;
  }
`;

const FollowersDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 700px) {
    width: 90px;
  }
`;

const FollowsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 700px) {
    width: 90px;
  }
`;

const ProfileImageContainer = styled.div`
  border: 1px solid #000000;
  border-radius: 55px;
  transform: rotate(-45deg);

  width: 140px;
  height: 140px;

  background-color: transparent;

  position: absolute;

  margin-top: 40px;
  margin-bottom: 100px;

  @media screen and (min-width: 700px) {
    width: 160px;
    height: 160px;
  }
`;

const ProfileImage = styled.div`
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.25));
  border-radius: 100px;

  width: 125px;
  height: 125px;

  background-color: gray;

  position: relative;

  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 700px) {
    width: 145px;
    height: 145px;
  }
`;

const ButtonBack = styled.img`
  background-color: transparent;
  border: none;

  position: relative;

  cursor: pointer;

  margin: 20px 0 0 20px;
`;

const Title = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #656565;
`;

const Counter = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;

  margin-top: 10px;

  color: #000000;
`;

const ProfileOptions = styled.div`
  padding: 50px 0 130px 0;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SelectSession = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const ButtonUserPosts = styled.img`
  width: 30px;
  height: 30px;

  cursor: pointer;
`;

const ButtonPhotos = styled.img`
  width: 30px;
  height: 30px;

  cursor: pointer;
`;

const ButtonSaved = styled.img`
  width: 30px;
  height: 30px;

  cursor: pointer;
`;

const ButtonProfileSettings = styled.img`
  width: 30px;
  height: 30px;

  cursor: pointer;
`;

const ButtonFollow = styled.button`
  border: none;
  background: #4fa4b3;
  box-shadow: 0px 4px 25px rgb(0 0 0 / 11%);
  border-radius: 39.1416px;

  transition: all 0.5s ease-in-out;

  margin-top: 50px;

  height: 50px;
  width: 200px;

  padding: 20px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;

  color: #ffffff;

  display: ${(props) => (props.userId !== props.authUserId ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: #306976;
  }
`;

const LoadedContent = styled.div`
  text-align: center;
  margin-top: 30px;

  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export {
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
};
