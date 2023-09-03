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
    axios
      .get(`${apiURL}/fullstories`)
      .then(response => {
        setFullStories(response.data);
      })
      .catch(error => {
        console.error('Error fetching stories:', error);
      });
  }, [])
console.log(fullStories);



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
