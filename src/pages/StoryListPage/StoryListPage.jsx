import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryList from '../../components/StoryList/StoryList';
import "./StoryListPage.scss";

const apiURL = process.env.REACT_APP_API_URL;

function StoryListPage() {
  const [fullStories, setFullStories] = useState(null);

  useEffect(() => {
    fetchFullStories();
  }, []);

  const fetchFullStories = async () => {
    try {
      const response = await axios.get(`${apiURL}/storytree`);
      setFullStories(response.data);
    } catch (error) {
      console.error('Error fetching tree stories:', error);
    }
  };

  return (
    <div className='site'>
      <Header />
      <section className='site__content'>
        <StoryList fullStories={fullStories || []} />
      </section>
      <Footer />
    </div>
  );
}

export default StoryListPage;
