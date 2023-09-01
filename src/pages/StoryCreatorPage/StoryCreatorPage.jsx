import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryCreator from '../../components/StoryCreator/StoryCreator';

function StoryCreatorPage() {
  const location = useLocation();
  const selectedPromptData = location.state?.data || {};
  const selectedFeelingData = location.state?.data || {};

  const promptContent = selectedPromptData.sentence || '';
  const feelingContent = selectedFeelingData.sentence || '';
  
  const user = {
    id: 63,
    pen_first_name: "Billy",
    pen_last_name: "Writer"
  };

  return (
    <div className="App">
      <Header />      
        <StoryCreator promptData={promptContent} feelingData={feelingContent} user={user} />
      <Footer />
    </div>
  );
}

export default StoryCreatorPage;
