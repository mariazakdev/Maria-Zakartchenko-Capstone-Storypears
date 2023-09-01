import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import "./StoryStudio.scss";

function StoryStudio({ halfStoryData, user, updateHalfStoriesList }) {
  const [halfStoryContent, setHalfStoryContent] = useState('');
  const navigate = useNavigate();
  const handleHalfStoryChange = (event) => {
    setHalfStoryContent(event.target.value);
  };

  const saveToSessionStorage = () => {
    sessionStorage.setItem('storyContent', halfStoryContent);
  };

  const startHalfStory = async () => {
    const userContribution = halfStoryContent || sessionStorage.getItem('storyContent');
    const id = uuidv4();
    const storyId = uuidv4();
  
    try {
      const response = await axios.post(
        'http://localhost:8080/storycontents',
        {
          id,
          content: userContribution,
          user_id: 64,
          story_id: halfStoryData.story_id,
          emotion: halfStoryData.emotion,
          genre: halfStoryData.genre,
          title: halfStoryData.title,
        }
      );
  
      console.log('Successfully submitted half story:', response.data);
      navigate('/'); 
    } catch (error) {
      console.error('Error submitting half story:', error);
    }
  };

  return (
    <div className="storywriter">
      <div className="storywriter-add">
        <h2>Continue this story seed</h2>
        <h4>Submit your contribution so another can join and make a pair.</h4>
        <form className="storywriter-pear__storyInputs">
          <h3>
            {user.pen_first_name} {user.pen_last_name}
          </h3>

          <label htmlFor="title">Title:</label>
          <h3>{halfStoryData.title}</h3>
          <label htmlFor="title">Genre / Emotion:</label>
          <h3>{halfStoryData.genre || null}</h3>
          <h3>{halfStoryData.emotion || null}</h3>

          <label htmlFor="story">Start Typing:</label>
          <br />
          <p className="storyInputes-prevStory">{halfStoryData.content}</p>
          <textarea
            id="story"
            name="story"
            placeholder="Add to the writing"
            onChange={handleHalfStoryChange}
          />
          <input type="button" value="Save" onClick={saveToSessionStorage} />
          <input type="button" value="Submit" onClick={startHalfStory} /> {/* Changed input type to button */}
        </form>
      </div>
    </div>
  );
}

export default StoryStudio;
