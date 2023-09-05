import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryStudio from '../../components/StoryStudio/StoryStudio';
import { user } from '../../services/authService';


function StoryStudioPage({}) {
  const location = useLocation();
  const selectedHalfStoryData = location.state?.data;
  
  return (
    <div className="App">
      <Header />      
      <StoryStudio 
          storyBranch={selectedHalfStoryData} 
          user={user} 
      />
      <Footer />
    </div>
  );
}

export default StoryStudioPage;
