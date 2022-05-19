import styled from "styled-components";

const BottonBar = styled.div`
  display: ${(props) =>
    props.pathname === "/" || props.pathname === "/register" ? "none" : "flex"};
  align-items: center;
  justify-content: center;
  gap: 50px;

  position: fixed;
  bottom: 0;
  left: 0;

  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);

  background-color: #ffffff;

  width: 100vw;
  height: 80px;

  @media screen and (max-width: 650px) {
    gap: 40px;
  }
`;

const ButtonHome = styled.img`
  width: 25px;
  height: 25px;

  align-self: baseline;
  margin-top: 15px;

  cursor: pointer;
`;

const ButtonChat = styled.img`
  width: 25px;
  height: 25px;

  align-self: baseline;
  margin-top: 15px;

  cursor: pointer;
`;

const ButtonCreateContainer = styled.div`
  background-color: #000000;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 23px;
  transform: rotate(-45deg);

  transition: all 0.5s ease-in-out;

  margin-bottom: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;

  cursor: pointer;

  &:hover {
    background-color: #656565;
  }
`;

const ButtonCreate = styled.img`
  width: 21px;
  height: 21px;

  transform: rotate(45deg);
`;

const ButtonSearch = styled.img`
  width: 26px;
  height: 25px;

  align-self: baseline;
  margin-top: 15px;

  cursor: pointer;
`;

const ButtonProfile = styled.img`
  width: 25px;
  height: 25px;

  align-self: baseline;
  margin-top: 15px;

  cursor: pointer;
`;

const CreatePostContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: ${(props) => (props.create ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

const ButtonClose = styled.img`
  width: 20px;
  height: 20px;

  align-self: end;

  cursor: pointer;

  @media screen and (min-width: 700px) {
    width: 25px;
    height: 25px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  border-radius: 5px;

  background-color: #ffffff;

  width: 90%;

  padding: 20px;

  @media screen and (min-width: 700px) {
    width: 50%;
  }
`;

const InputControl = styled.input`
  border: none;
  background: ${(props) => (props.isloading ? "#d3d3d3" : "#ffffff")};
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.11);
  border-radius: 5px;

  transition: all 0.5s ease-in-out;

  pointer-events: ${(props) => (props.isloading ? "none" : "all")};

  height: 50px;
  width: 100%;

  padding: 20px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;

  color: #656565;

  &::placeholder {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;

    color: #656565;
  }
`;

const ButtonControl = styled.button`
  border: none;
  background: ${(props) => (props.isloading ? "#306976" : "#4fa4b3")};
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.11);
  border-radius: 5px;

  transition: all 0.5s ease-in-out;

  height: 50px;
  width: 100%;

  padding: 20px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;

  pointer-events: ${(props) => (props.isloading ? "none" : "all")};

  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: #306976;
  }
`;

const TextAreaControl = styled.textarea`
  width: 100%;
  height: 120px;

  border: none;
  background: ${(props) => (props.isloading ? "#d3d3d3" : "#ffffff")};
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.11);
  border-radius: 5px;

  resize: none;

  transition: all 0.5s ease-in-out;

  pointer-events: ${(props) => (props.isloading ? "none" : "all")};

  padding: 20px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;

  color: #656565;

  &::placeholder {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;

    color: #656565;
  }
`;

const FormTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;

  text-align: center;

  margin-bottom: 15px;

  color: #656565;
`;

export {
  BottonBar,
  ButtonHome,
  ButtonChat,
  ButtonCreate,
  ButtonSearch,
  ButtonProfile,
  ButtonCreateContainer,
  CreatePostContainer,
  ButtonClose,
  FormContainer,
  InputControl,
  ButtonControl,
  TextAreaControl,
  FormTitle,
};
