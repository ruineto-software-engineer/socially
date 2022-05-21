import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;

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
  justify-content: flex-start;

  position: absolute;

  width: 100%;

  z-index: -1;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const Feedbg = styled.img`
  width: 50%;
`;

const Content = styled.div`
  padding: 0 20px 120px 20px;

  z-index: 1;

  width: 100vw;
  height: ${(props) => props.postsLength <= 1 && "100vh"};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 50px 0 50px 0;
`;

const BrandTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: #000000;
`;

const ButtonLogout = styled.img`
  width: 30px;
  height: 25px;

  cursor: pointer;
`;

const TitlePage = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;

  color: #000000;

  margin-bottom: 30px;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export {
  Container,
  ProfileBackdrops,
  Feedbg,
  Content,
  Header,
  BrandTitle,
  ButtonLogout,
  TitlePage,
  PostsContainer,
};
