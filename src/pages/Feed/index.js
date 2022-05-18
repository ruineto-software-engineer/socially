import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useApi from "../../hooks/useApi";
import useAuth from "../../hooks/useAuth";
import { fireAlert } from "../../utils/alerts";

export default function Feed() {
  const { auth, logout } = useAuth();
  const api = useApi();
  const navigate = useNavigate();
  const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };

  useEffect(() => {
    if (!auth?.token) {
      navigate("/");
    }

    handlePosts();
    // eslint-disable-next-line
  }, []);

  async function handlePosts() {
    try {
      await api.posts.getAll(headers);
    } catch (error) {
      if (error.response.status === 401) {
        Swal.fire({
          title: "Oops...",
          text: "Your session has expired, please login again to access!",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
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

  return (
    <>
      <p>{`I'm in Feed page, my name is ${auth?.name}`}</p>
      <br />
      <button onClick={() => handleLogout(auth.userId)} type="button">
        Logout
      </button>
      <button
        onClick={() => navigate(`/profile/${auth.userId}/posts`)}
        type="button"
      >
        Profile
      </button>
    </>
  );
}
