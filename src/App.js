import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, ReloadProvider } from "./contexts";
import { Login, Register, Feed, Profile, Chats, Chat, Search } from "./pages";
import Bottombar from "./components/Bottombar";

export default function App() {
  return (
    <AuthProvider>
      <ReloadProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile/:userId/posts" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/chats/:userId" element={<Chats />} />
            <Route path="/chat/:recipientId" element={<Chat />} />
          </Routes>
          <Bottombar />
        </BrowserRouter>
      </ReloadProvider>
    </AuthProvider>
  );
}
