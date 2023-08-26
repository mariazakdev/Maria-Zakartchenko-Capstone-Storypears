import React, { useEffect, useState } from 'react';
import { getStories, getUsers } from '../../axios'; 

function StoryList() {
  const [stories, setStories] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch stories and users when the component mounts
    getStories()
      .then((data) => {
        setStories(data);
      })
      .catch((error) => {
        console.error('Error fetching stories:', error);
      });

    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  // Function to get user names by user ID
  const getUserNamesByIds = (userIds) => {
    return userIds.map((userId) => {
      const user = users.find((user) => user.id === userId);
      return user ? user.name : 'Unknown User';
    });
  };

  return (
    <div>
      <h1>Story List</h1>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <h2>{story.title}</h2>
            <p>Authors: {getUserNamesByIds(story.userIds).join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoryList;
