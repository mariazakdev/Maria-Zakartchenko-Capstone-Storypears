import React from "react";
import "./EmotionsFilter.scss";

function EmotionsFilter({ selectedEmotion, handleEmotionSelect, emotions }) {
  return (
    <section className="emotion-filter">
      <h3>Filter by Emotion:</h3>
      <ul>
        <li
          className={`emotion-filter__item ${selectedEmotion === "All" ? "selected" : ""}`}
          onClick={() => handleEmotionSelect("All")}
        >
          All
        </li>

        {emotions.map((emotion) => (
          <li
            key={emotion}
            className={`emotion-filter__item ${
              selectedEmotion === emotion ? "selected" : ""
            }`}
            onClick={() => handleEmotionSelect(emotion)}
          >
            {emotion}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EmotionsFilter;
