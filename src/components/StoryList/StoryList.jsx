import Avatar from "../Avatar/Avatar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StoryList() {
  const [storyTitles, setStorytitles] = useState([]);

  useEffect(() => {
    fetchStoryTitles();
  }, []);

  async function fetchStoryTitles() {
    try {
      const response = await axios.get('https://shortstories-api.onrender.com/stories');
      setStorytitles(response.data);
    } catch (error) {
      console.error('Error fetching stories:', error);
    }
  }

  return (
    <div>
      <h2>The Pear Tree Stories</h2>
      <ul>
        {storyTitles.map(story => (
          <li key={story._id}>
            {story.title} <span>with <Avatar className='avatar__image-sm' /></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoryList;