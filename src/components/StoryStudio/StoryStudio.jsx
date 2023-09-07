import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import "./StoryStudio.scss";

function StoryStudio({ user, storyBranch }) {
  const [userContribution, setUserContribution] = useState('');
  const navigate = useNavigate();

  const handleStoryChange = (event) => {
    setUserContribution(event.target.value);
  };

  const saveToSessionStorage = () => {
    sessionStorage.setItem('storyContent', userContribution);
  };

  const addToHalfStory = async () => {
    const contribution = userContribution || sessionStorage.getItem('storyContent');
    const updatedContent = [
      ...JSON.parse(storyBranch.content),
      {
        user_id: user.id,
        text: contribution
      }
    ];

    try {
      const response = await axios.post('http://localhost:8080/storybranch', {
        ...storyBranch,
        content: JSON.stringify(updatedContent)
      });

      console.log('Successfully updated story:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error updating story:', error);
    }
  };

  const finishStory = () => {
    navigate('/'); // will update later, want to add title into url first
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
          <h3>{storyBranch.title}</h3>
          <label htmlFor="genre">Genre / Emotion:</label>
          <h3>{storyBranch.genre || null}</h3>
          <h3>{storyBranch.emotion || null}</h3>

          <label htmlFor="story">Previous Stories:</label>
          {JSON.parse(storyBranch.content).map((content) => ( 
            <div key={content.user_id}> 
              <p>{content.text}</p>
            </div>
          ))}

          <textarea 
            placeholder="Continue the story..."
            value={userContribution}
            onChange={handleStoryChange}
          />
          <input type="button" value="Save" onClick={saveToSessionStorage} />
          <input type="button" value="Add" onClick={addToHalfStory} />
          <input type="button" value="Complete" onClick={finishStory} />
        </form>
      </div>
    </div>
  );
}

export default StoryStudio;
