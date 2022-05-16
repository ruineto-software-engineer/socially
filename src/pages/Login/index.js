import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import useApi from "../../hooks/useApi";
import useAuth from "../../hooks/useAuth";
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
import { fireAlert, fireToast } from "../../utils/alerts";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const api = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth") !== null) navigate("/feed");
  }, [navigate]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!password || !email)
      return fireAlert("There are empty fields! Review and try again!");

    setIsLoading(true);

    try {
      const { data } = await api.auth.login({
        email,
        password,
      });

      fireToast("success", "Login successfully done!");
      setIsLoading(false);
      login(data);
      navigate("/feed");
    } catch (error) {
      setIsLoading(false);
      if (error.response.status === 401) {
        fireAlert("Incorrect email or password! Try again!");
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

        <ButtonControl isloading={isLoading ? 1 : undefined} type="submit">
          {isLoading ? <PulseLoader color="#FFFFFF" size={10} /> : "Sign In"}
        </ButtonControl>
        <CustomizedLink isloading={isLoading ? 1 : undefined} to="/register">
          First time? Create an account!
        </CustomizedLink>
      </FormContainer>
    </Container>
  );
}
