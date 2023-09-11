import React, { useState } from "react";
import ShuffleArray from "../utils/ShuffleArray";
import GenreFilter from "../utils/GenreFilter";
import EmotionsFilter from "../utils/EmotionsFilter";
import { useNavigate } from "react-router-dom";
import "./StoryDepot.scss";

function StoryDepot({ branchStories = [] }) {
  const navigate = useNavigate();

  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [selectedEmotion, setSelectedEmotion] = useState("All Emotions");

  const genres = [...new Set(branchStories.map((story) => story.genre))];
  const emotions = [...new Set(branchStories.map((story) => story.emotion))];

  const navigateToStudio = (story) => {
    navigate(`/story/studio/${story.id}`, { state: { data: story } });
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setSelectedEmotion("All Emotions");
  };

  const handleEmotionSelect = (emotion) => {
    setSelectedEmotion(emotion);
    setSelectedGenre("All Genres");
  };

  let filteredStories = branchStories;

  if (selectedGenre !== "All Genres") {
    filteredStories = filteredStories.filter(
      (story) => story.genre === selectedGenre
    );
  }

  if (selectedEmotion !== "All Emotions") {
    filteredStories = filteredStories.filter(
      (story) => story.emotion === selectedEmotion
    );
  }

  return (
    <ShuffleArray items={filteredStories}>
      {(shuffledStories) => (
        <div className="story-depot">
          <GenreFilter
            genres={genres}
            onGenreSelect={handleGenreSelect}
            className="story-depot__genre-filter"
          />
          <EmotionsFilter
            emotions={emotions}
            onEmotionSelect={handleEmotionSelect}
            className="story-depot__emotion-filter"
          />
          <section className="story-depot__stories">
            <div>
              <h3>Help these story branches become trees:</h3>
              <ul>
                {shuffledStories.map((story) => (
                  <li key={story.id} onClick={() => navigateToStudio(story)}>
                    <h3>{story.title}</h3>
                    <h4>{story.genre || null}</h4>
                    <h4>{story.emotion || null}</h4>
                    <div>
                      {story.content &&
                        Array.isArray(JSON.parse(story.content)) &&
                        JSON.parse(story.content).map(
                          (content, index) =>
                            content && (
                              <div key={index}>
                                <p>{content.text}</p>
                              </div>
                            )
                        )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      )}
    </ShuffleArray>
  );
}

export default StoryDepot;
