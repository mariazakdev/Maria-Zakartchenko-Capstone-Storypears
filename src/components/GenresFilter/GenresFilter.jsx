import React from "react";
import "./GenresFilter.scss"; 

function GenreFilter({ selectedGenre, handleGenreSelect, genres }) {
  return (
    <section className="genre-filter">
      <h3>Filter by Genre:</h3>
      <ul>
        <li
          className={`genre-filter__item ${selectedGenre === "All" ? "selected" : ""}`}
          onClick={() => handleGenreSelect("All")}
        >
          All
        </li>

        {genres.map((genre) => (
          <li
            key={genre}
            className={`genre-filter__item ${selectedGenre === genre ? "selected" : ""}`}
            onClick={() => handleGenreSelect(genre)}
          >
            {genre}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GenreFilter;
