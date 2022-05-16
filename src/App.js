import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts";
import { Login, Register, Feed } from "./pages";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
