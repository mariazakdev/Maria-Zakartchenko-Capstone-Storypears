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
      complete_story: 'default_value',
      completed_at: new Date().toISOString(),
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

  return (
    <div className="story-creator-space">
      <div className="storywriter-feeling">
        <h2>CREATOR SPACE</h2>
        <h4>Submit your contribution so another can join and make a pair.</h4>

        <div className="toggle-buttons toggle-buttons-toggler">
          <button className="toggle-buttons toggle-buttons-toggler"onClick={toggleSelect}>{displayGenreSelect ? 'Emotion' : 'Genre'}</button>
        </div>

        <h3>
          {user.pen_first_name} {user.pen_last_name}
        </h3>

        {displayGenreSelect ? (
          <div>
            <label htmlFor="genre">Genre:</label>
            <select
              id="genre"
              name="genre"
              value={genreName}
              onChange={handleGenreChange}
              required
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
          <div>
            <label htmlFor="emotion">Emotion:</label>
            <select
              id="emotion"
              name="emotion"
              value={emotionName}
              onChange={handleEmotionChange}
              required
            >
              <option value="">Select an Emotion</option>
              {emotions.map((emotion) => (
                <option key={emotion.id} value={emotion.emotion_name}>
                  {emotion.emotion_name}
                </option>
              ))}
            </select>
          </div>
        )}

        <label htmlFor="story">Start Typing:</label>
        <textarea
          id="story"
          name="story"
          ref={textAreaRef}
          value={textAreaContent}
          onChange={handleStarterChange}
        />
        <input type="button" value="Save" onClick={saveToSessionStorage} />
        <input type="button" value="Add" onClick={startHalfStory} />
      </div>
    </div>
  );
}

export default StoryCreator;
