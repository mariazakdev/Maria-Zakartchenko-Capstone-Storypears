import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryDepot from '../../components/StoryDepot/StoryDepot';
function StoryDepotPage() {
  const [halfStories, setHalfStories] = useState([]);

  useEffect(() => {
    fetchHalfStories();
  }, []);

  const fetchHalfStories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/storycontents');
      setHalfStories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching half stories:', error);
    }
  };

  const handleItemClick = (id) => {
    console.log(`Clicked on item with ID: ${id}`);
  };

  return (
    <div >
      <Header />
      <StoryDepot halfStories={halfStories} 
      handleItemClick={handleItemClick} 
      />
      <Footer />
    </div>
  );
}

export default StoryDepotPage;
