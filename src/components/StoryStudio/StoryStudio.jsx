import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./StoryStudio.scss";

function StoryStudio({ user, storyBranch, addContribution, createStoryTree }) {
  const [userContribution, setUserContribution] = useState('');
  const [errors, setErrors] = useState({});

  const isStoryValid = (story) => {
    return story.trim().length >= 1 && story.trim().length <= 2000;
  };

  const navigate = useNavigate();

  const handleStoryChange = (event) => {
    setUserContribution(event.target.value);
  };

  const saveToSessionStorage = () => {
    sessionStorage.setItem('storyContent', userContribution);
  };

  const addToHalfStory = async () => {
    if (!isStoryValid(userContribution)) {
      setErrors({ userContribution: "Story must be between 1 and 2000 characters." });
      return;
    }

    const contribution = {
      user_id: user.id,
      text: userContribution || sessionStorage.getItem('storyContent')
    };
    await addContribution(contribution);
    navigate('/home');
  };

  const finishStory = async () => {
    if (!isStoryValid(userContribution)) {
      setErrors({ userContribution: "Story must be between 1 and 2000 characters." });
      return;
    }

    const combinedContent = [
      ...JSON.parse(storyBranch.content || "[]"),
      {
        user_id: user.id,
        text: userContribution || sessionStorage.getItem('storyContent')
      }
    ];

    const finishedStoryData = {
      title: storyBranch.title,
      genre: storyBranch.genre,
      emotion: storyBranch.emotion,
      content: JSON.stringify(combinedContent),
      branch_id: storyBranch.id
    };

    try {
      const response = await createStoryTree(finishedStoryData);
      console.log('Successfully created story tree:', response.data);
      navigate('/home');
    } catch (error) {
      console.error('Error creating story tree:', error);
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
          <h3>{storyBranch.title}</h3>
          <label htmlFor="genre">Genre / Emotion:</label>
          <h3>{storyBranch.genre || null}</h3>
          <h3>{storyBranch.emotion || null}</h3>

          <label htmlFor="story">Previous Stories:</label>
          {
            storyBranch.content && Array.isArray(JSON.parse(storyBranch.content))
              ? JSON.parse(storyBranch.content).map((contentItem, idx) => (
                <div key={idx}>
                  <p>{contentItem.text}</p>
                </div>
              )) : null
          }

          {errors.userContribution && (
            <div className="error-message">
              {errors.userContribution}
            </div>
          )}

          <textarea
            placeholder="Continue the story..."
            value={userContribution}
            onChange={handleStoryChange}
          />
          <input type="button" value="Add" onClick={addToHalfStory} disabled={!isStoryValid(userContribution)} />
          <input type="button" value="Complete" onClick={finishStory} disabled={!isStoryValid(userContribution)} />
        </form>
      </div>
    </div>
  );
}

export default StoryStudio;
