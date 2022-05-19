import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import useAuth from "../../hooks/useAuth";
import buttonClose from "../../assets/icons/buttonClose.svg";
import buttonHome from "../../assets/icons/buttonHome.svg";
import buttonChat from "../../assets/icons/buttonChat.svg";
import buttonCreate from "../../assets/icons/buttonCreate.svg";
import searchingPerson from "../../assets/icons/searchingPerson.svg";
import buttonProfile from "../../assets/icons/buttonProfile.svg";
import {
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
} from "./style";
import { fireAlert } from "../../utils/alerts";

export default function Bottombar() {
  const { auth } = useAuth();
  const [create, setCreate] = useState(false);
  const [urlImage, setUrlImage] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!urlImage && !description)
      return fireAlert("Fill in at least one of the fields presented!");

    setCreate(false);
    setUrlImage("");
    setDescription("");
  }

  function handleCreatePost() {
    if (create) {
      setCreate(false);
    } else {
      setCreate(true);
    }
  }

  return (
    <>
      <BottonBar pathname={location.pathname}>
        <ButtonHome onClick={() => navigate("/feed")} src={buttonHome} />
        <ButtonChat
          onClick={() => navigate(`/chats/${auth?.userId}`)}
          src={buttonChat}
        />

        <ButtonCreateContainer onClick={() => handleCreatePost()}>
          <ButtonCreate src={buttonCreate} />
        </ButtonCreateContainer>

        <ButtonSearch
          onClick={() => navigate("/search")}
          src={searchingPerson}
        />
        <ButtonProfile
          onClick={() => navigate(`/profile/${auth.userId}/posts`)}
          src={buttonProfile}
        />
      </BottonBar>

      <CreatePostContainer create={create ? 1 : undefined}>
        <FormContainer onSubmit={(e) => handleSubmit(e)}>
          <ButtonClose
            alt="buttonClose.svg"
            src={buttonClose}
            onClick={() => handleCreatePost()}
          />

          <FormTitle>
            What do you want to share with the community today?
          </FormTitle>
          <InputControl
            type="text"
            placeholder="https://..."
            isloading={isLoading ? 1 : undefined}
            value={urlImage}
            onChange={(e) => setUrlImage(e.target.value)}
          />
          <TextAreaControl
            type="text"
            placeholder="Your description here..."
            isloading={isLoading ? 1 : undefined}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <ButtonControl isloading={isLoading ? 1 : undefined} type="submit">
            {isLoading ? <PulseLoader color="#FFFFFF" size={10} /> : "Publish"}
          </ButtonControl>
        </FormContainer>
      </CreatePostContainer>
    </>
  );
}
