import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import StoryListPage from './pages/StoryListPage/StoryListPage';
import StoryPromptPage from './pages/StoryPromptPage/StoryPromptPage';
import StoryWriterPage from './pages/StoryWriterPage/StoryWriterPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import StoryPage from './pages/StoryPage/StoryPage';
import HomePage from './pages/HomePage/HomePage';
import ProfileListPage from './pages/ProfileListPage/ProfileListPage'
import ProfileAddPage from './pages/ProfileAddPage/ProfileAddPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/story/prompt" element={<StoryPromptPage />} />
        <Route path="/story/new" element={<StoryWriterPage />} />
        <Route path="/profile" element={<ProfileListPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/story/:id" element={<StoryPage />} /> 
        <Route path="/stories" element={<StoryListPage />} />
        <Route path="/create-profile" element={<ProfileAddPage />} />

      </Routes>
    </Router>
  );
}


export default App;