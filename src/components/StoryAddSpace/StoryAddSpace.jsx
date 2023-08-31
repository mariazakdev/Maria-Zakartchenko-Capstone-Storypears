import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StoryAddSpace.scss";
const { v4: uuidv4 } = require("uuid");

function StoryAddSpace({ promptData, halfStoryData, selectedHalfStoryData , user }) {

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

      
        <div className="storywriter-add">
          <h2>Continue this story seed</h2>
          <h4>Submit your contribution so another can join and make a pair.</h4>
          <form className="storywriter-pear__storyInputs">
            <h3>{user.pen_first_name} {user.pen_last_name}</h3>
  
            <label htmlFor="title">Title:</label>
            <h3>{selectedHalfStoryData.title}</h3>

      
  
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
   

    </div>
  );
}

export default StoryAddSpace;
