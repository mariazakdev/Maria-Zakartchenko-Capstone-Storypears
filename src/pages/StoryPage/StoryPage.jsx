import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryReader from '../../components/StoryReader/StoryReader';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

function StoryPage({match}) {
  const [story, setStory] = useState(null);
  const apiURL = process.env.REACT_APP_API_URL;
  const { id: storyId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/stories/${storyId}`)
      .then(response => {
        setStory(response.data);
      })
      .catch(error => {
        console.error('Error fetching story:', error);
      });
  }, [apiURL, storyId]);

  return (
    <div className="App">
 <Header />
 {story ? <StoryReader story={story} /> : <p>Loading...</p>} <Footer />
    </div>
  );
}

export default StoryPage;
