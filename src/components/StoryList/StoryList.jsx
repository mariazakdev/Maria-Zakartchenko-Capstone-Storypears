import "./StoryList.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShuffleArray from "../utils/ShuffleArray";
import GenreFilter from "../utils/GenreFilter";
import EmotionsFilter from "../utils/EmotionsFilter";
import { useNavigate } from "react-router-dom";

function StoryList({ fullStories = [] }) { 

  const navigate = useNavigate();
  
  const handleStoryClick = (story) => {
    navigate(`/storytrees/${story.id}`, { 
      state: {
        story: story,
        uniqueAuthors: story.contents ? new Set(story.contents.map(content => content.user_id)).size : 0
      }
    });
  }
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [selectedEmotion, setSelectedEmotion] = useState("All Emotions");

  const genres = [...new Set(fullStories.map((story) => story.genre))];
  const emotions = [...new Set(fullStories.map((story) => story.emotion))];

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setSelectedEmotion("All Emotions");
  };

  const handleEmotionSelect = (emotion) => {
    setSelectedEmotion(emotion);
    setSelectedGenre("All Genres");
  };

  let filteredStories = fullStories;

  if (selectedGenre !== "All Genres") {
    filteredStories = filteredStories.filter(story => story.genre === selectedGenre);
  }

  if (selectedEmotion !== "All Emotions") {
    filteredStories = filteredStories.filter(story => story.emotion === selectedEmotion);
  }

 
  return (
    <div className="story-list">
      <GenreFilter genres={genres} onGenreSelect={handleGenreSelect} className="story-list__genre-filter" />
      <EmotionsFilter emotions={emotions} onEmotionSelect={handleEmotionSelect} className="story-list__emotion-filter" />

      <ShuffleArray items={filteredStories}>
        {shuffledStories => (
          <section className="story-list__stories">
            <h3>Completed Pear Trees</h3>
            <ul className="story-list__items">
              {shuffledStories.map(story => (
                <li key={story.id} className="story-list__item">
                  <div
                    onClick={() => handleStoryClick(story)}
                    className="story-list__item-link"
                    role="button" 
                    tabIndex={0} 
                  >
                    <h3 className="story-list__title">{story.title}</h3>
                    {story.genre && <h4>{story.genre}</h4>}
                    {story.emotion && <h4>{story.emotion}</h4>}
                    {story.contents && (
                      <p className="story-list__authors">
                        Authors: {story.contents ? new Set(story.contents.map(content => content.user_id)).size : 0}
                      </p>
                    )}
                    <div>
                      {story.content && tryParseJSON(story.content).map((content, index) =>
                        content ? (<div key={index}><p>{content.text}</p></div>) : null
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
      </ShuffleArray>
    </div>
  );
}

function tryParseJSON(jsonString) {
  try {
    return JSON.parse(jsonString) || [];
  } catch (error) {
    return [];
  }
}

export default StoryList;
