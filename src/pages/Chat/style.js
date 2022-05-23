import styled from "styled-components";

const ChatBackdropsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 1;
`;

const ChatBackdrops = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  background-color: #ffffff;
`;

const Chatbg = styled.img`
  width: 95%;

  margin-top: 10px;

  border: 1px solid white;

  @media screen and (min-width: 420px) {
    display: none;
  }
`;

const ChatbgDesktop = styled.div`
  width: 100%;
  height: 230px;

  border-radius: 25px;

  margin: 10px;

  background: radial-gradient(
    89.56% 89.56% at 67.09% 9.5%,
    #ffe1e0 0%,
    #e1f6f4 100%
  );

  @media screen and (max-width: 700px) {
    height: 280px;
  }

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

const ButtonBack = styled.img`
  position: absolute;
  top: 70px;
  left: 40px;

  cursor: pointer;

  @media screen and (min-width: 700px) {
    top: 40px;
  }
`;

const RecipientContainer = styled.div`
  position: absolute;
  top: 130px;
  left: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 700px) {
    top: 100px;
  }
`;

const RecipientProfileImageContainer = styled.div`
  border: 1px solid #000000;
  border-radius: 48px;
  transform: rotate(135deg);

  margin-left: 45px;

  width: 105px;
  height: 105px;

  position: relative;
`;

const RecipientProfileImage = styled.img`
  width: 100px;

  border-radius: 100%;

  position: absolute;
  top: 2px;
  left: 48px;
`;

const RecipientDetails = styled.div`
  margin-left: 30px;

  width: max-content;
`;

const RecipientName = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
`;

const RecipientStatus = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12.8px;
  line-height: 19px;

  color: #656565;
`;

const InputControlContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;

  padding: 30px;
`;

const InputControl = styled.input`
  width: 100%;
  height: 80px;

  border: none;

  padding: 30px 95px 30px 30px;

  background: #ffffff;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.13);
  border-radius: 39.1416px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: #656565;

  &:hover {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;

    color: #656565;
  }
`;

const ButtonSendContent = styled.div`
  position: absolute;
  top: 38px;
  right: 45px;
  z-index: 1;

  cursor: pointer;

  transition: all 0.5s ease-in-out;

  background: #000000;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 23px;
  transform: matrix(0.71, -0.69, 0.73, 0.71, 0, 0);

  &:hover {
    background: #656565;
  }

  &:active {
    background: #000000;
  }
`;

const ButtonSendContainer = styled.div`
  width: 62px;
  height: 62px;

  position: relative;
`;

const ButtonSend = styled.img`
  position: absolute;
  top: 19px;
  left: 17px;

  z-index: 2;

  transform: rotate(45deg);
`;

const ChatContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;

  padding: 300px 10px 122px 10px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }
`;

export {
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
};
