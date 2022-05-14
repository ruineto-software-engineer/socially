import rectangle from "../../assets/backdrops/rectangle.svg";
import brandbg from "../../assets/backdrops/brandbg.svg";
import {
  Container,
  BackgoundContainer,
  TitleContainer,
  Subtitle,
  Brand,
} from "../../components/Brand";
import {
  FormContainer,
  InputControl,
  ButtonControl,
  CustomizedLink,
} from "../../components/Form";

export default function Login() {
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
        <InputControl type="text" placeholder="Email" required />
        <InputControl type="password" placeholder="Password" required />

        <ButtonControl type="submit">Sign In</ButtonControl>
        <CustomizedLink to="/register">
          First time? Create an account!
        </CustomizedLink>
      </FormContainer>
    </Container>
  );
}
