import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryCreatorSpace from '../../components/StoryCreatorSpace/StoryCreatorSpace';

function StoryWriterPage() {
  const location = useLocation();
  const passedData = location.state?.data || {};
  const content = passedData.sentence || '';

  return (
    <div className="App">
      {/* <Header /> */}
      <StoryCreatorSpace passedData={content} />
      <Footer />
    </div>
  );
}

export default StoryWriterPage;
