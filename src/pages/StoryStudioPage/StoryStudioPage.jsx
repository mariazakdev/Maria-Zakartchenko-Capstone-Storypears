import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryStudio from '../../components/StoryStudio/StoryStudio';
import { addContribution } from '../../services/storyService';

const user ={
  id: 63,
}

function StoryStudioPage() {
  const location = useLocation();
  const selectedHalfStoryData = location.state?.data;

  const handleAddContribution = async (contribution) => {
    try {
      const response = await addContribution(selectedHalfStoryData, user.id, contribution);
      console.log('Successfully updated story:', response.data);
    } catch (error) {
      console.error('Error updating story:', error);
    }
  };

  return (
    <div className="App">
      <StoryStudio 
          storyBranch={selectedHalfStoryData} 
          user={user}
          onzAddContribution={handleAddContribution}
      />
    </div>
  );
}

export default StoryStudioPage;
