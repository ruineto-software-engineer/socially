import styled from "styled-components";

const Container = styled.div`
  width: 100vw;

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
  justify-content: flex-end;

  position: absolute;

  width: 100%;

  z-index: -1;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const Chatbg = styled.img`
  transform: scaleX(-1);
  width: 50%;
`;

const Content = styled.div`
  padding: 20px 20px 0 20px;

  z-index: 1;

  width: 100vw;
  height: ${(props) =>
    (props.usersLength <= 3 || !props.usersLength) && "100vh"};
`;

const ButtonBack = styled.img`
  cursor: pointer;

  margin-bottom: 50px;
`;

const TitlePage = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;

  margin-bottom: 30px;

  color: #000000;
`;

const InputFilterControl = styled.input`
  width: 100%;
  height: 50px;

  border: none;

  padding: 20px 20px 20px 50px;
  margin-bottom: 30px;

  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: #c4c4c4;

  &:hover {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;

    color: #c4c4c4;
  }

  @media screen and (min-width: 700px) {
    width: 400px;
  }
`;

const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  width: 100%;

  padding-bottom: 120px;
`;

export {
  Container,
  ProfileBackdrops,
  Chatbg,
  Content,
  ButtonBack,
  TitlePage,
  InputFilterControl,
  UsersContainer,
};
