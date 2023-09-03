import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./StoryCreator.scss";
const { v4: uuidv4 } = require("uuid");

function StoryCreator({ promptData, feelingData, user }) {
  const [storyContent, setStoryContent] = useState(
    promptData || feelingData || ""
  );
  const [textAreaContent, setTextAreaContent] = useState(storyContent);
  const [title, setTitle] = useState("");
  const [genreName, setGenreName] = useState("");
  const [genreId, setGenreId] = useState("");
  const [genres, setGenres] = useState([]);
  const [emotionName, setEmotionName] = useState("");
  const [emotionId, setEmotionId] = useState("");
  const [emotions, setEmotions] = useState([]);

  // State variables to control which select is displayed
  const [displayGenreSelect, setDisplayGenreSelect] = useState(true);
  const [displayEmotionSelect, setDisplayEmotionSelect] = useState(false);

  // Ref for textarea
  const textAreaRef = useRef(null);

  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await axios.get("http://localhost:8080/genres");
        setGenres(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    }
    fetchGenres();
  }, []);

  useEffect(() => {
    async function fetchEmotions() {
      try {
        const response = await axios.get("http://localhost:8080/emotions");
        setEmotions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching emotions:", error);
      }
    }
    fetchEmotions();
  }, []);

  const handleEmotionChange = (event) => {
    const selectedEmotionName = event.target.value;
    setEmotionName(selectedEmotionName);
    const selectedEmotion = emotions.find(
      (emotion) => emotion.emotion_name === selectedEmotionName
    );
    if (selectedEmotion) {
      setEmotionId(selectedEmotion.id);
      console.log(selectedEmotion.id);
    }
  };

  const handleGenreChange = (event) => {
    const selectedGenreName = event.target.value;
    setGenreName(selectedGenreName);
    const selectedGenre = genres.find(
      (genre) => genre.genre_name === selectedGenreName
    );
    if (selectedGenre) {
      setGenreId(selectedGenre.id);
      console.log(selectedGenre.id);
    }
  };

  const handleStarterChange = (event) => {
    setTextAreaContent(event.target.value);
  };

  const saveToSessionStorage = () => {
    if (textAreaRef.current) {
      const userContribution = textAreaRef.current.value;
      if (userContribution) {
        sessionStorage.setItem("storyContent", userContribution);
      }
    }
  };

  const getFromSessionStorage = () => {
    const savedContent = sessionStorage.getItem("storyContent");
    return savedContent || "";
  };

  const startHalfStory = async () => {
    const userContribution =
      textAreaRef.current.value || getFromSessionStorage();
    const id = uuidv4();
    const storyId = uuidv4();

    try {
      let postData = {
        id,
        content: userContribution,
        user_id: user.id,
        story_id: storyId,
        title: title,
        timestamp: new Date().toISOString(),
      };

      if (displayGenreSelect) {
        // Only add genre if it's the selected one
        if (genreName.trim() !== "") {
          postData = {
            ...postData,
            genre: genreName,
          };
        }
      } else if (displayEmotionSelect) {
        // Only add emotion if it's the selected one
        if (emotionName.trim() !== "") {
          postData = {
            ...postData,
            emotion: emotionName,
          };
        }
      }

      const response = await axios.post(
        "http://localhost:8080/storycontents",
        postData
      );

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

  const toggleGenreSelect = () => {
    setDisplayGenreSelect(true);
    setDisplayEmotionSelect(false);
  };

  const toggleEmotionSelect = () => {
    setDisplayGenreSelect(false);
    setDisplayEmotionSelect(true);
  };

  return (
    <div className="story-creator-space">
      <div className="storywriter-feeling">
        <h2>CREATOR SPACE</h2>
        <h4>Submit your contribution so another can join and make a pair.</h4>

        <div className="toggle-buttons">
          <button onClick={toggleGenreSelect}>Genre</button>
          <button onClick={toggleEmotionSelect}>Emotion</button>
        </div>

        {displayGenreSelect && (
          <div>
            <h3>
              {user.pen_first_name} {user.pen_last_name}
            </h3>
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
        )}

        {displayEmotionSelect && (
          <div>
            <h3>
              {user.pen_first_name} {user.pen_last_name}
            </h3>
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
                  {emotion.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <label htmlFor="story">Start Typing:</label>
        <br />
        <textarea
          id="story"
          name="story"
          ref={textAreaRef}
          value={textAreaContent}
          onChange={handleStarterChange}
        />
        <input type="button" value="Save" onClick={saveToSessionStorage} />
        <input type="button" value="Add" onClick={startHalfStory} />
        <input type="button" value="Complete" onClick={startHalfStory} />
      </div>
    </div>
  );
}

export default StoryCreator;
