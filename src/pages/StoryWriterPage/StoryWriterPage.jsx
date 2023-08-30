import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryCreatorSpace from '../../components/StoryCreatorSpace/StoryCreatorSpace';

function StoryWriterPage() {
  const location = useLocation();
  const selectedPromptData = location.state?.data || {}; // Data from prompts
  const selectedHalfStoryData = location.state?.data || {}; // Data from half stories
  const promptContent = selectedPromptData.sentence || '';
  const halfStoryContent = selectedHalfStoryData.story || '';


  const user ={
    id: 69,
    }
  

  return (
    <div className="App">
      <Header />
      <StoryCreatorSpace promptData={promptContent} halfStoryData={halfStoryContent} user={user} />
      <Footer />
    </div>
  );
}

export default StoryWriterPage;
