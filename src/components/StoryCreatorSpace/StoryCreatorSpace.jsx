import React, { useState, useEffect } from "react";
import axios from "axios";
import './StoryCreatorSpace.scss';
function StoryCreatorSpace({ passedData, selectedHalfStory }) {
  const [storyContent, setStoryContent] = useState(passedData);
  const [halfStoryContent, setHalfStoryContent] = useState(selectedHalfStory);
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

return (
  <div className="storywriter">
    {halfStoryContent ? (
      <div className="storywriter-add">
        <h2>Continue this story seed</h2>
        <h4>Complete this writing or ask for the previous writer to continue.</h4>
        <textarea value={halfStoryContent} onChange={handleHalfStoryChange} />
      </div>
    ) : null}

    {storyContent && !halfStoryContent ? (
      <div className="storywriter-add">
        <h2>Continue this story seed</h2>
        <h4>Submit your contribution so another can join and make a pair.</h4>
        <textarea value={storyContent} onChange={handleStarterChange} />
      </div>
    ) : null}

    {!storyContent && !halfStoryContent ? (
      <div className="storywriter-pear">
        <h2>Seed your story.</h2>
        <h4>
          Start writing so that another writer joins in and you become a pair.
        </h4>
        <form className="storywriter-pear__storyInputs">
          <label htmlFor="penName">User Pen Name:</label>
          <input type="text" id="penName" name="penName" required />

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
            onChange={handleStarterChange}
            value=""
          />

          <input type="submit" value="Submit" />
          <input type="button" value="Edit" id="editButton" />
        </form>
      </div>
    ) : null}
  </div>
);
}

export default StoryCreatorSpace;

