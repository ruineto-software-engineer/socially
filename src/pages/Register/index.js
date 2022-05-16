import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import useApi from "../../hooks/useApi";
import { fireAlert, fireToast } from "../../utils/alerts";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const api = useApi();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if (!password || !password || !email)
      return fireAlert("There are empty fields! Review and try again!");

    if (password !== confirmPassword)
      return fireAlert("Passwords do not match! Try again!");

    try {
      await api.user.register({ name, email, password });

      fireToast("success", "Registration successfully completed!");
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      if (error.response.status === 409) {
        fireAlert("Email is already in use! Try again!");
      } else {
        fireAlert(error.response.data);
      }
    }
  }

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

      <FormContainer onSubmit={(e) => handleSubmit(e)}>
        <InputControl
          type="text"
          placeholder="Name"
          isloading={isLoading ? 1 : undefined}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <InputControl
          type="email"
          placeholder="Email"
          isloading={isLoading ? 1 : undefined}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputControl
          type="password"
          placeholder="Password"
          isloading={isLoading ? 1 : undefined}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <InputControl
          type="password"
          placeholder="Confirm Password"
          isloading={isLoading ? 1 : undefined}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <ButtonControl isloading={isLoading ? 1 : undefined} type="submit">
          {isLoading ? <PulseLoader color="#FFFFFF" size={10} /> : "Sign up"}
        </ButtonControl>
        <CustomizedLink isloading={isLoading ? 1 : undefined} to="/">
          Switch back to log in
        </CustomizedLink>
      </FormContainer>
    </Container>
  );
}
