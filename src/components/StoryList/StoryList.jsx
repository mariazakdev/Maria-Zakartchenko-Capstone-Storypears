import "./StoryList.scss";
import { useNavigate } from "react-router-dom";
import MiniPearTree from "../../assets/icons/1665403462pear-tree.png";
import EmotionsFilter from "../EmotionsFilter/EmotionsFilter";
import { useState } from "react";
import GenreFilter from '../GenreFilter/GenresFilter';

function StoryList({ fullStories }) {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = Array.from(
    new Set(fullStories.map(story => {
      const storyContent = typeof story.content === 'string' 
        ? JSON.parse(story.content) 
        : story.content;
      return storyContent[0].genre;
    }))
  );

  const filteredStories = selectedGenre === "All"
    ? fullStories
    : fullStories.filter(story => {
        const storyContent = typeof story.content === 'string'
          ? JSON.parse(story.content)
          : story.content;
        return storyContent[0].genre === selectedGenre;
    });

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="story-depot">
      <GenreFilter
        selectedGenre={selectedGenre}
        handleGenreSelect={handleGenreSelect}
        genres={genres}
      />
      <section className="story-depot__stories">
        <div>
          <h3>Help these story branches become trees:</h3>
          <ul>
            {filteredStories.map(story => (
              <li key={story.id}>
                <h4>{story.title}</h4>
                <div>
                  {JSON.parse(story.content).map((content, index) => (
                    <div key={index}>
                      <p>{content.text}</p>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default StoryList;
