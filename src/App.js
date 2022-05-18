import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts";
import { Login, Register, Feed, Profile } from "./pages";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile/:userId/posts" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
