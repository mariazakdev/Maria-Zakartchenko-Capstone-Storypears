import React, { useState } from 'react';
import ShuffleArray from "../../utils/ShuffleArray";
import GenreFilter from "../../utils/GenreFilter";
import EmotionsFilter from "../../utils/GenreFilter";

import { useNavigate } from "react-router-dom";
import "./StoryDepot.scss";

function StoryDepot({ branchStories = [] }) {
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [selectedEmotion, setSelectedEmotion] = useState("All Emotions");

  const genres = branchStories.length > 0 ? [...new Set(branchStories.map(story => story.genre))] : [];
  const emotions = branchStories.length > 0 ? [...new Set(branchStories.map(story => story.emotion))] : []; 

  const navigateToStudio = (story) => {
    navigate(`/story/studio/${story.id}`, { state: { data: story } });
  };

  const filteredStoriesByGenre = selectedGenre === "All Genres"
    ? branchStories
    : branchStories.filter(story => story.genre === selectedGenre);

  const filteredStories = selectedEmotion === "All Emotions"
    ? filteredStoriesByGenre
    : filteredStoriesByGenre.filter(story => story.emotion === selectedEmotion);

  return (
    <ShuffleArray items={filteredStories}>
      {(shuffledStories) => (
        <div className="story-depot">
          <GenreFilter genres={genres} onGenreSelect={setSelectedGenre} className="story-depot__genre-filter"  />
          <EmotionsFilter emotions={emotions} onEmotionSelect={setSelectedEmotion} className="story-depot__emotion-filter" />
          <section className="story-depot__stories">
            <div>
              <h3>Help these story branches become trees:</h3>
              <ul>
                {shuffledStories.map((story) => (
                  <li key={story.id} onClick={() => navigateToStudio(story)}>
                    <h4>{story.title}</h4>
                    <h3>{story.genre}</h3>
                    <p>Emotion: {story.emotion}</p>
                    <div>
                      {story.content &&
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

export default StoryDepot