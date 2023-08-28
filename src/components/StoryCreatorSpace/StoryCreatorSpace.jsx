import React, { useState, useEffect } from "react";
import axios from "axios";
import './StoryCreatorSpace.scss';
const { v4: uuidv4 } = require('uuid');

function StoryCreatorSpace({ promptData, halfStoryData, user }) {

  const [storyContent, setStoryContent] = useState(promptData);
  const [halfStoryContent, setHalfStoryContent] = useState(halfStoryData);
  const [textAreaContent, setTextAreaContent] = useState(""); 
  const [title, setTitle] = useState("")
  const [genreName, setGenreName] = useState(""); 
  const [genres, setGenres] = useState([]); 

  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await axios.get('http://localhost:8080/genres');
        setGenres(response.data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    }
    fetchGenres();
  }, []); 

  const handleStarterChange = (event) => {
    setStoryContent(event.target.value);
  };

  const handleHalfStoryChange = (event) => {
    setHalfStoryContent(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenreName(event.target.value);
  };
  const handleTextAreaChange = (event) => {
    setTextAreaContent(event.target.value);
  };
  // Functions handling when a user saves story in session but not submits.
  const saveToSessionStorage = () => {
    if (storyContent) {
      sessionStorage.setItem('storyContent', storyContent);
    }
  };
  
  // User retrieves data from session. 
  const getFromSessionStorage = () => {
    const savedContent = sessionStorage.getItem('storyContent');
    return savedContent || ''; 
  };

  const startHalfStory = async () => {
    const userContribution = textAreaContent || getFromSessionStorage();
    const id = uuidv4();
    const storyId = uuidv4();

    try {
      if (genreName.trim() !== "" && title.trim() !== "") {
        const response = await axios.post('http://localhost:8080/storycontents', {
          id,
          content: userContribution,
          user: 2, 
          story_id: storyId,
          genre: genreName,
          title: title, 
          timestamp: new Date().toISOString(),
        });
        console.log('Successfully submitted half story:', response.data);
      } else {
        console.error('Genre and title cannot be empty.');
      }
    } catch (error) {
      console.error('Error submitting half story:', error);
    }
  };

  return (
    <div className="storywriter">

{/*       
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
      ) : null} */}
  
      {/* {storyContent && !halfStoryContent ? (
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
      ) : null} */}

      
  {/* Start new story */}
  {!storyContent && !halfStoryContent ? (
        <div className="storywriter-pear">
          <h2>Seed your story.</h2>
          <h4>
            Start writing so that another writer joins in and you become a pair.
          </h4>
          <form className="storywriter-pear__storyInputs">
            <h3>{user.pen_first_name} {user.pen_last_name}</h3>

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
              onChange={(e) => setGenreName(e.target.value)} 
              required
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
              onChange={handleTextAreaChange}
              value={textAreaContent}
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
    </div>
  );
}

export default StoryCreatorSpace;
