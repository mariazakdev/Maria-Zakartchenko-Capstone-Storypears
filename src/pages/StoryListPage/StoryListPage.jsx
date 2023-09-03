import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryList from '../../components/StoryList/StoryList';
import "./StoryListPage.scss";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const apiURL = process.env.REACT_APP_API_URL;

function StoryListPage() {
  const [fullStories, setFullStories] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios
      .get(`${apiURL}/fullstories`)
      .then(response => {
        setFullStories(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching stories:', err);
        setError(err);
        setIsLoading(false);
      });
  }, []);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error loading stories. Please try again later.</div>;
  }
  return (
    <div className='site'>
 <Header />
 <section className='site__content'>

<StoryList fullStories={fullStories} />
 </section>
 <Footer />
    </div>
  );
}

export default StoryListPage;
