import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts";
import { Login, Register, Feed, Profile, Chats, Search } from "./pages";
import Bottombar from "./components/Bottombar";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile/:userId/posts" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/chats/:userId" element={<Chats />} />
        </Routes>
        <Bottombar />
      </BrowserRouter>
    </AuthProvider>
  );
}
