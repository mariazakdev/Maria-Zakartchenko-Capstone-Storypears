import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryList from '../../components/StoryList/StoryList';
import "./StoryListPage.scss";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const apiURL = process.env.REACT_APP_API_URL;

function StoryListPage() {
  const [fullStories, setFullStories] = useState([]);
  
  useEffect(() => {
    fetchFullStories();
  }, []);

  const fetchFullStories = async () => {
    try {
      const response = await axios.get(`${apiURL}/storytree`);
      setFullStories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching tree stories:', error);
    }
  };

  const handleItemClick = (id) => {
    console.log(`Clicked tree item with ID: ${id}`);
  };

  return (
    <div className='site'>
 <Header />
 <section className='site__content'>

<StoryList fullStories={fullStories} handleItemClick={handleItemClick}/>
 </section>
 <Footer />
    </div>
  );
}

export default StoryListPage;
