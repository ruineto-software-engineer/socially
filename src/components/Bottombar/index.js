import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useReload from "../../hooks/useReload";
import useApi from "../../hooks/useApi";
import buttonClose from "../../assets/icons/buttonClose.svg";
import buttonHome from "../../assets/icons/buttonHome.svg";
import buttonChat from "../../assets/icons/buttonChat.svg";
import buttonCreate from "../../assets/icons/buttonCreate.svg";
import searchingPerson from "../../assets/icons/searchingPerson.svg";
import buttonProfile from "../../assets/icons/buttonProfile.svg";
import { fireAlert, fireToast } from "../../utils/alerts";
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

export default function Bottombar() {
  const { auth, logout } = useAuth();
  const { reload, setReload } = useReload();
  const api = useApi();
  const [create, setCreate] = useState(false);
  const [urlImage, setUrlImage] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };

  async function handleSubmit(e) {
    e.preventDefault();

    const postData = {
      userId: auth?.userId,
      url: urlImage,
      description,
    };

    if (!urlImage && !description)
      return fireAlert("Fill in at least one of the fields presented!");

    if (urlImage === "")
      postData.url = "https://socially-ruineto-dev.vercel.app/";
    if (description === "") postData.description = "N/A";

    setIsLoading(true);

    try {
      await api.posts.create(postData, headers);

      fireToast("success", "Your post has been created!");
      setReload(!reload);
      setIsLoading(false);
      setCreate(false);
      setUrlImage("");
      setDescription("");
    } catch (error) {
      setIsLoading(false);
      if (error.response.status === 401) {
        Swal.fire({
          title: "Oops...",
          text: "Your session has expired, please login again to access!",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            setCreate(false);
            setUrlImage("");
            setDescription("");
            handleLogout(auth.userId);
          }
        });
      } else {
        if (!auth?.token)
          return fireAlert("You need to be logged in to access!");

        fireAlert(error.response.data);
      }
    }
  }

  async function handleLogout(userId) {
    try {
      await api.auth.logout(userId);

      logout();
      navigate("/");
    } catch (error) {
      fireAlert(error.response.data);
      navigate("/");
    }
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
