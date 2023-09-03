import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenreFilter from "../GenresFilter/GenresFilter";
import EmotionsFilter from "../EmotionsFilter/EmotionsFilter";
import './StoryDepot.scss';

function StoryDepot({ halfStories, updateHalfStoriesList }) {

  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedEmotion, setSelectedEmotion] = useState("All");

  const handleItemClick = (group) => {
    navigate(`/story/studio/${group[0].story_id}`, { state: { data: group } });
  };

 
const groupByStoryId = (stories) => {
  return stories.reduce((acc, story) => {
    if (!acc[story.story_id]) {
      acc[story.story_id] = [story];
    } else {
      acc[story.story_id].push(story);
    }
    return acc;
  }, {});
};
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
};
const genres = Array.from(new Set(halfStories.map(story => story.genre)));
const emotions = Array.from(new Set(halfStories.map(story => story.emotion))).filter(emotion => emotion);
 
const filterHalfStories = () => {
    return halfStories.filter(story =>
      (selectedGenre === "All" || story.genre === selectedGenre) &&
      (selectedEmotion === "All" || story.emotion === selectedEmotion)
    );
  };

  const handleFilterSelect = (type, value) => {
    if (type === "genre") {
      setSelectedGenre(value);
      setSelectedEmotion("All");
    } else if (type === "emotion") {
      setSelectedEmotion(value);
      setSelectedGenre("All");
    }
  };

  const groupedStories = groupByStoryId(filterHalfStories());
  const shuffledGroupedStories = shuffleArray(Object.values(groupedStories));

  return (
    <div className="story-depot">
      <GenreFilter selectedGenre={selectedGenre} handleGenreSelect={(genre) => handleFilterSelect('genre', genre)} genres={genres} />
      <EmotionsFilter selectedEmotion={selectedEmotion} handleEmotionSelect={(emotion) => handleFilterSelect('emotion', emotion)} emotions={emotions} />
      <section className="story-depot__half-stories">
        <div>
          <h3>Half Stories:</h3>
          <ul>
            {shuffledGroupedStories.map(group => (
              <li key={group[0].id} onClick={() => handleItemClick(group)}>
                <h3>{group[0].title}</h3>
                {group.map(story => <p key={story.id}>{story.content}</p>)}
                <h4>{group[0].genre}</h4>
                <h4>{group[0].emotion}</h4>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default StoryDepot;
