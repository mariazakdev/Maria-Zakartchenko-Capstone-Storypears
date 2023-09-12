import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';

import StoryCreatorSpace from '../../components/StoryCreatorSpace/StoryCreatorSpace';

function StoryWriterPage({user}) {
  const location = useLocation();
  const selectedPromptData = location.state?.data || {}; // Data from prompts
  const selectedHalfStoryData = location.state?.data || {}; // Data from half stories
  const promptContent = selectedPromptData.sentence || '';
  const halfStoryContent = selectedHalfStoryData.story || '';

  return (
    <div className="App">
      <StoryCreatorSpace promptData={promptContent} halfStoryData={halfStoryContent} user={user} />
    </div>
  );
}

export default StoryWriterPage;

