import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import "./StoryStudio.scss";

function StoryStudio({  halfStoryGroup, user, updateHalfStoriesList }) {

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

    try {
      const response = await axios.post('http://localhost:8080/storycontents', {
        id: uuidv4(),
        content: userContribution,
        user_id: user.id, 
        story_id: halfStoryGroup[0].story_id,
        emotion: halfStoryGroup[0].emotion,
        genre: halfStoryGroup[0].genre,
        title: halfStoryGroup[0].title,
      });
  
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
                <h3>{halfStoryGroup[0].title}</h3>
                <label htmlFor="title">Genre / Emotion:</label>
                <h3>{halfStoryGroup[0].genre || null}</h3>
                <h3>{halfStoryGroup[0].emotion || null}</h3>

                <label htmlFor="story">Previous Stories:</label>
                {halfStoryGroup.map((story, index) => (
                    <p key={index} className="storyInputes-prevStory">{story.content}</p>
                ))}

               
                <textarea
                    id="story"
                    name="story"
                    placeholder="Add to the writing"
                    onChange={handleHalfStoryChange}
                />
                <input type="button" value="Save" onClick={saveToSessionStorage} />
                <input type="button" value="Submit" onClick={startHalfStory} />
            </form>
        </div>
    </div>
);
}

export default StoryStudio;
