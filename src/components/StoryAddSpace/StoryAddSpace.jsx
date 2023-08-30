import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StoryAddSpace.scss";
const { v4: uuidv4 } = require("uuid");

function StoryAddSpace({ promptData, halfStoryData, user }) {

  const [storyContent, setStoryContent] = useState(promptData);
  const [halfStoryContent, setHalfStoryContent] = useState(halfStoryData);
  const [textAreaContent, setTextAreaContent] = useState("");
  const [title, setTitle] = useState("");
  const [genreName, setGenreName] = useState("");
  const [genreId, setGenreId] = useState("");
  const [genres, setGenres] = useState([]);
  const [emotionName, setEmotionName] = useState("");
  const [emotionId, setEmotionId] = useState("");
  const [emotions, setEmotions] = useState([]);

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
    setStoryContent(event.target.value);
  };

  const handleHalfStoryChange = (event) => {
    setHalfStoryContent(event.target.value);
  };

 

  const handleTextAreaChange = (event) => {
    setTextAreaContent(event.target.value);
  };
  // Functions handling when a user saves story in session but not submits.
  const saveToSessionStorage = () => {
    if (storyContent) {
      sessionStorage.setItem("storyContent", storyContent);
    }
  };

  const getFromSessionStorage = () => {
    const savedContent = sessionStorage.getItem("storyContent");
    return savedContent || "";
  };

  console.log(user);

  const startHalfStory = async () => {
    const userContribution = textAreaContent || getFromSessionStorage();
    const id = uuidv4();
    const storyId = uuidv4();

    try {
      if (genreName.trim() !== "" && title.trim() !== "") {
        const response = await axios.post(
          "http://localhost:8080/storycontents",
          {
            id,
            content: userContribution,
            user_id: user.id,
            story_id: storyId,
            genre_id: genreId, 
            genre: genreName,
            title: title,
            timestamp: new Date().toISOString(),
          }
        );

        console.log("Successfully submitted half story:", response.data);
      } else {
        console.error("Genre and title cannot be empty.");
      }
    } catch (error) {
      console.error("Error submitting half story:", error);
    }
  };


  return (
    <div className="storywriter">
     
      {halfStoryContent ? (
        <div className="storywriter-add">
          <h2>Continue this story seed</h2>
          <h4>Complete this writing or ask for the previous writer to continue.</h4>
  
          <form className="storywriter-add__storyInputs">
            <h3>{user.pen_first_name} {user.pen_last_name}</h3>
  
            <label htmlFor="story">Start Typing:</label>
            <br />
            <textarea
              id="story"
              name="story"
              value={halfStoryContent} 
              onChange={handleHalfStoryChange}
            />
            <input type="button" value="Save" onClick={saveToSessionStorage} />
            <input 
              type="submit" 
              value="Submit" 
              onClick={startHalfStory}
            />
          </form>
        </div>
      ) : null} 
  
      {storyContent && !halfStoryContent ? (
        <div className="storywriter-add">
          <h2>Continue this story seed</h2>
          <h4>Submit your contribution so another can join and make a pair.</h4>
          <form className="storywriter-pear__storyInputs">
            <h3>{user.pen_first_name} {user.pen_last_name}</h3>
  
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
  
            <label htmlFor="genre">Genre:</label>
            <select
                id="genre"
                name="genre"
                required
                value={genreName} 
                onChange={handleGenreChange}
              >
                <option value="">Select a Genre</option>
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.genre_name}>
                    {genre.genre_name}
                  </option>
                ))}
              </select>
  
            <label htmlFor="story">Start Typing:</label>
            <br />
            <textarea
              id="story"
              name="story"
              value={storyContent} 
              onChange={handleStarterChange} 
            />
            <input type="button" value="Save" onClick={saveToSessionStorage} />
            <input 
              type="submit" 
              value="Submit" 
              onClick={startHalfStory}
            />
          </form>
        </div>
      ) : null}



      {/* Start new story */}
      {!storyContent && !halfStoryContent ? (
        <div className="storywriter-pear">
          <h2>Seed your story.</h2>
          <h4>
            Start writing so that another writer joins in and you become a pair.
          </h4>
          <form className="storywriter-pear__storyInputs">
            <h3>
              {user.pen_first_name} {user.pen_last_name}
            </h3>

            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

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
            <label htmlFor="story">Start Typing:</label>
            <br />
            <textarea
              id="story"
              name="story"
              onChange={handleTextAreaChange}
              value={textAreaContent}
            />
            <input type="button" value="Save" onClick={saveToSessionStorage} />
            <input type="submit" value="Submit" onClick={startHalfStory} />
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default StoryAddSpace;
