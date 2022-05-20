import { useNavigate } from "react-router-dom";
import SearchedUserCard from "../../components/SearchedUserCard";
import feedbg from "../../assets/backdrops/feedbg.svg";
import buttonBack from "../../assets/icons/buttonBack.svg";
import search from "../../assets/icons/search.svg";
import {
  Container,
  ProfileBackdrops,
  Chatbg,
  Content,
  ButtonBack,
  TitlePage,
  InputFilterControl,
  UsersContainer,
} from "./style";

export default function Search() {
  const navigate = useNavigate();

  return (
    <Container>
      <ProfileBackdrops>
        <Chatbg alt="feedbg.svg" src={feedbg} />
      </ProfileBackdrops>

      <Content>
        <ButtonBack
          onClick={() => navigate("/feed")}
          alt="buttonBack.svg"
          src={buttonBack}
        />

        <TitlePage>Search</TitlePage>

        <InputFilterControl
          style={{
            backgroundImage: `url(${search})`,
            backgroundPosition: "17px 14px",
            backgroundRepeat: "no-repeat",
            backgroundColor: "white",
          }}
          placeholder="Search for users"
        />

        <UsersContainer>
          <SearchedUserCard />
        </UsersContainer>
      </Content>
    </Container>
  );
}
