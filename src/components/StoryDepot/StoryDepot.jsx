import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenreFilter from "../GenresFilter/GenresFilter";
import EmotionsFilter from "../EmotionsFilter/EmotionsFilter";
import './StoryDepot.scss';

function StoryDepot({ halfStories, updateHalfStoriesList }) {
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedEmotion, setSelectedEmotion] = useState("All");

  const handleItemClick = (id) => {
    const selectedHalfStoryData = getHalfStoryById(id);
    navigate(`/story/studio/${id}`, { state: { data: selectedHalfStoryData } });
  };

  const getHalfStoryById = (id) => {
    return halfStories.find((halfStory) => halfStory.id === id);
  };

  const genres = Array.from(new Set(halfStories.map((halfStory) => halfStory.genre)));
  const emotions = Array.from(
    new Set(halfStories.map((halfStory) => halfStory.emotion))
  ).filter((emotion) => emotion !== null);

  const filterHalfStoriesByGenreAndEmotion = () => {
    if (selectedGenre === "All" && selectedEmotion === "All") {
      return halfStories;
    } else {
      return halfStories.filter(
        (halfStory) =>
          (selectedGenre === "All" || halfStory.genre === selectedGenre) &&
          (selectedEmotion === "All" || halfStory.emotion === selectedEmotion)
      );
    }
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setSelectedEmotion("All");
  };

  const handleEmotionSelect = (emotion) => {
    setSelectedEmotion(emotion);
    setSelectedGenre("All");
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
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  const groupedStories = groupByStoryId(filterHalfStoriesByGenreAndEmotion());
  const shuffledGroupedStories = shuffleArray(Object.values(groupedStories));

  return (
    <div className="story-depot">
      <GenreFilter
        selectedGenre={selectedGenre}
        handleGenreSelect={handleGenreSelect}
        genres={genres}
      />

      <EmotionsFilter
        selectedEmotion={selectedEmotion}
        handleEmotionSelect={handleEmotionSelect}
        emotions={emotions}
      />
  <section className="story-depot__half-stories">
        <div>
          <h3>Half Stories:</h3>
          <ul>
            {shuffledGroupedStories.map((group) => (
              <li key={group[0].id} onClick={() => handleItemClick(group[0].id)}>
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
