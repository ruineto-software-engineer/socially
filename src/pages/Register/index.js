import styled from "styled-components";
import { Link } from "react-router-dom";
import rectangle from "../../assets/backdrops/rectangle.svg";
import brandbg from "../../assets/backdrops/brandbg.svg";

export default function Register() {
  return (
    <Container>
      <BackgoundContainer>
        <img id="rectangle" alt="rectangle.svg" src={rectangle} />

        <TitleContainer>
          <Subtitle>Welcome to</Subtitle>
          <Brand>Socially</Brand>

          <img id="brandbg" alt="brandbg.svg" src={brandbg} />
        </TitleContainer>
      </BackgoundContainer>

      <FormContainer>
        <InputControl type="text" placeholder="Name" required />
        <InputControl type="text" placeholder="Email" required />
        <InputControl type="password" placeholder="Password" required />
        <InputControl type="password" placeholder="Confirm Password" required />

        <ButtonControl type="submit">Sign Up</ButtonControl>
        <CustomizedLink to="/">Switch back to log in</CustomizedLink>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  @media screen and (min-width: 700px) {
    background: radial-gradient(
      89.56% 89.56% at 67.09% 9.5%,
      #ffe1e0 0%,
      #e1f6f4 100%
    );
  }
`;

const BackgoundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;

  @media screen and (max-width: 650px) {
    img {
      width: 80%;

      margin-top: -45px;
    }
  }

  @media screen and (min-width: 700px) {
    img#rectangle {
      display: none;
    }
  }
`;

const TitleContainer = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  margin-top: 25px;

  img {
    width: 150px;

    margin-top: 10px;
  }
`;

const Subtitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #4e4e4e;
`;

const Brand = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 39px;
  line-height: 58px;

  color: #000000;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  z-index: 2;

  width: 80%;

  margin-top: 240px;

  @media screen and (min-width: 700px) {
    width: 50%;
  }
`;

const InputControl = styled.input`
  border: none;
  background: #ffffff;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.11);
  border-radius: 39.1416px;

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
  background: #4fa4b3;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.11);
  border-radius: 39.1416px;

  transition: all 0.5s ease-in-out;

  height: 50px;
  width: 100%;

  padding: 20px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;

  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: #306976;
  }
`;

const CustomizedLink = styled(Link)`
  font-size: 15px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #d4993d;

  transition: all 0.5s ease-in-out;

  &:hover {
    color: #9e6c22;
  }

  text-decoration-line: underline;
  text-align: center;
`;
