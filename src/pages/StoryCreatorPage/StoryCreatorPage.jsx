import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StoryCreator from '../../components/StoryCreator/StoryCreator';
import { useLocation } from 'react-router-dom';

function StoryCreatorPage({user}) {
  const [genres, setGenres] = useState([]);
  const [emotions, setEmotions] = useState([]);
  const initialValue = "";
  const [feelingContent, setFeelingContent] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      try {
        const [genreResponse, emotionResponse] = await Promise.all([
          axios.get("http://localhost:8080/genres"),
          axios.get("http://localhost:8080/emotions")
        ]);

        setGenres(genreResponse.data);
        setEmotions(emotionResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const location = useLocation();
  const selectedPromptData = location.state?.data || {};
  const promptContent = selectedPromptData.sentence || '';

  return (
    <div className="App">
      <StoryCreator
        promptData={promptContent}
        feelingData={feelingContent}
        user={user}
        genres={genres}
        emotions={emotions}
      />
    </div>
  );
}

export default StoryCreatorPage;
