import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryCreatorSpace from '../../components/StoryCreatorSpace/StoryCreatorSpace';
import StoryAddSpace from "../../components/StoryAddSpace/StoryAddSpace"

function StoryWriterPage() {
  const location = useLocation();
  const selectedPromptData = location.state?.data || {};
  const selectedFeelingData = location.state?.data || {};
  const selectedHalfStoryData = location.state?.data || {};
  const promptContent = selectedPromptData.sentence || '';
  const feelingContent = selectedFeelingData.sentence || '';
  const halfStoryContent = selectedHalfStoryData.story || '';

  const user = {
    id: 69,
    pen_first_name: "Billy",
    pen_last_name: "Writer"
  };

  return (
    <div className="App">
      <Header />
      {halfStoryContent ? (
        <StoryAddSpace halfStoryData={halfStoryContent} selectedHalfStoryData={selectedHalfStoryData} user={user} />
      ) : (
        <StoryCreatorSpace promptData={promptContent} feelingData={feelingContent} user={user} />
      )}
      <Footer />
    </div>
  );
}

export default StoryWriterPage;
