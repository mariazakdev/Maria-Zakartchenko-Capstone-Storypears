import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./StoryDepot.scss";
import GenreFilter from "../GenreFilter/GenresFilter"; 

function StoryDepot({ halfStories }) {
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState("All");

  const handleItemClick = (id) => {
    const selectedHalfStory = getHalfStoryById(id);
    navigate(`/story/new/${id}`, { state: { data: selectedHalfStory } });
  };

  const getHalfStoryById = (id) => {
    return halfStories.find((halfStory) => halfStory.id === id);
  };

  const genres = Array.from(new Set(halfStories.map((halfStory) => halfStory.genre)));

  const filterHalfStoriesByGenre = () => {
    if (selectedGenre === "All") {
      return halfStories;
    } else {
      return halfStories.filter((halfStory) => halfStory.genre === selectedGenre);
    }
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="story-depot">
      <section className="story-depot__heading">
        <h2>Stories waiting for pears...</h2>
        <p>Add your own nourishment so a pear can grow.</p>
      </section>

      <GenreFilter selectedGenre={selectedGenre} handleGenreSelect={handleGenreSelect} genres={genres} />

      <section className="story-depot__half-stories">
        <div>
          <h3>Half Stories:</h3>
          <ul>
            {filterHalfStoriesByGenre().map((halfStory) => (
              <li key={halfStory.id} onClick={() => handleItemClick(halfStory.id)}>
                <h3>{halfStory.title}</h3>
                <p>{halfStory.content}</p>
                <h4>{halfStory.genre}</h4>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default StoryDepot;
