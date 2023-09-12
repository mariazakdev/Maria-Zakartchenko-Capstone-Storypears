import "./App.scss";
import Cookies from 'js-cookie';
import React, { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoryListPage from "./pages/StoryListPage/StoryListPage";
import StoryPromptPage from "./pages/StoryPromptPage/StoryPromptPage";
import StoryCreatorPage from "./pages/StoryCreatorPage/StoryCreatorPage";
import StoryStudioPage from "./pages/StoryStudioPage/StoryStudioPage";
import HomePage from "./pages/HomePage/HomePage";
import WriterListPage from "./pages/WriterListPage/WriterListPage";
import WriterProfilePage from "./pages/WriterProfilePage/WriterProfilePage";
import StoryDepotPage from "./pages/StoryDepotPage/StoryDepotPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyProfilePage from "./pages/MyProfilePage/MyProfilePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import StoryPage from "./pages/StoryPage/StoryPage";
import { AuthProvider } from "./context/AuthProvider";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import authService from "./services/authService"; 
function App() {
 

  return (
    <main className="App">
      <AuthProvider>
        <Router>
          <Header  />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/story/prompt" element={<StoryPromptPage />} />
            <Route path="/story/studio/:id" element={<StoryStudioPage user={authService.user} />} />
            <Route path="/story/new/:id" element={<StoryCreatorPage user={authService.user}/>} />
            <Route path="/story/new" element={<StoryCreatorPage user={authService.user} />} />
            <Route path="/storytrees" element={<StoryListPage />} />
            <Route path="/storytrees/:id" element={<StoryPage />} />
            <Route path="/storybranches" element={<StoryDepotPage />} />
            <Route path="/writers" element={<WriterListPage />} />
            <Route path="/writers/:username" element={<WriterProfilePage />} />
            <Route path="/profile" element={<MyProfilePage user={authService.user}/>} />
          </Routes>
          <Footer  />
        </Router>
      </AuthProvider>
    </main>
  );
}

export default App;
