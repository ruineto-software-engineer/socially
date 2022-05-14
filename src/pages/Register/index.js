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
