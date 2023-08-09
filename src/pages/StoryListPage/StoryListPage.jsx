import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryList from '../../components/StoryList/StoryList';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StoryListPage() {
  const [stories, setStories] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;
  useEffect(() => {

    axios
      .get(`http://localhost:8080/stories`)
      .then(response => {
        setStories(response.data);
      })
      .catch(error => {
        console.error('Error fetching stories:', error);
      });
  }, [])
console.log(stories);
  return (
    <div>
 <Header />
 {stories.length > 0 ? <StoryList stories={stories} /> : <p>Loading...</p>}
 <Footer />
    </div>
  );
}

export default StoryListPage;
