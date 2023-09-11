import React, { useState, useRef } from "react";
import axios from "axios";
import "./StoryCreator.scss";
import { createStoryBranch } from '../../services/storyService';

const { v4: uuidv4 } = require("uuid");

function StoryCreator({ promptData, feelingData, user, genres, emotions }) {
  const [storyContent, setStoryContent] = useState(promptData || feelingData || "");
  const [textAreaContent, setTextAreaContent] = useState(storyContent);
  const [title, setTitle] = useState("");
  const [genreName, setGenreName] = useState("");
  const [emotionName, setEmotionName] = useState("");

  // State variables to control which select is displayed
  const [displayGenreSelect, setDisplayGenreSelect] = useState(true);

  // Ref for textarea
  const textAreaRef = useRef(null);

  const handleEmotionChange = (event) => {
    const selectedEmotionName = event.target.value;
    setEmotionName(selectedEmotionName);
  };

  const handleGenreChange = (event) => {
    const selectedGenreName = event.target.value;
    setGenreName(selectedGenreName);
  };

  const handleStarterChange = (event) => {
    setTextAreaContent(event.target.value);
  };

  const saveToSessionStorage = () => {
    const userContribution = textAreaRef.current.value;
    if (userContribution) {
      sessionStorage.setItem("storyContent", userContribution);
    }
  };

  const startHalfStory = async () => {
    const userContribution = textAreaRef.current.value || sessionStorage.getItem("storyContent");

    const postData = {
      title: title,
      content: JSON.stringify([{
        user_id: user.id,
        text: userContribution,
      }]),
      genre: displayGenreSelect && genreName.trim() !== "" ? genreName : null,
      emotion: !displayGenreSelect && emotionName.trim() !== "" ? emotionName : null
    };

    try {
      const response = await createStoryBranch(postData);
      console.log("Successfully submitted half story:", response.data);

      // Reset the form
      setTextAreaContent("");
      setTitle("");
      setGenreName("");
      setEmotionName("");
      textAreaRef.current.value = "";

      // Clear session storage
      sessionStorage.removeItem("storyContent");
    } catch (error) {
      console.error("Error submitting half story:", error);
    }
  };

  const toggleSelect = () => {
    setDisplayGenreSelect(!displayGenreSelect);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
<div className="story-creator-space">
  <div className="storywriter-feeling">
    <h2 className="storywriter__title">CREATOR SPACE</h2>
    <h4 className="storywriter__subtitle">Submit your contribution so another can join and make a pair.</h4>
    <div className="storywriter-feeling__input-group"> 
    <label >Your Name</label>

    <h3 className="storywriter__heading">
      {user.pen_first_name} {user.pen_last_name}
    </h3>
    </div>
    <div className="storywriter-feeling__input-group">
      <label htmlFor="title" className="storywriter-feeling__label">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={handleTitleChange}
        required
        className="storywriter-feeling__input"
      />
    </div>

    <div className="toggle-buttons toggle-buttons--toggler">
      <label >Genre or Emotion</label>
      <button className="toggle-buttons__button" onClick={toggleSelect}>
        {displayGenreSelect ? 'Emotion' : 'Genre'}
      </button>
    </div>
    
    {displayGenreSelect ? (
      <div className="storywriter-feeling__input-group">
        <label htmlFor="genre" className="storywriter-feeling__label">Genre</label>
        <select
          id="genre"
          name="genre"
          value={genreName}
          onChange={handleGenreChange}
          required
          className="storywriter-feeling__select"
        >
          <option value="">Select a Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.genre_name}>
              {genre.genre_name}
            </option>
          ))}
        </select>
      </div>
    ) : (
      <div className="storywriter-feeling__input-group">
        <label htmlFor="emotion" className="storywriter-feeling__label">Emotion</label>
        <select
          id="emotion"
          name="emotion"
          value={emotionName}
          onChange={handleEmotionChange}
          required
          className="storywriter-feeling__select"
        >
          <option value="">Select an Emotion</option>
          {emotions.map((emotion) => (
            <option key={emotion.id} value={emotion.name}>
              {emotion.name}
            </option>
          ))}
        </select>
      </div>
    )}

    <textarea
      id="story"
      name="story"
      ref={textAreaRef}
      value={textAreaContent}
      onChange={handleStarterChange}
      className="storywriter-feeling__textarea"
    />
    <input type="button" value="Save" onClick={saveToSessionStorage} className="storywriter-feeling__button" />
    <input type="button" value="Add" onClick={startHalfStory} className="storywriter-feeling__button" />
  </div>
</div>
  );
}

export default StoryCreator;
