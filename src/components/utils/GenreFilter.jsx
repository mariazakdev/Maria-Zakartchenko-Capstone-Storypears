import React, { useState } from 'react';
import "./GenreFilter.scss";

function GenreFilter({ genres = [], onGenreSelect = () => {} }) {
  const [activeGenre, setActiveGenre] = useState('All Genres');

  return (
    <div className="genre-filter">
      <button 
        className={activeGenre === "All Genres" ? "active" : ""}
        onClick={() => {
          setActiveGenre("All Genres");
          onGenreSelect("All Genres");
        }}>
        All Genres
      </button>
      {genres.map(genre => (
        <button 
          key={genre} 
          className={activeGenre === genre ? "active" : ""}
          onClick={() => {
            setActiveGenre(genre);
            onGenreSelect(genre);
          }}>
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
