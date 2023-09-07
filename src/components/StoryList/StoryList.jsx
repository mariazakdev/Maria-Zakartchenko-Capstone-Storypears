import "./StoryList.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ShuffleArray from "../../utils/ShuffleArray";
import GenreFilter from "../../utils/GenreFilter";
import MiniPearTree from "../../assets/icons/1665403462pear-tree.png";

function StoryList({ fullStories }) {
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  
  const genres = [...new Set(fullStories.map(story => story.genre))];

  const filteredStories = selectedGenre === "All Genres"
    ? fullStories
    : fullStories.filter(story => story.genre === selectedGenre);

  return (
    <div className="story-list">
      <GenreFilter genres={genres} onGenreSelect={setSelectedGenre} />
      <ShuffleArray items={filteredStories}>
        {shuffledStories => (
          <section className="story-list__stories">
            <h3>Help these story branches become trees:</h3>
            <ul className="story-list__items">
              {shuffledStories.map(story => (
                <li key={story.id} className="story-list__item">
                  <h4 className="story-list__title">{story.title}</h4>
                  {story.contents && 
                   <p className="story-list__authors">Authors: {new Set(story.contents.map(content => content.user_id)).size}</p>
                  }
                </li>
              ))}
            </ul>
          </section>
        )}
      </ShuffleArray>
    </div>
  );
}

export default StoryList;
