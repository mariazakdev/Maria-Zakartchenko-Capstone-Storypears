import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryDepot from '../../components/StoryDepot/StoryDepot';
import { getAllStoryBranches } from '../../services/storyService'; 

function StoryDepotPage() {
  const [branchStories, setBranchStories] = useState([]);

  useEffect(() => {
    fetchBranchStories();
  }, []);

  const fetchBranchStories = async () => {
    try {
      const response = await getAllStoryBranches(); 
      setBranchStories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching half stories:', error);
    }
  };

  const handleItemClick = (id) => {
    console.log(`Clicked on branch item with ID: ${id}`);
  };

  return (
    <div className='site'>
      <div className='site__content'>
      <StoryDepot branchStories={branchStories} handleItemClick={handleItemClick} />
    </div></div>
  );
}

export default StoryDepotPage;
