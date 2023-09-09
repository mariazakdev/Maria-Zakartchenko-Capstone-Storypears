import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryStarter from "../../components/StoryStarter/StoryStarter";
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function StoryPromptPage() {
  const [prompts, setPrompts] = useState([]);
  const [feelings, setFeelings] = useState([]);

  const fetchPrompts = async () => {
      try {
          const response = await axios.get('http://localhost:8080/prompts');
          setPrompts(response.data);
          console.log(response.data);
      } catch (error) {
          console.error('Error fetching prompts sentences:', error);
      }
  };

  const fetchFeelings = async () => {
      try {
          const response = await axios.get('http://localhost:8080/feelings');
          setFeelings(response.data);
          console.log(response.data);
      } catch (error) {
          console.error('Error fetching feeling expressions:', error);
      }
  };

  useEffect(() => {
      fetchPrompts();
      fetchFeelings();
  }, []);

  return (
      <div className="site">
          <Header />
          <div className='site__content'>
              <StoryStarter 
                  prompts={prompts} 
                  feelings={feelings}
                  fetchPrompts={fetchPrompts}
                  fetchFeelings={fetchFeelings}
              />
              <Footer />
          </div>
      </div>
  );
}

export default StoryPromptPage;
