import React, { useState } from 'react';
import "./EmotionsFilter.scss";

function EmotionsFilter({ emotions = [], onEmotionSelect = () => {}, className = "" }) {
  const [activeEmotion, setActiveEmotion] = useState('All Emotions');

 
  if (!emotions || emotions.length === 0) {
    return null; 
  }

  return (
    <div className={`emotions-filter ${className}`}>
      <button 
        className={activeEmotion === "All Emotions" ? "active" : ""}
        onClick={() => {
          setActiveEmotion("All Emotions");
          onEmotionSelect("All Emotions");
        }}>
        All Emotions
      </button>
      {emotions
        .filter(emotion => emotion) 
        .map(emotion => (
          <button 
            key={emotion} 
            className={activeEmotion === emotion ? "active" : ""}
            onClick={() => {
              setActiveEmotion(emotion);
              onEmotionSelect(emotion);
            }}>
            {emotion}
          </button>
        ))}
    </div>
  );
}

export default EmotionsFilter;
