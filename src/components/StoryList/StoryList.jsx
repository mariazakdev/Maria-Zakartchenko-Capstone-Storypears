import "./StoryList.scss";
import { useNavigate } from "react-router-dom";
import MiniPearTree from "../../assets/icons/1665403462pear-tree.png";
import GenreFilter from "../GenresFilter/GenresFilter";
import EmotionsFilter from "../EmotionsFilter/EmotionsFilter";
import { useState } from "react";


function StoryList({ fullStories }) {
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedEmotion, setSelectedEmotion] = useState("All");

  const genres = Array.from(
    new Set(
      fullStories.map((story) => {
        const storiesData =
          typeof story.stories_data === "string"
            ? JSON.parse(story.stories_data)
            : story.stories_data;
        return storiesData[0].genre;
      })
    )
  );

  const emotions = Array.from(
    new Set(
      fullStories.map((story) => {
        const storiesData =
          typeof story.stories_data === "string"
            ? JSON.parse(story.stories_data)
            : story.stories_data;
        return storiesData[0].emotion;
      })
    )
  ).filter((emotion) => emotion);

  const handleStoryClick = (id) => {
    console.log("Clicked story with ID:", id);
    navigate(`/storytree/${id}`);
  };
  const filterStories = () => {
    return fullStories.filter(story => {
        const storiesData = typeof story.stories_data === 'string'
            ? JSON.parse(story.stories_data)
            : story.stories_data;
        const firstStory = storiesData[0];

        return (selectedGenre === "All" || firstStory.genre === selectedGenre) &&
               (selectedEmotion === "All" || firstStory.emotion === selectedEmotion);
    });
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
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const shuffledStories = shuffleArray(filterStories());

  return (
    <div className="story">
      <h2>The Pear Tree Stories</h2>
      <GenreFilter
        selectedGenre={selectedGenre}
        handleGenreSelect={(genre) => handleFilterSelect("genre", genre)}
        genres={genres}
      />
      <EmotionsFilter
        selectedEmotion={selectedEmotion}
        handleEmotionSelect={(emotion) =>
          handleFilterSelect("emotion", emotion)
        }
        emotions={emotions}
      />
      <ul className="story-list">
        {shuffledStories.map((storyItem) => {
          const storiesData =
            typeof storyItem.stories_data === "string"
              ? JSON.parse(storyItem.stories_data)
              : storyItem.stories_data;
          const firstStory = storiesData[0];

          return (
            <li
              className="story-list__item"
              key={storyItem.id}
              onClick={() => handleStoryClick(storyItem.id)}
            >
              <p>{firstStory.title}</p>
              <img src={MiniPearTree} alt="tree" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StoryList;
