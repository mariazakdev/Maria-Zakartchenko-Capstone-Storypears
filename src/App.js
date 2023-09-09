import "./App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
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

const jwt = process.env.REACT_APP_JWT_COOKIE_NAME;
const Url = process.env.REACT_APP_API_URL;
const authUrl = process.env.REACT_APP_AUTH_URL;

function App() {


  return ( 
<main className="App">
  <AuthProvider>
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Other routes */}
        <Route path="/story/prompt" element={<StoryPromptPage />} />
        <Route path="/story/studio/:id" element={<StoryStudioPage />} />
        <Route path="/story/new/:id" element={<StoryCreatorPage />} />
        <Route path="/story/new" element={<StoryCreatorPage />} />
         <Route path="/storytree" element={<StoryListPage />} />
         {/* url based on story title */}
         <Route path="/storytree/:id" element={<StoryPage />} />

        <Route path="/stories/depot" element={<StoryDepotPage />} /> 


        <Route path="/writers" element={<WriterListPage />} />
        <Route path="/writers/:username" element={<WriterProfilePage />} />
       
        {/* Single User Visible */}
        <Route path="/profile" element={<MyProfilePage />} />
      </Routes>
    </Router> 
  </AuthProvider>
</main>
  );
}

export default App;

