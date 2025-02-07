import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import TopicsPage from "./pages/TopicsPage";

function App() {
  const [userData, setUserData] = useState({ name: "", email: "" });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setUserData={setUserData} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage userData={userData} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/topics" element={<TopicsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
