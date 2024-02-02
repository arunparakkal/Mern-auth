import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Profile from "./assets/pages/Profile";
import SignIn from "./assets/pages/SignIn";
import SignUp from "./assets/pages/SignUp";
import About from "./assets/pages/About";
import Header from "./combonents/Header";

export default function App() {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
