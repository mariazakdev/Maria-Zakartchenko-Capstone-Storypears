import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryStudio from '../../components/StoryStudio/StoryStudio';

function StoryStudioPage({ updateHalfStoriesList }) {
  const location = useLocation();
  const selectedHalfStoryData = location.state?.data || [];

  const user = {
    id: 61,
    pen_first_name: "Billy",
    pen_last_name: "Writer"
  };

  return (
    <div className="App">
      <Header />      
      <StoryStudio halfStoryGroup={selectedHalfStoryData} user={user} updateHalfStoriesList={updateHalfStoriesList} />
      <Footer />
    </div>
  );
}

export default StoryStudioPage;
