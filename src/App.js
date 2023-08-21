import "./App.css";
import React, { useEffect, useState }from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import StoryListPage from "./pages/StoryListPage/StoryListPage";
import StoryPromptPage from "./pages/StoryPromptPage/StoryPromptPage";
import StoryWriterPage from "./pages/StoryWriterPage/StoryWriterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import StoryPage from "./pages/StoryPage/StoryPage";
import HomePage from "./pages/HomePage/HomePage";
import ProfileListPage from "./pages/ProfileListPage/ProfileListPage";
import StoryDepotPage from "./pages/StoryDepotPage/StoryDepotPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyProfilePage from "./pages/MyProfilePage/MyProfilePage";
import AuthFailPage from './pages/AuthFailPage/AuthFailPage';
import Nav from "./components/Nav/Nav";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('http://localhost:8080/auth/login/success', {
          withCredentials: true, 
        });

        if (response.status === 200) {
          setUser(response.data.user);
        } else {
          throw new Error('Authentication has failed!');
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, []);

  
  return (
    <main className="App">
      <Router>
       <Nav user={user} />

        <Routes>
       
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/story/prompt" element={<StoryPromptPage />} />
          <Route path="/story/new/:id" element={<StoryWriterPage />} />
          <Route path="/story/:id" element={<StoryPage />} />
          <Route path="/writers" element={<ProfileListPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/story/:id" element={<StoryPage />} />
          <Route path="/stories" 
          element={ user? <StoryListPage /> : <Navigate to ="/login"/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/story/depot" element={<StoryDepotPage />} />
          <Route path="/myprofile" element={<MyProfilePage />} />
          <Route path="auth-fail" element={<AuthFailPage />}/>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <LoginPage />}
          />
        </Routes>
        
      </Router>
    </main>
  );
}

export default App;
