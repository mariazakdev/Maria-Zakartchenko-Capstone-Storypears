import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryCreatorSpace from '../../components/StoryCreatorSpace/StoryCreatorSpace';

function StoryWriterPage() {
  const location = useLocation();
  const passedData = JSON.stringify(location.state?.data) || '';

  return (
    <div className="App">
      <Header />
      <StoryCreatorSpace passedData={passedData} />
      <Footer />
    </div>
  );
}

export default StoryWriterPage;
